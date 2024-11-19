import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Data = () => {
  return (
    <div>
      {/* main div */}
      <div className="h-[1370.76px] bg-no-repeat" style={{ backgroundImage: "url(/images/back.png)" }}>
        {/* First Container */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between px-10">
          <div className="mt-24">
            <h1 style={{ backgroundImage: "url(/images/underline.png)" } } className="text-[40px] md:text-[60px] font-bold bg-botto bg-bottom bg-no-repeat">
              100% your data
            </h1>
            <p className="w-[20rem] md:w-[30rem]">
              The app is open source and your notes are saved to an open format, so you&apos;ll always have access to them. Uses End-To-End Encryption (E2EE) to
              secure your notes and ensure no-one but yourself can access them.
            </p>

            <button className="flex items-center justify-center gap-3 w-[192px] h-[63px] bg-[#4F9CF9] rounded-lg mt-8 md:mt-14 text-white hover:bg-[#2989ff]">
              Read more <FaArrowRight />
            </button>
          </div>

          <div className="w-[300px] h-[250px] md:w-[600px] md:h-[370px] mt-44 md:ml-48">
            <Image src="/images/Element1.png" alt="user" width={700} height={700} />
          </div>
        </div>

        {/* Second Container */}

        <div className=" mt-64 bg-blue-200 h-full">
          <h1 className="text-center text-[40px] md:text-[72px] font-bold bg-no-repeat bg-bottom " style={{ backgroundImage: "url(/images/underline3.png)" }}>
            Our sponsors
          </h1>
          <div className="flex flex-col lg:flex-row items-center justify-between px-10 gap-28 mt-32 md:mt-32">
            <Image src="/images/microsoft 1.png" alt="user" width={100} height={100} className="w-[200] h-[40] md:w-[257px] md:h-[52px]" />
            <Image src="/images/Apple.png" alt="user" width={100} height={100} className="w-[40px] md:w-[55.47px] h-[36px] md:h-[58px]" />
            <Image src="/images/slaCK.png" alt="user" width={100} height={100} className="w-[200px] h-[50px] md:w-[239.1px] md:h-[40.22px]" />
            <Image src="/images/googlee.png" alt="user" width={100} height={100} className="w-[150px] h-[50px] md:w-[190px] md:h-[59.81px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
