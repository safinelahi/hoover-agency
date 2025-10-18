import { motion } from "framer-motion";

const ComparisonSection = () => {
  const problems = [
    "You’ve got more projects than your team can handle...?",
    "You’re sick of paying sky-high rates for decent talent...?",
    "Deadlines stressing you out and still getting missed...?",
    "You’re turning down work because your team can’t cover all the skills...?",
    "Client support eating up all your valuable time, leaving no room for the actual work",
    "Freelancers ghosting, miscommunicating, and driving you crazy...?",
    "Worried someone might steal your clients if you outsource...?",
    "Margins shrinking and or worse profits slipping away...?",
  ];

  const solutions = [
    "Because we jump in and scale with you so instantly.",
    "Because we give you skilled people without draining your budget.",
    "Because we deliver on time without the last-minute chaos.",
    "Because we bring the tech stack and expertise you don’t have in-house.",
    "Because we take care of updates and fixes while you focus on growth.",
    "Because we’re one reliable team, one process, no drama.",
    "Because we’re 100% white-label — invisible but dependable.",
    "Because we keep quality high and costs low, so you actually win.",
  ];

  return (
    <div className="container mx-auto bg-black my-[100px] relative py-14 px-4">
      {/* Heading */}
      <h1 className="text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] font-bold text-center">
        We Solve the Challenges That{" "}
      </h1>

      <div className="flex flex-wrap justify-center gap-3 mb-20">
        <h1 className="text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] font-bold text-center">
          Slow Your
        </h1>
        <h1 className="text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] font-normal italic text-center relative">
          <span className="relative inline-block z-20">
            Agency Down
            <span className="absolute right-0 bottom-4.5 w-full h-[8px] sm:h-[10px] bg-[#0830EA] -z-10"></span>
          </span>
        </h1>
      </div>

      {/* Main section */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-6 relative">
        {/* Left side */}
        <div className="w-full md:w-[45%]">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-20 text-center">
            Seen this before?
          </h1>
          {problems.map((item, index) => (
            <div
              key={index}
              className="border-b border-white py-4 sm:py-5 w-full"
            >
              <p className="text-white text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-bold">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Center line */}
        <div className="hidden md:block w-px bg-white h-[875px] absolute left-1/2 transform -translate-x-1/2 top-[22.5%]"></div>

        {/* Right side */}
        <div className="w-full md:w-[45%] mt-10 md:mt-0">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-20 text-center">
            Seen this before?
          </h1>
          {solutions.map((item, index) => (
            <div
              key={index}
              className="border-b border-white py-4 sm:py-5 w-full flex items-start"
            >
              <motion.span
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-white text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-bold mr-2"
              >
                👉
              </motion.span>
              <p className="text-white text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-bold">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;
