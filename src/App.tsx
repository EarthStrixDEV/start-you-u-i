import { Routes, Route } from "react-router-dom";
import ClayShell from "./layouts/ClayShell";
import Home from "./pages/Home";
import About from "./pages/About";
import TexturePage from "./pages/TexturePage";
import FlatMinimalPage from "./pages/FlatMinimalPage";
import RetroPage from "./pages/RetroPage";
import DarkMoodyPage from "./pages/DarkMoodyPage";
import PlayfulOrganicPage from "./pages/PlayfulOrganicPage";
import CorporateCleanPage from "./pages/CorporateCleanPage";
import LayoutKeywordsPage from "./pages/LayoutKeywordsPage";
import VisualEffectPage from "./pages/VisualEffectPage";
import UxUiKeywordPage from "./pages/UxUiKeywordPage";
import ComponentPage from "./pages/ComponentPage";
import BlogIndex from "./pages/BlogIndex";
import BlogLevelPage from "./pages/BlogLevelPage";
import LegalPage from "./pages/LegalPage";

function App() {
  return (
    <Routes>
      <Route element={<ClayShell />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="texture" element={<TexturePage />} />
        <Route path="flat-minimal" element={<FlatMinimalPage />} />
        <Route path="retro" element={<RetroPage />} />
        <Route path="dark-moody" element={<DarkMoodyPage />} />
        <Route path="playful-organic" element={<PlayfulOrganicPage />} />
        <Route path="corporate-clean" element={<CorporateCleanPage />} />
        <Route path="layout-keywords" element={<LayoutKeywordsPage />} />
        <Route path="visual-effect" element={<VisualEffectPage />} />
        <Route path="ux-ui-keyword" element={<UxUiKeywordPage />} />
        <Route path="component" element={<ComponentPage />} />
        <Route path="privacy" element={<LegalPage document="privacy" />} />
        <Route path="terms" element={<LegalPage document="terms" />} />
        <Route path="blog">
          <Route index element={<BlogIndex />} />
          <Route path=":level" element={<BlogLevelPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
