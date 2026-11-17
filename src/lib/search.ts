import { lectures } from "../content";
import type { Block, Question, TreeNode } from "../content/types";
import { plain } from "./rich";

export interface Hit {
  lectureId: string;
  lectureTitle: string;
  sectionId: string;
  sectionTitle: string;
  kind: "Key point" | "Note" | "Question" | "Flashcard" | "Arabic note";
  text: string;
}

function blockTexts(b: Block): string[] {
  switch (b.kind) {
    case "definition":
      return [`${b.term}${b.aside ? ` (${b.aside})` : ""}: ${b.text}`];
    case "chips":
      return [[b.title, ...b.items.map((i) => i.label + (i.note ? ` (${i.note})` : ""))].filter(Boolean).join(" · ")];
    case "table":
      return b.rows.map((r) => r.filter((c) => c && c !== "—").join(" · "));
    case "diagram":
      return [b.title];
    case "number":
      return [`${b.value}${b.unit ? " " + b.unit : ""}: ${b.label}${b.note ? `. ${b.note}` : ""}`];
    case "proportion":
      return [b.parts.map((p) => `${p.label} ${p.value}%`).join(" · ")];
    case "steps":
    case "list":
      return b.items;
    case "tree": {
      const acc: string[] = [];
      const walk = (n: TreeNode) => {
        acc.push(n.label + (n.note ? ` (${n.note})` : ""));
        n.children?.forEach(walk);
      };
      walk(b.root);
      return [acc.join(" · ")];
    }
    case "mnemonic":
      return [];
    case "gallery":
      return b.items.map((f) => `Picture (slide ${f.slide}): ${f.caption}`);
  }
}

function questionText(q: Question): string {
  switch (q.type) {
    case "mcq":
      return q.prompt;
    case "tf":
      return q.statement;
    case "complete":
      return q.prompt.replace("____", "…");
    case "reason":
    case "compare":
    case "spot":
      return q.prompt;
  }
}

const index: Hit[] = [];
for (const l of lectures) {
  for (const s of l.sections) {
    const base = { lectureId: l.id, lectureTitle: l.title, sectionId: s.id, sectionTitle: s.title };
    s.keyPoints.forEach((t) => index.push({ ...base, kind: "Key point", text: plain(t) }));
    s.blocks.flatMap(blockTexts).forEach((t) => index.push({ ...base, kind: "Note", text: plain(t) }));
    (s.keyPointsAr ?? []).forEach((t) => index.push({ ...base, kind: "Arabic note", text: t }));
    s.questions.forEach((q) => index.push({ ...base, kind: "Question", text: questionText(q) }));
  }
  for (const f of l.flashcards) {
    index.push({
      lectureId: l.id,
      lectureTitle: l.title,
      sectionId: "",
      sectionTitle: "Flashcards",
      kind: "Flashcard",
      text: `${f.front}: ${f.back}`,
    });
  }
}

export function search(query: string, limit = 60): Hit[] {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  const hits: { hit: Hit; score: number }[] = [];
  for (const h of index) {
    const hay = (h.text + " " + h.sectionTitle).toLowerCase();
    if (!words.every((w) => hay.includes(w))) continue;
    let score = 0;
    if (h.sectionTitle.toLowerCase().includes(words[0])) score += 3;
    if (h.kind === "Key point") score += 2;
    if (h.kind === "Note") score += 1;
    hits.push({ hit: h, score });
  }
  return hits
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.hit);
}
