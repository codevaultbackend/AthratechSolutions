"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HeroSecondContent() {
  return (
    <div
      id="second-content"
      className="
        absolute
        right-[72px]
        top-1/2
        z-30
        w-[520px]
        -translate-y-1/2

        opacity-0

        will-change-transform
      "
    >
      <h2
        className="
          mt-8

          font-bricolage
          font-[500]

          text-[42px]
          leading-[1.02]
          tracking-[-0.05em]

          text-[#202020]
        "
      >
        Why Businesses Trust Us ?
      </h2>

      {/* Description */}

      <p
        className="
          mt-8
          max-w-[470px]

          font-geist

          text-[18px]
          leading-[34px]

          text-[#717171]
        "
      >
        Athratech delivers custom digital solutions tailored to your business goals. We focus on scalable design, seamless user experience, and performance-driven development to boost engagement, strengthen brand presence, and support long-term growth.
      </p>

    </div>
  );
}