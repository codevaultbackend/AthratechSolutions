"use client";

import Image from "next/image";

type OverviewProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export default function Overview({
  title,
  description,
  image,
  imageAlt,
}: OverviewProps) {
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
          md:pb-[77px]
        "
      >
        {/* Content */}

        <div className="max-w-full">
          <h2
            className="
              text-[#0E0E0E]

              font-semibold

              tracking-[-0.04em]

              leading-[1.1]

              text-[34px]
              sm:text-[46px]
              md:text-[56px]
              lg:text-[56px]
            "
          >
            {title}
          </h2>


          <p
            className="
              mt-5
              md:mt-6

              max-w-[760px]

              font-[400]

              text-[#606060]

              leading-7
              md:leading-8

              text-[16px]
              sm:text-[18px]
              md:text-xl
            "
          >
            {description}
          </p>
        </div>


        {/* Showcase */}

        <div
          className="
            mt-10
            md:mt-16

            overflow-hidden

            rounded-[20px]
            md:rounded-[34px]

            bg-black
          "
        >
          <Image
            src={image}
            alt={imageAlt}
            width={1800}
            height={1100}
            className="
              block

              w-full
              h-auto

              object-cover
            "
          />
        </div>
      </div>
    </section>
  );
}