import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import MovingGradient from "./Hero/MovingGradient";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex relative items-center justify-center w-full h-[100vh]">
      <div className="w-full h-full absolute -z-10">
        <MovingGradient />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl lg:text-5xl font-semibold">
          Hi. My name is Ean
        </h1>
        <p className="text-sm lg:text-lg">I&apos;m a UI/UX Designer</p>
      </div>
    </div>
  );
};

export default Hero;
