"use client"
import React from 'react'
import { Accordion } from "./Projects/Accordion"
import RoundedSpinningCube  from "./Projects/RoundedSpinningCube"

const Projects = () => {
  return (
    <div className="flex justify-center items-center mt-[200px] max-[770px]:mt-[100px] w-full">
      <div className="flex flex-col mb-[200px]">
        <div className="text-4xl max-lg:text-3xl max-md:justify-center font-semibold mb-[100px] flex flex-row gap-x-[125px]">
          <div className="mt-[-30px]">
            <RoundedSpinningCube />
          </div>
          Featured Projects
        </div>
        <Accordion />
      </div>
    </div>
  )
}

export default Projects