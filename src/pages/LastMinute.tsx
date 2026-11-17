import { useParams } from "react-router-dom";
import { getLecture } from "../content";
import { TopBar } from "../components/Layout";
import { Rich } from "../lib/rich";
import { NotFound } from "./NotFound";

export function LastMinute() {
  const { id } = useParams();
  const lecture = getLecture(id);
  if (!lecture) return <NotFound />;
  return (
    <>
      <TopBar back={`/l/${lecture.id}`} title={<span className="lecture-topbar-title">{lecture.title} · Last minute</span>} />
      <main id="main" className="page page-sheet">
        <header className="sheet-page-head">
          <p className="kicker">Last-minute sheet</p>
          <h1>{lecture.title}</h1>
        </header>
        <div className="lm-grid">
          {lecture.sheet.map((g) => (
            <section key={g.heading} className="lm-group">
              <h2>{g.heading}</h2>
              <ul>
                {g.points.map((p, i) => (
                  <li key={i}>
                    <Rich text={p} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
