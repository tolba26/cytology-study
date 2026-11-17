import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Rich } from "../lib/rich";

/** A process drawn as boxes joined by arrows. "Test me" hides the steps; reveal them one by one. */
export function Flow({ title, items }: { title: string; items: string[] }) {
  const [shown, setShown] = useState(items.length);
  const testing = shown < items.length;

  return (
    <div className="block flow">
      <p className="block-title">{title}</p>
      <ol className="flow-list">
        {items.map((s, i) => {
          const visible = i < shown;
          return (
            <li key={i} className="flow-step">
              {i > 0 && (
                <svg className={`flow-arrow ${visible ? "" : "dim"}`} viewBox="0 0 24 30" aria-hidden>
                  <path d="M12 2v22M5 17l7 8 7-8" />
                </svg>
              )}
              <div className={`flow-box ${visible ? "" : "hidden"}`}>
                <span className="flow-num">{i + 1}</span>
                <AnimatePresence mode="wait" initial={false}>
                  {visible ? (
                    <motion.span key="t" className="flow-text" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }}>
                      <Rich text={s} />
                    </motion.span>
                  ) : (
                    <motion.span key="q" className="flow-text flow-q" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      What comes next?
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </li>
          );
        })}
      </ol>
      <div className="diagram-controls">
        <span className="diagram-count">
          {Math.min(shown, items.length)}/{items.length} steps
        </span>
        {testing ? (
          <>
            <button type="button" className="btn btn-solid" onClick={() => setShown((s) => s + 1)}>
              Next step
            </button>
            <button type="button" className="btn btn-line" onClick={() => setShown(items.length)}>
              Show all
            </button>
          </>
        ) : (
          <button type="button" className="btn btn-line" onClick={() => setShown(1)}>
            Hide steps &amp; test me
          </button>
        )}
      </div>
    </div>
  );
}
