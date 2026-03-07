import FloatingNav from "@/components/FloatingNav";
import AboutSection from "@/components/sections/AboutSection";
import BusinessProjectsSection from "@/components/sections/BusinessProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <main id="main-content">
      <FloatingNav />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="business-projects">
        <BusinessProjectsSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="experience">
        <ExperienceSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
