import React from 'react'

const Impact = () => {
  return (
    <div className="h-[calc(100vh-5rem)] w-full absolute dark-wave-clip mt-[50px] max-md:h-[1200px] flex justify-center items-center">
      <div className="flex flex-col max-w-md mx-auto">
        <div className="text-5xl font-bold mb-[30px]">
          Impact
        </div>
        <div className="text-base font-bold mb-[30px] font-mono mt-[-10px]">
          Across all of the featured projects
        </div>
        <div className="flex flex-row gap-x-5 max-md:flex-col max-md:gap-y-5 max-md:items-center">
          <div className="w-full max-w-[350px] h-[150px] bg-[#020202]/80 rounded-[10px] hover:bg-[#020202] hover:shadow-2xl smooth-animation">
            <div className="text-xs font-semibold mt-[30px] ml-[30px] font-mono">
              Total unique visitors
            </div>
            <div className="text-3xl font-bold mt-[20px] ml-[30px] w-full max-md:text-3xl pr-[40px]">
              2,000,000+
            </div>
          </div>
          <div className="w-full max-w-[350px] h-[150px] bg-[#020202]/80 rounded-[10px] hover:bg-[#020202] hover:shadow-2xl smooth-animation">
            <div className="text-xs font-semibold mt-[30px] ml-[30px] font-mono">
              Lifetime visits
            </div>
            <div className="text-3xl font-bold mt-[20px] ml-[30px] w-full max-md:text-3xl pr-[40px]">
              10,000,000+
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Impact