import type { Block } from "./types";

/**
 * Extra drawings added to sections after the first version: process flows and structure diagrams.
 * EXTRAS[lecture][section] blocks are inserted before the slide pictures of that section.
 */
export const EXTRAS: Record<string, Record<string, Block[]>> = {
  "cytology-2": {
    ser: [{ kind: "diagram", diagram: "er-types", title: "Rough vs smooth ER", caption: "Schematic, from the descriptions on slides 4–19." }],
  },
  "epithelium-2": {
    "cell-number-shape": [{ kind: "diagram", diagram: "glands", title: "Shapes of multicellular glands", caption: "Schematic, after the figure on page 5." }],
    "secretion-nature": [{ kind: "diagram", diagram: "acini", title: "Mucous vs serous acinus", caption: "Schematic, from the features on pages 6–7." }],
  },
  "epithelium-3": {
    microvilli: [{ kind: "diagram", diagram: "microvillus", title: "Microvilli with EM", caption: "Schematic, from pages 9–12." }],
    junctions: [{ kind: "diagram", diagram: "junctions", title: "The junctions between two cells", caption: "Schematic, after the figures on pages 25–26." }],
    gap: [{ kind: "diagram", diagram: "gap-junction", title: "Gap junction close-up", caption: "Schematic, after the figure on page 24." }],
  },
  "connective-tissue-1": {
    adipocytes: [{ kind: "diagram", diagram: "adipocytes", title: "White vs brown adipocyte", caption: "Schematic, from slides 32–37." }],
    macrophages: [
      {
        kind: "steps",
        title: "From monocyte to giant cell (slides 19)",
        items: [
          "Monocytes circulate in the blood.",
          "They migrate to the connective tissue, where they are called macrophages.",
          "Many macrophages can fuse with each other…",
          "…forming large multinucleated [[foreign body giant cells]] that engulf large foreign bodies.",
        ],
      },
    ],
    fibroblasts: [
      {
        kind: "steps",
        title: "Fibroblast transformation (slides 27–30)",
        items: [
          "Undifferentiated mesenchymal cell (inactive).",
          "Fibroblast transformation.",
          "Mature collagen-producing fibroblast (active): rich rER, well-developed Golgi.",
          "Secretes the precursors: tropocollagen, tropoelastin, glycosaminoglycans.",
          "When inactive it becomes a smaller, spindle-shaped [[fibrocyte]].",
        ],
      },
    ],
    "plasma-cells": [
      { kind: "diagram", diagram: "plasma-cell", title: "Plasma cell", caption: "Schematic, from slides 46–49." },
      {
        kind: "steps",
        title: "From B-lymphocyte to antibodies (slides 47–51)",
        items: [
          "B-lymphocyte.",
          "Plasma cell: abundant rER, prominent Golgi (negative Golgi image).",
          "Immunoglobulin-containing inclusions in dilated rER cisternae = [[Russell's bodies]].",
          "Production of antibodies.",
        ],
      },
    ],
  },
};
