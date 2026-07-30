"use client";

import Image from "next/image";

const meta = [
  {
    label: "Deliverables",
    value: "UI/UX, Strategy, Development",
  },
  {
    label: "Platform",
    value: "Mobile Application",
  },
];

export default function Overview() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 xl:px-16">

        {/* ===================================================== */}
        {/* HERO */}
        {/* ===================================================== */}

        <section className="mx-auto max-w-[1220px] pt-[110px] md:pt-[150px]">

          {/* Description */}

          <div className="max-w-[720px]">
            <h1
              className="
                font-inter
                text-[34px]
                leading-[1.28]
                tracking-[-0.04em]
                text-[#111]
                font-normal
                md:text-[48px]
                lg:text-[58px]
              "
            >
              <span className="font-semibold">Quick Cargo</span>{" "}
              connects customers, agency owners, and drivers through one
              intuitive platform for{" "}
              <span className="font-semibold">
                truck bookings,
              </span>{" "}
              <span className="font-semibold">
                route management,
              </span>{" "}
              and{" "}
              <span className="font-semibold">
                real-time shipment tracking.
              </span>
            </h1>
          </div>

          {/* Project Details */}

          <div
            className="
              mt-20
              flex
              flex-col
              gap-12
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            {/* Title */}

            <h2
              className="
                font-bricolage
                text-[42px]
                font-semibold
                tracking-[-0.04em]
                leading-none
                text-black
                md:text-[58px]
                lg:text-[72px]
              "
            >
              Quick Cargo
            </h2>

            {/* Meta */}

            <div
              className="
                grid
                grid-cols-2
                gap-x-16
                gap-y-8
                md:gap-x-24
                lg:flex
                lg:gap-24
              "
            >
              {meta.map((item) => (
                <div key={item.label}>
                  <p
                    className="
                      text-[12px]
                      uppercase
                      tracking-[0.2em]
                      text-[#8A8A8A]
                      font-medium
                    "
                  >
                    {item.label}
                  </p>

                  <p
                    className="
                      mt-3
                      text-[18px]
                      leading-[1.45]
                      font-medium
                      text-[#181818]
                    "
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Phone Mockup */}

          <div
            className="
              relative
              flex
              justify-center
            "
          >
            {/* Glow */}

            <div
              className="
                absolute
                bottom-10
                h-[110px]
                w-[340px]
                rounded-full
                bg-black/10
                blur-[55px]
              "
            />

            <Image
              src="/quick-hero.png"
              alt="Quick Cargo Mobile App"
              width={430}
              height={760}
              priority
              className="
                relative
                z-10
                w-full
                h-auto
                object-contain
                select-none
              "
            />
          </div>

        </section>

        {/* ===================================================== */}
        {/* PROBLEM & SOLUTION */}
        {/* ===================================================== */}
                <section className="relative mx-auto mt-[180px] max-w-[1440px]">

          {/* Left Title */}

          <h2
            className="
              absolute
              left-0
              top-0
              z-20

              font-bricolage
              font-semibold
              tracking-[-0.05em]

              text-[88px]
              leading-[0.92]

              text-[#202020]
            "
          >
            Problem &
            <br />
            Solution
          </h2>

          {/* White Card */}

          <div
            className="
              relative
              mt-[260px]

              overflow-visible

              rounded-[48px]

              bg-[#FAFAFA]

              px-[70px]
              pb-[70px]
              pt-[52px]

              shadow-[0_35px_120px_rgba(0,0,0,.08)]
            "
          >
            {/* Map */}

            <div
              className="
                absolute
                right-0
                -top-[210px]

                w-[930px]

                overflow-hidden

                rounded-tl-[220px]
                rounded-tr-[220px]
                rounded-bl-[220px]
              "
            >
              <Image
                src="/quickcargo/problem-map.png"
                alt=""
                width={930}
                height={520}
                className="h-auto w-full"
              />
            </div>

            {/* Badge */}

            <div
              className="
                relative
                z-20

                inline-flex
                items-center
                gap-4

                rounded-full

                bg-white

                px-7
                py-4

                shadow-sm
              "
            >
              <Image
                src="/quickcargo/problem-avatar.png"
                alt=""
                width={42}
                height={42}
              />

              <span
                className="
                  text-[30px]
                  font-medium
                  text-[#333]
                "
              >
                Problem
              </span>
            </div>

            {/* Description */}

            <p
              className="
                relative
                z-20

                mt-[85px]

                max-w-[1180px]

                text-[64px]

                leading-[1.26]

                tracking-[-0.03em]

                font-light

                text-[#2F2F2F]
              "
            >
              Customers, Transport Agencies, and Drivers struggle
              with fragmented logistics workflows,
              <span className="text-[#9E9E9E]">
                {" "}
                while trucks often return empty—leading to wasted
                capacity,
              </span>{" "}
              higher transportation costs, and inefficient freight
              movement.
            </p>
          </div>

          {/* Divider */}

          <div className="my-[90px] border-t border-dashed border-[#DDDDDD]" />

          {/* Solution Card */}

          <div
            className="
              relative
              overflow-hidden

              rounded-[38px]

              bg-[#EEF8EA]

              px-10
              py-10

              md:px-14
              md:py-14

              lg:px-16
              lg:py-16
            "
          >
            {/* Background Glow */}

            <div
              className="
                absolute
                -right-20
                -top-20

                h-[260px]
                w-[260px]

                rounded-full

                bg-[#52D226]/20

                blur-[90px]
              "
            />

            {/* Top */}

            <div
              className="
                relative
                z-10

                flex
                flex-col
                gap-8

                md:flex-row
                md:items-center
                md:justify-between
              "
            >
              <span
                className="
                  inline-flex
                  w-fit
                  items-center

                  rounded-full

                  bg-[#39C82D]

                  px-5
                  py-2

                  text-[14px]
                  font-medium
                  text-white
                "
              >
                <span className="mr-2 h-2.5 w-2.5 rounded-full bg-white" />
                Solution
              </span>

              <Image
                src="/quickcargo/users.png"
                alt="Users"
                width={120}
                height={42}
                className="h-auto w-[84px]"
              />
            </div>

            {/* Text */}

            <p
              className="
                relative
                z-10

                mt-10

                max-w-[920px]

                text-[20px]
                leading-[1.85]

                text-[#505050]

                lg:text-[22px]
              "
            >
              Quick Cargo unifies truck booking, fleet management,
              driver operations, and real-time shipment tracking
              into one seamless platform while maximizing truck
              utilization through a dedicated{" "}
              <span className="font-semibold text-black">
                Share Space
              </span>{" "}
              feature that helps reduce empty return trips.
            </p>
          </div>

        </section>

        {/* ===================================================== */}
        {/* APP SHOWCASE */}
        {/* ===================================================== */}
              </div>
    </section>
  );
}