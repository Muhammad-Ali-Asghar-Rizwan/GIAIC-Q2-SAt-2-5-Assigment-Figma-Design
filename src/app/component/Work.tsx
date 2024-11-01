
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
const Work = () => {
  return (
    <div>
      <div className='h-[574px] bg-[#043873] bg-no-repeat ' style={{backgroundImage:"url(/images/BACKGROUND.png)"}}>
        {/* <Image src="/images/BACKGROUND.png"  alt='' width={200} height={200} className=''/> */}
        <div className='flex flex-col items-center justify-center text-white gap-3 py-36'>
            <p className='text-[72px] font-bold bg-no-repeat  bg-right-bottom '  style={{backgroundImage:"url(/images/Vector.png)"}}>Your work, everywhere you are</p>
            <p className='w-[60rem] text-center'>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
            <button className='mt-10 text-[18px] flex items-center justify-center gap-2 w-[195px] h-[63px] bg-[#4F9CF9] hover:bg-[#2d8fff] rounded-lg'>Try Taskey <FaArrowRight /></button>
        </div>
      </div>
    </div>
  )
}

export default Work
