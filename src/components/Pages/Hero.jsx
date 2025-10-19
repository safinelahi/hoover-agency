import React from "react";
import { FaCheckDouble } from "react-icons/fa";
import Group2 from "../../assets/logos/Group 2.png";
import Group3 from "../../assets/logos/Group 3.png";

const Hero = () => {
  return (
    <div
      className="relative mb-[60px] sm:mb-[70px] md:mb-[85px] bg-no-repeat bg-cover mt-[70px] sm:mt-[85px] md:mt-[98px] px-4 sm:px-6 lg:px-12"
      style={{
        backgroundImage: `url(${Group2}), url(${Group3})`,
        backgroundPosition: "center bottom, center bottom",
        backgroundSize: "600px, 950px",
      }}
    >
      {/*  Heading  */}
      <div className="text-center">
        <h1 className="text-[#363636] text-[32px] sm:text-[45px] md:text-[65px] lg:text-[85px] font-extrabold leading-tight">
          Ghost for your client’s
        </h1>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-5 mb-5">
          <h1 className="text-[28px] sm:text-[40px] md:text-[58px] lg:text-[85px] font-normal italic text-center relative leading-tight">
            <span className="relative inline-block z-20">
              Partner
              <span className="absolute right-2 bottom-2 sm:bottom-3 md:bottom-4 w-full h-[5px] sm:h-[7px] md:h-[9px] lg:h-[10px] bg-[#0830EA] -z-10"></span>
            </span>
          </h1>
          <h1 className="text-[28px] sm:text-[40px] md:text-[58px] lg:text-[85px] font-bold text-center leading-tight">
            for you
          </h1>
        </div>

        {/*  Description  */}
        <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-full sm:max-w-md md:max-w-2xl lg:max-w-[44%] mx-auto text-center leading-relaxed">
          We provide reliable, white-label web design and development so your
          agency can take on more clients without the stress of hiring or the
          chaos of freelancers.
        </p>
      </div>

      {/*  Features  */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-5 md:gap-8 mt-6 sm:mt-8">
        <div className="flex items-center text-[#0830EA] gap-2">
          <FaCheckDouble className="text-sm sm:text-base md:text-lg" />
          <h1 className="text-sm sm:text-base md:text-lg font-bold text-center">
            Money Back Guarantee
          </h1>
        </div>

        <div className="flex items-center text-[#0830EA] gap-2">
          <FaCheckDouble className="text-sm sm:text-base md:text-lg" />
          <h1 className="text-sm sm:text-base md:text-lg font-bold text-center">
            Unlimited requests
          </h1>
        </div>

        <div className="flex items-center text-[#0830EA] gap-2">
          <FaCheckDouble className="text-sm sm:text-base md:text-lg" />
          <h1 className="text-sm sm:text-base md:text-lg font-bold text-center">
            2 Months Free Support
          </h1>
        </div>
      </div>

      {/*  Buttons  */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10">
        <button className="bg-[#0830EA] text-white font-semibold py-3 sm:py-4 px-10 sm:px-12 md:px-14 rounded-full text-sm sm:text-base md:text-lg transition duration-300 hover:bg-[#0526c9]">
          Schedule a Growth Focused Call
        </button>
        <button className="bg-white text-black font-semibold py-3 sm:py-4 px-10 sm:px-12 md:px-14 rounded-full border-[#0830EA] border-2 sm:border-4 text-sm sm:text-base md:text-lg transition duration-300 hover:bg-[#f3f3f3]">
          Drop a message
        </button>
      </div>
    </div>
  );
};

export default Hero;
