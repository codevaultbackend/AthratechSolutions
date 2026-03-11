"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";

const yellowImages = [
  "/yellowcard.png",
  "/yellowcard2.png",
  "/yellowcard1.png",
];

const blackImages = [
  "/yellowcard1.png",
  "/blackcards.png",
  "/yellowcard2.png",
];

export default function HeroSection() {
  const [yellowIndex, setYellowIndex] = useState(0);
  const [blackIndex, setBlackIndex] = useState(0);
  const [showAnim, setShowAnim] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnim(true);
    }, 900);

    const interval = setInterval(() => {
      setYellowIndex((prev) => (prev + 1) % yellowImages.length);
      setBlackIndex((prev) => (prev + 1) % blackImages.length);
    }, 900);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      className="relative w-full min-h-[588px] bg-white overflow-hidden pb-[110px] max-[768px]:min-h-auto max-[768px]:pb-[72px]"
      id="herosection"
    >
      {/* Bottom texture */}
      <img
        src="/bottom.png"
        alt=""
        className="absolute bottom-0 left-0 w-full opacity-[40%] z-[1] pointer-events-none max-[768px]:h-[52%] max-[768px]:bottom-[-7%] max-[768px]:opacity-[60%] object-cover"
      />

      <div
        className="
          relative z-[9] flex flex-col items-center text-center
          pt-[116px] px-6
          max-md:pt-[96px]
          max-sm:pt-[84px]
          max-[768px]:px-2
        "
      >
        {/* ================= DESKTOP / TABLET HEADING ================= */}
        <h1
          className="
            font-semibold
            !leading-[100%]
            text-black
            text-[116px]
            max-[1280px]:text-[90px]
            max-[1024px]:text-[64px]
            max-[768px]:hidden
          "
        >
          <span className="flex items-center justify-center flex-wrap gap-x-2 gap-y-3">
            <span>Where</span>

            <span className="inline-flex align-middle">
              <span
                className="
                  w-[161px] h-[100px]
                  rounded-[30px]
                  bg-gradient-to-b from-[#FFD976] to-[#F4A900]
                  shadow-[0_12px_30px_rgba(0,0,0,0.25)]
                  border-[3px] border-black
                  rotate-[-8deg]
                  overflow-hidden
                "
              >
                <img
                  src={yellowImages[yellowIndex]}
                  alt="yellowcard"
                  className={`h-full w-full transition-all duration-700 ease-out ${
                    showAnim
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95"
                  }`}
                />
              </span>
            </span>

            <span className="text-gray-400">Ideas</span>
          </span>

          <span className="mt-2 flex items-center justify-center flex-wrap gap-x-2 gap-y-3">
            <span className="text-gray-400">become</span>

            <span className="text-black">Impact</span>

            <span className="inline-flex ml-[22px] align-middle rotate-[6deg] overflow-hidden rounded-[30px] shadow-[0_12px_30px_rgba(0,0,0,0.25)]">
              <span
                className="
                  w-[138px] h-[88px]
                  rounded-[30px]
                  bg-black
                  shadow-xl
                  border-[3px] border-black
                  overflow-hidden
                "
              >
                <img
                  src='/blackcards.png'
                  alt="blackcards"
                  className={`h-full w-full  transition-all duration-700 ease-out ${
                    showAnim
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-6 scale-95"
                  }`}
                />
              </span>
            </span>
          </span>
        </h1>

        {/* ================= MOBILE HEADING ================= */}
        <div className="hidden max-[768px]:flex max-[768px]:w-full max-[768px]:flex-col max-[768px]:items-center">
          {/* Row 1 */}
          <div className="flex items-center justify-center gap-[8px] leading-none max-[768px]:w-full">
            <span className="text-[54px] max-[359px]:text-[42px] font-semibold text-black tracking-[-0.04em]">
              Where
            </span>

            <span className="inline-flex align-middle translate-y-[1px]">
              <span
                className="
                  w-[88px] h-[56px]
                  max-[480px]:w-[80px] max-[480px]:h-[50px]
                  rounded-[16px]
                  bg-gradient-to-b from-[#FFD976] to-[#F4A900]
                  shadow-[0_8px_18px_rgba(0,0,0,0.22)]
                  border-[2px] border-black
                  rotate-[-8deg]
                  overflow-hidden
                "
              >
                <img
                  src={yellowImages[yellowIndex]}
                  alt="yellowcard"
                  className={`h-full w-full transition-all duration-700 ease-out ${
                    showAnim
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-5 scale-95"
                  }`}
                />
              </span>
            </span>
          </div>

          {/* Row 2 */}
          <div className="mt-[2px] max-[768px]:w-full flex items-center justify-center leading-none">
            <span className="text-[54px]  max-[359px]:text-[42px] font-semibold text-[#A8A8A8] tracking-[-0.04em]">
              Ideas become
            </span>
          </div>

          {/* Row 3 */}
          <div className="mt-[4px] max-[768px]:w-full flex items-center justify-center gap-[8px] leading-none">
            <span className="inline-flex align-middle translate-y-[1px] rotate-[5deg]">
              <span
                className="
                  w-[82px] h-[52px]
                  max-[480px]:w-[74px] max-[480px]:h-[46px]
                  rounded-[16px]
                  bg-black
                  border-[2px] border-black
                  shadow-[0_8px_18px_rgba(0,0,0,0.22)]
                  overflow-hidden
                "
              >
                <img
                  src='/blackcards.png'
                  alt="blackcards"
                  className={`h-full w-full transition-all duration-700 ease-out ${
                    showAnim
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-5 scale-95"
                  }`}
                />
              </span>
            </span>

            <span className="text-[54px] max-[359px]:text-[42px] font-semibold text-black tracking-[-0.04em]">
              Impact
            </span>
          </div>
        </div>

        {/* Subtext */}
        <p
          className="
            mt-8
            max-w-[520px]
            text-[#6D6D6D]
            text-[16px]
            leading-[100%]
            font-[500]
            max-[768px]:mt-5
            max-[768px]:max-w-[90%]
            max-[768px]:text-[11px]
            max-[768px]:leading-[135%]
          "
        >
          We help startups and brands create beautiful,
          <br className="max-[768px]:hidden" />
          functional products — fast and hassle-free.
        </p>

        {/* CTA ROW */}
        <div
          className="
            mt-10
            flex items-center gap-6
            flex-wrap justify-center
            max-[768px]:w-full
            max-[768px]:mt-6
            max-[768px]:flex-col
            max-[768px]:gap-3
          "
        >
          <Link href="/ContactForm" className="max-[768px]:w-full">
            <div className="flex justify-center max-[768px]:w-full">
              <div
                className="
                  relative rounded-full max-[768px]:w-[90%]
                  bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.35),_rgba(180,180,180,0.25),_rgba(120,120,120,0.15),_transparent_70%)]
                  shadow-[0px_4px_14.6px_0_#959595]
                "
              >
                <div
                  className="
                    rounded-full p-[6px]
                    bg-[linear-gradient(175deg,#F5F5F5,#BDBDBD,#8F8F8F,#666666)]
                    shadow-[0_0_40px_rgba(180,180,180,0.5)]
                  "
                >
                  <div
                    className="
                      flex items-center justify-center
                      rounded-full bg-black border border-white
                      px-8 py-3
                      max-[768px]:min-w-[240px]
                      max-[768px]:px-6
                      max-[768px]:py-[11px]
                    "
                  >
                    <p className="text-white text-sm flex items-center max-[768px]:text-[13px] font-[500]">
                      Contact Us
                      <span className="ml-[10px]">
                        <RiArrowRightLine />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Trusted Clients */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex -space-x-3">
              {[
                "trusted1.png",
                "trusted2.png",
                "trusted3.png",
                "trusted4.png",
                "trusted5.png",
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-[28px] h-[28px] rounded-full border-[3px] border-white overflow-hidden"
                >
                  <img src={item} alt="icons" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>

            <span className="text-[11px] text-[#5E5E5E] font-[500]">
              50+ Trusted Clients
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-[2]" />
    </section>
  );
}