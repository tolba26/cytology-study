import { useState } from "react";
import { Link } from "react-router-dom";
import { findQuestion, lectures, type QuestionRef } from "../content";
import { TopBar } from "../components/Layout";
import { QuestionCard } from "../components/QuestionCard";
import { useProgress } from "../lib/store";

export function Mistakes() {
  const progress = useProgress();
  // snapshot on arrival, so a question stays on screen after you fix it here
  const [ids] = useState(() =>
    Object.entries(progress.mistakes)
      .sort((a, b) => b[1] - a[1])
      .map(([id]) => id),
  );
  const refs = ids.map(findQuestion).filter((r): r is QuestionRef => !!r);
  const left = refs.filter((r) => progress.mistakes[r.question.id] !== undefined).length;

  return (
    <>
      <TopBar />
      <main id="main" className="page page-narrow">
        <h1 className="page-title">My mistakes</h1>
        {refs.length === 0 ? (
          <p className="empty">
            Nothing here yet. Any question you get wrong, in a section or in a quiz, is saved here. It leaves the list once you answer it right.
          </p>
        ) : (
          <>
            <p className="muted">
              {left} left to fix{refs.length - left > 0 ? ` · ${refs.length - left} fixed this visit` : ""}. Answer one right and it leaves the list.
            </p>
            {lectures.map((l) => {
              const mine = refs.filter((r) => r.lecture.id === l.id);
              if (!mine.length) return null;
              return (
                <section key={l.id} className="mistake-group">
                  <h2 className="small-h">{l.title}</h2>
                  {mine.map((r) => (
                    <div key={r.question.id} className="mistake-item">
                      <Link to={`/l/${l.id}?s=${r.sectionId}`} className="mistake-from">
                        {r.sectionTitle} →
                      </Link>
                      <QuestionCard q={r.question} shuffleOptions />
                    </div>
                  ))}
                </section>
              );
            })}
          </>
        )}
      </main>
    </>
  );
}
