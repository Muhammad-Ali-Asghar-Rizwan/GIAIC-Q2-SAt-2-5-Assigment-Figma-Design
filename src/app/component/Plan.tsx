import React from 'react'
import { FiCheckCircle } from "react-icons/fi";
const Plan = () => {
  return (
    <div>

      <div className='h-[80rem] md:mt-52'>
        <div className='flex flex-col items-center justify-center '>
        <h1 className='text-[72px] font-bold bg-no-repeat bg-bottom' style={{backgroundImage:"url(/images/underline.png)"} }>Choose Your Plan</h1>
        <p className='text-[18px] w-[60rem] text-center mt-5' >Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
        </div>
        <div className='flex  items-center justify-between gap-8 px-10 mt-24' >
            <div className='h-[630px] w-[654px] border-2 border-solid border-[#FFE492] rounded-lg hover:bg-[#043873]  hover:h-[670px] hover:w-[700px] hover:text-white hover:transition-all hover:duration-300'>
                <div className='px-10 p-10'>

                <h1 className='text-[24px]'>Free</h1>
                <h1 className='text-[36px] md:mt-2'>$0</h1>
                <h2 className='text-[18px] md:mt-4'>Capture ideas and find them quickly</h2>
                <p className='flex gap-3 md:mt-5'><FiCheckCircle  className='mt-1'/>   Sync unlimited devices </p>
                <p className='flex gap-3 md:mt-5'><FiCheckCircle  className='mt-1'/>   10 GB monthly uploade  </p>
                <p className='flex gap-3 md:mt-5'><FiCheckCircle  className='mt-1'/>   200 MB max. note size  </p>
                <p className='flex gap-3 md:mt-5'><FiCheckCircle  className='mt-1 text-[25px] '/>  Customize Home dashboard and access extra widgets </p>
                <p className='flex gap-3 md:mt-5'><FiCheckCircle  className='mt-1 text-[20px]'/>   Connect primary Google Calendar account</p>
                <p className='flex gap-3 md:mt-5'><FiCheckCircle  className='mt-1 text-[25px]'/>   Add due dates, reminders, and notifications to your tasks</p>
                <button className='w-[166px] h-[51px] border-2 border-solid border-[#FFE492] rounded-lg md:mt-7 hover:bg-[#4F9CF9]'>Get Started</button>
                </div>
            </div>

            <div className='h-[630px] w-[654px] border-2 border-solid border-[#FFE492] rounded-lg hover:bg-[#043873]  hover:h-[670px] hover:w-[700px] hover:text-white hover:transition-all hover:duration-300'>
                <div className='px-10 p-10'>

                <h1 className='text-[24px]'>Personal</h1>
                <h1 className='text-[36px] md:mt-2 '>$11.99</h1>
                <h2 className='text-[18px] md:mt-4'>Keep home and family on track</h2>
                <p className='flex gap-3 md:mt-5'><FiCheckCircle  className='mt-1'/>   Sync unlimited devices </p>
                <p className='flex gap-3 md:mt-5'><FiCheckCircle  className='mt-1'/>   10 GB monthly uploade  </p>
                <p className='flex gap-3 md:mt-5'><FiCheckCircle  className='mt-1'/>   200 MB max. note size  </p>
                <p className='flex gap-3 md:mt-5'><FiCheckCircle  className='mt-1 text-[25px] '/>  Customize Home dashboard and access extra widgets </p>
                <p className='flex gap-3 md:mt-5'><FiCheckCircle  className='mt-1 text-[20px]'/>   Connect primary Google Calendar account</p>
                <p className='flex gap-3 md:mt-5'><FiCheckCircle  className='mt-1 text-[25px]'/>   Add due dates, reminders, and notifications to your tasks</p>
                <button className='w-[166px] h-[51px] border-2 border-solid border-[#FFE492] rounded-lg md:mt-7 hover:bg-[#4F9CF9]'>Get Started</button>
                </div>
            </div>


            <div className='h-[630px] w-[654px] border-2 border-solid border-[#FFE492] rounded-lg hover:bg-[#043873]  hover:h-[670px] hover:w-[700px] hover:text-white hover:transition-all hover:duration-300'>
                <div className='px-10 p-10'>

                <h1 className='text-[24px]'>Organization</h1>
                <h1 className='text-[36px] md:mt-2'>$49.99</h1>
                <h2 className='text-[18px] md:mt-4'>Capture ideas and find them quickly</h2>
                <p className='flex gap-3 md:mt-5'><FiCheckCircle  className='mt-1'/>   Sync unlimited devices </p>
                <p className='flex gap-3 md:mt-5'><FiCheckCircle  className='mt-1'/>   10 GB monthly uploade  </p>
                <p className='flex gap-3 md:mt-5'><FiCheckCircle  className='mt-1'/>   200 MB max. note size  </p>
                <p className='flex gap-3 md:mt-5'><FiCheckCircle  className='mt-1 text-[25px] '/>  Customize Home dashboard and access extra widgets </p>
                <p className='flex gap-3 md:mt-5'><FiCheckCircle  className='mt-1 text-[20px]'/>   Connect primary Google Calendar account</p>
                <p className='flex gap-3 md:mt-5'><FiCheckCircle  className='mt-1 text-[25px]'/>   Add due dates, reminders, and notifications to your tasks</p>
                <button className='w-[166px] h-[51px] border-2 border-solid border-[#FFE492] rounded-lg md:mt-7 hover:bg-[#4F9CF9]'>Get Started</button>
                </div>
            </div>
           
        </div>
      </div>
    </div>
    
  )
}

export default Plan
