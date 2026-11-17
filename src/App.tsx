import { MotionConfig } from "framer-motion";
import { HashRouter, Route, Routes } from "react-router-dom";
import { AppShell } from "./components/Layout";
import { FlashcardsPage } from "./pages/Flashcards";
import { Home } from "./pages/Home";
import { LastMinute } from "./pages/LastMinute";
import { LecturePage } from "./pages/LecturePage";
import { Mistakes } from "./pages/Mistakes";
import { NotFound } from "./pages/NotFound";
import { QuizHub } from "./pages/QuizHub";
import { QuizPage } from "./pages/QuizPage";
import { SearchPage } from "./pages/SearchPage";
import { SpotPage } from "./pages/SpotPage";
import { MindMapPage } from "./pages/MindMapPage";

// HashRouter: deep links work on any static host (GitHub Pages, Netlify) with no rewrite rules.
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <HashRouter>
        <Routes>
          <Route element={<AppShell />}>
            <Route index element={<Home />} />
            <Route path="l/:id" element={<LecturePage />} />
            <Route path="l/:id/quiz" element={<QuizPage />} />
            <Route path="l/:id/cards" element={<FlashcardsPage />} />
            <Route path="l/:id/sheet" element={<LastMinute />} />
            <Route path="l/:id/spot" element={<SpotPage />} />
            <Route path="l/:id/map" element={<MindMapPage />} />
            <Route path="quiz" element={<QuizHub />} />
            <Route path="mistakes" element={<Mistakes />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </MotionConfig>
  );
}
