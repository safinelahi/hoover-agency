import { motion } from "framer-motion";

const UpperCarousel = ({ firstImages = [] }) => {
  return (
    <div className="container flex mx-auto gap-5 overflow-hidden bg-black py-3 md:h-[512px] h-[300px]
     relative my-[100px]">
      {/* First vertical column */}
      <div className="relative flex flex-col overflow-hidden h-full">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="flex flex-col"
        >
          {firstImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`upper-carousel-${index}`}
              className="h-auto w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 object-cover"
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="flex flex-col"
        >
          {firstImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`upper-carousel-duplicate-${index}`}
              className="h-auto w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 object-cover"
            />
          ))}
        </motion.div>
      </div>

      {/* 2nd vertical column */}
      <div className="relative flex flex-col overflow-hidden h-full">
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="flex flex-col"
        >
          {firstImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`upper-carousel-${index}`}
              className="h-auto w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 object-cover"
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="flex flex-col"
        >
          {firstImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`upper-carousel-duplicate-${index}`}
              className="h-auto w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 object-cover"
            />
          ))}
        </motion.div>
      </div>

      {/* 3nd vertical column - hidden on mobile */}
      <div className="hidden sm:flex relative flex-col overflow-hidden h-full">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="flex flex-col"
        >
          {firstImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`upper-carousel-${index}`}
              className="h-auto w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 object-cover"
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="flex flex-col"
        >
          {firstImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`upper-carousel-duplicate-${index}`}
              className="h-auto w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 object-cover"
            />
          ))}
        </motion.div>
      </div>

      {/* 4nd vertical column - hidden on mobile */}
      <div className="hidden sm:flex relative flex-col overflow-hidden h-full">
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="flex flex-col"
        >
          {firstImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`upper-carousel-${index}`}
              className="h-auto w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 object-cover"
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="flex flex-col"
        >
          {firstImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`upper-carousel-duplicate-${index}`}
              className="h-auto w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 object-cover"
            />
          ))}
        </motion.div>
      </div>

      {/* 5nd vertical column - hidden on mobile */}
      <div className="hidden sm:flex relative flex-col overflow-hidden h-full">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="flex flex-col"
        >
          {firstImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`upper-carousel-${index}`}
              className="h-auto w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 object-cover"
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="flex flex-col"
        >
          {firstImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`upper-carousel-duplicate-${index}`}
              className="h-auto w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 object-cover"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default UpperCarousel;
