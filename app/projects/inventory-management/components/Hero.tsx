"use client";

import Image from "next/image";

type MetaItem = {
  label: string;
  value: string;
};

type HeroProps = {
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  meta: MetaItem[];
};

export default function Hero({
  heroDescription,
  heroImage,
  heroImageAlt,
  meta,
}: HeroProps) {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          w-full

          px-5
          sm:px-6
          md:px-0

          pt-10
          md:pt-20

          pb-16
          md:pb-20
        "
      >
        {/* Description */}

        <div>
          <p
            className="
              text-[#000000]

              font-inter
              font-[400]

              leading-[1.15]
              md:leading-[1.25]

              tracking-[-0.03em]

              text-[28px]
              sm:text-[36px]
              md:text-[48px]
              lg:text-[56px]
            "
          >
            {heroDescription}
          </p>
        </div>


        {/* Heading + Meta */}

        <div
          className="
            mt-12
            md:mt-20

            flex
            flex-col

            gap-8

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <h1
            className="
              font-semibold
              font-bricolage

              text-[#111111]

              tracking-[-0.04em]

              text-[42px]
              sm:text-[56px]
              md:text-[64px]
            "
          >
            IMS Dashboard
          </h1>


          <div
            className="
              flex

              flex-wrap
              gap-8

              sm:gap-12

              md:gap-12
            "
          >
            {meta.map((item) => (
              <div key={item.label}>
                <p
                  className="
                    mb-2

                    text-[14px]
                    sm:text-[16px]

                    font-[500]
                    font-geist

                    tracking-[0.18em]

                    text-[#525252]
                  "
                >
                  {item.label}
                </p>

                <p
                  className="
                    text-[#191919]

                    leading-[110%]

                    text-[16px]
                    md:text-[20px]

                    font-medium
                  "
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>


        {/* Hero Image */}

        <div
          className="
            mt-10
            md:mt-14
            lg:mt-16
          "
        >
          <div
            className="
              relative

              overflow-hidden

              rounded-[20px]
              md:rounded-[28px]

              bg-[#EFEFEF]
            "
          >
            <Image
              src={heroImage}
              alt={heroImageAlt}
              width={1800}
              height={1100}
              priority
              className="
                block

                w-full
                h-auto

                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}