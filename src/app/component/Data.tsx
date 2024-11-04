import  Image from "next/image"
import  React from "react"
import  { FaArrowRight } from "react-icons/fa6";


const Data = () => {
  return (
    <div>
        {/* main div */}
      <div className="h-[1370.76px] bg-no-repeat" style={{backgroundImage:"url(/images/back.png)"}}>
        {/* First Container */}
        <div className="flex items-center justify-between px-10">
            <div className="mt-24">
                <h1 style={{backgroundImage:"url(/images/underline.png)"} } className="text-[60px] font-bold bg-botto bg-bottom bg-no-repeat ">100% your data</h1>
                <p className="w-[30rem]">The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.</p>
                

                <button className=" flex items-center justify-center gap-3 w-[192px] h-[63px] bg-[#4F9CF9] rounded-lg md:mt-14 text-white hover:bg-[#2989ff]" >Read more <FaArrowRight /></button>
            </div>
            
            <div className="w-[600px] h-[370px]  mt-44 ml-48">
                <Image src="/images/Elemen1t.png" alt="user" width={700} height={700}/>
            </div>

             
        </div>

        {/* Second Container */}
        <div className="mt-72">
            <h1 className="text-center text-[72px] font-bold bg-no-repeat  bg-bottom" style={{backgroundImage:"url(/images/underline3.png)"} } >Our sponsors</h1> 
            <div  className="flex items-center justify-between px-10 gap-28 mt-24" >
          <Image src="/images/microsoft 1.png" alt="user" width={100} height={100} className="w-[287px] h-[62px]"/>
                <Image src="/images/Apple.png" alt="user" width={100} height={100} className="w-[55.47px] h-[68px]"/>
                <Image src="/images/slaCK.png" alt="user" width={100} height={100} className="w-[279.1px] h-[70.22px]" />
              <Image src="/images/googlee.png" alt="user" width={100} height={100} className="w-[211px] h-[69.81px]"/>
            </div> 
        </div>


      </div>
    </div>
  )
}

export default Data