import { useMemo, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { TopBar } from "../components/Layout";
import { search } from "../lib/search";

function highlight(text: string, query: string): ReactNode {
  const words = query.trim().split(/\s+/).filter(Boolean).map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  if (!words.length) return text;
  const re = new RegExp(`(${words.join("|")})`, "gi");
  return text.split(re).map((part, i) => (i % 2 === 1 ? <mark key={i} className="search-hit">{part}</mark> : part));
}

export function SearchPage() {
  const [q, setQ] = useState("");
  const hits = useMemo(() => search(q), [q]);

  return (
    <>
      <TopBar />
      <main id="main" className="page page-narrow">
        <h1 className="page-title">Search</h1>
        <input
          className="search-input"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="e.g. glycocalyx, 60%, Janus"
          autoFocus
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="search"
          aria-label="Search all lectures"
        />
        {q.trim() && (
          <p className="muted" role="status">
            {hits.length === 0 ? "No matches." : `${hits.length}${hits.length === 60 ? "+" : ""} matches`}
          </p>
        )}
        <ul className="search-results">
          {hits.map((h, i) => (
            <li key={i}>
              <Link to={h.kind === "Flashcard" ? `/l/${h.lectureId}/cards` : `/l/${h.lectureId}?s=${h.sectionId}`} className="search-row">
                <span className="search-meta">
                  {h.lectureTitle} · {h.sectionTitle} · {h.kind}
                </span>
                <span className="search-text" {...(h.kind === "Arabic note" ? { lang: "ar", dir: "rtl" } : {})}>
                  {highlight(h.text, q)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
