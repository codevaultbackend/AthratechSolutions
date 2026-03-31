"use client";

import LetsTallk from "@/app/svgIcons/LetsTallk";
import Image from "next/image";
import Link from "next/link";

export default function LetsTeamUp() {
  return (
    <section
      id="contactcta"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FFFFFF] px-4 sm:px-6 md:px-8
                 max-md:min-h-[70vh] max-sm:min-h-[620px]"
    >
      {/* Arch only */}
      <div
        className="pointer-events-none absolute left-1/2 top-[15%] z-0 -translate-x-1/2
                   max-lg:top-[12%]
                   max-md:top-[10%]
                   max-sm:top-[8%]"
      >
        <Image
          src="/Ellipse 13 (1).png"
          alt="arch background"
          width={559}
          height={980}
          priority
          className="h-auto max-w-none opacity-100
                     w-[980px]
                     min-[1400px]:w-[559px]
                     max-[1280px]:w-[559px]
                     max-[1024px]:w-[559px]
                     max-md:w-[460px]
                     max-sm:w-[360px]
                     max-[380px]:w-[300px]"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-[720px] px-2 text-center sm:px-4">
        <p
          className="mb-[22px] text-[30px] font-[500] text-[#000000]
                     max-lg:text-[24px]
                     max-md:mb-[18px] max-md:text-[16px]
                     max-sm:mb-[14px] max-sm:text-[12px] max-sm:leading-[150%]"
        >
          WHY SLEEP ON A GREAT IDEA?
        </p>

        <h2
          className="mb-[44px] font-bricolage text-[88px] font-[600] leading-[100%] text-[#000000]
                     max-xl:text-[76px]
                     max-lg:text-[60px]
                     max-md:mb-[28px] max-md:text-[42px]
                     max-sm:mb-[22px] max-sm:text-[30px]
                     max-[380px]:text-[26px]"
        >
          Let’s Team up!
        </h2>

        <Link href="/ContactForm" className="inline-block w-full max-w-fit max-md:w-full">
          <div className="flex items-center justify-center pb-[34px] max-md:pb-[16px]">
            <div
              className="relative rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.35),_rgba(180,180,180,0.25),_rgba(120,120,120,0.15),_transparent_70%)] shadow-[0px_4px_14.6px_0_#959595]
                         max-md:w-full"
            >
              <div className="rounded-full bg-[linear-gradient(175deg,#F5F5F5,#BDBDBD,#8F8F8F,#666666)] p-[6px] shadow-[0_0_40px_rgba(180,180,180,0.5)]">
                <div
                  className="flex items-center justify-center gap-4 rounded-full border-[0.5px] border-[#fff] bg-black px-4 py-2 shadow-inner
                             max-md:h-[56px] max-md:w-full max-md:gap-3 max-md:px-4 max-md:py-1.5
                             max-sm:h-[52px] max-sm:px-3"
                >
                  <h3 className="text-[16px] font-[500] tracking-tight text-white max-md:text-[14px] max-sm:text-[13px]">
                    Let’s Talk
                  </h3>

                  <div className="flex shrink-0 -space-x-3 max-sm:-space-x-2.5">
                    {["/Avatar1.png", "/Avatar2.png", "/Avatar3.png", "/Avatar4.png"].map(
                      (src, i) => (
                        <div
                          key={i}
                          className="h-[26px] w-[26px] overflow-hidden rounded-full
                                     max-md:h-[22px] max-md:w-[22px]
                                     max-sm:h-[20px] max-sm:w-[20px]"
                        >
                          <Image
                            src={src}
                            alt={`avatar-${i + 1}`}
                            width={56}
                            height={56}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Right Side Note - desktop only exactly like existing */}
      <div className="absolute left-[64%] top-[55%] hidden lg:block">
        <p className="font-calligraffitti text-[24px] font-[400] italic leading-relaxed text-[#888888]">
          We get booked fast 🚀 <br />
          contact us now
        </p>

        <LetsTallk className="!absolute !left-[-57%] top-[60px]" />
      </div>

      {/* Mobile / tablet note */}
      <div className="absolute bottom-[8%] left-1/2 z-10 -translate-x-1/2 px-4 text-center lg:hidden">
        <p
          className="font-calligraffitti text-[18px] italic leading-relaxed text-[#888888]
                     max-sm:text-[15px]"
        >
          We get booked fast 🚀 <br />
          contact us now
        </p>
      </div>
    </section>
  );
}