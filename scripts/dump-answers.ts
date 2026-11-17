// Prints every question with its keyed answer, for checking against the slides.
import { lectures, lectureSpots } from "../src/content/index.ts";
for (const l of lectures)
  for (const s of l.sections) {
    console.log(`\n## ${s.title} (slides ${s.slides})`);
    for (const q of s.questions) {
      if (q.type === "mcq") console.log(`${q.id} MCQ: ${q.prompt} → ${q.options[q.answer]}`);
      if (q.type === "tf") console.log(`${q.id} T/F: ${q.statement} → ${q.answer ? "TRUE" : "FALSE: " + q.correction}`);
      if (q.type === "complete") console.log(`${q.id} COMPLETE: ${q.prompt} → ${q.answers.join(" / ")}`);
      if (q.type === "reason") console.log(`${q.id} REASON: ${q.prompt} → ${q.answer}`);
      if (q.type === "compare") console.log(`${q.id} COMPARE: ${q.rows.map((r) => r.join(" | ")).join(" ;; ")}`);
    }
  }
for (const l of lectures)
  for (const q of lectureSpots(l)) if (q.type === "spot") console.log(`${q.id} SPOT (slide ${q.figure.slide}): ${q.prompt} → ${q.answer}`);
