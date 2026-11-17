import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import type { DiagramId } from "../content/types";
import { acini, adipocytes, erTypes, gapJunction, glands, junctions, microvillus, plasmaCell } from "./Diagrams2";

interface Label {
  x: number;
  y: number;
  text: string;
  note?: string;
}

interface DiagramDef {
  viewBox: string;
  art: ReactNode;
  labels: Label[];
}

/* ───────────────────────── drawing helpers ───────────────────────── */

function lipidRow(y: number, dir: 1 | -1, from: number, to: number, step: number, r: number, tail: number, skip: (x: number) => boolean = () => false) {
  const out: ReactNode[] = [];
  for (let x = from; x <= to; x += step) {
    if (skip(x)) continue;
    const ty = y + dir * (r + tail);
    out.push(
      <g key={`${y}-${x}`}>
        <path d={`M${x - 2.2} ${y + dir * r} L${x - 2.6} ${ty}`} className="d-tail" />
        <path d={`M${x + 2.2} ${y + dir * r} L${x + 2.6} ${ty}`} className="d-tail" />
        <circle cx={x} cy={y} r={r} className="d-head" />
      </g>,
    );
  }
  return out;
}

/* ───────────────────────── 1. trilaminar (EM) ───────────────────────── */

function wave(y: number, amp = 3) {
  return `M0 ${y} C 60 ${y - amp}, 120 ${y + amp}, 180 ${y} S 300 ${y - amp}, 360 ${y}`;
}

const trilaminar: DiagramDef = {
  viewBox: "0 0 360 200",
  art: (
    <>
      <rect x="0" y="0" width="360" height="200" className="d-bg" />
      <text x="16" y="30" className="d-caption">outside the cell</text>
      <text x="16" y="184" className="d-caption">cytoplasm</text>
      <path d={wave(74)} className="d-dense-line" strokeWidth="20" />
      <path d={wave(99)} className="d-lucent-line" strokeWidth="30" />
      <path d={wave(124)} className="d-dense-line" strokeWidth="20" />
      <path d="M44 62v74M38 62h12M38 136h12" className="d-bracket" />
    </>
  ),
  labels: [
    { x: 200, y: 74, text: "Outer layer", note: "electron-dense" },
    { x: 250, y: 99, text: "Intermediate layer", note: "electron-lucent" },
    { x: 300, y: 124, text: "Inner layer", note: "electron-dense" },
    { x: 44, y: 99, text: "Whole membrane", note: "7–10 nm thick, too thin for LM" },
  ],
};

/* ───────────────────────── 2. phospholipid bilayer ───────────────────────── */

const bilayer: DiagramDef = {
  viewBox: "0 0 360 220",
  art: (
    <>
      <rect x="0" y="0" width="360" height="220" className="d-bg" />
      <text x="12" y="22" className="d-caption">outward</text>
      <text x="12" y="210" className="d-caption">outward</text>
      {lipidRow(52, 1, 30, 300, 20, 8, 38)}
      {lipidRow(168, -1, 30, 300, 20, 8, 38)}
      <rect x="135" y="72" width="10" height="28" rx="4" className="d-chol" />
      <rect x="215" y="120" width="10" height="28" rx="4" className="d-chol" />
      <path d="M326 44v132M320 44h12M320 176h12" className="d-bracket" />
    </>
  ),
  labels: [
    { x: 70, y: 52, text: "Hydrophilic head", note: "polar, has affinity with water, directed outward" },
    { x: 92, y: 88, text: "Hydrophobic tail", note: "non-polar, no affinity with water, directed inward" },
    { x: 140, y: 86, text: "Cholesterol", note: "in the irregular spaces between the tails" },
    { x: 326, y: 110, text: "Central bimolecular layer", note: "phospholipids = 30%" },
  ],
};

/* ───────────────────────── 3. fluid mosaic ───────────────────────── */

function sugarChain(x: number, y: number, branches: number[][]) {
  return (
    <g>
      {branches.map((b, i) => (
        <path key={i} d={`M${x} ${y} ${b.map((v, j) => (j % 2 === 0 ? "L" : "") + v).join(" ")}`} className="d-carb-line" />
      ))}
      {branches.map((b, i) => (
        <circle key={`c${i}`} cx={b[b.length - 2]} cy={b[b.length - 1]} r="3.4" className="d-carb" />
      ))}
    </g>
  );
}

const inProtein = (x: number) => (x > 82 && x < 128) || (x > 206 && x < 274);

const fluidMosaic: DiagramDef = {
  viewBox: "0 0 360 250",
  art: (
    <>
      <rect x="0" y="0" width="360" height="250" className="d-bg" />
      <rect x="6" y="52" width="348" height="48" rx="6" className="d-coat" />
      <text x="290" y="20" className="d-caption">outside</text>
      <text x="290" y="242" className="d-caption">inside</text>
      {lipidRow(110, 1, 14, 348, 14, 6, 30, inProtein)}
      {lipidRow(196, -1, 14, 348, 14, 6, 30, inProtein)}
      <rect x="41" y="130" width="8" height="22" rx="3" className="d-chol" />
      <rect x="307" y="153" width="8" height="22" rx="3" className="d-chol" />
      {/* glycoprotein: intrinsic protein with sugar chain */}
      <rect x="86" y="98" width="38" height="110" rx="17" className="d-protein" />
      {sugarChain(105, 98, [
        [105, 82, 96, 70],
        [105, 82, 114, 68],
        [105, 82, 105, 60],
      ])}
      {/* channel protein: two halves with a pore */}
      <rect x="210" y="96" width="27" height="114" rx="12" className="d-protein" />
      <rect x="243" y="96" width="27" height="114" rx="12" className="d-protein" />
      <path d="M240 104v96" className="d-channel" />
      {/* extrinsic protein on the inner aspect */}
      <ellipse cx="166" cy="206" rx="20" ry="12" className="d-protein-2" />
      {/* glycolipid */}
      {sugarChain(308, 104, [
        [308, 86, 300, 74],
        [308, 86, 316, 72],
      ])}
    </>
  ),
  labels: [
    { x: 160, y: 152, text: "Phospholipid bilayer", note: "30%: the lipid sea" },
    { x: 45, y: 141, text: "Cholesterol", note: "between the hydrophobic tails" },
    { x: 105, y: 160, text: "Intrinsic (integral) protein", note: "firmly attached; protein = 60%" },
    { x: 240, y: 152, text: "Transmembrane channel", note: "passage of water-soluble ions & molecules" },
    { x: 166, y: 206, text: "Extrinsic (peripheral) protein", note: "only partially embedded" },
    { x: 132, y: 72, text: "Glycoprotein", note: "carbohydrate + protein" },
    { x: 334, y: 82, text: "Glycolipid", note: "carbohydrate + lipid; carbohydrates = 10%" },
    { x: 26, y: 76, text: "Cell coat (glycocalyx)", note: "projects from the outer surface" },
  ],
};

/* ───────────────────────── 4. mitochondrion ───────────────────────── */

const M = { cx: 180, cy: 110, orx: 166, ory: 80, irx: 154, iry: 68 };
const edge = (x: number) => M.iry * Math.sqrt(Math.max(0, 1 - ((x - M.cx) / M.irx) ** 2));
const CRISTAE = [62, 96, 130, 164, 198, 232, 266, 300];

function crista(x: number, i: number) {
  const top = i % 2 === 0;
  const half = edge(x);
  const base = top ? M.cy - half : M.cy + half;
  const len = half * 2 * 0.58;
  const tip = top ? base + len : base - len;
  const d = top
    ? `M${x - 6} ${base} L${x - 6} ${tip - 6} A6 6 0 0 0 ${x + 6} ${tip - 6} L${x + 6} ${base}`
    : `M${x - 6} ${base} L${x - 6} ${tip + 6} A6 6 0 0 1 ${x + 6} ${tip + 6} L${x + 6} ${base}`;
  return { top, base, tip, d };
}

function particles(x: number) {
  const c = crista(x, CRISTAE.indexOf(x));
  const out: ReactNode[] = [];
  for (let y = c.base + 10; y < c.tip - 4; y += 9) {
    out.push(
      <g key={y}>
        <path d={`M${x - 6} ${y}h-4M${x + 6} ${y}h4`} className="d-stalk" />
        <circle cx={x - 12} cy={y} r="2.4" className="d-particle" />
        <circle cx={x + 12} cy={y} r="2.4" className="d-particle" />
      </g>,
    );
  }
  return out;
}

const mito: DiagramDef = {
  viewBox: "0 0 360 220",
  art: (
    <>
      <rect x="0" y="0" width="360" height="220" className="d-bg" />
      <ellipse cx={M.cx} cy={M.cy} rx={M.orx} ry={M.ory} className="d-outer" />
      <ellipse cx={M.cx} cy={M.cy} rx={M.irx} ry={M.iry} className="d-matrix" />
      {CRISTAE.map((x, i) => {
        const c = crista(x, i);
        // fill covers the inner-membrane stroke at the fold's base so the fold reads as open
        const h = Math.abs(c.tip - c.base) + 2;
        return (
          <g key={x}>
            <rect x={x - 6} y={c.top ? c.base - 2 : c.tip} width="12" height={h} rx="5" className="d-ims-fill" />
            <path d={c.d} className="d-inner-line" />
          </g>
        );
      })}
      {particles(198)}
      {[
        [113, 150],
        [181, 142],
        [249, 74],
        [80, 88],
      ].map(([x, y]) => (
        <circle key={`${x}`} cx={x} cy={y} r="4" className="d-granule" />
      ))}
    </>
  ),
  labels: [
    { x: 180, y: 30, text: "Outer membrane", note: "smooth" },
    { x: 318, y: 110 - edge(318) + 1, text: "Inner membrane", note: "thrown into folds" },
    { x: 232, y: 110 + edge(232) - 30, text: "Crista", note: "number ∝ energy requirement of the cell" },
    { x: 180, y: 184, text: "Intermembrane space", note: "enzymes that use ATP made in the inner membrane" },
    { x: 147, y: 112, text: "Matrix", note: "amorphous substance; contains DNA and RNA" },
    { x: 113, y: 150, text: "Matrix granules", note: "electron-dense; Ca++ storage" },
    { x: 210, y: 70, text: "Elementary particles", note: "≈9 nm spheres on stalks = enzyme F1" },
  ],
};

const DIAGRAMS: Record<DiagramId, DiagramDef> = {
  trilaminar,
  bilayer,
  "fluid-mosaic": fluidMosaic,
  mitochondrion: mito,
  golgi: buildGolgi(),
  centriole: buildCentriole(),
  nucleus: buildNucleus(),
  "nuclear-pore": buildPore(),
  axoneme: buildAxoneme(),
  "er-types": erTypes(),
  junctions: junctions(),
  "gap-junction": gapJunction(),
  microvillus: microvillus(),
  glands: glands(),
  acini: acini(),
  "plasma-cell": plasmaCell(),
  adipocytes: adipocytes(),
};

/* ───────────────────────── 9. ciliary axoneme (9 + 2) ───────────────────────── */

function buildAxoneme(): DiagramDef {
  const cx = 180;
  const cy = 114;
  const R = 70;
  const doublets = Array.from({ length: 9 }, (_, i) => {
    const a = (i / 9) * Math.PI * 2 - Math.PI / 2;
    const t = a + Math.PI / 2;
    const A = { x: cx + R * Math.cos(a) - 6 * Math.cos(t), y: cy + R * Math.sin(a) - 6 * Math.sin(t) };
    const B = { x: cx + R * Math.cos(a) + 6 * Math.cos(t), y: cy + R * Math.sin(a) + 6 * Math.sin(t) };
    return { a, A, B };
  });
  return {
    viewBox: "0 0 360 228",
    art: (
      <>
        <rect x="0" y="0" width="360" height="228" className="d-bg" />
        <circle cx={cx} cy={cy} r={R + 22} className="d-cilium-membrane" />
        <circle cx={cx} cy={cy} r="22" className="d-sheath" />
        {doublets.map((d, i) => (
          <path key={`sp${i}`} d={`M${cx + 24 * Math.cos(d.a)} ${cy + 24 * Math.sin(d.a)} L${cx + (R - 12) * Math.cos(d.a)} ${cy + (R - 12) * Math.sin(d.a)}`} className="d-spoke-thin" />
        ))}
        {doublets.map((d, i) => {
          const n = doublets[(i + 1) % 9];
          return <path key={`nx${i}`} d={`M${d.B.x} ${d.B.y} L${n.A.x} ${n.A.y}`} className="d-link" />;
        })}
        {doublets.map((d, i) => {
          const t = d.a + Math.PI / 2;
          return (
            <g key={i}>
              <path d={`M${d.A.x} ${d.A.y} l${-11 * Math.cos(t) + 4 * Math.cos(d.a)} ${-11 * Math.sin(t) + 4 * Math.sin(d.a)}`} className="d-dynein" />
              <circle cx={d.A.x} cy={d.A.y} r="7" className="d-tubule" />
              <circle cx={d.B.x} cy={d.B.y} r="6.5" className="d-tubule-b" />
            </g>
          );
        })}
        <circle cx={cx - 9} cy={cy} r="7" className="d-tubule" />
        <circle cx={cx + 9} cy={cy} r="7" className="d-tubule" />
      </>
    ),
    labels: [
      { x: R + cx + 22, y: cy, text: "Cell membrane", note: "outer covering of the cilium" },
      { x: doublets[0].A.x, y: doublets[0].A.y - 16, text: "Peripheral doublet", note: "nine of them; subunits A and B" },
      { x: cx, y: cy + 30, text: "Two central singlets", note: "the \"2\" of 9+2" },
      { x: cx - 26, y: cy - 22, text: "Central sheath", note: "surrounds the central singlets" },
      { x: (doublets[6].B.x + doublets[7].A.x) / 2, y: (doublets[6].B.y + doublets[7].A.y) / 2, text: "Nexin", note: "protein link between adjacent doublets" },
      { x: cx + 44 * Math.cos(doublets[3].a), y: cy + 44 * Math.sin(doublets[3].a), text: "Radial spoke", note: "doublet → central sheath" },
      { x: doublets[2].A.x - 16, y: doublets[2].A.y - 2, text: "Dynein arm", note: "projects from subunit A" },
    ],
  };
}

/* ───────────────────────── 5. Golgi stack ───────────────────────── */

function buildGolgi(): DiagramDef {
  const ys = [104, 122, 140, 158, 176];
  const arch = (y: number) => `M92 ${y} Q180 ${y - 52} 268 ${y}`;
  return {
    viewBox: "0 0 360 240",
    art: (
      <>
        <rect x="0" y="0" width="360" height="240" className="d-bg" />
        <text x="14" y="24" className="d-caption">from rER</text>
        <text x="14" y="228" className="d-caption">toward secretion</text>
        {[
          [150, 52],
          [172, 44],
          [196, 50],
          [218, 58],
          [130, 62],
        ].map(([x, y]) => (
          <circle key={`v${x}`} cx={x} cy={y} r="4.5" className="d-vesicle" />
        ))}
        {ys.map((y) => (
          <path key={y} d={arch(y)} className="d-saccule" />
        ))}
        <path d="M74 80v104M68 80h12M68 184h12" className="d-bracket" />
        {[
          [158, 196, 11],
          [196, 204, 12],
          [234, 194, 10],
        ].map(([x, y, r]) => (
          <circle key={`g${x}`} cx={x} cy={y} r={r} className="d-granule-big" />
        ))}
        <circle cx="122" cy="198" r="9" className="d-lyso" />
      </>
    ),
    labels: [
      { x: 180, y: 114, text: "Golgi saccule", note: "flattened membranous cistern" },
      { x: 74, y: 132, text: "Golgi stack", note: "3–10 saccules" },
      { x: 180, y: 78, text: "Cis (forming) face", note: "convex, receiving face" },
      { x: 172, y: 44, text: "Small transfer vesicles", note: "at the Cis face" },
      { x: 268, y: 176, text: "Trans (maturing) face", note: "concave" },
      { x: 196, y: 204, text: "Larger secretory granules", note: "at the Trans face" },
      { x: 122, y: 198, text: "Lysosome", note: "also at the Trans face" },
    ],
  };
}

/* ───────────────────────── 6. centriole cross-section ───────────────────────── */

function buildCentriole(): DiagramDef {
  const cx = 180;
  const cy = 112;
  const R = 70;
  const triplets = Array.from({ length: 9 }, (_, i) => {
    const a = (i / 9) * Math.PI * 2 - Math.PI / 2;
    // pinwheel: each triplet runs from inside-out at a slant
    const tilt = a + 0.95;
    return [0, 1, 2].map((k) => {
      const off = (k - 1) * 12.5;
      return { x: cx + R * Math.cos(a) + off * Math.cos(tilt), y: cy + R * Math.sin(a) + off * Math.sin(tilt) };
    });
  });
  return {
    viewBox: "0 0 360 224",
    art: (
      <>
        <rect x="0" y="0" width="360" height="224" className="d-bg" />
        <circle cx={cx} cy={cy} r={R + 26} className="d-centriole-bg" />
        {triplets.map((t, i) => {
          const next = triplets[(i + 1) % 9];
          return <path key={`l${i}`} d={`M${t[2].x} ${t[2].y} L${next[0].x} ${next[0].y}`} className="d-link" />;
        })}
        {triplets.map((t, i) => (
          <g key={i}>
            {t.map((p, k) => (
              <circle key={k} cx={p.x} cy={p.y} r="6.3" className="d-tubule" />
            ))}
          </g>
        ))}
      </>
    ),
    labels: [
      { x: triplets[0][1].x, y: triplets[0][1].y - 18, text: "Microtubule triplet", note: "9 triplets make the wall" },
      { x: triplets[2][2].x + 14, y: triplets[2][2].y, text: "One microtubule", note: "3 per triplet, parallel" },
      { x: (triplets[5][2].x + triplets[6][0].x) / 2, y: (triplets[5][2].y + triplets[6][0].y) / 2, text: "Protein link", note: "fine filaments joining the triplets" },
      { x: cx, y: cy, text: "Hollow center", note: "the centriole is a hollow cylinder closed at one end" },
    ],
  };
}

/* ───────────────────────── 7. nucleus ───────────────────────── */

function buildNucleus(): DiagramDef {
  const cx = 168;
  const cy = 132;
  const pores = [-150, -95, -30, 40, 110, 165].map((d) => (d * Math.PI) / 180);
  const at = (r: number, a: number) => [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  const ribos = Array.from({ length: 26 }, (_, i) => (i / 26) * Math.PI * 2 + 0.07);
  return {
    viewBox: "0 0 360 270",
    art: (
      <>
        <rect x="0" y="0" width="360" height="270" className="d-bg" />
        {/* rER continuous with the outer membrane */}
        <path d={`M${at(112, -0.35)[0]} ${at(112, -0.35)[1]} C 300 70, 330 90, 345 70`} className="d-er" />
        <path d={`M${at(112, -0.12)[0]} ${at(112, -0.12)[1]} C 305 120, 330 110, 352 104`} className="d-er" />
        {[
          [300, 80],
          [318, 82],
          [334, 76],
          [308, 114],
          [326, 112],
          [342, 106],
        ].map(([x, y]) => (
          <circle key={`er${x}${y}`} cx={x} cy={y} r="2.4" className="d-ribo" />
        ))}
        <circle cx={cx} cy={cy} r="112" className="d-env-outer" />
        <circle cx={cx} cy={cy} r="103" className="d-env-inner" />
        {ribos.map((a, i) => {
          const [x, y] = at(117, a);
          return <circle key={i} cx={x} cy={y} r="2.3" className="d-ribo" />;
        })}
        {/* peripheral chromatin on the inner surface */}
        <circle cx={cx} cy={cy} r="97" className="d-peri-chromatin" />
        {pores.map((a, i) => {
          const [x, y] = at(107.5, a);
          return <circle key={i} cx={x} cy={y} r="7" className="d-pore" />;
        })}
        {/* chromatin islets */}
        {[
          [110, 190, 11],
          [120, 92, 9],
          [226, 196, 10],
          [96, 140, 8],
        ].map(([x, y, r]) => (
          <circle key={`i${x}`} cx={x} cy={y} r={r} className="d-islet" />
        ))}
        {/* nucleolus with nucleolus-associated chromatin */}
        <circle cx="190" cy="120" r="34" className="d-nac" />
        <circle cx="190" cy="120" r="27" className="d-nucleolus" />
      </>
    ),
    labels: [
      { x: at(112, -2.3)[0], y: at(112, -2.3)[1], text: "Outer membrane", note: "may carry ribosomes; continuous with rER" },
      { x: at(107.5, 2.4)[0], y: at(107.5, 2.4)[1] + 2, text: "Perinuclear space", note: "25 nm between the two membranes" },
      { x: at(100, 0.6)[0], y: at(100, 0.6)[1], text: "Inner membrane + peripheral chromatin", note: "nuclear lamina on its inner surface" },
      { x: at(107.5, pores[1])[0], y: at(107.5, pores[1])[1], text: "Nuclear pore", note: "nucleus ↔ cytoplasm" },
      { x: 190, y: 120, text: "Nucleolus", note: "makes rRNA" },
      { x: 222, y: 138, text: "Nucleolus-associated chromatin", note: "heterochromatin around the nucleolus" },
      { x: 120, y: 92, text: "Chromatin islet", note: "irregular heterochromatin clump" },
      { x: 150, y: 168, text: "Euchromatin in nuclear sap", note: "pale: extended, active, invisible with LM" },
      { x: 330, y: 92, text: "Rough ER", note: "continuous with the outer membrane" },
    ],
  };
}

/* ───────────────────────── 8. nuclear pore complex ───────────────────────── */

function buildPore(): DiagramDef {
  const fx = 92;
  const fy = 112;
  const sub = Array.from({ length: 8 }, (_, i) => (i / 8) * Math.PI * 2);
  return {
    viewBox: "0 0 360 224",
    art: (
      <>
        <rect x="0" y="0" width="360" height="224" className="d-bg" />
        <text x={fx} y="22" className="d-caption" textAnchor="middle">face view</text>
        <text x="272" y="22" className="d-caption" textAnchor="middle">side view</text>
        {/* face view */}
        <circle cx={fx} cy={fy} r="66" className="d-env-face" />
        {sub.map((a, i) => (
          <path key={`s${i}`} d={`M${fx + 44 * Math.cos(a)} ${fy + 44 * Math.sin(a)} L${fx + 15 * Math.cos(a)} ${fy + 15 * Math.sin(a)}`} className="d-spoke" />
        ))}
        {sub.map((a, i) => (
          <circle key={i} cx={fx + 52 * Math.cos(a)} cy={fy + 52 * Math.sin(a)} r="10" className="d-subunit" />
        ))}
        <circle cx={fx} cy={fy} r="12" className="d-plug" />
        {/* side view: two membranes, pore in the middle */}
        <text x="352" y="64" className="d-caption" textAnchor="end">cytoplasm</text>
        <text x="352" y="176" className="d-caption" textAnchor="end">nucleus</text>
        <path d="M196 86 H250 Q258 86 258 96 V128 Q258 138 250 138 H196" className="d-mem-line" />
        <path d="M352 86 H296 Q288 86 288 96 V128 Q288 138 296 138 H352" className="d-mem-line" />
        <circle cx="258" cy="84" r="8" className="d-subunit" />
        <circle cx="288" cy="84" r="8" className="d-subunit" />
        <circle cx="258" cy="140" r="8" className="d-subunit" />
        <circle cx="288" cy="140" r="8" className="d-subunit" />
        <circle cx="273" cy="112" r="8" className="d-plug" />
      </>
    ),
    labels: [
      { x: 288, y: 84, text: "Outer annulus", note: "8 globular subunits" },
      { x: 288, y: 140, text: "Inner annulus", note: "8 globular subunits" },
      { x: fx + 52, y: fy, text: "Globular subunit", note: "one of eight in each annulus" },
      { x: fx + 30 * Math.cos(sub[6]), y: fy + 30 * Math.sin(sub[6]), text: "Spoke", note: "eight, radially arranged, projecting inwards" },
      { x: fx, y: fy, text: "Central granule (plug)", note: "center of the pore" },
      { x: 222, y: 112, text: "Perinuclear space", note: "between the two unit membranes" },
    ],
  };
}

/* ───────────────────────── component ───────────────────────── */

export function Diagram({ id, title, caption }: { id: DiagramId; title: string; caption?: string }) {
  const def = DIAGRAMS[id];
  const [shown, setShown] = useState(0);
  const total = def.labels.length;
  const next = () => setShown((s) => Math.min(total, s + 1));

  return (
    <figure className="block diagram">
      <figcaption className="block-title">{title}</figcaption>
      <button type="button" className="diagram-art" onClick={next} aria-label={shown < total ? `Reveal label ${shown + 1} of ${total}` : "All labels shown"}>
        <svg viewBox={def.viewBox} role="img" aria-hidden>
          {def.art}
          <AnimatePresence>
            {def.labels.slice(0, shown).map((l, i) => (
              <motion.g
                key={i}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 420, damping: 22 }}
                style={{ transformOrigin: `${l.x}px ${l.y}px`, transformBox: "view-box" }}
              >
                <circle cx={l.x} cy={l.y} r="10.5" className={`d-marker ${i === shown - 1 ? "is-new" : ""}`} />
                <text x={l.x} y={l.y + 4.2} className="d-marker-num">
                  {i + 1}
                </text>
              </motion.g>
            ))}
          </AnimatePresence>
        </svg>
      </button>
      <ol className="legend">
        {def.labels.map((l, i) => (
          <li key={i} className={i < shown ? "is-shown" : ""} aria-hidden={i >= shown}>
            <span className="legend-num">{i + 1}</span>
            {i < shown ? (
              <motion.span className="legend-text" initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }}>
                <b>{l.text}</b> {l.note && <span>{l.note}</span>}
              </motion.span>
            ) : (
              <span className="legend-hidden">?</span>
            )}
          </li>
        ))}
      </ol>
      <div className="diagram-controls">
        <span className="diagram-count">
          {shown}/{total} labels
        </span>
        {shown < total ? (
          <>
            <button type="button" className="btn btn-solid" onClick={next}>
              Next label
            </button>
            <button type="button" className="btn btn-line" onClick={() => setShown(total)}>
              Show all
            </button>
          </>
        ) : (
          <button type="button" className="btn btn-line" onClick={() => setShown(0)}>
            Hide labels &amp; test yourself
          </button>
        )}
      </div>
      {caption && <p className="diagram-caption">{caption}</p>}
    </figure>
  );
}
