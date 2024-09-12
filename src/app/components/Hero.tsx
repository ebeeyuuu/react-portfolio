import { useEffect } from "react";
import SpinningCube from "./Hero/SpinningCube";
import Button3D from "./Hero/Button3D";
import TechsMarquee from "./Hero/TechsMarquee";

import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="Hero" className="flex justify-center items-center flex-col">
      <div className="flex justify-center items-center w-[calc(100vw-7rem)] h-[500px] rounded-[30px] max-w-[1024px] flex-row gap-x-5 max-md:ml-[-60px] smooth-animation max-[1000px]:flex-col max-[2000px]:ml-[-60px]">
        <div
          className="max-sm:ml-[65px]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <SpinningCube />
        </div>
        <div className="ml-[-30px] max-md:flex max-md:justify-center flex-col max-sm:w-[300px] max-[800px]:ml-[35px] max-[1000px]:ml-[50px]">
          <div
            className="text-xl font-medium max-md:text-base"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <strong>Hi!</strong> My name is
          </div>
          <div
            className="text-5xl font-bold max-md:text-3xl smooth-animation mt-[20px]"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            Ean James Yu
          </div>
          <div
            className="text-xl max-md:text-base mt-[30px] smooth-animation w-[400px] max-[1000px]:w-[350px]"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            and I am a <strong>UI/UX designer</strong> who makes web apps!
          </div>
          <div
            className="flex max-[1000px]:justify-end smooth-animation"
            data-aos="fade-up"
            data-aos-delay="550"
          >
            <Button3D />
          </div>
        </div>
      </div>
      <TechsMarquee />
    </div>
  );
};

export default Hero;
