import { AnimatePresence, motion, useDragControls } from "framer-motion";
import { useEffect, type ReactNode } from "react";
import { NavLink, Link, Outlet, useLocation } from "react-router-dom";
import { COURSE_NAME } from "../content";
import { useProgress } from "../lib/store";
import { useTheme } from "../lib/theme";
import { useArabic } from "../lib/arabic";
import { IconBack, IconClose, IconLectures, IconMistakes, IconMoon, IconQuiz, IconSearch, IconSun } from "./Icons";

const NAV = [
  { to: "/", label: "Lectures", icon: <IconLectures />, end: true },
  { to: "/quiz", label: "Quiz", icon: <IconQuiz /> },
  { to: "/mistakes", label: "Mistakes", icon: <IconMistakes /> },
  { to: "/search", label: "Search", icon: <IconSearch /> },
];

export function AppShell() {
  const { pathname } = useLocation();
  const progress = useProgress();
  const mistakes = Object.keys(progress.mistakes).length;

  // new page → top (lecture page handles its own ?s= scrolling)
  useEffect(() => {
    if (!new URLSearchParams(window.location.hash.split("?")[1] ?? "").get("s")) window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="shell">
      <a href="#main" className="skip">Skip to content</a>
      <Outlet />
      <nav className="bottom-nav" aria-label="Main">
        {NAV.map((n) => (
          <NavLink key={n.to} to={n.to} end={n.end} className={({ isActive }) => `bn-item ${isActive ? "active" : ""}`}>
            <span className="bn-icon">
              {n.icon}
              {n.to === "/mistakes" && mistakes > 0 && <span className="bn-badge">{mistakes > 99 ? "99+" : mistakes}</span>}
            </span>
            <span className="bn-label">{n.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

/** Page header. On desktop it also carries the main navigation. */
export function TopBar({ title, back, actions, children, brand = true }: { title?: ReactNode; back?: string; actions?: ReactNode; children?: ReactNode; brand?: boolean }) {
  const [theme, toggle] = useTheme();
  const [arabic, toggleArabic] = useArabic();
  return (
    <header className="topbar">
      <div className="topbar-inner">
        {back ? (
          <Link to={back} className="icon-btn" aria-label="Back">
            <IconBack />
          </Link>
        ) : brand ? (
          <Link to="/" className="brand">
            {COURSE_NAME}
          </Link>
        ) : (
          <span className="brand-spacer" />
        )}
        {title && <div className="topbar-title">{title}</div>}
        <nav className="top-nav" aria-label="Main">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.end} className={({ isActive }) => (isActive ? "active" : "")}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="topbar-actions">
          {actions}
          <button
            type="button"
            className={`icon-btn ar-toggle ${arabic ? "on" : ""}`}
            onClick={toggleArabic}
            aria-pressed={arabic}
            aria-label={arabic ? "Hide Arabic explanations" : "Show Arabic explanations"}
            title={arabic ? "إخفاء الشرح العربي" : "إظهار الشرح العربي"}
          >
            <span lang="ar">ع</span>
          </button>
          <button type="button" className="icon-btn" onClick={toggle} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
            {theme === "dark" ? <IconSun /> : <IconMoon />}
          </button>
        </div>
      </div>
      {children}
    </header>
  );
}

/** Bottom sheet on phones, centered panel on desktop. */
export function Sheet({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  const drag = useDragControls();
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="sheet-wrap">
          <motion.div className="sheet-backdrop" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} />
          <motion.div
            className="sheet"
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 38 }}
            drag="y"
            dragControls={drag}
            dragListener={false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.6 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 90 || info.velocity.y > 500) onClose();
            }}
          >
            <div className="sheet-handle" onPointerDown={(e) => drag.start(e)}>
              <div className="sheet-grip" aria-hidden />
            </div>
            <div className="sheet-head" onPointerDown={(e) => drag.start(e)}>
              <h2>{title}</h2>
              <button type="button" className="icon-btn" onClick={onClose} aria-label="Close" autoFocus>
                <IconClose />
              </button>
            </div>
            <div className="sheet-body">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
