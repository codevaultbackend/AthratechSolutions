"use client";

export default function HeroContent() {
  return (
    <div
      className="
        flex
        w-full
        flex-col
        items-start
      "
    >
      {/* ========================= */}
      {/* Heading */}
      {/* ========================= */}

     <h1
  className="
    max-w-[960px]
    font-bricolage
    font-medium
    text-[clamp(48px,3vw,76px)]
    leading-[0.98]
    tracking-[-0.05em]
    text-[#878787]
  "
>
  <span className="text-[#202020]">Building </span>
  <span>Digital</span>

  <br />

  <span>Experiences </span>
  <span className="text-[#202020]">That Move</span>

  <br />

  <span className="text-[#202020]">Your Brand Forward</span>
</h1>

      {/* Desktop spacing */}

      <div className="hidden h-12 xl:block 2xl:h-16" />
    </div>
  );
}