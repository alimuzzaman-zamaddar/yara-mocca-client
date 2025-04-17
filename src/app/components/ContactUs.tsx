"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="bg-[#FDFBFA] py-20 font-poppins">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-center text-[#002B5B] text_heading text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-[584] leading-[130%] mb-4">
          Contact us
        </h2>
        <p className="text-[#070707] text-center font-poppins text-base sm:text-lg md:text-[20px] font-normal leading-[160%] tracking-[0.1px] max-w-3xl mx-auto mb-12">
          Let’s work together. Whether you’re looking to expand into Saudi Arabia <br />
          or explore new investment frontiers, Admass is your trusted partner.
        </p>

        <div className="flex flex-col lg:flex-row gap-12 justify-between">
          {/* Left Contact Details */}
          <div className="space-y-6 text-[#070707] font-poppins text-base sm:text-lg md:text-[20px] font-normal leading-[160%] tracking-[0.1px]">
            <div className="flex items-start gap-3">
              <MapPin className="text-[#002B5B]" size={20} />
              <span>Alwurud District, Riyadh, Saudi Arabia</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-[#002B5B]" size={20} />
              <span>+966 11 419353</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-[#002B5B]" size={20} />
              <span>admass@admassgroup.com</span>
            </div>
          </div>

          {/* Right Form */}
          <form className="w-full lg:w-1/2 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#002B5B]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#002B5B]"
            />
            <input
              type="text"
              placeholder="Company"
              className="w-full border border-gray-300 rounded-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#002B5B]"
            />
            <input
              type="text"
              placeholder="Service Area of Interest"
              className="w-full border border-gray-300 rounded-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#002B5B]"
            />
            <textarea
              placeholder="Type Your Message"
              className="w-full border border-gray-300 rounded-sm px-4 py-2 h-28 focus:outline-none focus:ring-1 focus:ring-[#002B5B]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#002B5B] text-white px-6 py-2 rounded-sm hover:bg-[#014380] transition-all"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
