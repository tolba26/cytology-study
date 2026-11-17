import { motion } from "framer-motion";
import type { Block, TreeNode } from "../content/types";
import { Rich } from "../lib/rich";
import { Diagram } from "./Diagram";
import { Gallery } from "./Gallery";
import { Flow } from "./Flow";

export function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "definition":
      return (
        <div className="block def">
          <div className="def-term">
            <span className="def-word">{block.term}</span>
            {block.aside && <span className="def-aside">{block.aside}</span>}
          </div>
          <p className="def-text">
            <Rich text={block.text} />
          </p>
          {block.ar && (
            <p className="ar-line" lang="ar" dir="rtl">
              {block.ar}
            </p>
          )}
        </div>
      );

    case "chips":
      return (
        <div className="block chips-block">
          {block.title && <p className="block-title">{block.title}</p>}
          <ul className="chips">
            {block.items.map((c, i) => (
              <li key={i} className="chip">
                <span className="chip-label">{c.label}</span>
                {c.note && <span className="chip-note">{c.note}</span>}
              </li>
            ))}
          </ul>
        </div>
      );

    case "table":
      return (
        <div className="block">
          {block.title && <p className="block-title">{block.title}</p>}
          <div className="table-scroll" tabIndex={0} role="region" aria-label={block.title ?? "Table"}>
            <table className={`tbl ${block.columns.length > 2 ? "tbl-wide" : ""} ${block.columns.length > 3 ? "tbl-xwide" : ""}`}>
              <thead>
                <tr>
                  {block.columns.map((c, i) => (
                    <th key={i} scope="col">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((r, i) => (
                  <tr key={i}>
                    {r.map((c, j) =>
                      j === 0 ? (
                        <th key={j} scope="row">
                          <Rich text={c} />
                        </th>
                      ) : (
                        <td key={j}>
                          <Rich text={c} />
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.columns.length > 2 && <p className="scroll-hint">Swipe the table sideways ↔</p>}
        </div>
      );

    case "diagram":
      return <Diagram id={block.diagram} title={block.title} caption={block.caption} />;

    case "number":
      return (
        <div className="block number">
          <p className="number-kicker">Number to remember</p>
          <div className="number-row">
            <span className="number-value">{block.value}</span>
            {block.unit && <span className="number-unit">{block.unit}</span>}
          </div>
          <p className="number-label">{block.label}</p>
          {block.note && (
            <p className="number-note">
              <Rich text={block.note} />
            </p>
          )}
        </div>
      );

    case "proportion":
      return (
        <div className="block proportion">
          <p className="block-title">{block.title}</p>
          <div className="prop-bar" role="img" aria-label={block.parts.map((p) => `${p.label} ${p.value}%`).join(", ")}>
            {block.parts.map((p, i) => (
              <motion.span
                key={p.label}
                className={`prop-seg prop-${i}`}
                style={{ width: `${p.value}%`, transformOrigin: "left center" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.2, 0.7, 0.2, 1] }}
              />
            ))}
          </div>
          <ul className="prop-legend">
            {block.parts.map((p, i) => (
              <li key={p.label}>
                <span className={`prop-dot prop-${i}`} aria-hidden />
                <span className="prop-pct">{p.value}%</span>
                <span>{p.label}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "steps":
      return <Flow title={block.title} items={block.items} />;

    case "tree":
      return (
        <div className="block tree">
          {block.title && <p className="block-title">{block.title}</p>}
          <ul className="tree-root">
            <TreeItem node={block.root} />
          </ul>
        </div>
      );

    case "list":
      return (
        <div className="block numlist">
          {block.title && <p className="block-title">{block.title}</p>}
          <ol>
            {block.items.map((s, i) => (
              <li key={i}>
                <Rich text={s} />
              </li>
            ))}
          </ol>
        </div>
      );

    case "gallery":
      return <Gallery items={block.items} />;

    case "mnemonic":
      return (
        <div className="block mnemonic">
          <p className="mnemonic-kicker">Mnemonic · memory aid, not from the slides</p>
          <p className="mnemonic-phrase">
            {block.phrase.split(" ").map((w, i) => (
              <span key={i}>
                <b>{w[0]}</b>
                {w.slice(1)}{" "}
              </span>
            ))}
          </p>
          <ul className="mnemonic-key">
            {block.key.map((k, i) => (
              <li key={i}>
                <b>{k.letter}</b>
                <span>{k.word}</span>
              </li>
            ))}
          </ul>
        </div>
      );
  }
}

function TreeItem({ node }: { node: TreeNode }) {
  return (
    <li>
      <span className="tree-node">
        <span className="tree-label">{node.label}</span>
        {node.note && <span className="tree-note">{node.note}</span>}
      </span>
      {node.children && (
        <ul>
          {node.children.map((c) => (
            <TreeItem key={c.label} node={c} />
          ))}
        </ul>
      )}
    </li>
  );
}
