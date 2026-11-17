import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const IconLectures = () => (
  <svg {...base}>
    <path d="M4 5.5C4 4.7 4.7 4 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5z" />
    <path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H13v16h5.5c.8 0 1.5-.7 1.5-1.5z" />
  </svg>
);

export const IconQuiz = () => (
  <svg {...base}>
    <rect x="4" y="4" width="16" height="16" rx="2.5" />
    <path d="m8.5 12.2 2.4 2.4 4.8-5.2" />
  </svg>
);

export const IconMistakes = () => (
  <svg {...base}>
    <path d="M6 3.8h12v16.4l-6-3.6-6 3.6z" />
    <path d="m9.8 8.2 4.4 4.4M14.2 8.2l-4.4 4.4" />
  </svg>
);

export const IconSearch = () => (
  <svg {...base}>
    <circle cx="10.5" cy="10.5" r="6" />
    <path d="m15 15 5 5" />
  </svg>
);

export const IconBack = () => (
  <svg {...base}>
    <path d="M15 5 8 12l7 7" />
  </svg>
);

export const IconSections = () => (
  <svg {...base}>
    <path d="M9 6h11M9 12h11M9 18h11" />
    <circle cx="4.5" cy="6" r="1" fill="currentColor" />
    <circle cx="4.5" cy="12" r="1" fill="currentColor" />
    <circle cx="4.5" cy="18" r="1" fill="currentColor" />
  </svg>
);

export const IconSun = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
  </svg>
);

export const IconMoon = () => (
  <svg {...base}>
    <path d="M19.5 14.5A7.5 7.5 0 0 1 9.5 4.5a7.5 7.5 0 1 0 10 10z" />
  </svg>
);

export const IconClose = () => (
  <svg {...base}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const IconArrow = () => (
  <svg {...base}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconCheck = () => (
  <svg {...base} width={18} height={18}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const IconCross = () => (
  <svg {...base} width={18} height={18}>
    <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />
  </svg>
);
