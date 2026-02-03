"use client";

import LetsTallk from "@/app/svgIcons/LetsTallk";
import Image from "next/image";
import Link from "next/link";

export default function ContactCTA() {
    return (
        <section className="relative flex min-h-[100vh] max-md:min-h-[70vh] items-center justify-center bg-[#EDEDED] overflow-hidden px-4">

            {/* Decorative Arc */}
            <div className="absolute top-[15%] max-md:top-[8%]">
                <div className="relative h-[260px] w-[260px] max-md:h-[160px] max-md:w-[160px] rounded-full border-[12px] border-transparent">
                    <div className="absolute inset-0 rounded-full border-[12px] border-[#F5F5F5] border-l-transparent border-b-transparent rotate-45"></div>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center max-w-[620px] px-4">

                <h2 className="text-[48px] max-md:text-[28px] font-[600] text-black leading-tight font-bricolage">
                    We’ll reply in 24hrs
                </h2>

                <p className="text-[16px] max-md:text-[14px] text-gray-500 font-[400] my-[32px] max-md:my-[20px]">
                    only 3 slots left for new projects
                </p>

                {/* Button */}
                <Link href="/contact">
                    <div className="flex justify-center items-center pb-[34px] max-md:pb-[16px]">
                        {/* OUTER GLOW */}
                        <div className="relative rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.35),_rgba(180,180,180,0.25),_rgba(120,120,120,0.15),_transparent_70%)] shadow-[0px_4px_14.6px_0_#959595]">

                            {/* SILVER METALLIC BORDER */}
                            <div className="rounded-full p-[6px] bg-[linear-gradient(175deg,#F5F5F5,#BDBDBD,#8F8F8F,#666666)] shadow-[0_0_40px_rgba(180,180,180,0.5)]">

                                {/* INNER BLACK PILL */}
                                <div className="flex items-center gap-4 px-4 py-2 max-md:px-3 max-md:py-1.5 rounded-full bg-black shadow-inner border-[0.5px] border-[#fff]">

                                    {/* TEXT */}
                                    <h3 className="text-white text-[16px] max-md:text-[14px] font-[500] tracking-tight">
                                        Let’s Talk
                                    </h3>

                                    {/* AVATARS */}
                                    <div className="flex -space-x-3">
                                        {["/Avatar1.png", "/Avatar2.png", "/Avatar3.png", "/Avatar4.png"].map(
                                            (src, i) => (
                                                <div
                                                    key={i}
                                                    className="w-[26px] h-[26px] max-md:w-[22px] max-md:h-[22px] rounded-full overflow-hidden border border-white"
                                                >
                                                    <Image
                                                        src={src}
                                                        alt="avatar"
                                                        width={56}
                                                        height={56}
                                                        className="object-cover"
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

            {/* Right Side Note (Desktop Only) */}
            <div className="absolute left-[64%] top-[55%] hidden lg:block">
                <p className="text-[12px] text-gray-400 italic leading-relaxed">
                    We get booked fast 🚀 <br />
                    contact us now
                </p>

                {/* curved arrow */}
                <LetsTallk className="absolute left-[-74%]" />
            </div>
        </section>
    );
}
