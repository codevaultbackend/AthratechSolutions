"use client";

import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      img: "/sanklpmochup.png",
      alt: "Mobile App",
    },
    {
      img: "/chugenmockup.png",
      alt: "Desktop Website",
    },
    {
      img: "/decovistamockup.png",
      alt: "Desktop Website",
    },
    {
      img: "/mpsmockup.png",
      alt: "Laptop Website",
    },
  ];

  return (
    <section className="relative bg-[#EFEFEF] py-[120px]" id="projects">
      {/* ===== Heading ===== */}
      <div className="text-center mb-[80px]">
        <p className="font-calligraffitti text-[#7A7A7A] mb-2 flex gap-4 items-center justify-center text-[24px] font-[400]">
          <span className="inline-block w-[124px] h-[1px] bg-[linear-gradient(231deg,__#9C9C9C_42%,_#DFDFDF)] "></span>
          Projects <span className="inline-block w-[124px] h-[1px] bg-[linear-gradient(152deg,__#9C9C9C_42%,_#DFDFDF)] "></span></p>
        <h2 className="text-[56px] font-[400] font-bar leading-[100%] text-black max-[768px]:text-[24px] max-[768px]:font-[500] font-bricolage ">
          Work Booming in the Market
        </h2>
      </div>

      {/* ===== Grid ===== */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[24px] px-4">
        {projects.map((item, index) => (
          <div
            key={index}
            className="relative  bg-[linear-gradient(155deg,#DFDFDF,#A1A1A1,#111111)]  p-[0px] flex items-center justify-center !max-w-[628px] !max-h-[577px] !rounded-[60px] shadow-[2px_3px_11px_4px_#A1A1A1]  overflow-clip shadow-[2px 3px 11px 4px gray]"
          >
            <Image
              src={item.img}
              alt={item.alt}
              width={520}
              height={380}
              className="object-cover h-full w-full "
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
}
