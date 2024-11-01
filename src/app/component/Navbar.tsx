import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const Navbar = () => {
  return (
    <div>
 
      <div className='bg-[#043873] h-[92px] w-full flex items-center justify-between px-10 fixed shadow-lg'>
        {/* logo */}
        <div>
            <Image src="/images/Logo.png" alt='Logo' width={100} height={100} className='h-[34px] w-[144px]'/>
        </div>

        {/* Links */}
        <div>
             <ul className='flex gap-9 text-white '>
                <Link href="/" className='hover:underline  hover:text-[#ffdc72]'><li>Products</li></Link>
                <Link href="/" className='hover:underline  hover:text-[#ffdc72]'><li>Solution</li></Link>
                <Link href="/" className='hover:underline  hover:text-[#ffdc72]'><li>Resources</li></Link>
                <Link href="/" className='hover:underline  hover:text-[#ffdc72]'><li>Pricing</li></Link>
             </ul>
        </div>

        {/* Button */}
        <div className='gap-20'>
            <button className='mr-5 w-[126px] h-[50px] bg-[#FFE492] hover:bg-[#ffdc72] rounded-[8px] gap-[10px]'>Login</button>
            <button className='w-[227px] h-[50px] font-normal bg-[#4F9CF9] hover:bg-[#2989ff] rounded-[8px] text-white'>Try WhiteSpace Free</button>
        </div>

      </div>
    </div>
  )
}

export default Navbar
