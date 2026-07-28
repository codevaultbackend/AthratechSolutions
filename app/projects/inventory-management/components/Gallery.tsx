"use client";

import Image from "next/image";

type GalleryProps = {
  showcaseImage: string;
  showcaseImageAlt: string;

  behanceUrl?: string;
};

export default function Gallery({
  showcaseImage,
  showcaseImageAlt,
  behanceUrl = "#",
}: GalleryProps) {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-full

          px-5
          sm:px-6
          md:px-0

          pb-16
          md:pb-32
        "
      >
        {/* ========================================= */}
        {/* Large Showcase */}
        {/* ========================================= */}

        <div
          className="
            relative
            overflow-hidden

            rounded-[20px]
            md:rounded-[32px]

            bg-[#0B0B0B]
          "
        >
          <Image
            src={showcaseImage}
            alt={showcaseImageAlt}
            width={1800}
            height={1200}
            className="
              block
              w-full
              h-auto
              object-cover
            "
          />
        </div>


        {/* ========================================= */}
        {/* Bottom Text */}
        {/* ========================================= */}

        <div
          className="
            mt-16
            md:mt-[151px]

            flex
            justify-center
          "
        >
          <p
            className="
              mx-auto
              max-w-[760px]

              text-center

              text-[28px]
              sm:text-[32px]
              md:text-[40px]

              leading-[1.15]
              md:leading-[100%]

              font-[400]
              text-[#8E8E8E]

              font-sfpro

              tracking-[-0.03em]
            "
          >
            <span className="font-medium text-[#111]">
              And that's not all
            </span>

            {" "}— there are more{" "}

            <span
              className="
                font-semibold
                text-[#000000]
                transition
              "
            >
              Roles
            </span>

            {" "}which are explained in our{" "}

            <span
              className="
                font-[400]
                text-[#8E8E8E]
                font-sfpro
              "
            >
              Behance
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}