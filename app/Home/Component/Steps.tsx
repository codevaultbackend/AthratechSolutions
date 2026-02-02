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
            count: "/count1.jpg",
            title: "Conversation",
            des: "We talk about your business, you tell us about your current activities and results.",
            side: "right",
        },
        {
            count: "/count2.png",
            title: "Analysis",
            des: "We analyse your design requirement and current solutions to lead you to your goals.",
            side: "left",
        },
        {
            count: "/count3.png",
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
        <section className="relative min-h-screen bg-[url('/StepsBg.jpg')] bg-cover bg-center bg-no-repeat pt-[110px] pb-[120px]">

        <img src="/StepsBg.png" alt="steps" className="absolute top-0 left-0 w-full h-full" />

            {/* ===== Heading ===== */}
            <div className="text-center mb-[90px]">
                <p className="font-calligraffitti text-[#7A7A7A] mb-6 flex gap-4 items-center justify-center text-[24px]">
                    <span className="w-[124px] h-[1px] bg-gradient-to-r from-[#9C9C9C] to-[#DFDFDF]" />
                    Process
                    <span className="w-[124px] h-[1px] bg-gradient-to-l from-[#9C9C9C] to-[#DFDFDF]" />
                </p>

                <h2 className="text-[56px] font-[400] leading-[1.05] max-w-[620px] mx-auto max-[780px]:text-[24px] max-[780px]:text-[400] text-center">
                    Take the first step 🚶
                    <br />
                    <span className="text-[#8A8A8A]">and we will guide you</span>
                </h2>
            </div>

            {/* ===== Timeline ===== */}
            <div className="relative max-w-[1200px] mx-auto">
                {/* Base line */}
                <div className="absolute left-1/2 max-[780px]:left-[30px] top-0 h-full w-[2px] bg-[#CFCFCF] -translate-x-1/2" />

                {/* Active line */}
                <div
                    className="absolute left-1/2 max-[780px]:left-[30px] top-0 w-[2px] bg-[#000000] -translate-x-1/2 transition-all duration-700"
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
                                className={`relative flex items-center  ${step.side === "left" ? "justify-start " : "justify-end"
                                    }`}
                            >
                                {/* Text */}
                                <div
                                    className={`w-[420px] transition-all duration-700
                    ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                    ${step.side === "left" ? "text-right pr-[80px] max-[780px]:!pl-[60px] max-[780px]:!pr-0 max-[780px]:!text-left" : "text-left pl-[80px] max-[780px]:!pl-[60px]"}
                  `}
                                >
                                    <h3 className="text-[22px] font-[500] mb-3">{step.title}</h3>
                                    <p className="text-[14px] text-[#7A7A7A] leading-[1.7]">
                                        {step.des}
                                    </p>
                                </div>

                                {/* Center circle */}
                                <div className={`absolute left-1/2 -translate-x-1/2  !rounded-full max-[780px]:translate-x-0 max-[780px]:left-[5px] `}>
                                    
                                        <img
                                            src={step.count}
                                            alt={step.title}
                                            className={`" !rounded-full object-cover max-[780px]:w-[51px] max-[780px]:h-[51px]  w-[128px] h-[128px]`}
                                        />
                                    
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
