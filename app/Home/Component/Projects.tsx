"use client";

import Image from "next/image";

type ProjectItem = {
  img: string;
  alt: string;
  slug: string;
  scale: number;
  wrapperClass: string;
};

export default function Projects() {
  const projects: ProjectItem[] = [
    {
      img: "/mpsmockup.png",
      alt: "Mobile App Mockup",
      slug: "https://manpowersolution.org.in/",
      scale: 1.06,
      wrapperClass: `
        top-[10px]
        left-[-6%]
        w-[110%]
        max-md:left-[-3%]
        max-md:w-[106%]
        
      `,
    },
    {
      img: "/decovistamockup.png",
      alt: "Desktop Website Mockup",
      slug: "https://decovista.in/",
      scale: 1.04,
      wrapperClass: `
        top-[1.4%]
        left-[-17%]
        w-[150%]
        max-[768px]:top-[-46%]
        max-[768px]:w-[148%]
        max-[768px]:h-[200%]
        max-[768px]:left-[-16%]
        

      `,
    },
    {
      img: "/chugenmockup.png",
      alt: "Desktop Website Mockup",
      slug: "https://www.chugenhatcheries.com/",
      scale: 1.05,
      wrapperClass: `
        top-[6.7%]
        left-[-16%]
        w-[138%]
         max-[768px]:top-[-41%]
        max-[768px]:w-[138%]
        max-[768px]:h-[200%]
        max-[768px]:left-[-17%]
      
      `,
    },
    {
      img: "/sanklpmochup.png",
      alt: "Laptop Website Mockup",
      slug: "https://sankalpsetufoundation.org/",
      scale: 1.38,
      wrapperClass: `
        top-[40%]
        left-[-145%]
        w-[360%]
        h-[300%]
         max-[768px]:top-[16%]
        max-[768px]:w-[148%]
        max-[768px]:h-[200%]
        max-[768px]:left-[-37%]
     
      `,
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

        <h2 className="text-[56px] font-[400] leading-[100%] text-black font-bricolage max-md:text-[26px] max-md:font-[500]">
          Work Booming in the Market
        </h2>
      </div>

      {/* ===== Grid ===== */}

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[24px] px-4">
        {projects.map((item, index) => (
          <a
            key={index}
            href={item.slug}
            target="_blank"
            rel="noreferrer"
            className="
              relative
              w-full
              overflow-hidden
              flex items-end justify-center
              bg-[linear-gradient(205deg,#DFDFDF,#A1A1A1,#111111)]
              shadow-[2px_3px_5px_2px_#A1A1A1]
              rounded-[22px] sm:rounded-[28px] md:rounded-[60px]
              h-[260px]
              max-md:h-[340px]
              md:h-[520px]
              lg:h-[577px]
            "
          >

            {/* INNER STAGE */}

            <div className="relative w-full h-full px-[12px] sm:px-[16px] md:px-[22px] pb-[8px] md:pb-[10px]">

              <div
                className={`
                  absolute
                  ${item.wrapperClass}
                  h-full
                `}
              >

                <div
                  className="relative w-full h-full"
                  style={{
                    transform: `scale(${item.scale})`,
                    transformOrigin: "bottom center",
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    priority={index < 2}
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-contain pointer-events-none select-none"
                  />

                </div>

              </div>

            </div>

          </a>
        ))}
      </div>
    </section>
  );
}