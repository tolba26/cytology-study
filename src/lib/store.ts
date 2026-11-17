import { useSyncExternalStore } from "react";

/** Everything the app remembers, kept in localStorage. */
export interface Progress {
  /** last result per question id */
  results: Record<string, "right" | "wrong">;
  /** question id → time it was last answered wrong; removed once answered right */
  mistakes: Record<string, number>;
  /** flashcard key (lectureId:cardId) → last swipe */
  cards: Record<string, "got" | "review">;
  /** best full-quiz score per lecture, 0..1 */
  quizBest: Record<string, number>;
}

const KEY = "cyto-progress-v1";
const empty: Progress = { results: {}, mistakes: {}, cards: {}, quizBest: {} };

function load(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty;
    const p = JSON.parse(raw) as Partial<Progress>;
    return { ...empty, ...p };
  } catch {
    return empty;
  }
}

let state: Progress = load();
const listeners = new Set<() => void>();

function set(next: Progress) {
  state = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* private mode or quota: keep it in memory only */
  }
  listeners.forEach((l) => l());
}

export function recordAnswer(qid: string, correct: boolean) {
  const mistakes = { ...state.mistakes };
  if (correct) delete mistakes[qid];
  else mistakes[qid] = Date.now();
  set({ ...state, results: { ...state.results, [qid]: correct ? "right" : "wrong" }, mistakes });
}

export function recordCard(cardKey: string, verdict: "got" | "review") {
  set({ ...state, cards: { ...state.cards, [cardKey]: verdict } });
}

export function recordQuiz(lectureId: string, score: number) {
  const prev = state.quizBest[lectureId] ?? 0;
  if (score > prev) set({ ...state, quizBest: { ...state.quizBest, [lectureId]: score } });
}

export function resetLecture(qids: string[], cardKeys: string[], lectureId: string) {
  const results = { ...state.results };
  const mistakes = { ...state.mistakes };
  const cards = { ...state.cards };
  const quizBest = { ...state.quizBest };
  qids.forEach((q) => {
    delete results[q];
    delete mistakes[q];
  });
  cardKeys.forEach((c) => delete cards[c]);
  delete quizBest[lectureId];
  set({ results, mistakes, cards, quizBest });
}

function subscribe(l: () => void) {
  listeners.add(l);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      state = load();
      l();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(l);
    window.removeEventListener("storage", onStorage);
  };
}

export function useProgress(): Progress {
  return useSyncExternalStore(subscribe, () => state, () => state);
}
