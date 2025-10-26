import { useState } from "react";
import Navigation from "@/components/Navigation";
import HomePage from "@/components/sections/HomePage";
import AboutMeSection from "@/components/sections/AboutMeSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import CybersecuritySection from "@/components/sections/CybersecuritySection";
import NoCodeSection from "@/components/sections/NoCodeSection";
import AISection from "@/components/sections/AISection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  const [currentSection, setCurrentSection] = useState<string>("home");

  const renderSection = () => {
    switch (currentSection) {
      case "about":
        return <AboutMeSection onClose={() => setCurrentSection("home")} />;
      case "experience":
        return <ExperienceSection onClose={() => setCurrentSection("home")} />;
      case "cybersecurity":
        return <CybersecuritySection onClose={() => setCurrentSection("home")} />;
      case "nocode":
        return <NoCodeSection onClose={() => setCurrentSection("home")} />;
      case "ai":
        return <AISection onClose={() => setCurrentSection("home")} />;
      case "projects":
        return <ProjectsSection onClose={() => setCurrentSection("home")} />;
      case "contact":
        return <ContactSection onClose={() => setCurrentSection("home")} />;
      default:
        return <HomePage onSectionSelect={setCurrentSection} />;
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-background">
      <Navigation currentSection={currentSection} onNavigate={setCurrentSection} />
      {renderSection()}
    </div>
  );
}

