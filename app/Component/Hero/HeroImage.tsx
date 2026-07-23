"use client";

import Image from "next/image";

export default function HeroImage() {
  return (
    <div
      id="hero-image-wrapper"
      className="
        relative
        flex
        h-full
        w-full
        items-end
        justify-center
        overflow-visible
      "
    >
      {/* =========================
          Background Glow
      ========================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[75%]
          -z-10
          h-[900px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#F8F8F8]
          opacity-90
          blur-[140px]
        "
      />

      {/* =========================
          Hero Image
      ========================== */}

      <div
        id="hero-image"
        className="
          relative
          flex
          w-full
          items-end
          justify-center
          will-change-transform
          transform-gpu
        "
      >
        <Image
          src="/Hero.png"
          alt="Hero"
          width={1024}
          height={833}
          priority
          draggable={false}
          sizes="
            (min-width: 1800px) 1024px,
            (min-width: 1536px) 900px,
            (min-width: 1280px) 820px,
            (min-width: 1024px) 720px,
            90vw
          "
          className="
block
w-full
h-auto

max-w-[560px]
md:max-w-[660px]
lg:max-w-[760px]
xl:max-w-[920px]
2xl:max-w-[1080px]
min-[2200px]:max-w-[1200px]

object-contain
"
        />
      </div>
    </div>
  );
}