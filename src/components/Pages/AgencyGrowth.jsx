import React from "react";
import { FaCheckCircle } from "react-icons/fa";


const AgencyGrowth = () => {
  return (
    <div className=" mb-9 " >
      <div>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-5 mb-5">
          <h1 className="text-[28px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold text-center leading-tight">
            We are the agency
          </h1>
          <h1 className="text-[28px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-normal italic text-center relative leading-tight">
            <span className="relative inline-block z-20">
              growth partner
              <span className="absolute right-2 bottom-2 sm:bottom-2 md:bottom-3 w-full h-[5px] sm:h-[7px] md:h-[9px] lg:h-[10px] bg-[#0830EA] -z-10"></span>
            </span>
          </h1>
        </div>
        <h1 className="text-[#363636] text-[28px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-extrabold leading-tight text-center">
          you've been looking for
        </h1>
      </div>
      <p className=" text-black text-sm sm:text-base md:text-lg lg:text-xl font-base max-w-full sm:max-w-md md:max-w-2xl lg:max-w-[52%] mx-auto text-center leading-relaxed ">
        We’re Hoover Agency your behind-the-scenes web design and development
        team. You focus on clients and strategy, we handle the websites that
        make them shine. From one-off projects to ongoing support, we fit
        seamlessly into your workflow{" "}
        <span className=" italic font-medium ">
          reliable, invisible, and always on time.
        </span>
      </p>

      {/*  Features  */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-5 md:gap-8 mt-6 sm:mt-8">
        <div className="flex items-center  gap-2">
          <FaCheckCircle color= "#0830EA" className="text-sm sm:text-base md:text-lg" />
          <h1 className="text-sm sm:text-base md:text-lg font-bold text-center">
            Money Back Guarantee
          </h1>
        </div>

        <div className="flex items-center  gap-2">
          <FaCheckCircle color= "#0830EA" className="text-sm sm:text-base md:text-lg" />
          <h1 className="text-sm sm:text-base md:text-lg font-bold text-center">
            Unlimited requests
          </h1>
        </div>

        <div className="flex items-center  gap-2">
          <FaCheckCircle color= "#0830EA" className="text-sm sm:text-base md:text-lg" />
          <h1 className="text-sm sm:text-base md:text-lg font-bold text-center">
            2 Months Free Support
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AgencyGrowth;
