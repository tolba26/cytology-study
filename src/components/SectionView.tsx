import { motion } from "framer-motion";
import type { Section } from "../content/types";
import { Rich } from "../lib/rich";
import { useProgress } from "../lib/store";
import { BlockView } from "./Blocks";
import { QuestionCard } from "./QuestionCard";

export function SectionView({ section, index }: { section: Section; index: number }) {
  const progress = useProgress();
  const right = section.questions.filter((q) => progress.results[q.id] === "right").length;

  return (
    <section id={section.id} className="sec">
      {/* animate an inner wrapper so jump-to-section scroll targets never move */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -12% 0px" }}
        transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
      >
      <header className="sec-head">
        <span className="sec-num">{String(index + 1).padStart(2, "0")}</span>
        <h2 className="sec-title">{section.title}</h2>
        <span className="sec-slides">Slides {section.slides}</span>
      </header>

      <ul className="keypoints">
        {section.keyPoints.map((k, i) => (
          <li key={i}>
            <Rich text={k} />
            {section.keyPointsAr?.[i] && (
              <span className="ar-line" lang="ar" dir="rtl">
                {section.keyPointsAr[i]}
              </span>
            )}
          </li>
        ))}
      </ul>

      {section.blocks.map((b, i) => (
        <BlockView key={i} block={b} />
      ))}

      <div className="check">
        <div className="check-head">
          <h3>Check yourself</h3>
          <span className="check-score">
            {right}/{section.questions.length} right
          </span>
        </div>
        {section.questions.map((q, i) => (
          <QuestionCard key={q.id} q={q} number={i + 1} />
        ))}
      </div>
      </motion.div>
    </section>
  );
}
