import React from "react";

const ComparisonSection2 = () => {
  const problems = [
    "Make you use their tools",
    "Can be slow or unreliable",
    "Surprise you with extra costs",
    "Your clients know you outsourced",
    "Reactive task completion",
  ];

  const solutions = [
    "Adapts to your workflow & tools",
    "We are always on time",
    "One clear price upfront",
    "Work is delivered as yours",
    "Proactive strategic insights",
  ];

  return (
    <div className="container mx-auto my-[100px] relative py-14 px-4">
      {/* Heading */}
      <h1 className="text-[#363636] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] font-bold text-center">
        How we are different
      </h1>
      <h1 className="text-[#363636] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] font-bold italic text-center">
        from other’s
      </h1>
      <p className="text-base sm:text-lg md:text-xl font-medium max-w-full sm:max-w-md md:max-w-xl lg:max-w-2xl text-center mx-auto mb-16">
        For over a decade, we have provided our clients with nothing short of
        the best. With over 85 reviews on Clutch, the companies we help express
        their satisfaction with our work.
      </p>

      {/* Main layout */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-10 relative">
        {/* Left side */}
        <div className="w-full md:w-[45%]">
          <h1 className=" text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center">
            Other’s
          </h1>
          {problems.map((text, index) => (
            <div
              key={index}
              className="flex items-center bg-[#F3F3F3] rounded-lg py-4 px-5 mb-4"
            >
              <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center mr-4">
                <span className="text-white text-xl font-bold">−</span>
              </div>
              <p className="text-black text-[22px] font-semibold">{text}</p>
            </div>
          ))}
        </div>
        {/* Right side */}
        <div className="w-full md:w-[45%]">
          <h1 className=" text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center">
            Our Solution
          </h1>
          {solutions.map((text, index) => (
            <div
              key={index}
              className="flex items-center bg-[#F3F3F3] rounded-lg py-4 px-5 mb-4"
            >
              <div className="w-8 h-8 bg-[#0830EA] rounded-md flex items-center justify-center mr-4">
                <span className="text-white text-xl font-bold">+</span>
              </div>
              <p className="text-black text-[22px] font-semibold">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection2;
