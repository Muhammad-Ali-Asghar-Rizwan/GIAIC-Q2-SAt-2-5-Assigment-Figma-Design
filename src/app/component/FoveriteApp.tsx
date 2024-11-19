import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const FoveriteApp = () => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row items-center justify-between h-full bg-[#043873] mt-[25rem]   px-10 gap-32 bg-no-repeat bg-center' style={{backgroundImage:"url(/images/banner1.png)"}}>
            <div className=' mt-24'>
              <Image src="/images/Apps.png" alt='user' width={600} height={300} className='w-[700px] lg:w-[1200px] h-[370px] '/>
            </div>
            <div className=' mb-20 text-white md:ml-40'>
                <h1 className='text-[30px] md:text-[60px]  font-bold  bg-bottom bg-no-repeat' >Work with Your Favorite Apps Using whitepace</h1>
                {/* <Image src="/images/underline.png" alt='' width={500} height={500} className='relative md:bottom-7'/> */}
                <p className='w-[20rem] md:w-[30rem]'>Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
</p>
                

                <button className=' flex items-center justify-center gap-3 w-[190px] h-[55px] bg-[#4F9CF9] rounded-lg mt-10 md:mt-10 text-white hover:bg-[#2989ff]' >Read more <FaArrowRight /></button>
            </div>
            

             
        </div>
    </div>
  )
}

export default FoveriteApp
