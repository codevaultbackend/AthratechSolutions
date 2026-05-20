"use client";

import type { ReactNode } from "react";

type ProcessStep = {
  title: string;
  text: string;
};

type DesktopPosition = {
  x: string;
  top: string;
  lineHeight?: string;
  width: string;
};

export type ProcessContent = {
  title: ReactNode;
  description: ReactNode;
  steps: ProcessStep[];
};

type ProcessProps = {
  content: ProcessContent;
  desktopPositions?: DesktopPosition[];
  sectionId?: string;
  className?: string;
};



const defaultDesktopPositions: DesktopPosition[] = [
  {
    x: "19.4%",
    top: "55.5%",
    lineHeight: "33.5%",
    width: "230px",
  },
  {
    x: "46.1%",
    top: "47.2%",
    lineHeight: "31.5%",
    width: "245px",
  },
  {
    x: "71.6%",
    top: "39.2%",
    lineHeight: "31.5%",
    width: "255px",
  },
  {
    x: "97.6%",
    top: "27.2%",
    lineHeight: "35%",
    width: "255px",
  },
];

export default function Process({
  content,
  desktopPositions = defaultDesktopPositions,
  sectionId = "process",
  className = "",
}: ProcessProps) {
  


  return (
    <section
      id={sectionId}
      className={`relative overflow-hidden  font-sans ${className}`}
    >
      <div className="mx-auto w-full max-w-[1440px] px-[34px] py-[112px] max-[768px]:px-4 max-[768px]:py-[60px] max-[768px]:pb-[10px] md:px-10 md:py-[88px] lg:px-14 lg:py-[92px] xl:px-[72px] xl:py-[96px] 2xl:px-[84px]">
        <div className="grid items-start md:grid-cols-[0.95fr_1.05fr]">
          <h2 className="max-w-[720px] font-bricolage text-[64px] font-semibold leading-[1.03] tracking-[-0.065em] text-[#111111] max-[768px]:text-[32px] sm:text-[54px] lg:text-[64px]">
            {content.title}
          </h2>

          <p className="mt-[40px] ml-auto max-w-[760px] font-sfpro text-[20px] font-medium leading-[130%] tracking-[0.04em] text-[#A5A5A5] max-[768px]:text-[16px] md:mt-0 md:max-w-[620px] md:pt-[72px] md:leading-[130%] lg:pt-[78px] xl:pt-[86px] xl:text-[20px]">
            {content.description}
          </p>
        </div>

        {/* Desktop / Tablet Timeline */}
        <div className="relative mt-10 hidden aspect-[928/340] w-full md:block lg:mt-12 xl:mt-14">
          {content.steps.map((step, index) => {
            const position =
              desktopPositions[index] ??
              desktopPositions[desktopPositions.length - 1] ??
              defaultDesktopPositions[0];

            return (
              <article
                key={`${step.title}-${index}`}
                className="absolute -translate-x-full text-right"
                style={{
                  left: position.x,
                  top: position.top,
                  width: position.width,
                }}
              >
                <h3 className="whitespace-nowrap font-sfpro text-[13px] font-medium leading-none tracking-[0.08em] text-[#111111] lg:text-[15px] xl:text-[18px]">
                  {step.title}
                </h3>

                <p className="ml-auto mt-[8px] max-w-[175px] text-[8.5px] font-normal leading-[1.25] tracking-[0%] text-[#a2a2a2] lg:max-w-[190px] lg:text-[10px] xl:max-w-[210px] xl:text-[11px]">
                  {step.text}
                </p>

                <span className="absolute right-[-12px] top-[22px] z-20 h-[20px] w-[20px] rounded-full bg-black lg:right-[-13px] lg:top-[25px] lg:h-[8px] lg:w-[8px] xl:right-[-15px] xl:top-[29px] xl:h-[9px] xl:w-[9px]" />

                <span className="absolute right-[-9px] top-[29px] h-[130px] w-px bg-[repeating-linear-gradient(180deg,rgba(0,0,0,0.13)_0,rgba(0,0,0,0.13)_2px,transparent_2px,transparent_6px)] lg:right-[-10px] lg:top-[33px] xl:right-[-11px] xl:top-[38px]" />
              </article>
            );
          })}

          <div className="absolute bottom-0 left-0 flex h-[34px] w-full items-end lg:h-[38px] xl:h-[42px]">
            <div className="h-full w-[25%] bg-[repeating-linear-gradient(90deg,#d2d2d2_0,#d2d2d2_3px,transparent_3px,transparent_7px)]" />
            <div className="h-full w-[25%] rounded-[4px] bg-[#0d0d0d]" />
            <div className="h-full w-[25%] bg-[repeating-linear-gradient(90deg,#d2d2d2_0,#d2d2d2_3px,transparent_3px,transparent_7px)]" />
            <div className="h-full w-[25%] rounded-[4px] bg-[#0d0d0d]" />
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="relative mt-[154px] md:hidden max-[768px]:mt-[72px]">
          <div className="absolute left-[8.3px] top-[22px] h-[calc(100%-210px)] w-[8px] bg-[repeating-linear-gradient(180deg,#d1d1d1_0,#d1d1d1_14px,transparent_14px,transparent_28px)] max-[768px]:h-[calc(100%-90px)] max-[768px]:w-[4px] " />

          <div className="space-y-[136px] max-[390px]:space-y-[110px] min-[430px]:space-y-[142px]">
            {content.steps.map((step, index) => (
              <article
                key={`${step.title}-${index}`}
                className="relative grid items-start max-[390px]:grid-cols-[96px_1fr] max-[768px]:!mb-[70px] max-[768px]:!flex min-[430px]:grid-cols-[124px_1fr]"
              >
                <div className="relative z-10 pt-0">
                  <span className="block h-[20px] w-[20px] rounded-full bg-black" />
                </div>

                <div className="ml-[41px]">
                  <h3 className="max-w-[650px] text-[38px] font-normal leading-[130%] tracking-[0.04em] text-black max-[768px]:text-[21px]">
                    {step.title}
                  </h3>

                  <p className="mt-[6px] max-w-[580px] font-sfpro text-[28px] font-normal leading-[1.36] tracking-[0.04em] text-[#9B9B9B] max-[768px]:text-[14px]">
                    {step.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}