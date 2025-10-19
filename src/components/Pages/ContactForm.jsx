import React from "react";

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center  bg-transparent">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-6 sm:p-8 md:p-10">
        <form className="space-y-4">
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400"
          />

          {/* Agency / Business Name */}
          <input
            type="text"
            placeholder="Agency / Business Name"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400"
          />

          {/* Message */}
          <textarea
            placeholder="What’s the biggest delivery challenge you face?"
            rows="4"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400 resize-none"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className=" px-4.5 py-3.5 bg-[#0047FF] text-white font-medium  rounded-[10px] shadow "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
