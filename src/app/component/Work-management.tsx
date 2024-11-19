import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const WorkManagement = () => {
  return (
    <div>
        {/* main div */}
      <div className='h-[1370.76px] bg-no-repeat ' style={{backgroundImage:"url(/images/back.png)"}}>
         {/* <Image src="/images/back.png" alt='' width={100} height={100} className='w-[300px] h-[500px]'/> */}
        {/* First Container */}
        <div className='flex flex-col md:flex-row items-center justify-between px-10 '>
            <div className='mt-24'>
                <h1 style={{backgroundImage:"url(/images/underline.png)"} } className='text-[40px] sm:[50px] md:text-[60px] font-bold bg-botto bg-bottom bg-no-repeat ' >Project Management</h1>
                {/* <Image src="/images/underline.png" alt='' width={500} height={500} className='relative md:bottom-7'/> */}
                <p className='w-[20rem] sm:w-[30rem]'>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                

                <button className=' flex items-center justify-center gap-3 w-[201px] h-[63px] bg-[#4F9CF9] rounded-lg mt-9 md:mt-14 text-white hover:bg-[#2989ff]' >Get Started <FaArrowRight /></button>
            </div>
            
            <div className='w-[300px] h-[250px] md:w-[600px] md:h-[370px] bg-[#C4DEFD] mt-24'></div>

             
        </div>


       
        {/* Second Container */}
        <div className='flex flex-col  md:flex-row items-center justify-between px-20 gap-32 md:gap-9 mt-48 md:mt-56'>
            <div className=''>
              <Image src="/images/Work Together Image.png" alt='user' width={500} height={500} />
            </div>
            <div className='-mt-12 md:mt-24'>
                <h1 style={{backgroundImage:"url(/images/underline.png)"} } className='text-[40px] md:text-[60px]  font-bold  bg-bottom bg-no-repeat ' >Work together</h1>
                {/* <Image src="/images/underline.png" alt='' width={500} height={500} className='relative md:bottom-7'/> */}
                <p className='w-[20rem] md:w-[30rem]'>With whitepace, share your notes with your colleagues and collaborate on them.
You can also publish a note to the internet and share the URL with others.
</p>
                

                <button className=' flex items-center justify-center gap-3 w-[190px] h-[55px] bg-[#4F9CF9] rounded-lg mb-12 mt-9 md:mt-10 text-white hover:bg-[#2989ff]' >Try it now<FaArrowRight /></button>
            </div>
            

             
        </div>
        </div>


      </div>
  
  )
}

export default WorkManagement