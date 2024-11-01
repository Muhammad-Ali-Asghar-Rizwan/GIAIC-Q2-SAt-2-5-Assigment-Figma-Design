import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <div>

        <div className='flex items-center justify-between bg-[#043873] h-[656.39px] text-white px-10 bg-no-repeat bg-center ' style={{backgroundImage:"url(/images/banner1.png)"}}>
            
            {/* right */}
            <div className='text-white '>
                <h1 className='text-[54px] font-bold'>Get More Done with whitepace</h1>
                <p>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                <button className='bg-[#4F9CF9] w-[229px] flex items-center justify-center gap-4 h-[63px] rounded-md mt-9 hover:bg-[#2989ff] '>Try WhiteSpace Free <FaArrowRight /></button>
            </div>
        {/* left */}
            <div>
              <div className='w-[600px] h-[370px] bg-[#C4DEFD]'>

              </div>
            </div>
        </div>
      
    </div>
  )
}

export default Home
