import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
const Customize = () => {
  return (
    <div>
      <div className='flex items-center justify-between h-[779.3px] px-20 gap-32 md:mt-'>
            <div className='w-[600px] h-[370px] bg-[#C4DEFD] mt-24'>
              
            </div>
            <div className='mt-24'>
                <h1 style={{backgroundImage:"url(/images/underline.png)"} } className='text-[60px]  font-bold  bg-bottom bg-no-repeat ' >Customise it
                to your needs</h1>
                {/* <Image src="/images/underline.png" alt='' width={500} height={500} className='relative md:bottom-7'/> */}
                <p className='w-[30rem]'>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
</p>
                

                <button className=' flex items-center justify-center gap-3 w-[190px] h-[55px] bg-[#4F9CF9] rounded-lg md:mt-10 text-white hover:bg-[#2989ff]' >Let’s Go <FaArrowRight /></button>
            </div>
            

             
        </div>
    </div>
  )
}

export default Customize
