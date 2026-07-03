import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import CustomCursor from "./components/CustomCursor";
import ResumeButton from "./components/ResumeButton";
import WhatsAppButton from "./components/WhatsAppButton";
import Hero from "./components/hero/Hero";
import HeroStats from "./components/hero/HeroStats";
import ScrollIndicator from "./components/hero/ScrollIndicator";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import SoftSkills from "./components/skills/SoftSkills";
import Experience from "./components/experience/Experience";
import Certifications from "./components/certifications/Certifications";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Loader from "./components/Loader";

function App() {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      className="
      relative
      min-h-screen

      bg-white
      dark:bg-[#030712]

      text-black
      dark:text-white

      overflow-x-hidden

      transition-colors
      duration-500
    "
    >
      <AnimatedBackground />

      <CustomCursor />

      <div className="relative z-10">
        <Navbar />

        <ResumeButton />
        <WhatsAppButton />

        <main className="md:ml-[100px]">
          <Hero />
          <ScrollIndicator />
          <HeroStats />
          <About />
          <Projects />
          <Skills />
          <SoftSkills />
          <Experience />
          <Certifications />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;