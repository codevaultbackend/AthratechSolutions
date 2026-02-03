"use client";

import Image from "next/image";

export default function Projects() {
  const projects = [
    { img: "/sanklpmochup.png", alt: "Mobile App" },
    { img: "/chugenmockup.png", alt: "Desktop Website" },
    { img: "/decovistamockup.png", alt: "Desktop Website" },
    { img: "/mpsmockup.png", alt: "Laptop Website" },
  ];

  return (
    <section className="relative bg-[#EFEFEF] py-[120px] max-md:py-[64px]">
      {/* ===== Heading ===== */}
      <div className="text-center mb-[80px] max-md:mb-[40px] px-4">
        <p className="font-calligraffitti text-[#7A7A7A] mb-3 flex gap-4 items-center justify-center text-[24px] max-md:text-[16px]">
          <span className="w-[124px] max-md:w-[60px] h-[1px] bg-gradient-to-r from-[#9C9C9C] to-[#DFDFDF]" />
          Projects
          <span className="w-[124px] max-md:w-[60px] h-[1px] bg-gradient-to-l from-[#9C9C9C] to-[#DFDFDF]" />
        </p>

        <h2 className="text-[56px] max-md:text-[32px] font-[400] font-bricolage leading-[1.1] text-black">
          Work Booming in the Market
        </h2>
      </div>

      {/* ===== Grid ===== */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[24px] max-md:gap-[16px] px-4">
        {projects.map((item, index) => (
          <div
            key={index}
            className="
              relative
              bg-[linear-gradient(155deg,#DFDFDF,#A1A1A1,#111111)]
              rounded-[60px] max-md:rounded-[28px]
              shadow-[2px_3px_11px_4px_rgba(0,0,0,0.15)]
              overflow-hidden
              flex items-center justify-center
            "
          >
            <Image
              src={item.img}
              alt={item.alt}
              width={628}
              height={577}
              className="
                w-full h-auto object-cover
              "
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
}
