"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";

const yellowImages = [
  "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/yellowcard2_7R_AsJTJx.jpg",
  "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/yellowcard1_XF7Lindh5.jpg",
  "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/yellowcard_Jk10esSWM.jpg",
];

export default function HeroSection() {
  const [yellowIndex, setYellowIndex] = useState(0);
  const [showAnim, setShowAnim] = useState(false);

    

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnim(true);
    }, 1600);

    const interval = setInterval(() => {
      setYellowIndex((prev) => (prev + 1) % yellowImages.length);
    }, 2200);

    return () => {

      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [yellowImages.length]);

  return (
    <section
      className="relative w-full max-[768px]:h-dvh max-h-[578px] bg-white overflow-hidden pb-[110px] max-[768px]:min-h-auto max-[768px]:pb-[72px] min-[1540px]:max-h-[770px]"
      id="herosection"
    >
      {/* Bottom texture */}
      <img
        src="https://ik.imagekit.io/j4xu3pewo/fast_response_assets/bottom_YplQaSFri.jpg"
        alt=""
        className="absolute bottom-0 left-0 w-full opacity-[50%] z-[2] pointer-events-none max-[768px]:h-[52%] max-[768px]:bottom-[0%] max-[768px]:opacity-[100%] max-[768px]:object-contain max-[768px]:w-[200%] object-cover max-[768px]:!bottom-[-20px]"
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
        <div
          className="
            font-semibold
            max-[768px]:font-[500]
            !leading-[100%]
            text-black
            text-[116px]
            max-[1280px]:text-[90px]
            max-[1024px]:text-[64px]
            max-[768px]:hidden
            max-[768px]:mt-[0px]
          "
        >
          <span className="flex items-center justify-center flex-wrap gap-x-2 gap-y-3 max-[768px]:mt-[20px]">
            <span
              className={`inline-block overflow-hidden transition-all duration-[1200ms]  ease-[cubic-bezier(0.22,1,0.36,1)] ${showAnim
                  ? "opacity-100 translate-y-0 [clip-path:inset(0_0_0_0)]"
                  : "opacity-0 translate-y-8 [clip-path:inset(100%_0_0_0)]"
                }`}
            >
              Where
            </span>

            <span
              className={`inline-flex align-middle transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-100 ${showAnim
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
                }`}
            >
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
                  className={`h-full w-full object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${showAnim
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-[0.96]"
                    }`}
                />
              </span>
            </span>

            <span className="inline-block overflow-hidden align-middle">
              <span
                className={`inline-block text-gray-400 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-200 ${showAnim
                    ? "opacity-100 translate-y-0 [clip-path:inset(0_0_0_0)]"
                    : "opacity-0 translate-y-8 [clip-path:inset(100%_0_0_0)]"
                  }`}
              >
                Ideas
              </span>
            </span>
          </span>

          <span className="mt-2 flex items-center justify-center flex-wrap gap-x-2 gap-y-3 max-[768px]:mt-[20px]">
            <span className="inline-block overflow-hidden align-middle">
              <span
                className={`inline-block text-gray-400 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-300 ${showAnim
                    ? "opacity-100 translate-y-0 [clip-path:inset(0_0_0_0)]"
                    : "opacity-0 translate-y-8 [clip-path:inset(100%_0_0_0)]"
                  }`}
              >
                become
              </span>
            </span>

            <span className="inline-block overflow-hidden align-middle">
              <span
                className={`inline-block text-black transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-[400ms] ml-[20px] ${showAnim
                    ? "opacity-100 translate-y-0 [clip-path:inset(0_0_0_0)]"
                    : "opacity-0 translate-y-8 [clip-path:inset(100%_0_0_0)]"
                  }`}
              >
                Impact
              </span>
            </span>

            <span
              className={`inline-flex max-[768px]:mt-[20px] ml-[22px] align-middle rotate-[6deg] overflow-hidden rounded-[30px] shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-[500ms] ${showAnim
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
                }`}
            >
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
                  src="https://ik.imagekit.io/j4xu3pewo/fast_response_assets/blackcards_-SXlzQrRA.jpg"
                  alt="blackcards"
                  className={`h-full w-full object-cover transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${showAnim
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-6 scale-[0.97]"
                    }`}
                />
              </span>
            </span>
          </span>
        </div>

        {/* ================= MOBILE HEADING ================= */}
        <div className="hidden max-[768px]:flex max-[768px]:w-full max-[768px]:flex-col max-[768px]:items-center max-[768px]:mt-[20px]">
          {/* Row 1 */}
          <div className="flex items-center justify-center gap-[8px] leading-none max-[768px]:w-full">
            <span
              className={`inline-block overflow-hidden text-[54px] max-[359px]:text-[42px] font-semibold max-[768px]:font-[500] text-black tracking-[-0.04em] transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${showAnim
                  ? "opacity-100 translate-y-0 [clip-path:inset(0_0_0_0)]"
                  : "opacity-0 translate-y-8 [clip-path:inset(100%_0_0_0)]"
                }`}
            >
              Where
            </span>

            <span
              className={`inline-flex align-middle translate-y-[1px] transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-100 ${showAnim
                  ? "opacity-100 translate-y-[1px]"
                  : "opacity-0 translate-y-4"
                }`}
            >
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
                  className={`h-full w-full object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${showAnim
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-5 scale-[0.96]"
                    }`}
                />
              </span>
            </span>
          </div>

          {/* Row 2 */}
          <div className="mt-[2px] max-[768px]:w-full flex items-center justify-center leading-none overflow-hidden ">
            <span
              className={`inline-block text-[54px] max-[359px]:text-[42px] max-[768px]:font-[500] font-semibold text-[#A8A8A8] tracking-[-0.04em] transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-200 ${showAnim
                  ? "opacity-100 translate-y-0 [clip-path:inset(0_0_0_0)]"
                  : "opacity-0 translate-y-8 [clip-path:inset(100%_0_0_0)]"
                }`}
            >
              Ideas become
            </span>
          </div>

          {/* Row 3 */}
          <div className="mt-[4px] max-[768px]:w-full flex items-center justify-center gap-[8px] leading-none">
            <span
              className={`inline-flex align-middle translate-y-[1px] rotate-[5deg] transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-300 ${showAnim
                  ? "opacity-100 translate-y-[1px]"
                  : "opacity-0 translate-y-4"
                }`}
            >
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
                  src="https://ik.imagekit.io/j4xu3pewo/fast_response_assets/blackcards_-SXlzQrRA.jpg"
                  alt="blackcards"
                  className={`h-full w-full object-cover transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${showAnim
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-5 scale-[0.97]"
                    }`}
                />
              </span>
            </span>

            <span className="overflow-hidden inline-block">
              <span
                className={`inline-block text-[54px] max-[359px]:text-[42px] max-[768px]:font-[500] font-semibold text-black tracking-[-0.04em] transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-[400ms] ${showAnim
                    ? "opacity-100 translate-y-0 [clip-path:inset(0_0_0_0)]"
                    : "opacity-0 translate-y-8 [clip-path:inset(100%_0_0_0)]"
                  }`}
              >
                Impact
              </span>
            </span>
          </div>
        </div>

        {/* Subtext */}
        <p
          className={`
            mt-8
            max-[768px]:mt-[40px]
            max-w-[520px]
            text-[#6D6D6D]
            text-[16px]
            leading-[100%]
            font-[500]
            max-[768px]:!mt-5
            max-[768px]:max-w-[90%]
            max-[768px]:text-[11px]
            max-[768px]:leading-[135%]
            transition-all duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-[550ms]
            ${showAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} 
          `}
        >
          We help startups and brands create beautiful,
          <br className="max-[768px]:hidden" />
          functional products — fast and hassle-free.
        </p>

        {/* CTA ROW */}
        <div
          className={`
            mt-10
            flex items-center gap-6
            flex-wrap justify-center
            max-[768px]:w-full
            max-[768px]:mt-6
            max-[768px]:flex-col
            max-[768px]:gap-3
            max-[768px]:mt-[20px]
            transition-all duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-[700ms]
            ${showAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
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
                "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/trusted2_Gpx2WsvJL.jpg",
                "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/trusted1_SqdS_J0U0.jpg",
                "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/trusted3_Z1_e49fKev.jpg",
                "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/trusted4_Ktz0pbcRZ.jpg",
                "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/trusted5_SyyYgiQk2.jpg",
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