"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/app/context/services";

export default function WhatWeExcelAtSection() {
  const mainService = services.find((service) => service.cardType === "large");
  const wideService = services.find((service) => service.cardType === "wide");
  const smallService = services.find((service) => service.cardType === "small");

  if (!mainService || !wideService || !smallService) return null;

  return (
    <section className="w-full bg-white px-4 py-[55px] sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1390px]">
        {/* Heading */}
        <div className="relative z-10 mb-12 text-center sm:mb-16 md:mb-20 lg:mb-24">
          <p
            className="
              mx-auto mb-4 flex w-full max-w-[320px] items-center justify-center
              font-calligraffitti text-[18px] text-[#7A7A7A]
              sm:max-w-[380px] sm:text-[20px]
              md:max-w-[460px] md:text-[24px]
            "
          >
            <span className="h-[1px] flex-1 bg-gradient-to-r from-[#9C9C9C] to-[#DFDFDF]" />
            <span className="shrink-0 px-3 sm:px-4">Our Services</span>
            <span className="h-[1px] flex-1 bg-gradient-to-l from-[#9C9C9C] to-[#DFDFDF]" />
          </p>

          <h2
            className="
              mx-auto max-w-[320px]
              text-center font-bricolage font-[400]
              text-[28px] leading-[1.1]
              sm:max-w-[450px] sm:text-[38px]
              md:max-w-[600px] md:text-[48px]
              lg:max-w-[720px] lg:text-[56px]
            "
          >
            What we <span className="text-[#8A8A8A]">excel </span> at ?
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10">
          {/* LEFT LARGE CARD */}
          <Link
            href={`/services/${mainService.slug}`}
            className="
              group relative overflow-hidden rounded-[32px] bg-[#030303]
              min-h-[320px]
              sm:min-h-[420px]
              md:min-h-[520px]
              lg:min-h-[560px]
            "
          >
            <Image
              src={mainService.image}
              alt={mainService.alt}
              fill
              priority
              className="
                object-cover transition duration-700 ease-out
                group-hover:scale-[1.035] max-[768px]:!h-[67%] max-[768px]:!left-0 max-[768px]:!top-auto bottom-0
              "
            />

            <div
              className="
                absolute left-5 top-5 z-10
                max-w-[85%]
                sm:left-8 sm:top-8
                lg:left-10 lg:top-10
              "
            >
              <h3
                className="
                  font-bricolage font-[500]
                  text-[28px] leading-[1]
                  text-white
                  sm:text-[34px]
                "
              >
                {mainService.title}
              </h3>

              <p
                className="
                  mt-3 max-w-[420px]
                  font-inter text-[14px]
                  leading-[1.5] text-[#DCDCDC]
                  sm:text-[16px]
                "
              >
                {mainService.description}
              </p>
            </div>
          </Link>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-1 gap-5 lg:gap-10">
            {/* FRONTEND & BACKEND */}
            <Link
              href={`/services/${wideService.slug}`}
              className="
                group relative overflow-hidden rounded-[32px] bg-[#4E641F]

                min-h-[420px]
                xs:min-h-[450px]
                max-[768px]:!min-h-[270px]
                md:min-h-[480px]
                lg:min-h-[255px]
              "
            >
              {/* IMAGE */}
              <div
                className="
                  pointer-events-none absolute left-1/2 top-6 z-[1]
                  h-[150px] w-[260px] -translate-x-1/2

                  xs:h-[170px] xs:w-[300px]
                      width: 100%;
    max-width: 100%;
    max-[768px]:!h-[85%]
    height: 60%;
    top: -2px;
    left: 132px;
                  max-[768px]:top-[-2px] max-[768px]:h-[85%] max-[768px]:left-[30px] max-[768px]:max-w-[100%]

                  md:h-[260px] md:w-[460px]

                  lg:left-[-25px] lg:bottom-[-25px] lg:top-auto
                  lg:h-[260px] lg:w-[400px]
                  lg:translate-x-0
                "
              >
                <Image
                  src={wideService.image}
                  alt={wideService.alt}
                  fill
                  priority
                  className="
                    object-contain transition-transform duration-700 ease-out
                    group-hover:scale-[1.035]
                    lg:object-left-bottom
                  "
                />
              </div>

              {/* MOBILE OVERLAY */}
              <div
                className="
                  absolute inset-x-0 top-0 z-[2] h-[60%]
                  bg-gradient-to-b from-[#4E641F]/0 via-[#4E641F]/10 to-[#4E641F]
                  lg:hidden
                "
              />

              {/* DESKTOP OVERLAY */}
              <div
                className="
                  absolute inset-y-0 right-0 z-[2] hidden w-[65%]
                  bg-gradient-to-l from-[#4E641F] via-[#4E641F]/95 to-transparent
                  lg:block
                "
              />

              {/* CONTENT */}
              <div
                className="
                  absolute bottom-7 left-5 right-5 z-[4]

                  max-[768px]:!bottom-auto max-[768px]:!top-[40px] max-[768px]:!w-[40%] max-[768px]:!right-[30px] max-[768px]:!left-auto

                  lg:left-auto lg:right-10 lg:top-1/2
                  lg:w-[48%] lg:-translate-y-1/2
                "
              >
                <h3
                  className="
                    font-bricolage font-[500]
                    text-[24px]
                    leading-[1.05]
                    tracking-[-0.03em]
                    text-white

                    xs:text-[28px]
                    sm:text-[34px]
                    lg:text-[32px]
                  "
                >
                  {wideService.title}
                </h3>

                <p
                  className="
                    mt-4 max-w-[520px]
                    font-inter text-[14px]
                    leading-[1.5] text-white/80

                    sm:text-[16px]
                    lg:text-[15px]
                  "
                >
                  {wideService.description}
                </p>
              </div>
            </Link>

            {/* MARKETING */}
            <Link
              href={`/services/${smallService.slug}`}
              className="
                group relative overflow-hidden rounded-[32px] bg-[#111]

                min-h-[280px]
                sm:min-h-[320px]
                md:min-h-[360px]
                lg:min-h-[255px]
              "
            >
              <Image
                src={smallService.image}
                alt={smallService.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="
                  object-cover transition duration-700 ease-out
                  group-hover:scale-[1.035]
                "
              />

              <div className="absolute inset-0 bg-black/20" />

              <div
                className="
                  absolute inset-x-0 bottom-0 h-[70%]
                  bg-gradient-to-t from-black/85 via-black/50 to-transparent

                  lg:inset-y-0 lg:right-0 lg:left-auto
                  lg:h-auto lg:w-[62%]
                  lg:bg-gradient-to-l lg:from-black/80 lg:via-black/45 lg:to-transparent
                "
              />

              <div
                className="
                  absolute bottom-6 left-6 right-6 z-10

                  sm:bottom-8 sm:left-8 sm:right-8

                  lg:left-auto lg:right-10 lg:top-1/2
                  lg:w-[45%] lg:-translate-y-1/2
                "
              >
                <h3
                  className="
                    font-bricolage font-[500]
                    text-[28px]
                    leading-[1.05]
                    tracking-[-0.04em]
                    text-white

                    sm:text-[34px]
                    lg:text-[32px]
                  "
                >
                  {smallService.title}
                </h3>

                <p
                  className="
                    mt-4 max-w-[420px]
                    font-inter text-[14px]
                    leading-[1.5] text-white/85

                    sm:text-[16px]
                    lg:text-[14px]
                  "
                >
                  {smallService.description}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}