"use client";

import Image from "next/image";

type RoleSectionProps = {
  roleTitle: string;
  roleDescription: string;

  roleImageleft: string;

  roleImage: string;
  roleImageAlt: string;

  dashboardImage: string;
  dashboardImageAlt: string;

  clientTitle: string;
  clientDescription: string;
};

export default function RoleSection({
  roleTitle,
  roleDescription,
  roleImage,
  roleImageAlt,
  dashboardImage,
  dashboardImageAlt,
  roleImageleft,
}: RoleSectionProps) {
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

        {/* ============================ */}
        {/* Top */}
        {/* ============================ */}

        <div
          className="
            grid
            grid-cols-1

            gap-8
            lg:gap-10

            lg:grid-cols-[1fr_520px]

            items-center
          "
        >

          {/* Left */}

          <div className="max-w-[560px]">

            <h3
              className="
                text-[#111]

                font-semibold

                tracking-[-0.04em]

                text-[30px]
                sm:text-[38px]
                md:text-[46px]
              "
            >
              {roleTitle}
            </h3>


            <p
              className="
                mt-4
                md:mt-5

                text-neutral-500

                leading-7
                md:leading-8

                text-[16px]
                md:text-lg
              "
            >
              {roleDescription}
            </p>

          </div>


          {/* Right */}

          <div
            className="
              relative

              overflow-hidden

              rounded-[22px]
              md:rounded-[42px]
            "
          >
            <Image
              src={roleImageleft}
              alt={roleImageAlt}
              width={900}
              height={900}
              className="
                block
                w-full
                h-auto
                object-cover
              "
            />
          </div>

        </div>


        {/* ============================ */}
        {/* Bottom */}
        {/* ============================ */}

        <div
          className="
            mt-8
            md:mt-10

            grid
            grid-cols-1

            gap-6
            lg:gap-8

            lg:grid-cols-[0.78fr_0.57fr]
          "
        >

          {/* Dashboard */}

          <div
            className="
              overflow-hidden

              rounded-[22px]
              md:rounded-[42px]

              bg-[#F3F3F3]
            "
          >
            <Image
              src={roleImage}
              alt={roleImageAlt}
              width={1400}
              height={504}
              className="
                block
                w-full
                h-auto
                object-cover
              "
            />
          </div>


          {/* Client Story */}

          <div
            className="
              overflow-hidden

              rounded-[22px]
              md:rounded-[42px]

              bg-[#F6F6F6]

              border
              border-[#E7E7E7]
            "
          >
            <Image
              src={dashboardImage}
              alt={dashboardImageAlt}
              width={1400}
              height={900}
              className="
                block
                w-full
                h-auto
                object-cover
              "
            />
          </div>

        </div>

      </div>
    </section>
  );
}