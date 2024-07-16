import React from 'react'
import SpinningCube from './Hero/SpinningCube'
import Button3D from './Hero/Button3D'
import TechsMarquee from './Hero/TechsMarquee'

const Hero = () => {
  return (
    <div id="Hero" className="flex justify-center items-center flex-col">
      <div className="flex justify-center items-center w-[calc(100vw-7rem)] h-[500px] rounded-[30px] max-w-[1024px] flex-row gap-x-5 max-md:ml-[-60px] smooth-animation max-[1000px]:flex-col max-[2000px]:ml-[-60px]">
        <div className="max-sm:ml-[30px]">
          <SpinningCube />
        </div>
        <div className="ml-[-30px] max-md:flex max-md:justify-center flex-col max-sm:w-[300px] max-[800px]:ml-[35px] max-[1000px]:ml-[50px]">
          <div className="text-xl font-medium max-md:text-base">
            <strong>Hi!</strong> My name is
          </div>
          <div className="text-5xl font-bold max-md:text-3xl smooth-animation mt-[20px]">
            Ean James Yu
          </div>
          <div className="text-xl max-md:text-base mt-[30px] smooth-animation w-[400px] max-[1000px]:w-[350px]">
            and I am a <strong>UI/UX designer</strong> who makes web apps!
          </div>
          <div className="flex max-[1000px]:justify-end smooth-animation">
            <Button3D />
          </div>
        </div>
      </div>
      <TechsMarquee />
    </div>
  )
}

export default Hero