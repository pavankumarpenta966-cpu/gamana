import "./app.css";
import { Routes, Route } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import HomePage from "./sections/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import VisionPage from "./pages/VisionPage";
import ContactUsPage from "./pages/ContactUsPage";
import NotFound from "./pages/NotFound";
import TargetAreaPage from "./pages/TargetAreaPage";
import PhilosophyPage from "./pages/PhilosophyPage";
import GovernancePage from "./pages/GovernancePage";
import ProgramsActivityPage from "./pages/ProgramsActivityPage";

function App() {
  return (
    <HeroUIProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/vision&mission" element={<VisionPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/targetArea" element={<TargetAreaPage />} />
        <Route path="/philosophy" element={<PhilosophyPage />} />
        <Route path="/governance" element={<GovernancePage />} />
        <Route path="/programs&activity" element={<ProgramsActivityPage />} />
        <Route path="/ourApproach" element={<ContactUsPage />} />
      </Routes>
    </HeroUIProvider>
  );
}

export default App;
