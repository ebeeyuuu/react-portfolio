"use client";
import { useEffect } from "react";
import WaveCard from "./About/WaveCard";

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="about">
      <WaveCard>
        <div
          className="text-4xl font-semibold flex justify-center mt-16"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          About Me
        </div>
        <div>
          <div className="flex gap-x-10 justify-center flex-row max-[1022px]:flex-col max-[1000px]:items-center">
            <div
              className="font-semibold text-2xl flex justify-center"
              data-aos-delay="400"
              data-aos="fade-up"
            >
              Experience:
            </div>
            <div
              className="flex mt-1 text-balance w-[450px] font-mono max-[1000px]:mt-5 max-[1000px]:items-center max-[1000px]:text-center max-[860px]:w-[380px] max-[800px]:w-[300px]"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              With three years of experience in Python, HTML, CSS, JavaScript,
              TypeScript, React, and Next.js, I am a frontend developer and
              co-founder of Me2. I create engaging applications and websites,
              combining creativity with technical skill. My background in game
              development and web design allows me to innovate effectively,
              delivering robust solutions that resonate with users and push the
              boundaries of web development.
            </div>
          </div>

          <div className="flex gap-x-10 justify-center flex-row mt-10 max-[1022px]:flex-col max-[1000px]:items-center">
            <div
              className="font-semibold text-2xl justify-center "
              data-aos="fade-up"
              data-aos-delay="450"
            >
              Education:
            </div>
            <div
              className="flex mt-1 text-balance w-[450px] font-mono max-[1000px]:mt-5  max-[1000px]:items-center max-[1000px]:text-center max-[860px]:w-[380px] max-[800px]:w-[300px]"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              I spent a decade at Surabaya European School, benefiting from its
              vibrant, inclusive environment that values academic excellence and
              cultural diversity. Passionate educators foster a love for
              learning through engaging lessons, with a curriculum integrating
              disciplines from math and science to arts and languages.
              Extracurricular activities offer opportunities in sports, music,
              and community service. The school&apos;s commitment to holistic
              development nurtures critical thinking, creativity, and global
              awareness, preparing us for academic success and the dynamic world
              ahead.
            </div>
          </div>

          {/* Life Story Section */}
          <div className="flex gap-x-10 justify-center flex-row mt-10 max-[1022px]:flex-col max-[1000px]:items-center">
            <div
              className="font-semibold text-2xl   max-[1000px]:justify-center "
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Life Story:
            </div>
            <div
              className="flex  mt-1 text-balance w-[450px] font-mono max-[1000px]:mt-5  max-[1000px]:items-center max-[1000px]:text-center max-[860px]:w-[380px] max-[800px]:w-[300px]"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              My coding journey began with skepticism but transformed into a
              passion through experimenting with Scratch. Transitioning to
              Python deepened my interest, and the pandemic led me to learn
              Java, C, C++, C#, JavaScript, Go, and PHP. I then focused on
              Python, TypeScript, HTML, CSS, React, Next.js, and Figma, aiming
              to excel as a frontend developer or software engineer at FAANG
              companies. As the frontend developer and co-founder of Me2, I
              blend creativity and technical expertise to craft innovative
              digital experiences for users globally.
            </div>
          </div>
        </div>
      </WaveCard>
    </div>
  );
};

export default About;
