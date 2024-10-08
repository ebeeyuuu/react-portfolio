import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Impact = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="h-[80vh] w-full relative justify-center items-center flex dark-wave-clip mt-[400px]">
      <div className="flex justify-center items-center">
        <div className="flex flex-col">
          <div className="text-5xl font-bold ml-auto mb-[30px] max-md:text-center max-md:ml-0" data-aos="fade-up" data-aos-delay="300">
            Impact
          </div>
          <div className="text-base font-bold ml-auto mb-[30px] max-md:text-center max-md:ml-0 font-mono mt-[-10px]" data-aos="fade-up" data-aos-delay="400">
            Across all of the featured projects
          </div>
          <div className="flex flex-row gap-x-5 max-md:flex-col max-md:gap-y-5 max-md:items-center">
            <div className="w-[calc(50vw-10rem)] min-w-[290px] max-w-[300px] h-[150px] bg-[#020202]/80 rounded-[10px] hover:bg-[#020202] hover:shadow-2xl smooth-animation" data-aos="fade-up" data-aos-delay="500">
              <div className="text-sm font-semibold mt-[30px] ml-[30px] font-mono">
                Total unique visitors
              </div>
              <div className="text-4xl font-bold mt-[20px] ml-[30px] w-full max-md:text-3xl">
                2,000,000+
              </div>
            </div>
            <div className="w-[calc(50vw-10rem)] min-w-[290px] max-w-[300px] h-[150px] bg-[#020202]/80 rounded-[10px] hover:bg-[#020202] hover:shadow-2xl smooth-animation" data-aos="fade-up" data-aos-delay="500">
              <div className="text-sm font-semibold mt-[30px] ml-[30px] font-mono">
                Lifetime visits
              </div>
              <div className="text-4xl font-bold mt-[20px] ml-[30px] w-full max-md:text-3xl">
                10,000,000+
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
