import React from "react";
import logo1 from "../../assets/logos/arcticons_trustified.png";
import footerBGimg from "../../assets/images/Group 3 1.png";
import footerlogo from "../../assets/logos/hoover.png";
import ContactForm from "./ContactForm";
import { div } from "framer-motion/client";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="container mx-auto bg-black">
      {/* Footer top section */}
      <div className=" px-6 sm:px-10 md:px-16 lg:px-[100px] py-11 flex flex-col lg:flex-row justify-between  gap-10">
        {/* Left side */}
        <div className="w-full lg:w-[60%] flex flex-col items-center lg:items-start justify-center text-center lg:text-left mx-auto">
          <h1 className="text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] font-bold">
            Ready to scale
          </h1>

          <h1 className="text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] font-light italic relative -mt-4">
            <span className="relative inline-block z-20">
              stress-free?
              <span className="absolute right-0 bottom-1 sm:bottom-2 w-full h-[8px] sm:h-[10px] bg-[#0830EA] -z-10"></span>
            </span>
          </h1>

          <p className="text-[18px] sm:text-[20px] font-normal text-white w-[90%] sm:w-[82%] mt-4">
            Working with Hoover Agency isn’t about “outsourcing.” It’s about
            gaining a silent, reliable partner that feels like part of your own
            team.
          </p>

          <div className="space-y-4 mt-8">
            <div className="flex justify-start items-center">
              <img
                src={logo1}
                className="mr-2 w-[24px] h-[24px] object-contain"
                alt="icon"
              />
              <h1 className="text-lg sm:text-xl font-medium text-white">
                <span className="italic font-bold mr-1">
                  No long contracts.
                </span>
                Start small, scale as you need.
              </h1>
            </div>

            <div className="flex justify-start items-center">
              <img
                src={logo1}
                className="mr-2 w-[24px] h-[24px] object-contain"
                alt="icon"
              />
              <h1 className="text-lg sm:text-xl font-medium text-white">
                <span className="italic font-bold mr-1">
                  White-label guaranteed.
                </span>
                Everything is branded as your work.
              </h1>
            </div>

            <div className="flex justify-start items-start">
              <img
                src={logo1}
                className="mr-2 w-[24px] h-[24px] object-contain"
                alt="icon"
              />
              <h1 className="text-lg sm:text-xl font-medium text-white w-[90%] sm:w-[75%]">
                <span className="italic font-bold mr-1">
                  Consistent quality.
                </span>
                Every project is checked, tested, and polished before you ever
                deliver it.
              </h1>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-[40%]">
          <ContactForm />
        </div>
      </div>
      {/* Footer middle section */}
      <img
        src={footerBGimg}
        className="block mx-auto w-full max-w-[900px] px-4 sm:px-6 md:px-10 lg:px-0"
        alt="footer background"
      />

      {/* Footer bottom section */}
      <div className="px-4 sm:px-8 md:px-14 lg:px-[100px] py-6 border-t-2 border-[#ffffff33] flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
        {/* Logo */}
        <img
          src={footerlogo}
          className="h-[50px] w-[100px] sm:h-[50px] sm:w-[95px] object-contain"
          alt="Footer Logo"
        />

        {/* Text */}
        <h1 className="text-white text-xs sm:text-sm md:text-base font-normal">
          © 2025 Hoover Agency. All rights reserved.
        </h1>

        {/* Social Icons */}
        <div className="flex justify-center sm:justify-end gap-3 sm:gap-4">
          <BsFacebook
            color="white"
            className="w-[22px] h-[22px] sm:w-[25px] sm:h-[25px]"
          />
          <BsInstagram
            color="white"
            className="w-[22px] h-[22px] sm:w-[25px] sm:h-[25px]"
          />
          <IoLogoLinkedin
            color="white"
            className="w-[22px] h-[22px] sm:w-[25px] sm:h-[25px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
