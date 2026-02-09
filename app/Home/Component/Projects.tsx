"use client";

import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      img: "/mpsmockup.png",
      alt: "Laptop Website",
      slug: "https://manpowersolution.org.in/",
      // fine-tune
      scale: 1.06,
      bottom: -6,
    },
    {
      img: "/decovistamockup.png",
      alt: "Desktop Website",
      slug: "https://decovista.in/",
      scale: 1.04,
      bottom: -10,
    },
    {
      img: "/chugenmockup.png",
      alt: "Desktop Website",
      slug: "https://www.chugenhatcheries.com/",
      scale: 1.05,
      bottom: -8,
    },
    {
      img: "/sanklpmochup.png",
      alt: "Mobile App",
      slug: "https://sankalpsetufoundation.org/",
      scale: 1.08,
      bottom: -14,
    },
  ];

  return (
    <section className="relative bg-[#EFEFEF] py-[120px]" id="projects">
      {/* ===== Heading ===== */}
      <div className="text-center mb-[80px] max-md:mb-[48px] px-4">
        <p className="font-calligraffitti text-[#7A7A7A] mb-2 flex gap-4 items-center justify-center text-[24px] max-md:text-[16px] font-[400]">
          <span className="inline-block w-[124px] max-md:w-[60px] h-[1px] bg-[linear-gradient(231deg,#9C9C9C_42%,#DFDFDF)]" />
          Projects
          <span className="inline-block w-[124px] max-md:w-[60px] h-[1px] bg-[linear-gradient(152deg,#9C9C9C_42%,#DFDFDF)]" />
        </p>

        <h2 className="text-[56px] font-[400] leading-[100%] text-black font-bricolage max-md:text-[24px] max-md:font-[500]">
          Work Booming in the Market
        </h2>
      </div>

      {/* ===== Grid ===== */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[24px] px-4">
        {projects.map((item, index) => (
          <a
            key={index}
            href={item.slug}
            target="_blank"
            className="
              relative
              bg-[linear-gradient(205deg,#DFDFDF,#A1A1A1,#111111)]
              shadow-[2px_3px_5px_2px_#A1A1A1]
              rounded-[60px]
              overflow-hidden
              flex items-end justify-center

              /* desktop stays same */
              max-w-[558px]
              h-[577px]

              /* mobile */
              max-md:max-w-full
              max-md:h-[420px]
            "
          >
            {/* INNER STAGE (forces same baseline & spacing) */}
            <div
              className="
                relative w-full
                h-[540px] max-md:h-[500px]
                px-[22px] max-md:px-[14px]
                pb-[10px]
              "
            >
              <div
                className="absolute flex !items-end w-full h-full"
              >
                <img
                  src={item.img}
                  alt={item.alt}


                  className="object-contain m "
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
