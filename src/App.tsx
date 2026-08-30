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
      </Route>
    </Routes>
  );
}

export default App;
