"use client";

import { useEffect, useRef, useState } from "react";

type Step = {
    count: string;
    title: string;
    des: string;
    side: "left" | "right";
};

export default function Steps() {
    const steps: Step[] = [
        {
            count: "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/count1_0x9mSOEVq.jpg",
            title: "Conversation",
            des: "We talk about your business, you tell us about your current activities and results.",
            side: "right",
        },
        {
            count: "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/count2_5ieaQKyPW.jpg",
            title: "Analysis",
            des: "We analyse your design requirement and current solutions to lead you to your goals.",
            side: "left",
        },
        {
            count: "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/count3_QhqB7zVw_.jpg",
            title: "Get your work Done",
            des: "We execute the plan efficiently and deliver measurable results.",
            side: "right",
        },
    ];

    const [activeStep, setActiveStep] = useState(-1);
    const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

    useEffect(() => {
        const visibleMap = new Map<number, boolean>();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number(entry.target.dataset.index);
                    visibleMap.set(index, entry.isIntersecting);
                });

                // find last visible step
                const visibleIndexes = Array.from(visibleMap.entries())
                    .filter(([, isVisible]) => isVisible)
                    .map(([index]) => index);

                setActiveStep(
                    visibleIndexes.length ? Math.max(...visibleIndexes) : -1
                );
            },
            {
                rootMargin: "-30% 0px -30% 0px",
                threshold: 0.15,
            }
        );

        itemRefs.current.forEach((el) => el && observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            className="
    relative min-h-screen
    pt-[110px] pb-[120px]
    bg-[#f5f5f5]
  "
            id="steps"
        >
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: `
      linear-gradient(#e8e8e8 1px, transparent 1px),
      linear-gradient(90deg, #e8e8e8 1px, transparent 1px)
    `,
                    backgroundSize: "60px 60px",
                }}
            />
            <div className="absolute bottom-0 left-0 w-full h-[180px] pointer-events-none z-[5]
bg-gradient-to-t from-[#000000]/8 via-[#000000]/4 to-transparent" />

            {/* ===== Heading ===== */}


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

            {/* ===== Timeline ===== */}
            <div className="relative max-w-[1200px] mx-auto z-10">



                {/* Base line */}
                <div className="absolute left-1/2 max-[780px]:left-[50px] top-0 h-full border-[#e9e9e9]
                border-[1.5px]  -translate-x-1/2" />

                {/* Active line */}
                <div
                    className="absolute left-1/2 max-[780px]:left-[50.4px] top-0 w-[1.5px] bg-[#000000] -translate-x-1/2 transition-all duration-800"
                    style={{
                        height:
                            activeStep >= 0
                                ? `${((activeStep + 1) / steps.length) * 100}%`
                                : "0%",
                    }}
                />

                <ul className="flex flex-col gap-[130px] max-w-[940px] mx-auto relative">
                    {steps.map((step, index) => {
                        const isActive = index <= activeStep;

                        return (
                            <li
                                key={index}
                                ref={(el) => (itemRefs.current[index] = el)}
                                data-index={index}
                                className={`relative flex items-center max-[768px]:pl-[38px] max-[768px]:pr-[20px] ${step.side === "left" ? "justify-start " : "justify-end"
                                    }`}
                            >
                                {/* Text */}
                                <div
                                    className={`w-[420px] transition-all duration-700
                    ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                    ${step.side === "left" ? "text-right pr-[80px] max-[780px]:!pl-[60px] max-[780px]:!pr-0 max-[780px]:!text-left" : "text-left pl-[80px] max-[780px]:!pl-[60px]"}
                  `}
                                >
                                    <h3 className="text-[35px] font-[400] mb-2 font-bricolage leading-[100%]">{step.title}</h3>
                                    <p className="text-[16px] text-[#7A7A7A] font-[400] leading-[1.7]">
                                        {step.des}
                                    </p>
                                </div>

                                {/* Center circle */}
                                <div className={`absolute left-1/2 -translate-x-1/2  !rounded-full max-[780px]:translate-x-0 max-[780px]:left-[24px] z-[9999] `}>



                                    <div className=" rounded-full 
              bg-gradient-to-br from-[#f2f0ed] to-[#f1f1f1]
              flex items-center justify-center
               !rounded-full object-cover max-[780px]:w-[51px] max-[780px]:h-[51px]  w-[148px] h-[148px] z-[999999]">


                                        <div className="w-[92px] h-[92px] rounded-full
                bg-gradient-to-br from-white/50 to-white/10
                flex items-center justify-center
                shadow-[inset_0_0_0_2px_rgba(255,255,255,0.6)] max-[768px]:h-auto z-[999999] ">


                                            <div className="w-[60px] h-[60px] rounded-full bg-black
                  flex items-center justify-center
                  text-white text-2xl font-medium z-[999999]
                  ">
                                                {index + 1}.
                                            </div>

                                        </div>
                                    </div>





                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
