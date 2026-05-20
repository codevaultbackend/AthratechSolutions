"use client";

import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

type PlatformService = {
  title: string;
  content: string;
};

type PlatformCTA = {
  text: string;
  buttonText: string;
  href: string;
  ariaLabel?: string;
};

type PlatformsProps = {
  badge?: string;
  heading: string | React.ReactNode;
  description: string | React.ReactNode;
  services: PlatformService[];
  cta?: PlatformCTA;
  defaultOpenIndex?: number;
  sectionId?: string;
  className?: string;
};

export default function Platforms({
  badge = "Digital systems",
  heading,
  description,
  services = [],
  cta,
  defaultOpenIndex = 0,
  sectionId = "services",
  className = "",
}: PlatformsProps) {
  const [activeIndex, setActiveIndex] = useState<number>(defaultOpenIndex);

  if (!services.length) {
    return null;
  }

  return (
    <section
      id={sectionId}
      className={`relative  bg-white py-[72px] sm:py-[96px] lg:py-[118px] ${className}`}
    >
      <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1fr] lg:items-start">
          <div>
            <h2 className="max-w-[540px] font-bricolage text-[34px] font-semibold leading-[0.96] tracking-[-0.075em] text-black sm:text-[46px] md:text-[54px] lg:text-[58px]">
              {heading}
            </h2>
          </div>
        </div>

        {/* Accordion */}
        <div className="mt-[44px] overflow-hidden border-t border-black/10 sm:mt-[58px]">
          {services.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={`${item.title}-${index}`}
                className="border-b border-black/10"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-5 py-[22px] text-left outline-none transition sm:py-[27px]"
                >
                  <span className="font-inter text-[22px] font-medium leading-[100%] tracking-[0%] text-[#454545] ">
                    {item.title}
                  </span>

                  <span
                    className={[
                      "grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full",
                      "font-inter text-[20px] font-medium leading-none transition-colors duration-300",
                      "group-hover:bg-black group-hover:text-white",
                      isOpen
                        ? "bg-black text-white"
                        : "bg-[#F4F3F7] text-black/65",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={[
                    "grid transition-all duration-300 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[720px] pb-[24px] font-inter text-[13px] font-normal leading-[1.75] tracking-[-0.025em] text-[#6D6D6D] sm:pb-[28px] sm:text-[15px]">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        {cta ? (
          <div className="mt-[34px] rounded-[22px] bg-[#F3F3F3] px-4 py-4 shadow-[0_16px_50px_rgba(0,0,0,0.045)] sm:px-5 sm:py-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[640px] font-inter text-[16px] font-medium leading-[1.25] text-black sm:text-[20px] lg:text-[22px]">
                {cta.text}
              </p>

              <Link
                href={cta.href}
                aria-label={cta.ariaLabel ?? cta.buttonText}
                className="inline-flex w-fit shrink-0 rounded-full bg-[linear-gradient(175deg,#F5F5F5,#BDBDBD,#8F8F8F,#666666)] p-[6px] shadow-[0_0_28px_rgba(120,120,120,0.35)]"
              >
                <span className="flex h-[38px] items-center justify-center gap-3 rounded-full border-[0.5px] border-white bg-black px-4 shadow-inner sm:h-[40px]">
                  <span className="whitespace-nowrap font-inter text-[13px] font-medium tracking-tight text-white sm:text-[14px]">
                    {cta.buttonText}
                  </span>

                  <FaArrowRight className="text-white" />
                </span>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}