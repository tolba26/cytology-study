// Prints every key point and definition card, for writing the Arabic lines.
import { lectures } from "../src/content/index.ts";
const only = process.argv[2];
for (const l of lectures) {
  if (only && !l.id.startsWith(only)) continue;
  console.log(`\n# ${l.id}`);
  for (const s of l.sections) {
    console.log(`## ${s.id}`);
    s.keyPoints.forEach((k, i) => console.log(`  ${i}. ${k.replace(/\[\[|\]\]|\*/g, "")}`));
    for (const b of s.blocks) if (b.kind === "definition") console.log(`  DEF ${b.term}: ${b.text.replace(/\[\[|\]\]|\*/g, "")}`);
  }
}
