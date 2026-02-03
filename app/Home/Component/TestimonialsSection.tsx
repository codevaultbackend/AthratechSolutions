"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const data = [
  {
    text: "Smart design, smooth delivery. Athratech is great to work with",
    name: "Sushant Wills",
    role: "Founder, Zerocoolight Studio",
    image: "/testslide1.png",
  },
  {
    text: "Athratech delivered beyond expectations with great precision.",
    name: "Aman Verma",
    role: "Product Lead",
    image: "/testslide1.png",
  },
  {
    text: "Professional team with strong attention to detail.",
    name: "Neha Sharma",
    role: "Marketing Head",
    image: "/testslide1.png",
  },
];

export default function TestimonialsSection() {
  // Clone slides for infinite effect
  const slides = [data[data.length - 1], ...data, data[0]];

  const [index, setIndex] = useState(1);
  const [animate, setAnimate] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 5000);

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (index === slides.length - 1) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(1);
      }, 700);
    }

    if (index === 0) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(slides.length - 2);
      }, 700);
    }
  }, [index, slides.length]);

  useEffect(() => {
    if (!animate) {
      requestAnimationFrame(() => setAnimate(true));
    }
  }, [animate]);

  return (
    <section className="bg-[#ECECEC] py-15 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 mb-1">Testimonials</p>
          <h2 className="text-[28px] sm:text-[40px] font-semibold">
            Loved by businesses worldwide
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* LEFT STATS */}
          <div  className="bg-[url('/testslideleft.png')] bg-cover bg-center text-white rounded-[22px] p-8 w-full lg:w-[280px] flex flex-col justify-between">
            <Stat value="26+" label="Finished Projects" />
            <Stat value="98%" label="Client Satisfaction" />
            <Stat value="26+" label="Happy Clients" />
          </div>

          {/* RIGHT SLIDER */}
          <div className="relative flex-1 rounded-[22px] overflow-hidden border-[3px] border-[#1E90FF] bg-black">
            <div
              className={`flex ${
                animate ? "transition-transform duration-700 ease-in-out" : ""
              }`}
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {slides.map((item, i) => (
                <div
                  key={i}
                  className="relative min-w-full h-[340px] sm:h-[420px]"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    priority={i === 1}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 p-6 sm:p-10">
                    <p className="text-white text-[16px] sm:text-[22px] leading-snug font-medium max-w-[560px] mb-4">
                      {item.text}
                    </p>
                    <p className="text-white font-semibold text-sm">
                      {item.name}
                    </p>
                    <p className="text-white/70 text-xs">
                      {item.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* DOTS */}
            <div className="absolute bottom-4 right-6 flex gap-2">
              {data.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i + 1)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    index === i + 1
                      ? "bg-white"
                      : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Stat Component ===== */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-[36px] font-semibold">{value}</p>
      <p className="text-sm text-white/60">{label}</p>
    </div>
  );
}
