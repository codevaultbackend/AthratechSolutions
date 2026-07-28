"use client";

import Link from "next/link";

export default function Behance() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-36">

      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 xl:px-16">

        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            bg-[#090909]
            px-8
            py-20

            md:px-14
            lg:px-20
            lg:py-28
          "
        >

          {/* Glow */}

          <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5D4EFF] opacity-20 blur-[180px]" />

          <div className="relative z-10">

            <div className="mx-auto max-w-[980px] text-center">

              <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[13px] uppercase tracking-[0.18em] text-white/70">
                Case Study
              </span>

              <h2
                className="
                  mt-8
                  text-[36px]
                  font-semibold
                  leading-[1.08]
                  tracking-[-0.04em]
                  text-white

                  md:text-[52px]
                  lg:text-[72px]
                "
              >
                Want to explore the complete
                <br />
                design process?
              </h2>

              <p
                className="
                  mx-auto
                  mt-8
                  max-w-[650px]
                  text-[18px]
                  leading-8
                  text-white/65
                "
              >
                Dive into the complete UX journey, research,
                wireframes, design system and final interfaces
                on Behance.
              </p>

              <Link
                href="https://www.behance.net/"
                target="_blank"
                className="
                  mt-12
                  inline-flex
                  items-center
                  gap-4
                  rounded-full
                  bg-white
                  px-8
                  py-5
                  text-[16px]
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                View on Behance

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13 6L19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
                          </div>

          </div>

          {/* ================= Decorative Elements ================= */}

          <div
            className="
              pointer-events-none
              absolute
              -left-28
              -top-28
              h-[260px]
              w-[260px]
              rounded-full
              border
              border-white/10
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-32
              -bottom-32
              h-[320px]
              w-[320px]
              rounded-full
              border
              border-white/10
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              left-[8%]
              bottom-[18%]
              h-5
              w-5
              rounded-full
              bg-white/20
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              right-[10%]
              top-[18%]
              h-7
              w-7
              rounded-full
              bg-[#6F5DFF]
              blur-[2px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              bottom-0
              h-40
              w-[80%]
              -translate-x-1/2
              bg-gradient-to-t
              from-[#4338CA]/20
              to-transparent
              blur-3xl
            "
          />

        </div>

      </div>

    </section>
  );
}