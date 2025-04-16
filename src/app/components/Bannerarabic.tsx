"use client";

import Image from "next/image";

const Bannerarabic = () => {
  return (
    <section className="relative h-[800px] w-full">
      {/* Background Image */}
      <Image
        src="/banner.png" 
        alt="Banner Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
        <div className="text-center max-w-[1200px] text-white">
          <h1 className="text-3xl md:text-[64px] font-bold leading-tight md:leading-[60px]  ">
          تعزيز مستقبل الاستثمار في المملكة العربية السعودية وخارجها
          </h1>
          <p className="mt-6 text-[16px] md:text-[20px] font-light text-white/90  leading-relaxed md:w-[80%] mx-auto font-poppins">
          تقديم خدمات عالمية المستوى في العقارات، والخدمات اللوجستية، والضيافة، والصناعات الناشئة - وتمكين النمو من خلال الابتكار والتأثير منذ عام ١٩٨٨ م. معترف بها من قبل المؤسسات المالية الرائدة لمصداقيتنا وموثوقيتنا.          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-md text-sm font-medium font-poppins hover:bg-gray-100 transition">
            استكشف أقسامنا 
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-md text-sm font-medium font-poppins hover:bg-white hover:text-black transition">
            شارك مع أدماس
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bannerarabic;
