import { Fragment, type ReactNode } from "react";

/** Renders [[high-yield]] and *emphasis* markup. */
export function Rich({ text }: { text: string }) {
  return <>{parse(text)}</>;
}

function parse(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\[\[(.+?)\]\]|\*(.+?)\*/g;
  let last = 0;
  let k = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(<Fragment key={k++}>{text.slice(last, m.index)}</Fragment>);
    if (m[1] !== undefined)
      out.push(
        <mark className="hy" key={k++}>
          {m[1]}
        </mark>,
      );
    else out.push(<em key={k++}>{m[2]}</em>);
    last = re.lastIndex;
  }
  if (last < text.length) out.push(<Fragment key={k++}>{text.slice(last)}</Fragment>);
  return out;
}

export function plain(text: string): string {
  return text.replace(/\[\[(.+?)\]\]/g, "$1").replace(/\*(.+?)\*/g, "$1");
}
