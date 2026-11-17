import { Link } from "react-router-dom";
import { COURSE_NAME, lectureQuestions, lectures } from "../content";
import { ProgressRing } from "../components/ProgressRing";
import { TopBar } from "../components/Layout";
import { useProgress } from "../lib/store";

export function Home() {
  const progress = useProgress();
  const groups = [...new Set(lectures.map((l) => l.group))];
  return (
    <>
      <TopBar brand={false} />
      <main id="main" className="page page-home">
        <h1 className="course-title">{COURSE_NAME}</h1>
        {groups.map((g) => (
          <section key={g} className="lecture-group" aria-label={g}>
            {groups.length > 1 && <h2 className="group-title">{g}</h2>}
            <ol className="lecture-list">
              {lectures
                .filter((l) => l.group === g)
                .map((l) => {
                  const qs = lectureQuestions(l);
                  const right = qs.filter((q) => progress.results[q.id] === "right").length;
                  return (
                    <li key={l.id}>
                      <Link to={`/l/${l.id}`} className="lecture-row">
                        <span className="lecture-no">{l.number}</span>
                        <span className="lecture-text">
                          <span className="lecture-title">{l.title}</span>
                          <span className="lecture-sub">{l.subtitle}</span>
                          <span className="lecture-meta">
                            {l.sections.length} sections · {qs.length} questions · {right} right
                          </span>
                        </span>
                        <ProgressRing value={qs.length ? right / qs.length : 0} label={`${l.title}: ${right} of ${qs.length} questions right`} />
                      </Link>
                    </li>
                  );
                })}
            </ol>
          </section>
        ))}
      </main>
    </>
  );
}
