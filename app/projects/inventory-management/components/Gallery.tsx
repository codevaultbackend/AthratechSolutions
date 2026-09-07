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
              max-w-[1112px]

              text-center

              text-[40px]
              

              leading-[100%]
              md:leading-[100%]

              font-[274]
              text-[#8E8E8E]

              !font-[family-name:var(--font-sf-pro)]

              tracking-[0%]
            "
          >
            <span className="font-normal text-[#000000]">
              And that's not all
            </span>

            {" "}— there are more{" "}

            <span
              className="
              font-normal
                text-[#000000]
                transition
              "
            >
              Roles
            </span>

            {" "}which are explained in our{" "}

            <span
              className="
                font-[274]
                text-[#8E8E8E]
              
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