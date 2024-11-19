import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className='bg-[#043873] h-[5rem] flex items-center justify-between px-10'>
       <div className=''>
             <Image src="/images/Logo.png" alt='Logo' width={100} height={100} className='h-[24px] w-[124px]   md:h-[34px] md:w-[145px] '/>        
       </div>
        {/* Links */}
               
                 <div>
                        <ul className='hidden  lg:flex gap-9 lg:text-white'>
                           <Link href="/" className='hover:underline  hover:text-[#ffdc72]'><li>Products</li></Link>
                         <Link href="/" className='hover:underline  hover:text-[#ffdc72]'><li>Solution</li></Link>
                         <Link href="/" className='hover:underline  hover:text-[#ffdc72]'><li>Resources</li></Link>
                         <Link href="/" className='hover:underline  hover:text-[#ffdc72]'><li>Pricing</li></Link>
                      </ul>
                 </div>
                  

               

                

                 <div className='hidden sm:gap-1 sm:flex sm:flex-row ml-12' >
                     <button className='mr-5 w-[126px] h-[50px] bg-[#FFE492] hover:bg-[#ffdc72] rounded-[8px] gap-[10px]'>Login</button>
         
                     <button className='flex items-center justify-center gap-2 w-[227px] h-[50px] font-normal bg-[#4F9CF9] hover:bg-[#2989ff] rounded-[8px] text-white'>Try WhiteSpace Free <FaArrowRight /></button>
                 </div>

                 <div className='lg:hidden text-white'>
                 <GiHamburgerMenu />
                 </div>


       </div>
    
  )
}

export default Navbar




// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import { FaArrowRight } from "react-icons/fa6";
// const Navbar = () => {
//   return (
//     <div>
 
//       <div className='bg-[#043873] h-[92px] w-full flex items-center justify-between px-10 fixed shadow-lg'>
//         {/* logo */}
//         <div>
//             <Image src="/images/Logo.png" alt='Logo' width={100} height={100} className='h-[34px] w-[144px]'/>
//         </div>

//         {/* Links */}
//         <div>
//              <ul className='flex gap-9 text-white '>
//                 <Link href="/" className='hover:underline  hover:text-[#ffdc72]'><li>Products</li></Link>
//                 <Link href="/" className='hover:underline  hover:text-[#ffdc72]'><li>Solution</li></Link>
//                 <Link href="/" className='hover:underline  hover:text-[#ffdc72]'><li>Resources</li></Link>
//                 <Link href="/" className='hover:underline  hover:text-[#ffdc72]'><li>Pricing</li></Link>
//              </ul>
//         </div>

//         {/* Button */}
//         <div className='gap-1 flex flex-row'>
//             <button className='mr-5 w-[126px] h-[50px] bg-[#FFE492] hover:bg-[#ffdc72] rounded-[8px] gap-[10px]'>Login</button>
            
//             <button className='flex items-center justify-center gap-2 w-[227px] h-[50px] font-normal bg-[#4F9CF9] hover:bg-[#2989ff] rounded-[8px] text-white'>Try WhiteSpace Free <FaArrowRight /></button>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Navbar
