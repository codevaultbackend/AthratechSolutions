"use client";

import LetsTallk from "@/app/svgIcons/LetsTallk";
import Image from "next/image";
import Link from "next/link";

export default function MarketingCTA() {
    return (
        <section className="relative flex min-h-[100vh] max-md:min-h-[70vh] items-center justify-center  overflow-hidden px-4 my-[130px] max-[768px]:my-[70px]" id="contactcta">

            <div className="absolute pointer-events-none max-[768px]:!right-0 lg:right-[35%] lg:top-[2%] max-[768px]:!top-[-5%] ">
                <svg
                    width="368"
                    height="368"
                    viewBox="0 0 720 520"
                    fill="none"
                    className="rotate-[-12deg] scale-x-[-1] text-[#DFDFDF] opacity-35 lg:w-[470px]"
                >
                    <defs>
                        <linearGradient id="archFade" x1="100%" y1="0%" x2="0%" y2="0%">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
                            <stop offset="45%" stopColor="currentColor" stopOpacity="0.9" />
                            <stop offset="70%" stopColor="currentColor" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    <path
                        d="M 120 380 C 200 140, 520 140, 600 380"
                        stroke="url(#archFade)"
                        strokeWidth="92"
                        strokeLinecap="round"
                        fill="none"
                    />
                </svg>
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center max-w-[1068px] px-4">

                <h2 className="text-[48px] max-md:text-[28px] font-[600] max-[768px]:!text-[32px] text-black leading-tight font-bricolage ">
                    Let’s Build Something That Works
                </h2>

                <p className="text-[25px] max-md:text-[12px] text-[#000000] font-[500] my-[32px] max-md:my-[20px] font-bricolage tracking-[-4%] leading-[100%]">
                    A good-looking website is easy. A website that <br /> generates business — that’s what we build.
                </p>

                {/* Button */}
                <Link href="/contact-us">
                    <div className="flex justify-center items-center pb-[34px] max-md:pb-[16px] ">
                        {/* OUTER GLOW */}
                        <div className="relative rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.35),_rgba(180,180,180,0.25),_rgba(120,120,120,0.15),_transparent_70%)] shadow-[0px_4px_14.6px_0_#959595] max-[768px]:w-full ">

                            {/* SILVER METALLIC BORDER */}
                            <div className="rounded-full p-[6px] bg-[linear-gradient(175deg,#F5F5F5,#BDBDBD,#8F8F8F,#666666)] shadow-[0_0_40px_rgba(180,180,180,0.5)]  ">

                                {/* INNER BLACK PILL */}
                                <div className="flex items-center gap-4 px-4 py-2 max-md:px-3 max-md:py-1.5 rounded-full bg-black shadow-inner border-[0.5px] border-[#fff] max-[768px]:justify-center  max-[768px]:h-[56px] max-[768px]:text-[16px] max-[768px]:font-[500]">

                                    {/* TEXT */}
                                    <h3 className="text-white text-[16px] max-md:text-[14px] font-[500] tracking-tight">
                                        Let’s Talk
                                    </h3>

                                    {/* AVATARS */}
                                    <div className="flex -space-x-3">
                                        {["https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero2_eKVVHgfGm.jpg", "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero1_CpKdYK8kd.jpg", "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero_NaRzEsvqk.jpg", "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero2_eKVVHgfGm.jpg"].map(
                                            (src, i) => (
                                                <div
                                                    key={i}
                                                    className="w-[26px] h-[26px] max-md:w-[22px] max-md:h-[22px] rounded-full overflow-hidden "
                                                >
                                                    <Image
                                                        src={src}
                                                        alt="avatar"
                                                        width={56}
                                                        height={56}
                                                        className="object-cover h-full w-full"
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

        </section>
    );
}
