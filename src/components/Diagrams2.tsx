import type { ReactNode } from "react";

/** Structure diagrams added in the second round (rER/sER, junctions, glands, CT cells). */
export interface Label {
  x: number;
  y: number;
  text: string;
  note?: string;
}
export interface DiagramDef {
  viewBox: string;
  art: ReactNode;
  labels: Label[];
}

const range = (n: number) => Array.from({ length: n }, (_, i) => i);

/* ───────────────────────── rough vs smooth ER ───────────────────────── */
export function erTypes(): DiagramDef {
  const ys = [62, 94, 126, 158];
  return {
    viewBox: "0 0 360 220",
    art: (
      <>
        <rect width="360" height="220" className="d-bg" />
        <text x="90" y="30" className="d-caption" textAnchor="middle">rough ER</text>
        <text x="270" y="30" className="d-caption" textAnchor="middle">smooth ER</text>
        <path d="M180 18v190" className="d-divider" />
        {ys.map((y) => (
          <g key={y}>
            <rect x="22" y={y} width="136" height="16" rx="8" className="d-cistern" />
            {range(15).map((i) => (
              <g key={i}>
                <circle cx={28 + i * 9} cy={y - 3.2} r="2.3" className="d-ribo" />
                <circle cx={28 + i * 9} cy={y + 19.2} r="2.3" className="d-ribo" />
              </g>
            ))}
          </g>
        ))}
        {[
          "M198 70 C226 52, 252 96, 282 74 S 328 58, 344 88",
          "M204 126 C232 104, 254 148, 284 126 S 320 108, 340 138",
          "M214 70 Q 206 98 206 126",
          "M282 74 Q 292 100 284 126",
          "M240 136 Q 236 160 252 176",
        ].map((d, i) => (
          <g key={i}>
            <path d={d} className="d-tube-out" />
            <path d={d} className="d-tube-in" />
          </g>
        ))}
        {[
          [300, 168, 7],
          [326, 186, 6],
          [276, 192, 5.5],
          [216, 186, 6],
        ].map(([x, y, r]) => (
          <circle key={`${x}`} cx={x} cy={y} r={r} className="d-cistern" />
        ))}
      </>
    ),
    labels: [
      { x: 90, y: 102, text: "Flattened cisternae", note: "rER: parallel, one continuous channel" },
      { x: 37, y: 59, text: "Ribosomes on the outer surface", note: "make rER rough and basophilic" },
      { x: 254, y: 84, text: "Branching tubules", note: "sER: irregular network" },
      { x: 300, y: 168, text: "Vesicles", note: "sER" },
      { x: 330, y: 150, text: "No ribosomes", note: "smooth; acidophilic cytoplasm with LM" },
    ],
  };
}

/* ───────────────────────── four junctions on the lateral surface ───────────────────────── */
export function junctions(): DiagramDef {
  const mv = range(7);
  return {
    viewBox: "0 0 360 330",
    art: (
      <>
        <rect width="360" height="330" className="d-bg" />
        <rect x="30" y="46" width="150" height="250" className="d-cell" />
        <rect x="180" y="46" width="150" height="250" className="d-cell" />
        {/* microvilli */}
        {mv.map((i) => (
          <g key={i}>
            <rect x={40 + i * 20} y="26" width="10" height="22" rx="5" className="d-cell d-mv" />
            <rect x={190 + i * 20} y="26" width="10" height="22" rx="5" className="d-cell d-mv" />
          </g>
        ))}
        {/* terminal web */}
        <path d="M34 92H176M184 92H326" className="d-actin" />
        {/* membranes: fuse at tight junction, otherwise apart */}
        <path d="M176 46 L176 60 Q180 66 176 72 L174 86 L174 300" className="d-membrane" />
        <path d="M184 46 L184 60 Q180 66 184 72 L186 86 L186 300" className="d-membrane" />
        <path d="M180 62v8" className="d-fuse" />
        {/* zonula adherens plaques */}
        <rect x="166" y="86" width="6" height="16" className="d-plaque" />
        <rect x="188" y="86" width="6" height="16" className="d-plaque" />
        {/* desmosome */}
        <rect x="164" y="160" width="7" height="24" className="d-plaque" />
        <rect x="189" y="160" width="7" height="24" className="d-plaque" />
        {range(4).map((i) => (
          <path key={i} d={`M174 ${164 + i * 5.5}H186`} className="d-gapline" />
        ))}
        <path d="M164 164 C130 150, 110 180, 164 180" className="d-if" />
        <path d="M196 164 C230 150, 250 180, 196 180" className="d-if" />
        <path d="M120 150 C140 160, 150 168, 164 172" className="d-if" />
        {/* gap junction: membranes very close, connexons across */}
        <path d="M174 222 L178 226 L178 250 L174 254" className="d-membrane-over" />
        <path d="M186 222 L182 226 L182 250 L186 254" className="d-membrane-over" />
        {range(4).map((i) => (
          <rect key={i} x="175" y={228 + i * 5.6} width="10" height="3" rx="1.2" className="d-connexon" />
        ))}
        {/* basal lamina + hemidesmosome */}
        <path d="M24 302H336" className="d-lamina" />
        <rect x="80" y="292" width="24" height="5" className="d-plaque" />
        <path d="M84 292 C80 270, 100 262, 98 284 M96 292 C104 272, 120 270, 110 288" className="d-if" />
      </>
    ),
    labels: [
      { x: 75, y: 37, text: "Microvilli", note: "luminal surface" },
      { x: 210, y: 64, text: "Zonula occludens", note: "membranes fuse; seals; belt just below the surface" },
      { x: 214, y: 96, text: "Zonula adherens", note: "membranes diverge; dense plaques; belt" },
      { x: 60, y: 92, text: "Terminal web", note: "actin filaments into the adherens plaques" },
      { x: 260, y: 172, text: "Macula adherens (desmosome)", note: "spot; wider gap with filaments; attachment plaques" },
      { x: 118, y: 166, text: "Intermediate filaments", note: "insert into the plaque or make a hairpin loop" },
      { x: 210, y: 238, text: "Gap junction (nexus)", note: "very close, no fusion; connexons" },
      { x: 92, y: 294, text: "Hemidesmosome", note: "half-desmosome: cell ↔ basement membrane" },
      { x: 270, y: 302, text: "Basal lamina", note: "part of the basement membrane" },
    ],
  };
}

/* ───────────────────────── gap junction close-up ───────────────────────── */
export function gapJunction(): DiagramDef {
  const xs = [56, 104, 152];
  return {
    viewBox: "0 0 360 210",
    art: (
      <>
        <rect width="360" height="210" className="d-bg" />
        <text x="14" y="22" className="d-caption">cell 1</text>
        <text x="14" y="200" className="d-caption">cell 2</text>
        <text x="282" y="22" className="d-caption" textAnchor="middle">face view</text>
        {/* two membranes */}
        <rect x="10" y="44" width="200" height="30" className="d-bilayer" />
        <rect x="10" y="132" width="200" height="30" className="d-bilayer" />
        {xs.map((x) => (
          <g key={x}>
            <rect x={x - 13} y="36" width="26" height="62" rx="7" className="d-connexon-big" />
            <rect x={x - 13} y="108" width="26" height="62" rx="7" className="d-connexon-big" />
            <path d={`M${x} 40V166`} className="d-channel-line" />
          </g>
        ))}
        {/* face view: 6 connexins around a pore */}
        {range(6).map((i) => {
          const a = (i / 6) * Math.PI * 2;
          return <circle key={i} cx={282 + 26 * Math.cos(a)} cy={108 + 26 * Math.sin(a)} r="14" className="d-connexin" />;
        })}
        <circle cx="282" cy="108" r="9" className="d-pore-hole" />
      </>
    ),
    labels: [
      { x: 196, y: 59, text: "Plasma membranes", note: "very close, but no fusion" },
      { x: 30, y: 103, text: "Intercellular space", note: "narrow gap" },
      { x: 104, y: 70, text: "Connexon", note: "tubule; pores of the two cells line up" },
      { x: 152, y: 103, text: "Channel", note: "communicating junction: metabolic coupling" },
      { x: 282, y: 152, text: "Six connexins", note: "transmembrane proteins forming one connexon" },
    ],
  };
}

/* ───────────────────────── microvillus ───────────────────────── */
export function microvillus(): DiagramDef {
  const xs = [80, 180, 280];
  return {
    viewBox: "0 0 360 230",
    art: (
      <>
        <rect width="360" height="230" className="d-bg" />
        <text x="14" y="22" className="d-caption">lumen</text>
        <path
          d={`M10 150 ${xs.map((x) => `H${x - 22} V60 A22 22 0 0 1 ${x + 22} 60 V150`).join(" ")} H350 V222 H10 Z`}
          className="d-cell"
        />
        <path
          d={`M10 150 ${xs.map((x) => `H${x - 22} V60 A22 22 0 0 1 ${x + 22} 60 V150`).join(" ")} H350`}
          className="d-membrane"
        />
        {xs.map((x) => (
          <g key={x}>
            {[-8, -3, 2, 7].map((dx) => (
              <path key={dx} d={`M${x + dx} 48V176`} className="d-actin" />
            ))}
          </g>
        ))}
        <path d="M14 172 C80 166, 120 182, 180 174 S 290 166, 346 176" className="d-web" />
        <path d="M14 182 C70 188, 130 172, 200 184 S 300 188, 346 180" className="d-web" />
      </>
    ),
    labels: [
      { x: 80, y: 44, text: "Microvillus", note: "minute finger-like projection" },
      { x: 202, y: 110, text: "Cell membrane", note: "covers each microvillus" },
      { x: 280, y: 110, text: "Core of actin filaments", note: "run down into the cell" },
      { x: 130, y: 176, text: "Terminal web", note: "the actin core is inserted here, under the surface" },
    ],
  };
}

/* ───────────────────────── gland shapes ───────────────────────── */
export function glands(): DiagramDef {
  const tube = (d: string, k: string) => (
    <g key={k}>
      <path d={d} className="d-gland-out" />
      <path d={d} className="d-gland-in" />
    </g>
  );
  return {
    viewBox: "0 0 360 250",
    art: (
      <>
        <rect width="360" height="250" className="d-bg" />
        <rect x="0" y="22" width="360" height="16" className="d-epi" />
        <text x="8" y="16" className="d-caption">surface epithelium</text>
        {/* simple tubular */}
        {tube("M45 30V170", "a")}
        {/* simple acinar */}
        {tube("M130 30V110", "b1")}
        <circle cx="130" cy="140" r="28" className="d-acinus" />
        {/* simple branched tubular */}
        {tube("M215 30V90 M215 90 L195 170 M215 90 L215 175 M215 90 L235 170", "c")}
        {/* compound tubuloalveolar */}
        {tube("M305 30V80 M305 80 L280 120 M305 80 L330 120 M280 120 L268 165 M280 120 L292 165 M330 120 L320 170", "d")}
        {[
          [268, 180],
          [292, 180],
          [330, 128],
          [320, 186],
        ].map(([x, y]) => (
          <circle key={`${x}${y}`} cx={x} cy={y} r="13" className="d-acinus" />
        ))}
        <text x="45" y="200" className="d-gland-cap" textAnchor="middle">1</text>
        <text x="130" y="200" className="d-gland-cap" textAnchor="middle">2</text>
        <text x="215" y="200" className="d-gland-cap" textAnchor="middle">3</text>
        <text x="305" y="218" className="d-gland-cap" textAnchor="middle">4</text>
      </>
    ),
    labels: [
      { x: 45, y: 120, text: "Simple tubular", note: "one unbranched duct + tube" },
      { x: 130, y: 140, text: "Simple acinar (alveolar)", note: "duct ending in one sac" },
      { x: 215, y: 130, text: "Simple branched tubular", note: "one duct, branched tubes" },
      { x: 305, y: 60, text: "Compound tubuloalveolar", note: "branched duct; tubes and acini" },
      { x: 280, y: 106, text: "Duct", note: "carries the secretion to the surface" },
      { x: 268, y: 180, text: "Secretory part", note: "acinus / alveolus" },
    ],
  };
}

/* ───────────────────────── mucous vs serous acinus ───────────────────────── */
function acinus(cx: number, cy: number, rin: number, rout: number, cells: number, kind: "mucous" | "serous") {
  const parts: ReactNode[] = [];
  for (let i = 0; i < cells; i++) {
    const a0 = (i / cells) * Math.PI * 2;
    const a1 = ((i + 1) / cells) * Math.PI * 2;
    const p = (r: number, a: number) => `${cx + r * Math.cos(a)} ${cy + r * Math.sin(a)}`;
    parts.push(
      <path
        key={`c${i}`}
        d={`M${p(rin, a0)} L${p(rout, a0)} A${rout} ${rout} 0 0 1 ${p(rout, a1)} L${p(rin, a1)} A${rin} ${rin} 0 0 0 ${p(rin, a0)} Z`}
        className={kind === "mucous" ? "d-mucous-cell" : "d-serous-cell"}
      />,
    );
    const am = (a0 + a1) / 2;
    if (kind === "mucous") {
      // flattened nucleus pressed against the base
      const r = rout - 6;
      parts.push(
        <ellipse key={`n${i}`} cx={cx + r * Math.cos(am)} cy={cy + r * Math.sin(am)} rx="9" ry="3" transform={`rotate(${(am * 180) / Math.PI + 90} ${cx + r * Math.cos(am)} ${cy + r * Math.sin(am)})`} className="d-nuc" />,
      );
    } else {
      const r = rout - 17;
      parts.push(<circle key={`n${i}`} cx={cx + r * Math.cos(am)} cy={cy + r * Math.sin(am)} r="6" className="d-nuc" />);
      [0.45, 0.58].forEach((f, k) => {
        const rr = rin + (rout - rin) * f - 14;
        parts.push(<circle key={`g${i}${k}`} cx={cx + rr * Math.cos(am + (k ? 0.12 : -0.12))} cy={cy + rr * Math.sin(am + (k ? 0.12 : -0.12))} r="2.4" className="d-zymogen" />);
      });
    }
  }
  return parts;
}

export function acini(): DiagramDef {
  return {
    viewBox: "0 0 360 210",
    art: (
      <>
        <rect width="360" height="210" className="d-bg" />
        <text x="92" y="20" className="d-caption" textAnchor="middle">mucous acinus</text>
        <text x="268" y="20" className="d-caption" textAnchor="middle">serous acinus</text>
        {acinus(92, 112, 30, 76, 10, "mucous")}
        {acinus(268, 112, 9, 64, 8, "serous")}
      </>
    ),
    labels: [
      { x: 92, y: 70, text: "Cuboidal mucous cells", note: "pale; thick viscous secretion (mucus)" },
      { x: 92, y: 182, text: "Flattened nuclei", note: "pressed to the base" },
      { x: 92, y: 112, text: "Wide lumen", note: "mucous gland" },
      { x: 268, y: 64, text: "Pyramidal serous cells", note: "thin watery secretion" },
      { x: 309, y: 98, text: "Spherical nuclei", note: "serous gland" },
      { x: 268, y: 112, text: "Narrow lumen", note: "serous gland" },
    ],
  };
}

/* ───────────────────────── plasma cell ───────────────────────── */
export function plasmaCell(): DiagramDef {
  const nx = 118;
  const ny = 118;
  return {
    viewBox: "0 0 360 236",
    art: (
      <>
        <rect width="360" height="236" className="d-bg" />
        <ellipse cx="180" cy="118" rx="160" ry="100" className="d-cell-plasma" />
        {/* rER filling the cytoplasm */}
        {range(7).map((i) => (
          <path key={i} d={`M${200 + i * 16} ${40 + Math.abs(3 - i) * 8} Q ${230 + i * 12} 118 ${200 + i * 16} ${196 - Math.abs(3 - i) * 8}`} className="d-rer-line" />
        ))}
        <ellipse cx="300" cy="150" rx="9" ry="7" className="d-russell" />
        {/* negative Golgi image */}
        <ellipse cx="190" cy="104" rx="26" ry="34" className="d-golgi-pale" />
        {/* eccentric nucleus with cartwheel chromatin */}
        <circle cx={nx} cy={ny} r="56" className="d-nucleus" />
        {range(10).map((i) => {
          const a = (i / 10) * Math.PI * 2;
          return (
            <path
              key={i}
              d={`M${nx + 54 * Math.cos(a - 0.17)} ${ny + 54 * Math.sin(a - 0.17)} L${nx + 38 * Math.cos(a)} ${ny + 38 * Math.sin(a)} L${nx + 54 * Math.cos(a + 0.17)} ${ny + 54 * Math.sin(a + 0.17)} Z`}
              className="d-chromatin-blk"
            />
          );
        })}
        <circle cx={nx} cy={ny} r="7" className="d-chromatin-blk" />
      </>
    ),
    labels: [
      { x: 70, y: 118, text: "Eccentric nucleus", note: "spherical, to one side" },
      { x: 118, y: 66, text: "Cartwheel (clock face) chromatin", note: "condensed peripherally" },
      { x: 190, y: 104, text: "Negative Golgi image", note: "pale area beside the nucleus" },
      { x: 262, y: 82, text: "Abundant rER", note: "strongly basophilic cytoplasm" },
      { x: 300, y: 150, text: "Russell's body", note: "immunoglobulin inclusion in a dilated cisterna" },
    ],
  };
}

/* ───────────────────────── white vs brown adipocyte ───────────────────────── */
export function adipocytes(): DiagramDef {
  const drops: [number, number, number][] = [
    [246, 80, 12],
    [274, 74, 10],
    [300, 88, 11],
    [318, 116, 9],
    [306, 146, 12],
    [278, 160, 10],
    [248, 150, 9],
    [236, 120, 8],
    [292, 118, 7],
  ];
  const mitos: [number, number, number][] = [
    [262, 100, 20],
    [292, 140, -30],
    [258, 130, 70],
    [304, 104, 40],
    [272, 182, 0],
  ];
  return {
    viewBox: "0 0 360 220",
    art: (
      <>
        <rect width="360" height="220" className="d-bg" />
        <text x="92" y="20" className="d-caption" textAnchor="middle">white (monolocular)</text>
        <text x="278" y="20" className="d-caption" textAnchor="middle">brown (multilocular)</text>
        {/* white: one big droplet, thin rim, flattened nucleus to one side */}
        <circle cx="92" cy="118" r="80" className="d-adipo-rim" />
        <circle cx="94" cy="118" r="73" className="d-droplet" />
        <path d="M20 96 Q 12 118 20 140 Q 26 118 20 96 Z" className="d-nuc-flat" />
        {/* brown: smaller, many droplets, mitochondria, oval eccentric nucleus */}
        <circle cx="278" cy="120" r="68" className="d-adipo-brown" />
        {drops.map(([x, y, r]) => (
          <circle key={`${x}${y}`} cx={x} cy={y} r={r} className="d-droplet" />
        ))}
        {mitos.map(([x, y, a]) => (
          <ellipse key={`${x}${y}`} cx={x} cy={y} rx="7" ry="3.2" transform={`rotate(${a} ${x} ${y})`} className="d-mito-small" />
        ))}
        <ellipse cx="236" cy="168" rx="13" ry="9" className="d-nuc" />
      </>
    ),
    labels: [
      { x: 104, y: 118, text: "Single large lipid droplet", note: "white fat; dissolved in H&E" },
      { x: 20, y: 118, text: "Flattened nucleus pushed to one side", note: "signet ring appearance" },
      { x: 150, y: 172, text: "Thin rim of cytoplasm", note: "white adipocyte" },
      { x: 300, y: 88, text: "Multiple small droplets", note: "brown fat: vacuolated look" },
      { x: 236, y: 168, text: "Oval eccentric nucleus", note: "brown adipocyte" },
      { x: 262, y: 100, text: "Abundant mitochondria", note: "rich in cytochromes → brown color" },
    ],
  };
}
