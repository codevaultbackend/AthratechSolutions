"use client";

import Image from "next/image";

export default function RoleSection() {
  return (
    <section className="relative bg-white py-28 lg:py-40">

      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12 xl:px-16">

        <div className="mx-auto max-w-[1220px]">

          {/* =========================== */}
          {/* Heading */}
          {/* =========================== */}

          <div className="max-w-[960px]">

            <span className="text-[14px] font-medium uppercase tracking-[0.18em] text-[#9A9A9A]">
              Product Experience
            </span>

            <h2
              className="
                mt-5
                text-[38px]
                font-semibold
                leading-[1.06]
                tracking-[-0.04em]
                text-[#111]

                md:text-[52px]
                lg:text-[72px]
              "
            >
              Built for jewellery businesses that demand speed,
              accuracy and complete operational control.
            </h2>

            <p
              className="
                mt-8
                max-w-[760px]
                text-[17px]
                leading-[1.9]
                text-[#707070]
              "
            >
              Every screen was designed to reduce manual work,
              simplify inventory movement and make billing faster
              while maintaining complete visibility across every
              branch.
            </p>

          </div>

          {/* =========================== */}
          {/* Feature Grid */}
          {/* =========================== */}

          <div className="mt-20 grid grid-cols-12 gap-8">

            {/* Left */}

            <div className="col-span-12 lg:col-span-6">

              <div className="overflow-hidden rounded-[34px] bg-[#F6F6F6]">

                <Image
                  src="/projects/erp-system/dashboard-analytics.png"
                  alt="Analytics Dashboard"
                  width={900}
                  height={1100}
                  className="
                    h-auto
                    w-full
                    object-cover
                    transition
                    duration-700
                    hover:scale-[1.03]
                  "
                />

              </div>

            </div>

            {/* Right */}

            <div className="col-span-12 lg:col-span-6">

              <div className="overflow-hidden rounded-[34px] bg-[#F6F6F6]">

                <Image
                  src="/projects/erp-system/mobile-orders.png"
                  alt="Mobile Orders"
                  width={900}
                  height={1100}
                  className="
                    h-auto
                    w-full
                    object-cover
                    transition
                    duration-700
                    hover:scale-[1.03]
                  "
                />

              </div>

            </div>

          </div>
                    {/* ========================================= */}
          {/* Bottom Showcase */}
          {/* ========================================= */}

          <div className="mt-10 grid grid-cols-12 gap-8">

            {/* Left Info */}

            <div className="col-span-12 flex flex-col justify-between lg:col-span-4">

              <div>

                <span className="text-[14px] font-medium uppercase tracking-[0.18em] text-[#A0A0A0]">
                  Smart Workflow
                </span>

                <h3
                  className="
                    mt-4
                    text-[34px]
                    font-semibold
                    leading-[1.08]
                    tracking-[-0.04em]
                    text-[#111]

                    lg:text-[46px]
                  "
                >
                  Every screen is optimized for speed and efficiency.
                </h3>

                <p
                  className="
                    mt-6
                    max-w-[340px]
                    text-[16px]
                    leading-[1.8]
                    text-[#707070]
                  "
                >
                  Operators can scan, transfer, bill and monitor
                  inventory without switching between multiple
                  modules, reducing mistakes and saving valuable
                  business time.
                </p>

              </div>

              <div className="mt-10 overflow-hidden rounded-[30px] bg-[#F7F7F7]">

                <Image
                  src="/projects/erp-system/tracking-dashboard.png"
                  alt="Tracking Dashboard"
                  width={700}
                  height={520}
                  className="
                    h-auto
                    w-full
                    object-cover
                    transition-all
                    duration-700
                    hover:scale-[1.04]
                  "
                />

              </div>

            </div>

            {/* Right Large Image */}

            <div className="col-span-12 lg:col-span-8">

              <div className="overflow-hidden rounded-[34px] bg-[#F7F7F7]">

                <Image
                  src="/projects/erp-system/admin-dashboard.png"
                  alt="Admin Dashboard"
                  width={1400}
                  height={900}
                  className="
                    h-auto
                    w-full
                    object-cover
                    transition-all
                    duration-700
                    hover:scale-[1.03]
                  "
                />

              </div>

            </div>

          </div>

          {/* ========================================= */}
          {/* Quote */}
          {/* ========================================= */}

          <div className="mx-auto mt-28 max-w-[920px] text-center">

            <p
              className="
                text-[28px]
                font-medium
                leading-[1.45]
                tracking-[-0.03em]
                text-[#111]

                md:text-[40px]
                lg:text-[52px]
              "
            >
              "Technology should simplify operations, not complicate
              them. Every interaction was crafted to feel effortless."
            </p>

          </div>
                    {/* ========================================= */}
          {/* Bottom Spacer */}
          {/* ========================================= */}

          <div className="h-20 lg:h-28" />

        </div>

      </div>

      {/* ========================================= */}
      {/* Background Decoration */}
      {/* ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          bottom-[-280px]
          -translate-x-1/2
          h-[720px]
          w-[720px]
          rounded-full
          bg-[#F5F5FF]
          opacity-70
          blur-[180px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-40
          bg-gradient-to-b
          from-transparent
          to-white
        "
      />

    </section>
  );
}