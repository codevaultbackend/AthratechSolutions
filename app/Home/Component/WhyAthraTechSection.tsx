"use client";

import React from "react";

export default function WhyAthraTechSection() {
  return (
    <section
      className="
        w-full bg-white
        px-4 py-6
        sm:px-6 sm:py-8
        lg:px-8 lg:py-10
      "
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <div
          className="
            w-full
            overflow-hidden
            rounded-[22px]
            bg-[#000]
            px-5 py-7

            sm:rounded-[30px]
            sm:px-8 sm:py-10

            md:rounded-[36px]
            md:px-10 md:py-12

            lg:min-h-[316px]
            lg:rounded-[42px]
            lg:px-[18px]
            lg:py-[18px]
          "
        >
          <div className="mx-auto w-full max-w-[1104px]">
            <h2
              className="
                font-bricolage
                text-[30px]
                font-[400]
                leading-[110%]
                tracking-[-0.04em]
                text-white

                sm:text-[34px]

                md:text-[40px]

                lg:mt-[66px]
                lg:text-[48px]
                lg:leading-[1.2]
              "
            >
              Why Athratech?
            </h2>

            <p
              className="
                mt-5
                max-w-full

                font-inter
                text-[#BFBFBF]

                text-[15px]
                font-[400]
                leading-[160%]
                tracking-[0]

                sm:text-[18px]
                sm:leading-[150%]

                md:mt-10
                md:text-[22px]
                md:leading-[140%]

                lg:mt-12
                lg:text-[26px]
                lg:leading-[100%]
              "
            >
              Athratech scales today&apos;s digital assets into businesses, one
              API at a time. We focus on creating digital workflows, smooth user
              interfaces, and efficient solutions that simplify operations,
              strengthen performance, and support long-term growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}