"use client";

import { useEffect, useRef, useState } from "react";
import SectionLabel from "./SectionLabel";

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
        value: 50,
        suffix: "+",
        title: "Projects Delivered",
        label: "We deliver web development, mobile applications, and digital solutions tailored to business goals and user needs.",
    },
    {
        value: 240,
        suffix: "%+",
        title: "Average Conversion Rate Increase",
        label: "We improve website usability, landing pages, and conversion-focused user journeys to support measurable business growth.",
    },
    {
        value: 10,
        prefix: "$",
        suffix: "M+",
        title: "Client Revenue Generated",
        label: "We build digital products and business solutions designed to support customer acquisition, operational efficiency, and revenue growth.",
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
  const [count, setCount] = useState(value);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted || !start) return;

    let startTime: number | null = null;
    let animationFrame = 0;

    // Animate from 0 to the real value.
    setCount(0);

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      // Smooth ease-out animation
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(value * eased);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasMounted, start, value, duration]);

  // Actual values are present in server-rendered HTML.
  // Animation begins only after the section enters the viewport.
  const displayValue = hasMounted && start ? count : value;

  const formatted =
    decimals === 0
      ? Math.floor(displayValue).toLocaleString("en-IN")
      : displayValue.toFixed(decimals);

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
            className="relative overflow-hidden  px-4 py-16 max-[768px]:px-2 sm:py-20 md:px-8 lg:px-10 xl:px-12"
        >
            <div className="mx-auto w-full max-w-full">

                <div className="mb-12 text-center sm:mb-14 lg:mb-16">
                    <SectionLabel label="Impact" />

                    <h2
                        className="text-[28px] font-normal leading-[100%] tracking-[-0.04em] text-black sm:text-[36px] md:text-[42px] lg:text-[48px]"
                        style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                    >
                        Our Impact in Numbers
                    </h2>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="
                group relative min-h-[170px]  bg-[#fff]
                 p-5 transition-all duration-300 shadow-[3px_3px_17px_0_#0000001A] rounded-[32px]
            
              "
                        >

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