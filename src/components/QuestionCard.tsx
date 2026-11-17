import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useRef, useState, type FormEvent } from "react";
import type { Question } from "../content/types";
import { matches, shuffle } from "../lib/answer";
import { recordAnswer } from "../lib/store";
import { Lightbox } from "./Gallery";
import { IconCheck, IconCross } from "./Icons";

const TYPE_LABEL: Record<Question["type"], string> = {
  mcq: "MCQ",
  tf: "True or false",
  complete: "Complete",
  reason: "Give reason",
  compare: "Compare",
  spot: "Spot it",
};

interface Props {
  q: Question;
  number?: number;
  shuffleOptions?: boolean;
  onDone?: (correct: boolean) => void;
}

export function QuestionCard({ q, number, shuffleOptions, onDone }: Props) {
  const [result, setResult] = useState<boolean | null>(null);

  const finish = (correct: boolean) => {
    if (result !== null) return;
    setResult(correct);
    recordAnswer(q.id, correct);
    onDone?.(correct);
  };
  // "complete" answers can be overridden to correct after a near-miss typo
  const override = () => {
    setResult(true);
    recordAnswer(q.id, true);
  };

  return (
    <div className={`q q-${q.type}`} data-result={result === null ? undefined : result ? "right" : "wrong"}>
      <div className="q-meta">
        {number !== undefined && <span className="q-num">{String(number).padStart(2, "0")}</span>}
        <span className="q-type">{TYPE_LABEL[q.type]}</span>
      </div>
      {q.type === "mcq" && <Mcq q={q} shuffleOptions={shuffleOptions} done={result !== null} onPick={finish} />}
      {q.type === "tf" && <TrueFalse q={q} done={result !== null} onPick={finish} />}
      {q.type === "complete" && <Complete q={q} result={result} onSubmit={finish} onOverride={override} />}
      {(q.type === "reason" || q.type === "compare" || q.type === "spot") && <SelfCheck q={q} result={result} onGrade={finish} />}
      <AnimatePresence initial={false}>
        {result !== null && (
          <motion.div
            className={`q-feedback ${result ? "ok" : "bad"}`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            role="status"
          >
            <span className="q-verdict">
              {result ? <IconCheck /> : <IconCross />}
              {result ? "Correct" : "Not quite"}
            </span>
            {q.type === "tf" && !q.answer && q.correction && (
              <span className="q-correction">
                <b>Correction:</b> {q.correction}
              </span>
            )}
            <span className="q-explain">{q.explain}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ───────── option button with the right/wrong animation ───────── */

type OptState = "" | "is-correct" | "is-wrong" | "is-dim";

function OptionButton({ state, label, letter, onClick, disabled }: { state: OptState; label: string; letter: string; onClick: () => void; disabled: boolean }) {
  const anim =
    state === "is-wrong"
      ? { x: [0, -7, 7, -5, 5, -2, 0], transition: { duration: 0.42 } }
      : state === "is-correct"
        ? { scale: [1, 1.025, 1], transition: { duration: 0.45 } }
        : {};
  return (
    <motion.button type="button" className={`opt ${state}`} onClick={onClick} disabled={disabled} animate={anim} aria-pressed={state === "is-wrong" || state === "is-correct" ? true : undefined}>
      {state === "is-correct" && (
        <motion.span className="opt-pulse" initial={{ opacity: 0.6, scale: 0.97 }} animate={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.8, ease: "easeOut" }} aria-hidden />
      )}
      <span className="opt-letter" aria-hidden>
        {state === "is-correct" ? <IconCheck /> : state === "is-wrong" ? <IconCross /> : letter}
      </span>
      <span className="opt-text">{label}</span>
    </motion.button>
  );
}

function Mcq({ q, shuffleOptions, done, onPick }: { q: Extract<Question, { type: "mcq" }>; shuffleOptions?: boolean; done: boolean; onPick: (c: boolean) => void }) {
  const order = useMemo(() => {
    const idx = q.options.map((_, i) => i);
    return shuffleOptions ? shuffle(idx) : idx;
  }, [q, shuffleOptions]);
  const [picked, setPicked] = useState<number | null>(null);
  return (
    <>
      <p className="q-prompt">{q.prompt}</p>
      <div className="opts">
        {order.map((oi, pos) => {
          const state: OptState = picked === null ? "" : oi === q.answer ? "is-correct" : oi === picked ? "is-wrong" : "is-dim";
          return (
            <OptionButton
              key={oi}
              state={state}
              letter={"abcd"[pos] ?? String(pos + 1)}
              label={q.options[oi]}
              disabled={done}
              onClick={() => {
                setPicked(oi);
                onPick(oi === q.answer);
              }}
            />
          );
        })}
      </div>
    </>
  );
}

function TrueFalse({ q, done, onPick }: { q: Extract<Question, { type: "tf" }>; done: boolean; onPick: (c: boolean) => void }) {
  const [picked, setPicked] = useState<boolean | null>(null);
  const state = (v: boolean): OptState => (picked === null ? "" : v === q.answer ? "is-correct" : v === picked ? "is-wrong" : "is-dim");
  return (
    <>
      <p className="q-prompt">{q.statement}</p>
      <div className="opts opts-tf">
        {[true, false].map((v) => (
          <OptionButton
            key={String(v)}
            state={state(v)}
            letter={v ? "T" : "F"}
            label={v ? "True" : "False"}
            disabled={done}
            onClick={() => {
              setPicked(v);
              onPick(v === q.answer);
            }}
          />
        ))}
      </div>
    </>
  );
}

function Complete({ q, result, onSubmit, onOverride }: { q: Extract<Question, { type: "complete" }>; result: boolean | null; onSubmit: (c: boolean) => void; onOverride: () => void }) {
  const [value, setValue] = useState("");
  const [shake, setShake] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [before, after] = q.prompt.split("____");
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (result !== null) return;
    if (!value.trim()) {
      inputRef.current?.focus();
      return;
    }
    const ok = matches(value, q.answers);
    if (!ok) setShake((s) => s + 1);
    onSubmit(ok);
  };
  const reveal = () => {
    if (result === null) onSubmit(false);
  };
  return (
    <>
      <p className="q-prompt">
        {before}
        <span className={`blank ${result === null ? "" : result ? "ok" : "bad"}`}>{result === null ? value || " " : q.answers[0]}</span>
        {after}
      </p>
      <motion.form className="complete-form" onSubmit={submit} key={shake} animate={shake ? { x: [0, -7, 7, -5, 5, 0] } : {}} transition={{ duration: 0.4 }}>
        <input
          ref={inputRef}
          className="complete-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type the missing word"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="done"
          disabled={result !== null}
          aria-label="Missing word"
        />
        <button type="submit" className="btn btn-solid" disabled={result !== null}>
          Check
        </button>
      </motion.form>
      {result === null && (
        <button type="button" className="link-btn" onClick={reveal}>
          I don't know, show me
        </button>
      )}
      {result === false && value.trim() && (
        <div className="override">
          <span>
            You wrote <b>{value}</b>. Answer: <b>{q.answers[0]}</b>
          </span>
          <button type="button" className="link-btn" onClick={onOverride}>
            Same thing, count it
          </button>
        </div>
      )}
    </>
  );
}

function SelfCheck({ q, result, onGrade }: { q: Extract<Question, { type: "reason" | "compare" | "spot" }>; result: boolean | null; onGrade: (c: boolean) => void }) {
  const [shown, setShown] = useState(false);
  const [zoom, setZoom] = useState(false);
  return (
    <>
      {q.type === "spot" && (
        <>
          <button type="button" className="spot-figure" onClick={() => setZoom(true)} aria-label="Open the picture full screen">
            <img src={q.figure.src} width={q.figure.w} height={q.figure.h} alt="Picture to identify" loading="lazy" decoding="async" />
            <span className="spot-zoom-hint">Tap to zoom</span>
          </button>
          <Lightbox items={[{ ...q.figure, caption: `Slide ${q.figure.slide}` }]} index={zoom ? 0 : null} onClose={() => setZoom(false)} onIndex={() => undefined} />
        </>
      )}
      <p className="q-prompt">{q.prompt}</p>
      {!shown ? (
        <>
          <p className="q-hint">Say or write your answer first, then check it.</p>
          <button type="button" className="btn btn-line" onClick={() => setShown(true)}>
            Show model answer
          </button>
        </>
      ) : (
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
          {q.type === "reason" || q.type === "spot" ? (
            <p className="model-answer">{q.answer}</p>
          ) : (
            <div className="table-scroll">
              <table className={`tbl ${q.columns.length > 2 ? "tbl-wide" : ""}`}>
                <thead>
                  <tr>{q.columns.map((c, i) => <th key={i}>{c}</th>)}</tr>
                </thead>
                <tbody>
                  {q.rows.map((r, i) => (
                    <tr key={i}>{r.map((c, j) => (j === 0 ? <th key={j} scope="row">{c}</th> : <td key={j}>{c}</td>))}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {result === null && (
            <div className="self-grade">
              <span>Did you have it?</span>
              <button type="button" className="btn btn-ok" onClick={() => onGrade(true)}>
                I had it
              </button>
              <button type="button" className="btn btn-bad" onClick={() => onGrade(false)}>
                I missed it
              </button>
            </div>
          )}
        </motion.div>
      )}
    </>
  );
}
