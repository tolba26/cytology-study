/** Lenient matching for "complete the sentence" answers typed on a phone. */
export function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[’'"`.,;:!?()]/g, "")
    .replace(/[-–—_]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function distance(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const d: number[][] = Array.from({ length: m + 1 }, (_, i) => {
    const row = new Array<number>(n + 1).fill(0);
    row[0] = i;
    return row;
  });
  for (let j = 1; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[m][n];
}

export function matches(input: string, accepted: string[]): boolean {
  const got = normalize(input);
  if (!got) return false;
  return accepted.some((a) => {
    const want = normalize(a);
    if (got === want || got.replace(/ /g, "") === want.replace(/ /g, "")) return true;
    // allow small typos on longer words, never on short ones like "60" or "F1"
    const tolerance = want.length >= 8 ? 2 : want.length >= 5 ? 1 : 0;
    return distance(got, want) <= tolerance;
  });
}

export function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
