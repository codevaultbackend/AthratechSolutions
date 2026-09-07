"use client";

import Image from "next/image";

const values = [
{
icon: "/innovation.png",
title: "Innovation",
description:
"Pioneering AI and Gen AI solutions for next-level healthcare service",
},
{
icon: "/integrity.png",
title: "Integrity",
description:
"Built with compliance-first architecture and enterprise-grade safeguards",
},
{
icon: "/collabration.png",
title: "Collaboration",
description:
"Built with compliance-first architecture and enterprise-grade safeguards",
},
{
icon: "/execelance.png",
title: "Excellence",
description:
"Pioneering AI and Gen AI solutions for next-level healthcare service",
},
{
icon: "/costomersucess.png",
title: "Customer Success",
description:
"Built with compliance-first architecture and enterprise-grade safeguards",
},
];

export default function Mission() {
return ( <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-[0px]">
<div
className="
relative
mx-auto
w-full
max-w-full
      px-4
      sm:px-6
      md:px-8
      lg:pl-8
      lg:pr-8
      xl:px-0
    "
  >
    {/* =========================
        Mission
    ========================== */}

    <div className="mx-auto w-full max-w-5xl text-center">
      <p
        className="
          mb-4
          mt-[2px]

          font-calligraffitti
          font-[400]
          leading-[100%]
          tracking-[4%]
          text-[#818181]

          text-[20px]
          sm:text-[22px]
          md:text-[24px]
        "
      >
        Our Mission
      </p>

      <h2
        className="
          mx-auto
          max-w-[900px]

          font-inter
          font-[500]
          leading-[110%]
          tracking-[0%]
          text-[#494949]

          text-[30px]
          sm:text-[36px]
          md:text-[42px]
          lg:text-[46px]
          xl:text-[48px]
        "
      >
        To empower businesses with scalable,
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>
        innovative and reliable digital
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>
        solutions{" "}
        <span className="text-[#B5B5B5]">
          that drive growth and long-term success.
        </span>
      </h2>
    </div>

    {/* Spacer */}

    <div
      className="
        h-14
        sm:h-16
        md:h-24
        lg:h-[120px]
        xl:h-[137px]
      "
    />

    {/* =========================
        Vision
    ========================== */}

    <div
      className="
        grid
        grid-cols-1
        items-center

        gap-10
        sm:gap-12
        md:gap-14
        lg:gap-12
        xl:gap-16

        lg:grid-cols-[30%_65%]
        px-[72px]
        max-[768px]:px-[16px]
      "
    >
      {/* Vision Heading */}

      <div className="w-full">
        <p
          className="
            mb-4
            sm:mb-6
            lg:mb-8

            font-calligraffitti
            font-[400]
            text-[#818181]

            text-[20px]
            sm:text-[22px]
            md:text-[24px]
          "
        >
          Our Vision
        </p>

        <h2
          className="
            font-bricolage
            font-[400]
            leading-[100%]
            tracking-[-4%]
            text-[#262626]

            text-[38px]
            sm:text-[44px]
            md:text-[50px]
            lg:text-[52px]
            xl:text-[56px]
          "
        >
          Shaping the
          <br />
          Future Through
          <br />
          Innovation
        </h2>
      </div>

      {/* Vision Card */}

      <div
        className="
          flex
          w-full
          max-w-[797px]
          items-center

          rounded-[20px]
          sm:rounded-[24px]
          md:rounded-[28px]
          lg:rounded-[32px]

          border
          border-neutral-200
          bg-white

          p-5
          sm:p-6
          md:p-8

          shadow-sm
        "
      >
        <div
          className="
            flex
            w-full
            flex-col
            items-center

            gap-6
            sm:gap-8
            md:gap-10
            lg:flex-row
            lg:gap-12
            xl:gap-[77px]

            text-center
            lg:text-left
          "
        >
          <div
            className="
              relative
              shrink-0
              overflow-hidden
              rounded-full

              h-[140px]
              w-[140px]

              sm:h-[170px]
              sm:w-[170px]

              md:h-[190px]
              md:w-[190px]

              lg:h-[200px]
              lg:w-[200px]

              xl:h-[214px]
              xl:w-[214px]
            "
          >
            <Image
              src="/about-circle.png"
              alt="Vision"
              fill
              sizes="(max-width: 640px) 140px, (max-width: 768px) 170px, (max-width: 1024px) 190px, 214px"
              className="object-cover"
            />
          </div>

          <div className="w-full flex-1">
            <p
              className="
                font-[400]
                leading-[140%]
                tracking-[0%]
                text-[#494949]

                text-[15px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
              "
            >
              To become a globally trusted technology partner by delivering
              meaningful digital experiences and future-ready software
              solutions that empower businesses to innovate, scale, and
              succeed.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Spacer */}

    <div
      className="
        h-16
        sm:h-20
        md:h-24
        lg:h-[120px]
        xl:h-[154px]
      "
    />

    {/* =========================
        Technological Ecosystem
    ========================== */}

    <div className="mb-10 text-center sm:mb-12 md:mb-14 lg:mb-16 ">
      <h2
        className="
          font-bricolage
          font-[400]
          leading-[110%]
          tracking-[-3%]
          text-neutral-900

          text-[34px]
          sm:text-[40px]
          md:text-[46px]
          lg:text-[52px]
          xl:text-[56px]
          xl:leading-[48px]
        "
      >
        Technological Ecosystem
      </h2>
    </div>

    {/* =========================
        Values Grid
    ========================== */}

    <div
      className="
        grid
        grid-cols-1

        gap-4
        sm:gap-5
        md:gap-6
        lg:gap-8
        px-[72px] max-[768px]:px-[16px]

        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {values.map((value) => (
        <div
          key={value.title}
          className="
            group
            w-full

            rounded-[16px]
            sm:rounded-[18px]
            lg:rounded-[20px]

            border-0
            bg-[#F8F8F8]

            p-5
            sm:p-6
            lg:p-8

            transition-all
            duration-300

            hover:border-neutral-300
            hover:bg-white
            hover:shadow-xl
          "
        >
          <div
            className="
              mb-5
              flex
              h-[50px]
              w-[50px]
              items-center
              justify-center
              rounded-2xl

              transition-transform
              duration-300

              group-hover:rotate-6

              sm:h-[55px]
              sm:w-[55px]
            "
          >
            <Image
              src={value.icon}
              alt={value.title}
              height={55}
              width={55}
              className="h-full w-full object-contain"
            />
          </div>

          <h3
            className="
              mt-5
              mb-2

              font-geist
              font-[500]
              leading-[130%]
              text-[#0F0F0F]

              text-[20px]
              sm:text-[21px]
              lg:mt-[31px]
              lg:mb-3
              lg:text-[23px]
              lg:leading-[31px]
            "
          >
            {value.title}
          </h3>

          <p
            className="
              font-geist
              leading-[160%]
              text-neutral-600

              text-[15px]
              sm:text-[16px]
              lg:text-base
              lg:leading-7
            "
          >
            {value.description}
          </p>
        </div>
      ))}
    </div>

    {/* Decorative Background */}

    <div className="pointer-events-none absolute left-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-neutral-100 blur-[120px]" />

    <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[450px] w-[450px] rounded-full bg-neutral-100 blur-[140px]" />
  </div>
</section>


);
}
