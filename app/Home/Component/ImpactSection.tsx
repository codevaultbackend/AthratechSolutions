"use client";

import { useEffect, useRef, useState } from "react";

type StatItem = {
    value: number;
    prefix?: string;
    title: string;
    suffix?: string;
    label: string;
    decimals?: number;
};

const stats: StatItem[] = [
    {
        value: 26,
        suffix: "+",
        title: "Successful Projects",
        label: "We build high-impact websites and digital experiences for startups and enterprises to scale fast",
    },
    {
        value: 240,
        suffix: "+",
        title: "Increase in Conversion Rate",
        label: "Purpose-built digital experiences that elevate brands and increase conversion rates at every touchpoint.",
    },
    {
        value: 100,
        prefix: "$",
        suffix: "M+",
        title: "Revenue Generated",
        label: "“We create high-impact digital experiences that help startups and enterprises accelerate growth and maximize revenue.”",
    },
];

function AnimatedCounter({
    value,
    prefix = "",
    suffix = "",
    decimals = 0,
    duration = 1800,
    start,
}: {
    value: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
    duration?: number;
    start: boolean;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;

            const progress = Math.min((timestamp - startTime) / duration, 1);

            // easeOutCubic
            const eased = 1 - Math.pow(1 - progress, 3);

            const current = value * eased;
            setCount(current);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(value);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [start, value, duration]);

    const formatted =
        value >= 1000 && decimals === 0
            ? Math.floor(count).toLocaleString("en-IN")
            : count.toFixed(decimals);

    return (
        <span>
            {prefix}
            {formatted}
            {suffix}
        </span>
    );
}

export default function ImpactSection() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [startCount, setStartCount] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCount(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.35,
            }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[#EFEFEF] px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-10 xl:px-12"
        >
            <div className="mx-auto w-full max-w-[1180px]">

                <div className="text-center mb-12">
                    <p className="font-calligraffitti text-[#7A7A7A] mb-2 flex gap-4 items-center justify-center text-[24px] font-[400]">
                        <span className="inline-block w-[124px] h-[1px] bg-[linear-gradient(231deg,__#9C9C9C_42%,_#DFDFDF)] "></span>
                        Impact <span className="inline-block w-[124px] h-[1px] bg-[linear-gradient(152deg,__#9C9C9C_42%,_#DFDFDF)] "></span></p>

                    <h2 className="text-[28px] sm:text-[40px] font-semibold font-bricolage">
                        We make it simple,
                        <br className="hidden sm:block" /> and the numbers speak results.
                    </h2>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="
                group relative min-h-[170px] rounded-[20px] border border-[#ececec]
                bg-white p-5 shadow-[0_2px_10px_rgba(16,24,40,0.04),0_12px_30px_rgba(16,24,40,0.05)]
                transition-all duration-300
                sm:min-h-[185px] sm:rounded-[22px] sm:p-6
                lg:min-h-[200px] lg:rounded-[24px] lg:p-7
              "
                        >
                            <div className="absolute inset-x-0 top-0 h-[1px] rounded-t-[24px] bg-gradient-to-r from-transparent via-[#e8e8e8] to-transparent" />

                            <div className="flex h-full flex-col justify-between">

                                <div
                                    className="text-[38px] font-semibold leading-none tracking-[-0.05em] text-[#252525] sm:text-[46px] lg:text-[48px] font-bricolage"

                                >
                                    <AnimatedCounter
                                        value={item.value}
                                        prefix={item.prefix}
                                        suffix={item.suffix}
                                        decimals={item.decimals}
                                        start={startCount}
                                    />
                                </div>
                                <h2 className="font-inter text-[18px] font-[400] mt-[19px] text-[#3F3F3F]">{item.title}</h2>

                                <p
                                    className="mt-[19px] max-w-[290px] text-[16px] font-[400] leading-[1.55] text-[#727272] sm:text-[14px] tracking-[-4%] "
                                    style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
                                >
                                    {item.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}