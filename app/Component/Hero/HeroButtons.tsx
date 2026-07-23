"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HeroButtons() {
  return (
    <div
      id="hero-buttons"
      className="
        flex
        max-[768px]:flex-col
        lg:mt-[62px]
        gap-4
        w-full
        max-[768px]:flex-row
        max-[768px]:flex-wrap
        max-[768px]:items-center
        max-[768px]:gap-5
      "
    >
      {/* ========================= */}
      {/* Primary Button */}
      {/* ========================= */}

      <Link
        href="/contact-us"
        className="w-full sm:w-auto"
      >
        <div className="flex w-full justify-center pb-0 sm:pb-[34px]">
          {/* OUTER GLOW */}

          <div
            className="
              relative
              w-full
              rounded-full
              bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.35),_rgba(180,180,180,0.25),_rgba(120,120,120,0.15),_transparent_70%)]
              shadow-[0px_4px_14.6px_0_#959595]
              sm:w-auto
            "
          >
            {/* Metallic Border */}

            <div
              className="
                rounded-full
                bg-[linear-gradient(175deg,#F5F5F5,#BDBDBD,#8F8F8F,#666666)]
                p-[6px]
                shadow-[0_0_40px_rgba(180,180,180,0.5)]
              "
            >
              {/* Inner Button */}

              <div
                className="
                  flex
                  h-[56px]
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white
                  bg-black
                  px-8
                  text-center
                  text-[16px]
                  font-medium
                  text-white
                  shadow-inner
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  sm:h-auto
                  sm:w-auto
                  sm:px-6
                  sm:py-3
                "
              >
                Book A Free 30 Min Call
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* ========================= */}
      {/* Secondary Button */}
      {/* ========================= */}

      <Link
        href="/projects"
        className="
          group
          flex
          h-[56px]
          w-full
          items-center
          justify-between
          rounded-full
          border
          border-black
          bg-white
          px-6
          transition-all
          duration-300
          hover:bg-black
          hover:text-white

          sm:h-[60px]
          sm:w-auto
          sm:pl-8
          sm:pr-2
        "
      >
        <span className="text-[16px] font-medium sm:mr-6 sm:text-[18px]">
          View Projects
        </span>

        <span
          className="
            flex
            h-[42px]
            w-[42px]
            items-center
            justify-center
            rounded-full
            bg-black
            text-white
            transition-all
            duration-300
            group-hover:rotate-45
            group-hover:bg-white
            group-hover:text-black

            sm:h-[48px]
            sm:w-[48px]
          "
        >
          <ArrowUpRight size={20} strokeWidth={2} />
        </span>
      </Link>
    </div>
  );
}