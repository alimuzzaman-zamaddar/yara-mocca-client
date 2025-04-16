"use client";

import Image from "next/image";

export default function TrustCompliance() {
  return (
    <section className="bg-white py-20 font-poppins text-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-[#002B5B] text-5xl font-ttinter font-semibold mb-6">
            Trust & Compliance
          </h2>

          <div className="space-y-4 text-gray-800 text-[15px] leading-[26px] font-medium">
            <div className="flex gap-3 items-start">
              <Image src="/check-icon.png" alt="check" width={25} height={25} />
              <span>Licensed by the Ministry of Commerce of Saudi Arabia.</span>
            </div>

            <div className="flex gap-3 items-start">
              <Image src="/check-icon.png" alt="check" width={25} height={25} />
              <span>Licensed by the Chamber of Commerce of Saudi Arabia</span>
            </div>

            <div className="flex gap-3 items-start">
              <Image src="/check-icon.png" alt="check" width={25} height={25} />
              <span>
                Recognized by financial institutions and industry leaders for our strong track record, financial credibility, and transparent practices.
              </span>
            </div>

            <div className="flex gap-3 items-start">
              <Image src="/check-icon.png" alt="check" width={25} height={25} />
              <span>Client-first philosophy rooted in ethics, trust, and confidentiality.</span>
            </div>

            <div className="flex gap-3 items-start">
              <Image src="/check-icon.png" alt="check" width={25} height={25} />
              <span>
                Secure operations and regulatory alignment with both local and international standards.
              </span>
            </div>

            <div className="flex gap-3 items-start">
              <Image src="/check-icon.png" alt="check" width={25} height={25} />
              <span>
                Regular audits and reviews to ensure continued financial integrity and corporate accountability.
              </span>
            </div>
          </div>
        </div>

        {/* Right Image with SVG Frame */}
        <div className="w-full lg:w-1/2 relative">
          <Image
            src="/trust-handshake.png"
            alt="Trust and Compliance"
            width={600}
            height={450}
            className="rounded-md relative z-10"
          />

          {/* Decorative corner border */}
          <div className="absolute -bottom-5 -right-5 z-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="176" height="191" viewBox="0 0 176 191" fill="none">
              <mask id="path-1-inside-1" fill="white">
                <path d="M0.75 8C0.75 3.58173 4.33172 0 8.75 0H167.75C172.168 0 175.75 3.58172 175.75 8V183C175.75 187.418 172.168 191 167.75 191H8.75C4.33172 191 0.75 187.418 0.75 183V8Z" />
              </mask>
              <path d="M0.75 0H175.75H0.75ZM187.75 183C187.75 194.046 178.796 203 167.75 203H20.75C9.7043 203 0.75 194.046 0.75 183V179C0.75 179 4.33172 179 8.75 179H163.75L187.75 183ZM0.75 191V0V191ZM167.75 0C178.796 0 187.75 8.9543 187.75 20V183C187.75 194.046 178.796 203 167.75 203L163.75 179V8C163.75 3.58172 163.75 0 163.75 0H167.75Z" fill="#002B5B" mask="url(#path-1-inside-1)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
