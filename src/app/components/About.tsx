"use client"
import React from 'react'
import WaveCard from './About/WaveCard'

const About = () => {
  return (
    <WaveCard>
      <div className="text-4xl font-semibold flex justify-center mt-16">About Me</div>
      <div className="ml-10">
        {/* Experience Section */}
        <div className="flex flex-row mt-[-10px] max-[1022px]:flex-col max-[1000px]:items-center">
          <div className="font-semibold text-2xl ml-12 max-[1000px]:ml-[-10px] max-[1000px]:justify-center max-sm:ml-[-40px]">Experience:</div>
          <div className="flex ml-auto mr-10 mt-1 text-balance w-[450px] font-mono max-[1000px]:mt-5 max-[1000px]:ml-0 max-[1000px]:items-center max-[1000px]:text-center max-[860px]:w-[380px] max-[800px]:w-[300px]">
            With three years of experience in Python, HTML, CSS, JavaScript, TypeScript, React, and Next.js, I am a frontend developer and co-founder of Me2. I create engaging applications and websites, combining creativity with technical skill. My background in game development and web design allows me to innovate effectively, delivering robust solutions that resonate with users and push the boundaries of web development.
          </div>
        </div>

        {/* Education Section */}
        <div className="flex flex-row mt-10 max-[1022px]:flex-col max-[1000px]:items-center">
          <div className="font-semibold text-2xl ml-12 max-[1000px]:ml-[-10px] max-[1000px]:justify-center max-sm:ml-[-40px]">Education:</div>
          <div className="flex ml-auto mr-10 mt-1 text-balance w-[450px] font-mono max-[1000px]:mt-5 max-[1000px]:ml-0 max-[1000px]:items-center max-[1000px]:text-center max-[860px]:w-[380px] max-[800px]:w-[300px]">
            I spent a decade at Surabaya European School, benefiting from its vibrant, inclusive environment that values academic excellence and cultural diversity. Passionate educators foster a love for learning through engaging lessons, with a curriculum integrating disciplines from math and science to arts and languages. Extracurricular activities offer opportunities in sports, music, and community service. The school&apos;s commitment to holistic development nurtures critical thinking, creativity, and global awareness, preparing us for academic success and the dynamic world ahead.
          </div>
        </div>

        {/* Life Story Section */}
        <div className="flex flex-row mt-10 max-[1022px]:flex-col max-[1000px]:items-center">
          <div className="font-semibold text-2xl ml-12 max-[1000px]:ml-[-10px] max-[1000px]:justify-center max-sm:ml-[-40px]">Life Story:</div>
          <div className="flex ml-auto mr-10 mt-1 text-balance w-[450px] font-mono max-[1000px]:mt-5 max-[1000px]:ml-0 max-[1000px]:items-center max-[1000px]:text-center max-[860px]:w-[380px] max-[800px]:w-[300px]">
            My coding journey began with skepticism but transformed into a passion through experimenting with Scratch. Transitioning to Python deepened my interest, and the pandemic led me to learn Java, C, C++, C#, JavaScript, Go, and PHP. I then focused on Python, TypeScript, HTML, CSS, React, Next.js, and Figma, aiming to excel as a frontend developer or software engineer at FAANG companies. As the frontend developer and co-founder of Me2, I blend creativity and technical expertise to craft innovative digital experiences for users globally.
          </div>
        </div>
      </div>
    </WaveCard>    
  )
}

export default About
