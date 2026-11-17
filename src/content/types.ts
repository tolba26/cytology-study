/**
 * Content model. One lecture = one file in src/content/ that default-exports a Lecture,
 * plus one line in src/content/index.ts.
 *
 * Inline markup used in any text field:
 *   [[term]]  → high-yield term (the lecturer colored or bolded it)
 *   *text*    → plain emphasis
 */

export type DiagramId = "trilaminar" | "bilayer" | "fluid-mosaic" | "mitochondrion" | "golgi" | "centriole" | "nucleus" | "nuclear-pore" | "axoneme"
  | "er-types" | "junctions" | "gap-junction" | "microvillus" | "glands" | "acini" | "plasma-cell" | "adipocytes";

export type Block =
  | { kind: "definition"; term: string; text: string; aside?: string; ar?: string }
  | { kind: "chips"; title?: string; items: { label: string; note?: string }[] }
  | { kind: "table"; title?: string; columns: string[]; rows: string[][] }
  | { kind: "diagram"; diagram: DiagramId; title: string; caption?: string }
  | { kind: "number"; value: string; unit?: string; label: string; note?: string }
  | { kind: "proportion"; title: string; parts: { label: string; value: number }[] }
  | { kind: "steps"; title: string; items: string[] }
  | { kind: "tree"; title?: string; root: TreeNode }
  | { kind: "list"; title?: string; items: string[] }
  | { kind: "mnemonic"; phrase: string; key: { letter: string; word: string }[] }
  | { kind: "gallery"; items: Figure[] };

/** A picture taken from the lecture slides (see scripts/figures_spec.py). */
export interface Figure {
  src: string;
  w: number;
  h: number;
  slide: number;
  section: string;
  caption: string;
  spot?: { id: string; prompt: string; answer: string };
}

export interface TreeNode {
  label: string;
  note?: string;
  children?: TreeNode[];
}

interface QBase {
  id: string;
  /** one-line explanation shown after answering */
  explain: string;
}

export type Question =
  | (QBase & { type: "mcq"; prompt: string; options: string[]; answer: number })
  | (QBase & { type: "tf"; statement: string; answer: boolean; correction?: string })
  | (QBase & { type: "complete"; prompt: string; answers: string[] })
  | (QBase & { type: "reason"; prompt: string; answer: string })
  | (QBase & { type: "compare"; prompt: string; columns: string[]; rows: string[][] })
  | (QBase & { type: "spot"; prompt: string; answer: string; figure: Figure });

export interface Section {
  id: string;
  title: string;
  slides: string;
  keyPoints: string[];
  /** Egyptian Arabic line under each key point (same order) */
  keyPointsAr?: string[];
  blocks: Block[];
  /** Egyptian Arabic explanation, 1–3 lines */
  explain: string;
  questions: Question[];
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
}

export interface Lecture {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  lecturer: string;
  slideCount: number;
  /** heading the lecture is listed under on the home page */
  group: string;
  sections: Section[];
  flashcards: Flashcard[];
  /** every high-yield term in the lecture, used by scripts/check-content.ts */
  highYield: string[];
  sheet: { heading: string; points: string[] }[];
}
