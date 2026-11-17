import { Link } from "react-router-dom";
import { lectureQuestions, lectureSpots, lectures } from "../content";
import { IconArrow } from "../components/Icons";
import { TopBar } from "../components/Layout";
import { useProgress } from "../lib/store";

export function QuizHub() {
  const progress = useProgress();
  const mistakes = Object.keys(progress.mistakes).length;
  return (
    <>
      <TopBar />
      <main id="main" className="page page-narrow">
        <h1 className="page-title">Quiz</h1>
        {lectures.map((l) => {
          const n = lectureQuestions(l).length;
          const best = progress.quizBest[l.id];
          const got = l.flashcards.filter((c) => progress.cards[`${l.id}:${c.id}`] === "got").length;
          return (
            <section key={l.id} className="hub-lecture">
              <h2>{l.title}</h2>
              <ul className="hub-rows">
                <li>
                  <Link to={`/l/${l.id}/map`} className="hub-row">
                    <span>
                      <b>Mind map</b>
                      <small>Whole lecture as one tree</small>
                    </span>
                    <IconArrow />
                  </Link>
                </li>
                <li>
                  <Link to={`/l/${l.id}/quiz`} className="hub-row">
                    <span>
                      <b>Full lecture quiz</b>
                      <small>
                        {n} questions{best !== undefined ? ` · best ${Math.round(best * 100)}%` : ""}
                      </small>
                    </span>
                    <IconArrow />
                  </Link>
                </li>
                <li>
                  <Link to={`/l/${l.id}/cards`} className="hub-row">
                    <span>
                      <b>Flashcards</b>
                      <small>
                        {l.flashcards.length} cards · {got} got it
                      </small>
                    </span>
                    <IconArrow />
                  </Link>
                </li>
                {lectureSpots(l).length > 0 && (
                  <li>
                    <Link to={`/l/${l.id}/spot`} className="hub-row">
                      <span>
                        <b>Spot it</b>
                        <small>{lectureSpots(l).length} pictures to identify</small>
                      </span>
                      <IconArrow />
                    </Link>
                  </li>
                )}
                <li>
                  <Link to={`/l/${l.id}/sheet`} className="hub-row">
                    <span>
                      <b>Last-minute sheet</b>
                      <small>All high-yield points</small>
                    </span>
                    <IconArrow />
                  </Link>
                </li>
              </ul>
            </section>
          );
        })}
        <Link to="/mistakes" className="hub-row hub-mistakes">
          <span>
            <b>My mistakes</b>
            <small>{mistakes ? `${mistakes} to fix` : "Nothing saved yet"}</small>
          </span>
          <IconArrow />
        </Link>
      </main>
    </>
  );
}
