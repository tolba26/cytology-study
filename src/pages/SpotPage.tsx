import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getLecture, lectureSpots } from "../content";
import type { Lecture } from "../content/types";
import { TopBar } from "../components/Layout";
import { ProgressRing } from "../components/ProgressRing";
import { QuestionCard } from "../components/QuestionCard";
import { shuffle } from "../lib/answer";
import { NotFound } from "./NotFound";

export function SpotPage() {
  const { id } = useParams();
  const lecture = getLecture(id);
  if (!lecture) return <NotFound />;
  return <Spot key={lecture.id} lecture={lecture} />;
}

/** Picture-identification practice, like the practical exam. */
function Spot({ lecture }: { lecture: Lecture }) {
  const all = useMemo(() => lectureSpots(lecture), [lecture]);
  const [run, setRun] = useState(() => shuffle(all.map((q) => q.id)));
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [round, setRound] = useState(0);

  if (!all.length)
    return (
      <>
        <TopBar back={`/l/${lecture.id}`} title={<span className="lecture-topbar-title">{lecture.title} · Spot it</span>} />
        <main id="main" className="page page-narrow">
          <p className="empty">This lecture has no picture questions.</p>
        </main>
      </>
    );

  const done = i >= run.length;
  const q = all.find((x) => x.id === run[i]);
  const right = run.filter((id) => answers[id]).length;
  const wrong = run.filter((id) => answers[id] === false);

  const start = (ids: string[]) => {
    setRun(shuffle(ids));
    setI(0);
    setAnswers({});
    setRound((r) => r + 1);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <TopBar back={`/l/${lecture.id}`} title={<span className="lecture-topbar-title">{lecture.title} · Spot it</span>}>
        <motion.div className="read-progress" animate={{ scaleX: Math.min(i, run.length) / run.length }} transition={{ duration: 0.3 }} aria-hidden />
      </TopBar>
      <main id="main" className="page page-narrow">
        {!done && q && (
          <>
            <p className="kicker">
              Picture {i + 1} of {run.length}
              {run.length !== all.length && " · missed ones only"}
            </p>
            <QuestionCard key={`${round}-${q.id}`} q={q} onDone={(c) => setAnswers((a) => ({ ...a, [q.id]: c }))} />
            <div className="quiz-nav">
              <span className="quiz-tally">
                {right} right · {wrong.length} missed
              </span>
              <button
                type="button"
                className="btn btn-solid"
                disabled={answers[q.id] === undefined}
                onClick={() => {
                  setI(i + 1);
                  window.scrollTo(0, 0);
                }}
              >
                {i + 1 === run.length ? "See score" : "Next"}
              </button>
            </div>
          </>
        )}
        {done && (
          <motion.div className="quiz-result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <p className="kicker">Spot it</p>
            <div className="score-row">
              <ProgressRing value={right / run.length} size={84} />
              <p className="score">
                <b>{right}</b>
                <span>/ {run.length}</span>
              </p>
            </div>
            <div className="quiz-actions">
              {wrong.length > 0 && (
                <button type="button" className="btn btn-solid" onClick={() => start(wrong)}>
                  Retry the {wrong.length} missed
                </button>
              )}
              <button type="button" className="btn btn-line" onClick={() => start(all.map((x) => x.id))}>
                Start over (all {all.length})
              </button>
              <Link to={`/l/${lecture.id}`} className="btn btn-line">
                Back to the lecture
              </Link>
            </div>
          </motion.div>
        )}
      </main>
    </>
  );
}
