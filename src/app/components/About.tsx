"use client";
import { useEffect } from "react";
import WaveCard from "./About/WaveCard";

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <div id="about">About</div>;
};

export default About;
