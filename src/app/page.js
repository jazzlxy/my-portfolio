import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="main-page">
      <Navbar />
      <div className="content-box">
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
      </div>
    </main>
  );
}
