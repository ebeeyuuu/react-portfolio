"use client"
import { useState, useEffect } from "react"
import Loader from "./components/Loader"
import HeroCloudBackground from "./components/Hero/HeroCloudBackground";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Impact from "./components/Impact";
import Contact from "./components/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 2500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-[#020202]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="scroll-smooth">
      <HeroCloudBackground />
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Impact />
      <Contact />
    </div>
  );
}
