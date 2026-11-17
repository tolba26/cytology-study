import type { Lecture, Question } from "./types";
import cytology1 from "./cytology-1.ts";
import cytology2 from "./cytology-2.ts";
import cytology3 from "./cytology-3.ts";
import epithelium2 from "./epithelium-2.ts";
import epithelium3 from "./epithelium-3.ts";
import connectiveTissue1 from "./connective-tissue-1.ts";
import connectiveTissue2 from "./connective-tissue-2.ts";
import { FIGURES } from "./figures.ts";
import { DEFS, POINTS } from "./arabic.ts";
import { EXTRAS } from "./extras.ts";

/** Add a lecture: create src/content/<id>.ts and append it here. */
export const lectures: Lecture[] = [cytology1, cytology2, cytology3, epithelium2, epithelium3, connectiveTissue1, connectiveTissue2];

export const COURSE_NAME = "Histology & Cytology";

// Attach the Arabic lines under each key point and definition.
for (const lecture of lectures)
  for (const s of lecture.sections) {
    s.keyPointsAr = POINTS[lecture.id]?.[s.id];
    for (const b of s.blocks) if (b.kind === "definition") b.ar = DEFS[lecture.id]?.[b.term];
  }

// Extra flows and diagrams (added after the first version), before the slide pictures.
for (const lecture of lectures)
  for (const s of lecture.sections) {
    const extra = EXTRAS[lecture.id]?.[s.id];
    if (extra && !s.blocks.includes(extra[0])) s.blocks.push(...extra);
  }

// Attach the slide pictures (generated file) to their sections as a gallery block.
for (const lecture of lectures) {
  const figs = FIGURES[lecture.id] ?? [];
  for (const s of lecture.sections) {
    const mine = figs.filter((f) => f.section === s.id);
    if (mine.length && !s.blocks.some((b) => b.kind === "gallery")) s.blocks.push({ kind: "gallery", items: mine });
  }
}

export function getLecture(id: string | undefined): Lecture | undefined {
  return lectures.find((l) => l.id === id);
}

export interface QuestionRef {
  lecture: Lecture;
  sectionId: string;
  sectionTitle: string;
  question: Question;
}

/** "Spot it" picture questions for a lecture, in slide order. */
export function lectureSpots(lecture: Lecture): Question[] {
  return (FIGURES[lecture.id] ?? [])
    .filter((f) => f.spot)
    .map((f) => ({
      id: f.spot!.id,
      type: "spot" as const,
      prompt: f.spot!.prompt,
      answer: f.spot!.answer,
      figure: f,
      explain: `Slide ${f.slide}.`,
    }));
}

const questionIndex = new Map<string, QuestionRef>();
for (const lecture of lectures) {
  for (const s of lecture.sections)
    for (const q of s.questions) questionIndex.set(q.id, { lecture, sectionId: s.id, sectionTitle: s.title, question: q });
  for (const q of lectureSpots(lecture)) {
    const sec = lecture.sections.find((s) => s.id === (q.type === "spot" ? q.figure.section : ""));
    questionIndex.set(q.id, { lecture, sectionId: sec?.id ?? lecture.sections[0].id, sectionTitle: `Spot it · ${sec?.title ?? ""}`, question: q });
  }
}

export function findQuestion(id: string): QuestionRef | undefined {
  return questionIndex.get(id);
}

export function lectureQuestions(lecture: Lecture): Question[] {
  return lecture.sections.flatMap((s) => s.questions);
}
