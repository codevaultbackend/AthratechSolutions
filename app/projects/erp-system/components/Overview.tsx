"use client";

import Image from "next/image";

const meta = [
  {
    label: "Deliverables",
    value: "UI/UX, Strategy, Development",
  },
  {
    label: "Platform",
    value: "CRM, SAAS, Sales Tool",
  },
];

export default function Overview() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* ===================================================== */}
        {/* INTRODUCTION */}
        {/* ===================================================== */}

        <div className="mx-auto max-w-[1220px] pt-16 sm:pt-20 md:pt-24 lg:pt-32 xl:pt-36">
          <h1
            className="
              max-w-[1100px]
              font-inter
              font-normal
              tracking-[-0.03em]
              text-[#000]
              text-[28px]
              leading-[1.25]
              sm:text-[36px]
              md:text-[46px]
              md:leading-[1.2]
              lg:text-[56px]
            "
          >
            A <span>centralized ERP</span> built for the jewellery trade,
            managing gold and silver ornaments across branches with real-time
            inventory, secure transfers and complete item-level traceability.
          </h1>
        </div>

        {/* ===================================================== */}
        {/* ERP ECOSYSTEM */}
        {/* ===================================================== */}

        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-[1220px]">
          <section className="w-full bg-white">
            <div
              className="
                flex
                flex-col
                gap-10
                lg:flex-row
                lg:items-end
                lg:justify-between
              "
            >
              {/* Heading */}

              <h2
                className="
                  font-bricolage
                  font-semibold
                  tracking-[-0.04em]
                  text-[#111]
                  text-[34px]
                  leading-none
                  sm:text-[46px]
                  md:text-[56px]
                  lg:text-[64px]
                "
              >
                ERP Ecosystem
              </h2>

              {/* Meta */}

              <div
                className="
                  grid
                  grid-cols-1
                  gap-8
                  sm:grid-cols-2
                  sm:gap-10
                  lg:flex
                  lg:flex-wrap
                  lg:gap-16
                "
              >
                {meta.map((item) => (
                  <div
                    key={item.label}
                    className="min-w-[170px] max-w-[260px]"
                  >
                    <p
                      className="
                        mb-2
                        text-[13px]
                        sm:text-[14px]
                        font-medium
                        uppercase
                        tracking-[0.18em]
                        text-[#666]
                      "
                    >
                      {item.label}
                    </p>

                    <p
                      className="
                        text-[#191919]
                        font-medium
                        leading-[1.35]
                        text-[16px]
                        sm:text-[18px]
                        lg:text-[20px]
                      "
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ===================================================== */}
          {/* LAPTOP SHOWCASE */}
          {/* ===================================================== */}

          <div
            className="
              mt-10
              sm:mt-12
              lg:mt-14
              overflow-hidden
              rounded-[18px]
              sm:rounded-[26px]
              lg:rounded-[34px]
              border
              border-neutral-200
              bg-[#F7F7F7]
            "
          >
            <Image
              src="/erp-hero.png"
              alt="ERP Dashboard"
              width={2200}
              height={1500}
              priority
              className="
                block
                h-auto
                w-full
                object-cover
                select-none
              "
            />
          </div>
        </div>
        {/* ===================================================== */}
        {/* AMBITIOUS GOALS */}
        {/* ===================================================== */}

        <div className="mx-auto mt-16 sm:mt-20 md:mt-24 lg:mt-32 max-w-[1072px]">
          <div>
            <h2
              className="
                max-w-[960px]
                font-semibold
                tracking-[-0.04em]
                text-[#111]
                text-[34px]
                leading-[1.08]
                sm:text-[42px]
                md:text-[48px]
                lg:text-[56px]
              "
            >
              Ambitious goals to become the most trusted ERP for the jewellery
              trade in India.
            </h2>

            <p
              className="
                mt-6
                max-w-[900px]
                text-[#606060]
                font-normal
                text-[16px]
                leading-[1.7]
                sm:text-[18px]
                lg:mt-8
                lg:text-[20px]
              "
            >
              A modern ERP designed for jewellery businesses, simplifying
              inventory, billing, transfers, branch management and reporting
              while giving every employee real-time visibility into stock
              movement.
            </p>
          </div>

          {/* ===================================================== */}
          {/* FEATURE GRID */}
          {/* ===================================================== */}

          <div
            className="
              mt-12
              grid
              grid-cols-1
              gap-8
              sm:mt-16
              lg:mt-20
              lg:grid-cols-12
              lg:gap-7
            "
          >
            {/* ================= LEFT IMAGE ================= */}

            <div className="lg:col-span-7">
              <div
                className="
                  overflow-hidden
                  rounded-[18px]
                  bg-[#0D0D0D]
                  sm:rounded-[24px]
                  lg:rounded-[34px]
                "
              >
                <Image
                  src="/bottomleft.png"
                  alt="Phone Billing"
                  width={900}
                  height={1200}
                  className="
                    block
                    h-auto
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-[1.02]
                  "
                />
              </div>
            </div>

            {/* ================= RIGHT COLUMN ================= */}

            <div className="flex flex-col lg:col-span-5">
              <div
                className="
                  overflow-hidden
                  rounded-[18px]
                  sm:rounded-[24px]
                  lg:rounded-[30px]
                "
              >
                <Image
                  src="/bottomright.png"
                  alt="QR Scanner"
                  width={700}
                  height={900}
                  className="
                    block
                    h-auto
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-[1.02]
                  "
                />
              </div>

              {/* Bottom Banner */}

              <div className="mt-6 sm:mt-8 lg:mt-10">
                <Image
                  src="/bottom.png"
                  alt="Scanner Banner"
                  width={410}
                  height={95}
                  className="
                    h-auto
                    w-full
                    max-w-[410px]
                    object-contain
                  "
                />
              </div>
            </div>
          </div>

          {/* ===================================================== */}
          {/* BOTTOM FEATURE GRID */}
          {/* ===================================================== */}

          <div
            className="
              mt-14
              grid
              grid-cols-1
              gap-8
              sm:mt-20
              lg:mt-[127px]
              lg:grid-cols-2
              lg:gap-7
            "
          ></div>
          {/* ================= LEFT CARD ================= */}

          <div className="flex flex-col">
            <p
              className="
                  font-sfpro
                  text-[#000]
                  font-light
                  tracking-[-0.02em]
                  text-[22px]
                  leading-[1.35]
                  sm:text-[24px]
                  md:text-[26px]
                  lg:text-[28px]
                "
            >
              No more{" "}
              <span className="font-normal">
                blind transfers
              </span>
              , every piece travels with full{" "}
              <span className="font-normal">
                security
              </span>
              , accountability, and{" "}
              <span className="font-normal">
                visibility
              </span>
              .
            </p>

            <div
              className="
                  mt-6
                  sm:mt-7
                  overflow-hidden
                  rounded-[18px]
                  sm:rounded-[24px]
                  lg:rounded-[30px]
                "
            >
              <Image
                src="/securetransport.png"
                alt="Secure Transportation"
                width={720}
                height={520}
                className="
                    block
                    h-auto
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-[1.02]
                  "
              />
            </div>
          </div>

          {/* ================= RIGHT CARD ================= */}

          <div>
            <div
              className="
                  overflow-hidden
                  rounded-[18px]
                  sm:rounded-[24px]
                  lg:rounded-[30px]
                "
            >
              <Image
                src="/erpdashboard.png"
                alt="ERP Dashboard"
                width={1200}
                height={760}
                className="
                    block
                    h-auto
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-[1.02]
                  "
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================== */}
      {/* FLOATING PHONE */}
      {/* ===================================================== */}

      <div className="relative mt-16 sm:mt-20 md:mt-24 lg:mt-32 xl:mt-40">
        <div className="flex justify-center px-4">
          <Image
            src="/bottom image.png"
            alt="ERP Mobile Dashboard"
            width={900}
            height={1600}
            priority
            className="
                h-auto
                w-full
                max-w-[320px]
                sm:max-w-[420px]
                md:max-w-[520px]
                lg:max-w-[640px]
                xl:max-w-[760px]
                2xl:max-w-[900px]
                object-contain
                select-none
              "
          />
        </div>
      </div>

      {/* ===================================================== */}
      {/* SECTION END */}
      {/* ===================================================== */}

      <div className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-36" />
    </section>
  );
}