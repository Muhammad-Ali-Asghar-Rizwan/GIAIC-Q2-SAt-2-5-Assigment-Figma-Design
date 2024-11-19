import Image from 'next/image';
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Extension = () => {
  return (
    <div>
       <div className=' flex flex-col md:flex-row mt-72 md:mt-2 items-center justify-between px-20 bg-[#043873] h-[760px] text-white gap-6'>
            <div className='mt-24'>
                <h1 className='text-[40px] md:text-[50px] font-bold bg-botto bg-bottom bg-no-repeat ' >Use as Extension</h1>
                <Image src="/images/underline.png" alt='' width={300} height={300} className=""/>
                <p className='w-[20rem] md:w-[30rem]'>Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
                

                <button className=' flex items-center justify-center gap-3 w-[201px] h-[63px] bg-[#4F9CF9] rounded-lg md:mt-14 text-white hover:bg-[#2989ff]' >Let’s Go <FaArrowRight /></button>
            </div>
            
            <div className='w-[300px] h-[300px] md:w-[600px] md:h-[370px] bg-[#C4DEFD] mt-24 mb-10 md:mb-1'></div>

             
        </div>
    </div>
  )
}

export default Extension
