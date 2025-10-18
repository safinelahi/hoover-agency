import { motion } from "framer-motion";
import reviews from "../../data/reviews.json";
import ReviewContent from "./ReviewContent";

function ReviewCarousel() {
  return (
    <>
    {/* review carousel 01 */}
      <div className="container mx-auto w-full overflow-hidden py-8 sm:py-12 bg-black">
        <motion.div
          className="flex gap-4 sm:gap-6 md:gap-8"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className={`
                flex-shrink-0
                bg-white
                rounded-xl
                shadow-lg
                p-4 sm:p-6
                min-w-[240px] 
                sm:min-w-[300px] 
                md:min-w-[350px] 
                lg:min-w-[400px]
                max-w-[90%] 
                sm:max-w-none
                ${index % 2 === 0 ? "-rotate-1" : "rotate-1"}
              `}
            >
              {/* Rating */}
              <div className="flex mb-2 sm:mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span
                    key={i}
                    className="text-yellow-500 text-base sm:text-lg"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Comment */}
              <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed w-100">
                {review.comment}
              </p>

              {/* Profile */}
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-gray-800">
                    {review.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {review.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* review content */}
      <ReviewContent />

      {/* review carousel 02 */}
      <div className="container mx-auto w-full overflow-hidden py-8 sm:py-12 bg-black">
        <motion.div
          className="flex gap-4 sm:gap-6 md:gap-8"
          initial={{ x: "-100%"}}
          animate={{ x: 0 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className={`
                flex-shrink-0
                bg-white
                rounded-xl
                shadow-lg
                p-4 sm:p-6
                min-w-[240px] 
                sm:min-w-[300px] 
                md:min-w-[350px] 
                lg:min-w-[400px]
                max-w-[90%] 
                sm:max-w-none
                ${index % 2 === 0 ? "-rotate-1" : "rotate-1"}
              `}
            >
              {/* Rating */}
              <div className="flex mb-2 sm:mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span
                    key={i}
                    className="text-yellow-500 text-base sm:text-lg"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Comment */}
              <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed w-100">
                {review.comment}
              </p>

              {/* Profile */}
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-gray-800">
                    {review.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {review.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default ReviewCarousel;
