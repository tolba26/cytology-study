import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Figure } from "../content/types";
import { IconBack, IconClose, IconArrow } from "./Icons";

/** Slide pictures for one section: a swipeable strip on phones, a grid on desktop. */
export function Gallery({ items }: { items: Figure[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="block gallery">
      <p className="block-title">From the slides · {items.length === 1 ? "1 picture" : `${items.length} pictures`}</p>
      <div className={`gallery-strip ${items.length === 1 ? "single" : ""}`}>
        {items.map((f, i) => (
          <figure key={f.src} className="gallery-item">
            <button type="button" className="gallery-thumb" onClick={() => setOpen(i)} aria-label={`Open picture: ${f.caption}`}>
              <img src={f.src} width={f.w} height={f.h} alt={f.caption} loading="lazy" decoding="async" />
              {f.spot && <span className="spot-badge">Spot it</span>}
            </button>
            <figcaption>
              <span className="fig-slide">Slide {f.slide}</span> {f.caption}
            </figcaption>
          </figure>
        ))}
      </div>
      <Lightbox items={items} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
    </div>
  );
}

/** Full-screen viewer. Tap the picture to zoom in, drag/scroll to pan, tap again to fit. */
export function Lightbox({ items, index, onClose, onIndex }: { items: Figure[]; index: number | null; onClose: () => void; onIndex: (i: number) => void }) {
  const [zoom, setZoom] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);
  const f = index === null ? null : items[index];

  useEffect(() => setZoom(false), [index]);
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && index < items.length - 1) onIndex(index + 1);
      if (e.key === "ArrowLeft" && index > 0) onIndex(index - 1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [index, items.length, onClose, onIndex]);

  const toggleZoom = (e: React.MouseEvent) => {
    const el = scroller.current;
    if (!el) return setZoom((z) => !z);
    if (zoom) return setZoom(false);
    // zoom towards the tapped point
    const r = (e.target as HTMLElement).getBoundingClientRect();
    const fx = (e.clientX - r.left) / r.width;
    const fy = (e.clientY - r.top) / r.height;
    setZoom(true);
    requestAnimationFrame(() => {
      el.scrollLeft = fx * el.scrollWidth - el.clientWidth / 2;
      el.scrollTop = fy * el.scrollHeight - el.clientHeight / 2;
    });
  };

  return (
    <AnimatePresence>
      {f && index !== null && (
        <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label={f.caption} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }}>
          <div className="lb-top">
            <span className="lb-count">
              {index + 1} / {items.length}
            </span>
            <button type="button" className="lb-btn" onClick={onClose} aria-label="Close" autoFocus>
              <IconClose />
            </button>
          </div>
          <div ref={scroller} className={`lb-stage ${zoom ? "zoomed" : ""}`}>
            <img src={f.src} alt={f.caption} onClick={toggleZoom} draggable={false} />
          </div>
          <div className="lb-bottom">
            <p className="lb-caption">
              <span className="fig-slide">Slide {f.slide}</span> {f.caption}
            </p>
            <p className="lb-hint">{zoom ? "Drag to look around · tap to fit" : "Tap the picture to zoom in"}</p>
            {items.length > 1 && (
              <div className="lb-nav">
                <button type="button" className="lb-btn" disabled={index === 0} onClick={() => onIndex(index - 1)} aria-label="Previous picture">
                  <IconBack />
                </button>
                <button type="button" className="lb-btn" disabled={index === items.length - 1} onClick={() => onIndex(index + 1)} aria-label="Next picture">
                  <IconArrow />
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
