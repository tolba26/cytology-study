import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { findQuestion, getLecture, lectureQuestions } from "../content";
import type { Lecture } from "../content/types";
import { TopBar } from "../components/Layout";
import { ProgressRing } from "../components/ProgressRing";
import { QuestionCard } from "../components/QuestionCard";
import { shuffle } from "../lib/answer";
import { recordQuiz } from "../lib/store";
import { NotFound } from "./NotFound";

export function QuizPage() {
  const { id } = useParams();
  const lecture = getLecture(id);
  if (!lecture) return <NotFound />;
  return <Quiz key={lecture.id} lecture={lecture} />;
}

function shortPrompt(qid: string) {
  const q = findQuestion(qid)?.question;
  if (!q) return qid;
  const t = q.type === "tf" ? q.statement : q.prompt;
  return t.replace("____", "…");
}

function Quiz({ lecture }: { lecture: Lecture }) {
  const allIds = useMemo(() => lectureQuestions(lecture).map((q) => q.id), [lecture]);
  const [run, setRun] = useState<string[]>(() => shuffle(allIds));
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [round, setRound] = useState(0);

  const finished = i >= run.length;
  const current = run[i];
  const ref = current ? findQuestion(current) : undefined;
  const right = run.filter((q) => answers[q]).length;
  const wrong = run.filter((q) => answers[q] === false);

  const start = (ids: string[]) => {
    setRun(shuffle(ids));
    setI(0);
    setAnswers({});
    setRound((r) => r + 1);
    window.scrollTo(0, 0);
  };

  const next = () => {
    const n = i + 1;
    setI(n);
    if (n >= run.length && run.length === allIds.length) recordQuiz(lecture.id, run.filter((q) => answers[q]).length / run.length);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <TopBar back={`/l/${lecture.id}`} title={<span className="lecture-topbar-title">{lecture.title} · Quiz</span>}>
        <motion.div className="read-progress" animate={{ scaleX: run.length ? Math.min(i, run.length) / run.length : 0 }} transition={{ duration: 0.3 }} aria-hidden />
      </TopBar>
      <main id="main" className="page page-narrow">
        {!finished && ref && (
          <>
            <div className="quiz-head">
              <p className="kicker">
                Question {i + 1} of {run.length}
                {run.length !== allIds.length && " · wrong ones only"}
              </p>
              <p className="quiz-from">From: {ref.sectionTitle}</p>
            </div>
            <QuestionCard key={`${round}-${current}`} q={ref.question} shuffleOptions onDone={(c) => setAnswers((a) => ({ ...a, [current]: c }))} />
            <div className="quiz-nav">
              <span className="quiz-tally">
                {right} right · {wrong.length} wrong
              </span>
              <button type="button" className="btn btn-solid" onClick={next} disabled={answers[current] === undefined}>
                {i + 1 === run.length ? "See score" : "Next"}
              </button>
            </div>
          </>
        )}

        {finished && (
          <motion.div className="quiz-result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <p className="kicker">{run.length === allIds.length ? "Full lecture quiz" : "Retry round"}</p>
            <div className="score-row">
              <ProgressRing value={run.length ? right / run.length : 0} size={84} />
              <p className="score">
                <b>{right}</b>
                <span>/ {run.length}</span>
              </p>
            </div>
            <div className="quiz-actions">
              {wrong.length > 0 && (
                <button type="button" className="btn btn-solid" onClick={() => start(wrong)}>
                  Retry the {wrong.length} wrong
                </button>
              )}
              <button type="button" className="btn btn-line" onClick={() => start(allIds)}>
                Start over (all {allIds.length})
              </button>
              <Link to={`/l/${lecture.id}`} className="btn btn-line">
                Back to the lecture
              </Link>
            </div>
            {wrong.length > 0 && (
              <>
                <h2 className="small-h">You missed</h2>
                <ul className="missed-list">
                  {wrong.map((q) => (
                    <li key={q}>{shortPrompt(q)}</li>
                  ))}
                </ul>
                <p className="muted">These are also saved in My mistakes.</p>
              </>
            )}
          </motion.div>
        )}
      </main>
    </>
  );
}
