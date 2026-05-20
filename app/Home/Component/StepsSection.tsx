"use client";

import React from "react";

export default function StepsSection() {
    return (
        <section className="relative z-[2] w-full overflow-hidden bg-white pt-[92px]  sm:pt-[100px]  lg:pt-[118px]  !pb-[224px] max-[768px]:!pb-[120px]">
            <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">

                <div className="relative z-10 mb-[56px] text-center sm:mb-[70px] md:mb-[90px]">
                    <p
                        className="
      mx-auto mb-4 flex w-full max-w-[320px] items-center justify-center
      font-calligraffitti text-[18px] text-[#7A7A7A]
      sm:mb-5 sm:max-w-[380px] sm:text-[20px]
      md:mb-6 md:max-w-[460px] md:text-[24px]
    "
                    >
                        <span className="h-[1px] flex-1 bg-gradient-to-r from-[#9C9C9C] to-[#DFDFDF]" />
                        <span className="shrink-0 px-3 sm:px-4">Process</span>
                        <span className="h-[1px] flex-1 bg-gradient-to-l from-[#9C9C9C] to-[#DFDFDF]" />
                    </p>

                    <h2
                        className="
      mx-auto max-w-[300px]
      text-center font-bricolage font-[400]
      text-[24px] leading-[1.15]
      sm:max-w-[420px] sm:text-[34px]
      md:max-w-[540px] md:text-[44px]
      lg:max-w-[620px] lg:text-[56px] 
    "
                    >
                        Take the first step 🚶
                        <br />
                        <span className="text-[#8A8A8A]">and we will guide you</span>
                    </h2>
                </div>

                <div className="relative mx-auto mt-[76px] hidden h-[390px] w-full max-w-[1088px] md:block lg:mt-[86px] lg:h-[430px]">
                    {/* Top Arrow */}
                    <svg
                        className="pointer-events-none absolute left-[59.5%] top-[-54px] z-20 h-[84px] w-[238px]"
                        viewBox="0 0 238 84"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M5 37C62 5 151 -12 225 65"
                            stroke="#111111"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                        />
                        <path
                            d="M220 53L226 66L212 62"
                            stroke="#111111"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    {/* Bottom Arrow */}
                    <svg
                        className="pointer-events-none absolute left-[25.7%] bottom-[-118px] z-20 h-[88px] w-[258px]"
                        viewBox="0 0 258 88"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M4 27C68 82 158 84 244 12"
                            stroke="#111111"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                        />
                        <path
                            d="M231 12L246 10L242 25"
                            stroke="#111111"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    {/* Card 1 */}
                    <article className="absolute left-[1.8%] top-[52px] z-10 h-[414px] w-[346px] rotate-[-3.2deg] rounded-[28px] border border-[9px]  border-[#EFEFEFD9] bg-white px-[30px] py-[28px] shadow-[0_0_0_1px_rgba(0,0,0,0.015),0_10px_26px_rgba(0,0,0,0.035)]">
                        <span className="block font-bricolage text-[48px] font-medium leading-none tracking-[-0.05em] text-[#282828]">
                            1.
                        </span>

                        <div className="absolute bottom-[30px] left-[30px] right-[30px]">
                            <h3 className="mb-[8px] font-bricolage text-[24px] font-medium leading-[100%] tracking-[-0.025em] text-[#282828]">
                                Conversation
                            </h3>

                            <p className="max-w-[220px] font-bricolage text-[16px] font-normal leading-[100%] tracking-[-0.018em] text-[#6D6D6D]">
                                We talk about your business, your idea and current activities
                                and results.
                            </p>
                        </div>
                    </article>

                    {/* Card 2 */}
                    <article className="absolute left-1/2 border-[9px] rounded-[28px] top-[10px] border-[#EFEFEFD9] z-30 h-[414px] w-[346px] -translate-x-1/2 rotate-[10deg]  bg-[#121518] px-[31px] py-[30px] shadow-[0_18px_38px_rgba(0,0,0,0.2)]">
                        <span className="block font-bricolage text-[48px] font-medium leading-none tracking-[-0.05em] text-[#FFEFEF]">
                            2.
                        </span>

                        <div className="absolute bottom-[34px] left-[31px] right-[31px]">
                            <h3 className="mb-[8px] font-bricolage text-[24px] font-medium leading-[100%] tracking-[-0.025em] text-[#FFFFFF]">
                                Analysis
                            </h3>

                            <p className="max-w-[220px] font-bricolage text-[16px] font-normal leading-[100%] tracking-[-0.018em] text-[#B4B4B4]">
                                We analyse you, collect relevant data, understand you and will
                                create a strategy just for your brand.
                            </p>
                        </div>
                    </article>

                    {/* Card 3 */}
                    <article className="absolute right-[1.8%] top-[52px] z-40 h-[414px] w-[346px] rotate-[-3.2deg] border-[9px] rounded-[28px] border-[#EFEFEF] bg-white px-[30px] py-[28px] shadow-[0_0_0_1px_rgba(0,0,0,0.015),0_10px_26px_rgba(0,0,0,0.035)]">
                        <span className="block font-bricolage text-[48px] font-medium leading-none tracking-[-0.05em] text-[#282828]">
                            3.
                        </span>

                        <div className="absolute bottom-[30px] left-[30px] right-[30px]">
                            <h3 className="mb-[8px] font-bricolage text-[24px] font-medium leading-[100%] tracking-[-0.025em] text-[#282828]">
                                Get Your Work Done
                            </h3>

                            <p className="max-w-[220px] font-bricolage text-[16px] font-normal leading-[100%] tracking-[-0.018em] text-[#6D6D6D]">
                                We talk about your business, your idea and current activities
                                and results.
                            </p>
                        </div>
                    </article>
                </div>

                {/* Mobile Vertical Cards - No Arrows, No Rotation */}
                <div className="mx-auto mt-[48px] flex w-full max-w-[390px] flex-col gap-[18px] md:hidden">
                    {/* Mobile Card 1 */}
                    <article className="relative min-h-[210px] w-full rounded-[16px] border-[8.5px] rounded-[28px] border-[#EFEFEFD9] bg-white px-[22px] py-[22px] shadow-[0_8px_24px_rgba(0,0,0,0.045)]">
                        <span className="block font-bricolage text-[28px] font-medium leading-none tracking-[-0.05em] text-[#111111]">
                            1.
                        </span>

                        <div className="mt-[86px]">
                            <h3 className="mb-[8px] font-bricolage text-[15px] font-medium leading-none tracking-[-0.025em] text-[#111111]">
                                Conversation
                            </h3>

                            <p className="max-w-[260px] font-bricolage text-[13px] font-normal leading-[1.45] tracking-[-0.018em] text-[#737373]">
                                We talk about your business, your idea and current activities
                                and results.
                            </p>
                        </div>
                    </article>

                    {/* Mobile Card 2 */}
                    <article className="relative min-h-[210px] w-full rounded-[16px] bg-[#121518] px-[22px] py-[22px] shadow-[0_14px_32px_rgba(0,0,0,0.18)] border-[8.5px] rounded-[28px] border-[#EFEFEFD9]">
                        <span className="block font-bricolage text-[28px] font-medium leading-none tracking-[-0.05em] text-white">
                            2.
                        </span>

                        <div className="mt-[86px]">
                            <h3 className="mb-[8px] font-bricolage text-[15px] font-medium leading-none tracking-[-0.025em] text-white">
                                Analysis
                            </h3>

                            <p className="max-w-[280px] font-bricolage text-[13px] font-normal leading-[1.45] tracking-[-0.018em] text-[#C7C7C7]">
                                We analyse you, collect relevant data, understand you and will
                                create a strategy just for your brand.
                            </p>
                        </div>
                    </article>

                    {/* Mobile Card 3 */}
                    <article className="relative min-h-[210px] w-full rounded-[16px] border border-[#EFEFEF] bg-white px-[22px] py-[22px] shadow-[0_8px_24px_rgba(0,0,0,0.045)] border-[8.5px] rounded-[28px] border-[#EFEFEFD9]">
                        <span className="block font-bricolage text-[28px] font-medium leading-none tracking-[-0.05em] text-[#111111]">
                            3.
                        </span>

                        <div className="mt-[86px]">
                            <h3 className="mb-[8px] font-bricolage text-[15px] font-medium leading-none tracking-[-0.025em] text-[#111111]">
                                Get Your Work Done
                            </h3>

                            <p className="max-w-[280px] font-bricolage text-[13px] font-normal leading-[1.45] tracking-[-0.018em] text-[#737373]">
                                We talk about your business, your idea and current activities
                                and results.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}