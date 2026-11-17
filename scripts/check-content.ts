// Sanity checks for lecture content: unique ids, valid answers, every
// high-yield term covered by at least one question. Run: npm run check:content
import { lectures } from "../src/content/index.ts";
import type { Question } from "../src/content/types.ts";

let failures = 0;
const fail = (msg: string) => { failures++; console.error("✗ " + msg); };

function questionText(q: Question): string {
  switch (q.type) {
    case "mcq": return [q.prompt, ...q.options].join(" ");
    case "tf": return [q.statement, q.correction ?? ""].join(" ");
    case "complete": return [q.prompt, ...q.answers].join(" ");
    case "reason": return [q.prompt, q.answer].join(" ");
    case "compare": return [q.prompt, ...q.columns, ...q.rows.flat()].join(" ");
    case "spot": return [q.prompt, q.answer].join(" ");
  }
}

for (const lec of lectures) {
  const ids = new Set<string>();
  let total = 0;
  for (const s of lec.sections) {
    if (s.questions.length < 3 || s.questions.length > 6) fail(`${lec.id}/${s.id}: ${s.questions.length} questions (want 3–6)`);
    for (const q of s.questions) {
      total++;
      if (ids.has(q.id)) fail(`duplicate question id ${q.id}`);
      ids.add(q.id);
      if (q.type === "mcq" && (q.answer < 0 || q.answer >= q.options.length)) fail(`${q.id}: answer index out of range`);
      if (q.type === "mcq" && new Set(q.options).size !== q.options.length) fail(`${q.id}: duplicate options`);
      if (q.type === "tf" && !q.answer && !q.correction) fail(`${q.id}: false statement without correction`);
      if (q.type === "complete" && !q.prompt.includes("____")) fail(`${q.id}: no blank`);
    }
  }
  for (const s of lec.sections)
    for (const b of s.blocks) if (b.kind === "definition" && !b.ar) fail(`${lec.id}/${s.id}: definition "${b.term}" has no Arabic line`);
  for (const s of lec.sections)
    if ((s.keyPointsAr?.length ?? 0) !== s.keyPoints.length) fail(`${lec.id}/${s.id}: ${s.keyPointsAr?.length ?? 0} Arabic lines for ${s.keyPoints.length} key points`);
  const all = lec.sections.flatMap((s) => s.questions).map(questionText).join(" \n ").toLowerCase();
  for (const term of lec.highYield) if (!all.includes(term.toLowerCase())) fail(`${lec.id}: high-yield "${term}" not covered by any question`);

  // every [[term]] in key points must be in the highYield list (loosely)
  const marked = new Set<string>();
  for (const s of lec.sections) for (const k of s.keyPoints) for (const m of k.matchAll(/\[\[(.+?)\]\]/g)) marked.add(m[1]);
  for (const m of marked) {
    const ok = lec.highYield.some((h) => m.toLowerCase().includes(h.toLowerCase()) || h.toLowerCase().includes(m.toLowerCase()));
    if (!ok) fail(`${lec.id}: marked term "${m}" missing from highYield list`);
  }
  const figs = lec.sections.flatMap((s) => s.blocks.filter((b) => b.kind === "gallery").flatMap((b) => (b.kind === "gallery" ? b.items : [])));
  console.log(`${lec.id}: ${figs.length} pictures, ${figs.filter((f) => f.spot).length} spot-it`);
  console.log(`${lec.id}: ${lec.sections.length} sections, ${total} questions, ${lec.flashcards.length} flashcards, ${lec.highYield.length} high-yield terms`);
}
if (failures) { console.error(`\n${failures} problem(s)`); process.exit(1); }
console.log("content OK");
