import React from "react";
import { motion } from "motion/react";

const BottomCarousel = ({ upperImages = [], lowerImages = [], middleImages = [] }) => {
  return (
    <div className="container mx-auto overflow-x-hidden bg-black py-10 ">
      {/*  Upper carousel  */}
      <div className="relative flex overflow-hidden">
        <div className="absolute inset-0 bg-[#12111166] z-10 pointer-events-none"></div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {upperImages.map((image, index) => (
            <img
              className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 w-auto pr-8 object-cover"
              src={image}
              key={index}
              alt={`upper-carousel-${index}`}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {upperImages.map((image, index) => (
            <img
              className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 w-auto pr-8 object-cover"
              src={image}
              key={index}
              alt={`upper-carousel-${index}`}
            />
          ))}
        </motion.div>
      </div>

      {/* middle carousel */}
      <div className="relative flex overflow-hidden pt-7 ">
        <div className="absolute inset-0 bg-[#12111166] z-10 pointer-events-none"></div>

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {middleImages.map((image, index) => (
            <img
              className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 w-auto pr-8 object-cover"
              src={image}
              key={index}
              alt={`upper-carousel-${index}`}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {middleImages.map((image, index) => (
            <img
              className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 w-auto pr-8 object-cover"
              src={image}
              key={index}
              alt={`upper-carousel-${index}`}
            />
          ))}
        </motion.div>
      </div>

      {/*  Lower carousel  */}
      <div className="relative flex overflow-hidden pt-7 ">
        <div className="absolute inset-0 bg-[#12111166] z-10 pointer-events-none"></div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {lowerImages.map((image, index) => (
            <img
              className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 w-auto pr-8 object-cover"
              src={image}
              key={index}
              alt={`lower-carousel-${index}`}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {lowerImages.map((image, index) => (
            <img
              className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 w-auto pr-8 object-cover"
              src={image}
              key={index}
              alt={`lower-carousel-${index}`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BottomCarousel;
