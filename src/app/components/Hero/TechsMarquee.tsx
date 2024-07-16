import React from 'react'
import Marquee from "react-fast-marquee"
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaFigma } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { SiTypescript } from "react-icons/si"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"


const marqueeItems = [
  { text: 'HTML', icon: <FaHtml5 size={20}/>},
  { text: 'CSS', icon: <FaCss3Alt size={20}/>},
  { text: 'Javascript', icon: <IoLogoJavascript size={20}/>},
  { text: 'Typescript', icon: <SiTypescript size={20}/>},
  { text: 'React', icon: <FaReact size={20}/>},
  { text: 'NextJS', icon: <RiNextjsFill size={20}/>},
  { text: 'Tailwind CSS', icon: <RiTailwindCssFill size={20}/>},
  { text: 'Java', icon: <FaJava size={20}/>},
  { text: 'Figma', icon: <FaFigma size={20}/>},
]


const TechsMarquee = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[500px] max-sm:max-w-[400px] max-[1000px]:mt-[200px]">
      <div className="text-xl font-semibold mb-[30px] mt-[-50px] max-[1000px]:mt-[20px]">
        What I offer:
      </div>
      <Marquee className="gap-[3rem] max-w-[500px] max-sm:max-w-[400px] border-white border-b-2 border-t-2 p-2 py-5 smooth-animation" autoFill={true}>
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-5">
            <div className="flex flex-row align-middle gap-x-2">
              <div className="mt-[2px]">
                {item.icon}
              </div>
              <div className="mr-[25px] italic">
                {item.text}
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default TechsMarquee