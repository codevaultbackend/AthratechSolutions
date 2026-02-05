"use client";

import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-screen lg:min-h-[82vh] bg-white overflow-hidden">

            {/* Bottom texture */}
            <img
                src="/bottom.png"
                alt=""
                className="absolute bottom-0 w-full  opacity-[40%] max-[768px]:h-[50%] max-[768px]:bottom-[-7%] max-[768px]:opacity-[60%] z-[9]"
            />

            {/* ================= HERO CONTENT ================= */}
            <div className="relative z-10 flex flex-col items-center text-center
        pt-[116px] px-6
        max-md:pt-[96px]
        max-sm:pt-[84px]"
            >
                {/* Headline */}
                <h1
                    className="
            max-w-[1100px]
            font-semibold
            !leading-[100%]
            text-black
            text-[116px]
            max-[1280px]:text-[90px]
            max-[1024px]:text-[64px]
            max-[768px]:text-[54px]
            max-[480px]:text-[50px]
          "
                >
                    <span className="mb-5">Where </span>

                    {/* Yellow Card */}
                    <span className="inline-flex align-middle mx-2 mb-5">
                        <span
                            className="
                w-[161px] h-[100px]
                max-[768px]:w-[120px] max-[768px]:h-[76px]
                max-[480px]:w-[100px] max-[480px]:h-[64px]
                !rounded-[30px]
                bg-gradient-to-b from-[#FFD976] to-[#F4A900]
                shadow-[0_12px_30px_rgba(0,0,0,0.25)]
                border-[2px] border-black
                rotate-[-8deg]
                overflow-hidden
              "
                        > <img src="/yellowcard.png" alt="blackcards" className="h-full w-full " /> </span>
                    </span>

                    <span className="text-gray-400 !mb-5">Ideas</span>
                    <br className="max-[600px]:hidden !mb-5" />
                    <span className="text-gray-400 max-[600px]:ml-2 !mb-5">become </span>

                    {/* Mobile black card */}
                    <span className="inline-block min-[600px]:hidden rotate-[6deg] align-middle ml-2 mt-2-0 !overflow-hidden rounded-[30px] !mt-3 shadow-[0_12px_30px_rgba(0,0,0,0.25)]
                ">
                        <span className="block w-[110px] h-[70px] rounded-[30px] bg-black shadow-xl border-[2px] border-black !overflow-hidden" >
                            <img src="/blackcards.png" alt="blackcards" className="h-full w-full  " /> </span>
                    </span>

                    <span className="text-black ml-2 !mb-5">Impact</span>
                </h1>

                {/* Desktop floating black card */}
                <div className="absolute right-[9%] top-[44%] rotate-[6deg] max-[1024px]:hidden mb-2 !overflow-hidden ">
                    <div className="w-[138px] h-[88px] rounded-[30px] bg-black shadow-xl !overflow-hidden  shadow-[0_12px_30px_rgba(0,0,0,0.25)]
                !overflow-hidden  shadow-[0_12px_30px_rgba(0,0,0,0.25)]
                border-[2px] border-black" >
                        <img src="/blackcards.png" alt="blackcards" className="h-full w-full  " /> </div>
                </div>

                {/* Subtext */}
                <p className="
          mt-8
          max-w-[520px]
          text-gray-600
          text-[16px]
          leading-[100%]
          font-[500]
          max-sm:text-[14px]
        ">
                    We help startups and brands create beautiful,
                    <br className="max-sm:hidden" />
                    functional products — fast and hassle-free.
                </p>

                {/* CTA ROW */}
                <div className="
          mt-10
          flex items-center gap-6
          flex-wrap justify-center
          max-sm:flex-col
          max-sm:w-full
        ">
                    {/* Contact Button */}
                    <Link href="/ContactForm" className="max-sm:w-full">
                        <div className="flex justify-center max-sm:w-full">
                            <div className="relative rounded-full
                bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.35),_rgba(180,180,180,0.25),_rgba(120,120,120,0.15),_transparent_70%)]
                shadow-[0px_4px_14.6px_0_#959595]
                max-sm:w-full
              ">
                                <div className="rounded-full p-[6px]
                  bg-[linear-gradient(175deg,#F5F5F5,#BDBDBD,#8F8F8F,#666666)]
                  shadow-[0_0_40px_rgba(180,180,180,0.5)]
                  max-sm:w-full
                ">
                                    <div className="flex items-center justify-center
                    px-6 py-3
                    rounded-full bg-black
                    border border-white
                    max-sm:w-full
                  ">
                                        <p className="text-white text-sm">
                                            Contact Us  <span className="transition-transform group-hover:translate-x-1 ml-[10px]">
                                                →
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Trusted Clients */}
                    <div className="flex items-center gap-3 max-sm:flex-col">
                        <div className="flex -space-x-3">
                            {["Avatar1.png", "Avatar2.png", "Avatar3.png", "Avatar4.png"].map(
                                (item, i) => (
                                    <div
                                        key={i}
                                        className="w-8 h-8 rounded-full border border-white overflow-hidden"
                                    >
                                        <img src={item} alt="" />
                                    </div>
                                )
                            )}
                        </div>
                        <span className="text-xs text-gray-500">
                            50+ Trusted Clients
                        </span>
                    </div>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
}
