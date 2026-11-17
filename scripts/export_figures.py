"""Render the chosen lecture slides to compressed WebP files and write src/content/figures.ts.

Usage (from the project folder):  python -I scripts/export_figures.py "<folder with the PDFs>"
"""
import json
import os
import sys

import fitz  # PyMuPDF
import numpy as np
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from figures_spec import CROP, FIGURES, T1  # noqa: E402

SRC = sys.argv[1]
ROOT = os.path.dirname(HERE)
OUT = os.path.join(ROOT, "public", "fig")
TARGET_W = 1200


def render(pdf, page_no, zoom):
    pm = pdf[page_no - 1].get_pixmap(matrix=fitz.Matrix(zoom, zoom), alpha=False)
    return Image.frombytes("RGB", (pm.width, pm.height), pm.samples)


def trim(im, thr=238, pad=6):
    a = np.asarray(im.convert("L"))
    mask = a < thr
    rows = np.where(mask.mean(axis=1) > 0.01)[0]
    cols = np.where(mask.mean(axis=0) > 0.01)[0]
    if not len(rows) or not len(cols):
        return im
    y0, y1 = max(rows[0] - pad, 0), min(rows[-1] + pad, im.height)
    x0, x1 = max(cols[0] - pad, 0), min(cols[-1] + pad, im.width)
    return im.crop((x0, y0, x1, y1))


def runs(mask, gap):
    """Contiguous True runs in a 1-D mask, merging runs separated by < gap."""
    out = []
    idx = np.where(mask)[0]
    if not len(idx):
        return out
    a = b = idx[0]
    for i in idx[1:]:
        if i - b <= gap:
            b = i
        else:
            out.append((a, b))
            a = b = i
    out.append((a, b))
    return out


def below_blue(im):
    """Drop the first blue text slide at the top; keep what is under it."""
    a = np.asarray(im).astype(int)
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    blue = ((b > 140) & (r < 90) & (g < 150)).mean(axis=1) > 0.25
    groups = runs(blue, gap=60)
    if not groups:
        return im
    y = groups[0][1] + 1
    grey = np.asarray(im.convert("L"))
    while y < im.height - 1 and grey[y].mean() < 90:  # dark bar under the slide
        y += 1
    return trim(im.crop((0, y, im.width, im.height)))


def photo_only(im):
    """Keep the largest block of coloured micrograph on a grey/white slide."""
    hsv = np.asarray(im.convert("HSV")).astype(int)
    sat = (hsv[..., 1] > 40) & (hsv[..., 2] < 250)
    rows = runs(sat.mean(axis=1) > 0.12, gap=8)
    if not rows:
        return im
    y0, y1 = max(rows, key=lambda r: r[1] - r[0])
    cols = runs(sat[y0:y1 + 1].mean(axis=0) > 0.3, gap=8)
    x0, x1 = max(cols, key=lambda c: c[1] - c[0])
    return im.crop((x0, y0, x1 + 1, y1 + 1))


def camscanner_slide(pdf, slide):
    """The handout has 3 slides per page, separated by thick dark bars."""
    page = (slide - 1) // 3 + 1
    slot = (slide - 1) % 3
    if page == 18:  # last page is shifted: slide 53 is the third segment
        slot = 2 if slide == 53 else 1
    im = render(pdf, page, 2.2)
    g = np.asarray(im.convert("L")).astype(float)
    band = g[:, int(im.width * 0.25): int(im.width * 0.75)]
    dark = band.mean(axis=1) < 70
    segs, start = [], None
    for y, dk in enumerate(dark):
        if not dk and start is None:
            start = y
        if dk and start is not None:
            if y - start > 150:
                segs.append((start, y))
            start = None
    if start is not None and len(dark) - start > 150:
        segs.append((start, len(dark)))
    y0, y1 = segs[min(slot, len(segs) - 1)]
    return trim(im.crop((0, y0, im.width, y1)))


def main():
    data = {}
    total = 0
    for lecture, items in FIGURES.items():
        os.makedirs(os.path.join(OUT, lecture), exist_ok=True)
        entries = []
        for i, (pdf_name, num, section, caption, spot) in enumerate(items):
            pdf = fitz.open(os.path.join(SRC, pdf_name))
            if pdf_name == T1:
                im = camscanner_slide(pdf, num)
            else:
                w = pdf[num - 1].rect.width
                mode = CROP.get((lecture, num))
                zoom = TARGET_W / w * (2.0 if mode else 1.0)
                im = render(pdf, num, zoom)
                if isinstance(mode, tuple):
                    x0, y0, x1, y1 = mode
                    im = im.crop((round(x0 * im.width), round(y0 * im.height), round(x1 * im.width), round(y1 * im.height)))
                else:
                    im = below_blue(im) if mode == "below-blue" else photo_only(im) if mode == "photo" else trim(im)
            if im.width > TARGET_W:
                im = im.resize((TARGET_W, round(im.height * TARGET_W / im.width)), Image.LANCZOS)
            name = f"s{num:02d}.webp"
            path = os.path.join(OUT, lecture, name)
            im.save(path, "WEBP", quality=68, method=6)
            total += os.path.getsize(path)
            entry = {
                "src": f"fig/{lecture}/{name}",
                "w": im.width,
                "h": im.height,
                "slide": num,
                "section": section,
                "caption": caption,
            }
            if spot:
                entry["spot"] = {"id": f"{lecture}-spot-{num}", "prompt": spot[0], "answer": spot[1]}
            entries.append(entry)
        data[lecture] = entries
        print(f"{lecture}: {len(entries)} figures")
    print(f"total {total / 1e6:.1f} MB")

    ts = (
        "// Generated by scripts/export_figures.py from scripts/figures_spec.py. Do not edit by hand.\n"
        "export interface FigureEntry {\n"
        "  src: string;\n  w: number;\n  h: number;\n  slide: number;\n  section: string;\n  caption: string;\n"
        "  spot?: { id: string; prompt: string; answer: string };\n}\n\n"
        f"export const FIGURES: Record<string, FigureEntry[]> = {json.dumps(data, indent=2, ensure_ascii=False)};\n"
    )
    with open(os.path.join(ROOT, "src", "content", "figures.ts"), "w", encoding="utf-8") as f:
        f.write(ts)


if __name__ == "__main__":
    main()
