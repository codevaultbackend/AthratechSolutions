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
      <div className="mx-auto !max-w-full ">

        {/* ===================================================== */}
        {/* HERO */}
        {/* ===================================================== */}

        <section className="mx-auto max-w-full pt-[110px] max-[768px]:pt-[50px]">

          {/* Description */}

          <div className="max-w-full">
            <h1
              className="
                font-inter
                text-[50px]
                leading-[100%]
                tracking-[0%]
                text-[#000000]
                font-[300]
                max-[768px]:text-[32px]
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
                text-[64px]
                max-[768px]:text-[32px]
                font-semibold
                tracking-[0%]
                leading-normal
                text-black
                
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
           

            <Image
              src="/quick-hero.png"
              alt="Quick Cargo Mobile App"
              width={630}
              height={760}
              priority
              className="
                relative
                max-[767px]:scale-[1.4]
                scale-[1.3]
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
                <section className="relative mx-auto mt-[80px] max-w-full">

          {/* Left Title */}

          <h2
            className="
              absolute
              left-0
              top-0
              z-20

              font-sfpro
              font-[510]
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

        </section>

        {/* ===================================================== */}
        {/* APP SHOWCASE */}
        {/* ===================================================== */}
              </div>
    </section>
  );
}