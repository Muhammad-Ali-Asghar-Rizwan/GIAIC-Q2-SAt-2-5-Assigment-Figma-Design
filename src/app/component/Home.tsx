import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <div>

<div 
  className="flex flex-col  md:flex-row items-center justify-between mt-[-50px]  bg-[#043873] h-[856.39px] md:h-[656.39px] text-white px-6 md:px-10 bg-no-repeat bg-center" 
  style={{ backgroundImage: "url(/images/banner1.png)" }}
>
  {/* Right Section */}
  <div className="text-center mt-40 md:mt-[-1rem] md:text-left md:max-w-[50%]">
    <h1 className="text-[24px] sm:text-[30px] lg:text-[54px] font-bold leading-tight">
      Get More Done with WhiteSpace
    </h1>
    <p className="text-sm sm:text-base mt-3">
      Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
    </p>
    <div className='flex items-center justify-center md:flex md:items-center md:justify-start'>

    <button 
      className="bg-[#4F9CF9] w-[200px] h-[50px] md:w-[200px] md:h-[50px] flex items-center justify-center gap-4 rounded-md mt-6 hover:bg-[#2989ff] transition-all"
      >
      Try WhiteSpace Free <FaArrowRight />
    </button>
      </div>
  </div>

  {/* Left Section */}
  <div className="w-full md:w-[50%] flex justify-center md:justify-end  mb-28 md:mb-4  mt-20 ">
    <div className="w-[400] md:w-[600px] h-[200px] sm:h-[370px] bg-[#C4DEFD] rounded-md shadow-lg">
      {/* Add content here if needed */}
    </div>
  </div>
</div>

      
    </div>
  )
}

export default Home
