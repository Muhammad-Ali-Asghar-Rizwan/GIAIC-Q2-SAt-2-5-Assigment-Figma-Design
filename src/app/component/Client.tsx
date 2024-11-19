import Image from 'next/image'
import React from 'react'

const Client = () => {
  return (
    <div>
      <div className='mt-4 md:mt-[30rem]'>
        <h1 className='text-[40px] md:text-[60px] font-bold text-center'>What Our Clients Says</h1>
        <div className='flex flex-col md:flex-row items-center justify-between gap-5 px-10  md:mt-20 '>
            <div className='w-[250px] h-[550px] mt-10 md:w-[437px] md:h-[498px]  border shadow-lg rounded-lg'>
                <div className='px-5 py-12'>

               <Image src="/images/Client.png" alt='' width={100} height={100}/> 

               <p className='mt-10'>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
               <hr className='mt-10'/>
                </div>
                <div className='md:mt-11 flex px-5 gap-6'>
                    <Image src="/images/prfile1.png"alt='user' width={100} height={100} className='w-12 h-12 md:w-24 md:h-24'/>
                    <div className=''>

                    <h1 className='text-[15px] font-bold  md:text-[24px]'>Oberon Shaw, MCH</h1>

                    <p>Head of Talent Acquisition, North America</p>
                    </div>
                </div>
            </div>

            <div className='bg-[#4F9CF9] w-[250px] h-[550px] md:w-[437px] md:h-[498px]  border shadow-lg rounded-lg'>
                <div className='px-5 py-12'>

               <Image src="/images/client-white.png" alt='' width={100} height={100} className='text-white '/> 

               <p className='mt-10 text-white' >Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
               <hr className='mt-10'/>
                </div>
                <div className='md:mt-11 flex px-4 gap-6'>
                    <Image src="/images/profle2.png"alt='user' width={100} height={100} className='w-12 h-12 md:w-24 md:h-24'/>
                    <div className=''>

                    <h1 className='text-[24px] text-[#043873] font-bold'>Oberon Shaw, MCH</h1>

                    <p className='text-white '>Head of Talent Acquisition, North America</p>
                    </div>
                </div>
            </div>


            <div className='bg-[#4F9CF9] w-[250px] h-[550px] md:w-[437px] md:h-[498px]  border shadow-lg rounded-lg'>
                <div className='px-5 py-12'>

               <Image src="/images/client-white.png" alt='' width={100} height={100}/> 

               <p className='mt-10 text-white'>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
               <hr className='mt-10'/>
                </div>
                <div className='md:mt-11 flex px-4 gap-6'>
                    <Image src="/images/prfile1.png"alt='user' width={100} height={100} className='w-12 h-12 md:w-24 md:h-24'/>
                    <div className=''>

                    <h1 className='text-[24px] text-[#043873] font-bold'>Oberon Shaw, MCH</h1>

                    <p className='text-white'>Head of Talent Acquisition, North America</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Client
