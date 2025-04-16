"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#002B5B] text-white py-10 font-poppins">
      <div className="max-w-2xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/footerlogo.png"
            alt="Admass Logo"
            width={200}
            height={140}
            className="object-contain"
          />
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-right">
          <h4 className="text-white text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:underline text-sm">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-sm">
                Our Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-sm">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm text-gray-300">
        © 2025 Admass International Group. All rights reserved.
      </div>
    </footer>
  );
}
