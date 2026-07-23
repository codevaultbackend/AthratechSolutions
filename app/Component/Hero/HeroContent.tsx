"use client";

import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div
      className="
      flex
      w-full
      flex-col
      "
    >

      {/* Heading */}
      <h1
        className="
          w-full
          max-w-[600px]

          font-bricolage
          font-[500]

          text-[38px]
          leading-[1.08]
          tracking-[-2%]

          sm:text-[44px]
          md:text-[50px]
          lg:text-[53px]

          text-[#878787]
        "
      >

        <span className="text-black">
          Building{" "}
        </span>

        <span className="text-[#878787]">
          Digital Experiences
        </span>


   


        <span className="text-black max-[768px]:mx-[6px] px-[10px]">
          That <br/> Move
        </span>




        <span className="text-black">
          Your Brand Forward
        </span>

      </h1>


      {/* Responsive spacing */}
      <div
        className="
        h-8
        sm:h-10
        md:h-14
        max-[768px]:hidden
        "
      />
    </div>
  );
}