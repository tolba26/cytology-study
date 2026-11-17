import { motion, useScroll, useSpring } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { getLecture, lectureQuestions, lectureSpots } from "../content";
import type { Lecture } from "../content/types";
import { IconArrow, IconSections } from "../components/Icons";
import { Sheet, TopBar } from "../components/Layout";
import { ProgressRing } from "../components/ProgressRing";
import { SectionView } from "../components/SectionView";
import { resetLecture, useProgress } from "../lib/store";
import { NotFound } from "./NotFound";

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => !!e);
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    els.forEach((e) => obs.observe(e));
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

const reducedMotion = () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export function LecturePage() {
  const { id } = useParams();
  const lecture = getLecture(id);
  if (!lecture) return <NotFound />;
  return <LectureBody key={lecture.id} lecture={lecture} />;
}

function LectureBody({ lecture }: { lecture: Lecture }) {
  const [params, setParams] = useSearchParams();
  const [sheetOpen, setSheetOpen] = useState(false);
  const progress = useProgress();
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 220, damping: 32, restDelta: 0.001 });
  const [ids] = useState(() => lecture.sections.map((s) => s.id));
  const active = useActiveSection(ids);

  const qs = lectureQuestions(lecture);
  const spots = lectureSpots(lecture).length;
  const right = qs.filter((q) => progress.results[q.id] === "right").length;
  const sectionScore = (sid: string) => {
    const s = lecture.sections.find((x) => x.id === sid)!;
    return [s.questions.filter((q) => progress.results[q.id] === "right").length, s.questions.length] as const;
  };

  const jump = useCallback((sid: string) => {
    setSheetOpen(false);
    // release the sheet's body scroll lock now; its effect cleanup runs too late for the scroll below
    document.body.style.overflow = "";
    window.setTimeout(() => {
      const el = document.getElementById(sid);
      if (!el) return;
      const from = window.scrollY;
      el.scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth", block: "start" });
      // some browsers/background tabs ignore smooth scrolling: jump instantly if nothing moved
      window.setTimeout(() => {
        if (window.scrollY === from) el.scrollIntoView({ block: "start" });
      }, 250);
    }, 30);
  }, []);

  // deep link from search: /l/:id?s=section
  const target = params.get("s");
  useEffect(() => {
    if (!target) return;
    const t = window.setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ block: "start" });
      setParams({}, { replace: true });
    }, 60);
    return () => window.clearTimeout(t);
  }, [target, setParams]);

  const reset = () => {
    if (window.confirm(`Reset all answers, flashcards and quiz score for ${lecture.title}?`))
      resetLecture(
        qs.map((q) => q.id),
        lecture.flashcards.map((c) => `${lecture.id}:${c.id}`),
        lecture.id,
      );
  };

  const toc = (
    <ol className="toc-list">
      {lecture.sections.map((s, i) => {
        const [r, n] = sectionScore(s.id);
        return (
          <li key={s.id}>
            <button type="button" className={`toc-item ${active === s.id ? "active" : ""}`} onClick={() => jump(s.id)} aria-current={active === s.id ? "location" : undefined}>
              <span className="toc-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="toc-title">{s.title}</span>
              <span className={`toc-score ${r === n ? "full" : ""}`}>
                {r}/{n}
              </span>
            </button>
          </li>
        );
      })}
    </ol>
  );

  const endLinks = (
    <>
      <Link to={`/l/${lecture.id}/map`}>Mind map</Link>
      <Link to={`/l/${lecture.id}/quiz`}>Full quiz</Link>
      <Link to={`/l/${lecture.id}/cards`}>Flashcards</Link>
      {spots > 0 && <Link to={`/l/${lecture.id}/spot`}>Spot it</Link>}
      <Link to={`/l/${lecture.id}/sheet`}>Last-minute sheet</Link>
    </>
  );

  return (
    <>
      <TopBar
        back="/"
        title={<span className="lecture-topbar-title">{lecture.title}</span>}
        actions={
          <button type="button" className="icon-btn sections-btn" onClick={() => setSheetOpen(true)} aria-label="Jump to section">
            <IconSections />
          </button>
        }
      >
        <motion.div className="read-progress" style={{ scaleX: bar }} aria-hidden />
      </TopBar>

      <div className="lecture-layout">
        <aside className="toc" aria-label="Sections">
          <p className="toc-heading">Sections</p>
          {toc}
          <div className="toc-end">{endLinks}</div>
        </aside>

        <main id="main" className="page page-lecture">
          <header className="lecture-head">
            <p className="kicker">
              Lecture {lecture.number} · {lecture.slideCount} slides · {lecture.lecturer}
            </p>
            <h1>{lecture.title}</h1>
            <p className="lecture-head-sub">{lecture.subtitle}</p>
            <div className="lecture-head-row">
              <ProgressRing value={qs.length ? right / qs.length : 0} size={48} />
              <p>
                <b>{right}</b> of {qs.length} questions right
              </p>
            </div>
            <p className="hy-legend">
              <mark className="hy">Highlighted</mark> = red or bold on the slides. Learn these first.
            </p>
            <nav className="lecture-quicklinks" aria-label="Review tools">
              {endLinks}
            </nav>
          </header>

          {lecture.sections.map((s, i) => (
            <SectionView key={s.id} section={s} index={i} />
          ))}

          <section className="after" aria-labelledby="after-h">
            <h2 id="after-h">Finished reading? Test the whole lecture</h2>
            <ol className="after-list">
              <li>
                <Link to={`/l/${lecture.id}/map`} className="after-row after-map">
                  <span className="after-text">
                    <b>Mind map</b>
                    <span>The whole lecture as one tree. Close the branches and recall what's under each.</span>
                  </span>
                  <IconArrow />
                </Link>
              </li>
              <li>
                <Link to={`/l/${lecture.id}/quiz`} className="after-row after-quiz">
                  <span className="after-text">
                    <b>Full lecture quiz</b>
                    <span>
                      All {qs.length} questions, shuffled. Retry only the wrong ones.
                      {progress.quizBest[lecture.id] !== undefined && ` Best: ${Math.round(progress.quizBest[lecture.id] * 100)}%.`}
                    </span>
                  </span>
                  <IconArrow />
                </Link>
              </li>
              <li>
                <Link to={`/l/${lecture.id}/cards`} className="after-row after-cards">
                  <span className="after-text">
                    <b>Flashcards</b>
                    <span>{lecture.flashcards.length} cards. Tap to flip, swipe right = got it, left = need review.</span>
                  </span>
                  <IconArrow />
                </Link>
              </li>
              {spots > 0 && (
                <li>
                  <Link to={`/l/${lecture.id}/spot`} className="after-row after-spot">
                    <span className="after-text">
                      <b>Spot it</b>
                      <span>{spots} slide pictures to identify, like the practical exam.</span>
                    </span>
                    <IconArrow />
                  </Link>
                </li>
              )}
              <li>
                <Link to={`/l/${lecture.id}/sheet`} className="after-row after-sheet">
                  <span className="after-text">
                    <b>Last-minute sheet</b>
                    <span>Every high-yield point on one screen, for the walk into the exam.</span>
                  </span>
                  <IconArrow />
                </Link>
              </li>
            </ol>
            <button type="button" className="link-btn reset-btn" onClick={reset}>
              Reset my progress for this lecture
            </button>
          </section>
        </main>
      </div>

      <Sheet open={sheetOpen} onClose={() => setSheetOpen(false)} title="Jump to section">
        {toc}
        <div className="toc-end">{endLinks}</div>
      </Sheet>
    </>
  );
}
