import React from "react";

const CtaSection = () => {
  return (
    <div className="container mx-auto px-4 my-16">
      <div className="bg-[#0830EA] rounded-2xl py-16 px-6 text-center ">
        {/* Heading */}
        <h2 className=" flex flex-col text-white text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-snug">
          Let’s talk about making delivery{" "}
          <span className="italic font-normal block sm:inline">
            stress-free.
          </span>
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <button className="bg-white text-black font-semibold py-3 px-6 rounded-full text-lg hover:opacity-90 transition">
            Get Started
          </button>
          <button className="bg-white text-black font-semibold py-3 px-6 rounded-full text-lg hover:opacity-90 transition">
            See How It Works
          </button>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
