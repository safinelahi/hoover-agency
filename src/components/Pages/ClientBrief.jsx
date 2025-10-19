import React from "react";
import icon1 from "../../assets/logos/et_strategy.png";
import icon2 from "../../assets/logos/carbon_development.png";
import icon3 from "../../assets/logos/streamline-ultimate_launch-go.png";
import icon4 from "../../assets/logos/streamline-sharp_customer-support-setting.png";

const ClientBrief = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12 py-10">
      {/*  Heading Section  */}
      <div className="flex flex-col justify-center items-center" >
        <h1 className="text-[#363636] text-center text-3xl sm:text-4xl md:text-5xl font-bold  md:w-[40%]">
          From Client Brief to Live Site Your White-Label Process
        </h1>
        <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-full sm:max-w-[40%]
         md:max-w-[40%] lg:max-w-[40%] mx-auto text-center leading-relaxed mt-4 mb-6">
          We know that a great partnership starts with a clear plan. Our process
          is designed to be seamless, letting you stay in control while we
          handle the work, completely behind the scenes.
        </p>
      </div>

      {/*  Process Cards  */}
      <div className="container md:mx-auto py-10 px-4 md:px-0 ">
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-4 
            gap-6 lg:gap-4 
            justify-items-center
          "
        >
          {/* section 01 */}
          <div className="bg-[#0830EA] text-white px-6 py-8 rounded-[10px] w-full sm:w-[320px] md:w-[340px] lg:w-full space-y-[15px] text-center sm:text-left">
            <img
              className="w-[50px] h-[50px] mx-auto sm:mx-0"
              src={icon1}
              alt="Strategy Icon"
            />
            <h1 className="font-bold text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px]">
              You Lead <br className=" hidden md:block" /> We Plan
            </h1>
            <p className="text-sm sm:text-base md:text-lg">
              You bring the client's vision. We create the blueprint, ensuring a
              clear and predictable path forward.
            </p>
          </div>

          {/* section 02 */}
          <div className="bg-[#0830EA] text-white px-6 py-8 rounded-[10px] w-full sm:w-[320px] md:w-[340px] lg:w-full space-y-[15px] text-center sm:text-left md:mt-0 md:mb-0 lg:mt-[40px] lg:mb-[-40px]">
            <img
              className="w-[50px] h-[50px] mx-auto sm:mx-0"
              src={icon2}
              alt="Development Icon"
            />
            <h1 className="font-bold text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px]">
              We Build <br className=" hidden md:block" /> You Brand
            </h1>
            <p className="text-sm sm:text-base md:text-lg">
              You bring the client's vision. We create the blueprint, ensuring a
              clear and predictable path forward.
            </p>
          </div>

          {/* section 03 */}
          <div className="bg-[#0830EA] text-white px-6 py-8 rounded-[10px] w-full sm:w-[320px] md:w-[340px] lg:w-full space-y-[15px] text-center sm:text-left">
            <img
              className="w-[50px] h-[50px] mx-auto sm:mx-0"
              src={icon3}
              alt="Launch Icon"
            />
            <h1 className="font-bold text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px]">
              We Launch <br className=" hidden md:block" /> You Shine
            </h1>
            <p className="text-sm sm:text-base md:text-lg">
              You bring the client's vision. We create the blueprint, ensuring a
              clear and predictable path forward.
            </p>
          </div>

          {/* section 04 */}
          <div className="bg-[#0830EA] text-white px-6 py-8 rounded-[10px] w-full sm:w-[320px] md:w-[340px] lg:w-full space-y-[15px] text-center sm:text-left md:mt-0 md:mb-0 lg:mt-[40px] lg:mb-[-40px]">
            <img
              className="w-[50px] h-[50px] mx-auto sm:mx-0"
              src={icon4}
              alt="Support Icon"
            />
            <h1 className="font-bold text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px]">
              We Maintain <br className=" hidden md:block" /> You Grow
            </h1>
            <p className="text-sm sm:text-base md:text-lg">
              We manage all the maintenance, freeing you up to focus on what you
              do best — growing your agency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientBrief;
