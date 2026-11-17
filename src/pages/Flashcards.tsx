import { AnimatePresence, motion, useMotionValue, useTransform, type PanInfo } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getLecture } from "../content";
import type { Lecture } from "../content/types";
import { TopBar } from "../components/Layout";
import { shuffle } from "../lib/answer";
import { recordCard, useProgress } from "../lib/store";
import { NotFound } from "./NotFound";

export function FlashcardsPage() {
  const { id } = useParams();
  const lecture = getLecture(id);
  if (!lecture) return <NotFound />;
  return <Deck key={lecture.id} lecture={lecture} />;
}

const SWIPE = 110;

function Deck({ lecture }: { lecture: Lecture }) {
  const progress = useProgress();
  const key = (cid: string) => `${lecture.id}:${cid}`;
  const reviewIds = useMemo(() => lecture.flashcards.filter((c) => progress.cards[key(c.id)] === "review").map((c) => c.id), [lecture, progress.cards]); // eslint-disable-line

  const [deck, setDeck] = useState<string[]>(() => lecture.flashcards.map((c) => c.id));
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [dir, setDir] = useState(0);
  const [session, setSession] = useState<Record<string, "got" | "review">>({});

  const card = lecture.flashcards.find((c) => c.id === deck[pos]);
  const done = pos >= deck.length;
  const got = Object.values(session).filter((v) => v === "got").length;
  const toReview = deck.filter((c) => session[c] === "review");

  const verdict = (v: "got" | "review") => {
    if (!card) return;
    recordCard(key(card.id), v);
    setSession((s) => ({ ...s, [card.id]: v }));
    setDir(v === "got" ? 1 : -1);
    setFlipped(false);
    setPos((p) => p + 1);
  };

  const restart = (ids: string[], mix = true) => {
    setDeck(mix ? shuffle(ids) : ids);
    setPos(0);
    setFlipped(false);
    setSession({});
    setDir(0);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (done) return;
      if (e.key === "ArrowRight") verdict("got");
      else if (e.key === "ArrowLeft") verdict("review");
      else if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setFlipped((f) => !f);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <>
      <TopBar back={`/l/${lecture.id}`} title={<span className="lecture-topbar-title">{lecture.title} · Flashcards</span>}>
        <motion.div className="read-progress" animate={{ scaleX: deck.length ? Math.min(pos, deck.length) / deck.length : 0 }} transition={{ duration: 0.3 }} aria-hidden />
      </TopBar>
      <main id="main" className="page page-narrow page-cards">
        <div className="deck-modes" role="group" aria-label="Which cards">
          <button type="button" className={`seg ${deck.length === lecture.flashcards.length ? "on" : ""}`} onClick={() => restart(lecture.flashcards.map((c) => c.id))}>
            All {lecture.flashcards.length}
          </button>
          <button type="button" className={`seg ${deck.length !== lecture.flashcards.length ? "on" : ""}`} disabled={reviewIds.length === 0} onClick={() => restart(reviewIds)}>
            Need review ({reviewIds.length})
          </button>
        </div>

        {!done && card && (
          <>
            <p className="deck-count">
              Card {pos + 1} of {deck.length}
            </p>
            <div className="deck-stage">
              <AnimatePresence custom={dir} initial={false}>
                <SwipeCard key={`${card.id}-${pos}`} front={card.front} back={card.back} flipped={flipped} onFlip={() => setFlipped((f) => !f)} onVerdict={verdict} dir={dir} />
              </AnimatePresence>
            </div>
            <div className="deck-buttons">
              <button type="button" className="btn btn-bad" onClick={() => verdict("review")}>
                ← Need review
              </button>
              <button type="button" className="btn btn-line" onClick={() => setFlipped((f) => !f)}>
                Flip
              </button>
              <button type="button" className="btn btn-ok" onClick={() => verdict("got")}>
                Got it →
              </button>
            </div>
          </>
        )}

        {done && (
          <motion.div className="deck-done" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <p className="kicker">Deck finished</p>
            <p className="score">
              <b>{got}</b>
              <span>/ {deck.length} got it</span>
            </p>
            <div className="quiz-actions">
              {toReview.length > 0 && (
                <button type="button" className="btn btn-solid" onClick={() => restart(toReview)}>
                  Go again with the {toReview.length} to review
                </button>
              )}
              <button type="button" className="btn btn-line" onClick={() => restart(lecture.flashcards.map((c) => c.id))}>
                Shuffle all {lecture.flashcards.length}
              </button>
              <Link to={`/l/${lecture.id}/sheet`} className="btn btn-line">
                Last-minute sheet
              </Link>
            </div>
          </motion.div>
        )}
      </main>
    </>
  );
}

const variants = {
  enter: { opacity: 0, y: 16, scale: 0.97 },
  center: { opacity: 1, y: 0, scale: 1, x: 0 },
  exit: (d: number) => ({ x: d * 420, rotate: d * 10, opacity: 0, transition: { duration: 0.28 } }),
};

function SwipeCard({ front, back, flipped, onFlip, onVerdict, dir }: { front: string; back: string; flipped: boolean; onFlip: () => void; onVerdict: (v: "got" | "review") => void; dir: number }) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-220, 220], [-9, 9]);
  const gotOpacity = useTransform(x, [20, SWIPE], [0, 1]);
  const reviewOpacity = useTransform(x, [-SWIPE, -20], [1, 0]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x > SWIPE || info.velocity.x > 600) onVerdict("got");
    else if (info.offset.x < -SWIPE || info.velocity.x < -600) onVerdict("review");
  };

  return (
    <motion.div
      className="swipe"
      style={{ x, rotate }}
      custom={dir}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      drag="x"
      dragSnapToOrigin
      dragElastic={0.7}
      onDragEnd={onDragEnd}
      onTap={onFlip}
      role="button"
      tabIndex={0}
      aria-label={flipped ? `Answer: ${back}. Tap to flip back.` : `${front}. Tap to see the answer.`}
    >
      <motion.span className="swipe-tag tag-got" style={{ opacity: gotOpacity }} aria-hidden>
        Got it
      </motion.span>
      <motion.span className="swipe-tag tag-review" style={{ opacity: reviewOpacity }} aria-hidden>
        Need review
      </motion.span>
      <motion.div className="flip" animate={{ rotateY: flipped ? 180 : 0 }} transition={{ duration: 0.45, ease: [0.3, 0.7, 0.2, 1] }}>
        <div className="face face-front">
          <span className="face-kicker">Term</span>
          <p className="face-front-text">{front}</p>
          <span className="face-hint">Tap to flip</span>
        </div>
        <div className="face face-back">
          <span className="face-kicker">{front}</span>
          <p className="face-back-text">{back}</p>
          <span className="face-hint">Swipe → got it · ← need review</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
