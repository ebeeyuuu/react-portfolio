import HeroCloudBackground from "./components/Hero/HeroCloudBackground";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ImpactBackground from "./components/Impact/ImpactBackground";
import Impact from "./components/Impact";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <HeroCloudBackground />
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <ImpactBackground />
      <Impact />
      <Contact />
    </div>
  );
}
