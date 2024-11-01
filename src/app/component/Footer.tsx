import Image from 'next/image';
import React from 'react'
import { FaApple } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <div className='bg-[#043873] h-[709px]  mt-44 text-white flex flex-col items-center justify-center'>
        <div className=' text-white flex flex-col items-center justify-center w-[40rem]'>

        <h1 className='text-[72px] font-bold text-center'>Try Whitepace today</h1>
        <p className='mt-5'>Get started for free.</p>
        <p className=''>Add your whole team as your needs grow.</p>
        <button className='h-[50px] w-[180px] bg-[#4F9CF9] rounded-lg mt-7 hover:bg-[#2989ff]'>Try Taskey free</button>
        <p className='mt-3'>On a big team? Contact sales</p>
        {/* icon */}
        <div className='flex gap-6 mt-10'>
        <FaApple className='w-[60px] h-[60px]'/>
        <FaWindows className='w-[60px] h-[60px]'/>
        <IoLogoAndroid  className='w-[60px] h-[60px]'/>
        </div>
        </div>
      </div>

      <div  className='h-[474px] bg-[#043873] text-white px-10'>
        <div className='flex items-center justify-between'>
            <div className='text-white'>
                <div className='flex items-center gap-3'>
                    <Image src="/images/Logo Icon.png" alt='' width={50} height={50} className='w-[37px] h-[29px]' />
                    <h1 className='text-[28px] text-center'>whitepace</h1>
                </div>
                <p className='w-[240px] mt-5'>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
            </div>

            <div className=''> 
                
                <h1 className='text-[18px] font-bold'>Product</h1>
                <p className='mt-3 hover:text-[#FFE492] cursor-pointer'>Overview</p>
                <p className='mt-3 hover:text-[#FFE492] cursor-pointer'>Pricing</p>                
                <p className='mt-3 hover:text-[#FFE492] cursor-pointer'>Customer stories</p>
                
            </div>
            
            <div className=''> 
                
                <h1 className='text-[18px] font-bold'>Resources</h1>
                <p className='mt-3 cursor-pointer hover:text-[#FFE492]'>Blog</p>
                <p className='mt-3 cursor-pointer hover:text-[#FFE492]'>Guides & tutorials</p>                
                <p className='mt-3 cursor-pointer hover:text-[#FFE492]'>Help center</p>
                
            </div>

            <div className=''> 
                
                <h1 className='text-[18px] font-bold'>Company</h1>
                <p className='mt-3 cursor-pointer hover:text-[#FFE492]'>About us</p>
                <p className='mt-3 cursor-pointer hover:text-[#FFE492]'>Careers </p>                
                <p className='mt-3 cursor-pointer hover:text-[#FFE492]'>Media kit</p>
                
            </div>

            
            <div className=''>
                <h1 className='text-[28px] font-bold mt-16'>Try It Today</h1>
                <p className='w-[259px] mt-5'>Get started for free.Add your whole team as your needs grow.</p>
                <button className=' flex items-center justify-center gap-3 w-[186px]  h-[60px] bg-[#4F9CF9] rounded-lg md:mt-14 text-white hover:bg-[#2989ff]' >Start today <FaArrowRight /></button>

            </div>
        </div>
      <hr className='mt-24'/>
    
    <div className='flex items-center justify-between mt-8'>
        <div className='flex items-center gap-2'>
          <Image src="/images/earth.png" alt=''  width={50} height={50} className='w-[19px] h-[19px]'/>
          English  <IoIosArrowDown /></div>
        <ul className='flex mr-40 gap-10'>
          <li className='cursor-pointer hover:text-[#FFE492]'>Terms & privacy</li>
          <li className='cursor-pointer hover:text-[#FFE492]'>Security</li>
          <li className='cursor-pointer hover:text-[#FFE492]'>Status</li>
          <li className='cursor-pointer hover:text-[#FFE492]'>©2021 Whitepace LLC.</li>
        </ul>
        <div className='flex  gap-5'>
        <FaFacebookF />
        <FaTwitter />
        <FaLinkedinIn />
        </div>
    </div>

      </div>
    </div>
  )
}

export default Footer
