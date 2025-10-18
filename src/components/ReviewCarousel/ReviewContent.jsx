import React from "react";

const ReviewContent = () => {
  return (
    <>
      <div className=" container mx-auto w-full bg-black  flex justify-center">
        <div className="flex flex-col items-center text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold">
            Trusted by our
          </h1>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold mb-4">
            clients
          </h1>

          <p className="text-white text-base sm:text-lg md:text-xl font-medium max-w-full sm:max-w-md md:max-w-xl lg:max-w-2xl">
            For over a decade, we have provided our clients with nothing short
            of the best. With over 85 reviews on Clutch, the companies we help
            express their satisfaction with our work.
          </p>
        </div>
      </div>
      {/* review carousel  */}
    </>
  );
};

export default ReviewContent;
