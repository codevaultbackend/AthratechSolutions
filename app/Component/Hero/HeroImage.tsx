"use client";

import Image from "next/image";

export default function HeroImage() {
  return (
    <div
      id="hero-image-wrapper"
      className="
        relative
        isolate
        flex
        items-end
        justify-center
        w-full
        max-[768px]:min-h-fit
        min-h-[650px]
        lg:min-h-[850px]
        overflow-visible
      "
    >


      


      {/* =====================================
          Back Cloud Layer
      ===================================== */}
      <div
        className="
          absolute

          left-1/2
          bottom-[-120px]

          -translate-x-1/2

          z-[666666]

          pointer-events-none

          w-full

          max-w-[140vw]
        "
      >
        <Image
          src="/herocloude.png"
          alt="cloud background"

          width={1400}
          height={350}

          className="
            w-full
            h-auto
            object-contain
            select-none
          "
        />
      </div>



      {/* =====================================
          Front Cloud Layer
      ===================================== */}
      <div
        className="
          absolute

          left-1/2
          bottom-[-100px]

          -translate-x-1/2

          z-[9999999]

          pointer-events-none

          w-[100%]

        "
      >
        <Image
          src="/cloude2.png"
          alt="cloud foreground"

          width={1200}
          height={300}

          className="
            w-full
            h-auto
            object-contain
            select-none
          "
        />
      </div>



      {/* =====================================
          Hero Image
      ===================================== */}
      <div
        id="hero-image"
        className="
          relative

          z-20

          flex
          items-end
          justify-center

          will-change-transform

          transform-gpu
        "
      >

        <Image
          src="/Hero.png"
          alt="Hero"

          priority

          draggable={false}

          width={1400}
          height={1100}

          sizes="
            (min-width:2560px) 1000px,
            (min-width:1920px) 900px,
            (min-width:1536px) 820px,
            (min-width:1280px) 720px,
            90vw
          "

          className="
            block

            w-[clamp(720px,55vw,1300px)]

            h-auto

            object-contain

            select-none
          "
        />

      </div>

    </div>
  );
}