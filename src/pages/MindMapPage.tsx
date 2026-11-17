import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getLecture } from "../content";
import { MINDMAPS, type MapNode } from "../content/mindmaps";
import { TopBar } from "../components/Layout";
import { NotFound } from "./NotFound";

/** Every node path that has children, e.g. "0", "0.2", "0.2.1". */
function branchPaths(node: MapNode, path = ""): string[] {
  const out: string[] = [];
  node.children?.forEach((c, i) => {
    const p = path ? `${path}.${i}` : String(i);
    if (c.children?.length) out.push(p, ...branchPaths(c, p));
  });
  return out;
}

function countNodes(node: MapNode): number {
  return 1 + (node.children ?? []).reduce((a, c) => a + countNodes(c), 0);
}

export function MindMapPage() {
  const { id } = useParams();
  const lecture = getLecture(id);
  const root = id ? MINDMAPS[id] : undefined;
  if (!lecture || !root) return <NotFound />;
  return <MindMap key={lecture.id} lectureId={lecture.id} title={lecture.title} root={root} />;
}

function MindMap({ lectureId, title, root }: { lectureId: string; title: string; root: MapNode }) {
  const all = useMemo(() => branchPaths(root), [root]);
  const [open, setOpen] = useState<Set<string>>(() => new Set(all));
  const total = useMemo(() => countNodes(root) - 1, [root]);

  const toggle = (p: string) =>
    setOpen((s) => {
      const n = new Set(s);
      if (n.has(p)) {
        // closing a branch also closes everything under it
        for (const q of n) if (q === p || q.startsWith(p + ".")) n.delete(q);
      } else n.add(p);
      return n;
    });

  return (
    <>
      <TopBar back={`/l/${lectureId}`} title={<span className="lecture-topbar-title">{title} · Mind map</span>} />
      <main id="main" className="page page-map">
        <header className="map-head">
          <p className="kicker">Mind map · {total} ideas</p>
          <h1>{root.label}</h1>
          {root.note && <p className="lecture-head-sub">{root.note}</p>}
          <div className="map-controls">
            <button type="button" className="btn btn-line" onClick={() => setOpen(new Set(all))}>
              Open all
            </button>
            <button type="button" className="btn btn-solid" onClick={() => setOpen(new Set())}>
              Close all &amp; test me
            </button>
          </div>
          <p className="map-hint">
            Close all, say out loud what's under each branch, then tap it to check.
          </p>
        </header>

        <ol className="map-branches">
          {root.children?.map((b, i) => (
            <li key={i} className={`map-branch b${i % 6}`}>
              <MapItem node={b} path={String(i)} open={open} toggle={toggle} depth={0} />
            </li>
          ))}
        </ol>

        <p className="map-foot">
          <Link to={`/l/${lectureId}`}>Back to the lecture</Link> · <Link to={`/l/${lectureId}/sheet`}>Last-minute sheet</Link>
        </p>
      </main>
    </>
  );
}

function MapItem({ node, path, open, toggle, depth }: { node: MapNode; path: string; open: Set<string>; toggle: (p: string) => void; depth: number }) {
  const has = !!node.children?.length;
  const isOpen = has && open.has(path);
  const label = (
    <>
      <span className="map-label">{node.label}</span>
      {node.note && <span className="map-note">{node.note}</span>}
    </>
  );
  return (
    <>
      {has ? (
        <button type="button" className={`map-node d${Math.min(depth, 3)} ${isOpen ? "open" : ""}`} onClick={() => toggle(path)} aria-expanded={isOpen}>
          <span className="map-text">{label}</span>
          <span className="map-count">{isOpen ? "−" : `+${node.children!.length}`}</span>
        </button>
      ) : (
        <div className={`map-node leaf d${Math.min(depth, 3)}`}>
          <span className="map-text">{label}</span>
        </div>
      )}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            className="map-children"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
          >
            {node.children!.map((c, i) => (
              <li key={i}>
                <MapItem node={c} path={`${path}.${i}`} open={open} toggle={toggle} depth={depth + 1} />
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}
