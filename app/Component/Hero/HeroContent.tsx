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
          w-full
          max-w-[clamp(600px,42vw,900px)]

          font-bricolage
          font-medium

          text-[clamp(42px,4vw,82px)]
          leading-[0.98]
          tracking-[-0.05em]

          text-[#878787]
        "
      >
        <span className="text-[#202020]">
          Building{" "}
        </span>

        <span>
          Digital Experiences{" "}
        </span>

        <span className="text-[#202020]">
          That
          <br />
          Move{" "}
        </span>

        <span className="text-[#202020]">
          Your Brand Forward
        </span>
      </h1>

      {/* Desktop spacing */}

      <div className="hidden h-12 xl:block 2xl:h-16" />
    </div>
  );
}