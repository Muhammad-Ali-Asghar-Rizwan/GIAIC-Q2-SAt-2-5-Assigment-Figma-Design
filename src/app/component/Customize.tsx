
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
const Customize = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row items-center justify-between h-[779.3px] px-20 gap-32 md:mt-'>
            <div className='w-[300px] h-[270px] md:w-[600px] md:h-[370px] bg-[#C4DEFD] mt-24'>
              
            </div>
            <div className='-mt-36 md:mt-24'>
                <h1 style={{backgroundImage:"url(/images/underline.png)"} } className='text-[40px] md:text-[60px]  font-bold  bg-bottom bg-no-repeat ' >Customise it
                to your needs</h1>
                {/* <Image src="/images/underline.png" alt='' width={500} height={500} className='relative md:bottom-7'/> */}
                <p className='w-[20rem] md:w-[30rem] '>Customize the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
</p>
                

                <button className=' flex items-center justify-center gap-3 w-[190px] h-[55px] bg-[#4F9CF9] rounded-lg md:mt-10 text-white hover:bg-[#2989ff] mt-14  md:mt-1' >Let’s Go <FaArrowRight /></button>
            </div>
            

             
        </div>
    </div>
  )
}

export default Customize
