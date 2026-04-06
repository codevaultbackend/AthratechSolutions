"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectGrid from "./Component/ProjectGrid";


export default function Projects() {
    return (
        <>
            <section className="mx-auto grid w-full max-w-[1728px] max-[1224px]:!grid-cols-1 gap-y-10 px-4 pb-[82px] pt-[86px] sm:px-6 md:pt-[100px] lg:grid-cols-[540px_1fr] lg:gap-x-[90px] lg:px-8 lg:pb-[120px] xl:grid-cols-[600px_1fr] xl:gap-x-[140px] xl:px-12 xl:pt-[118px]">
                <div className="flex items-start">
                    <h1 className="font-bricolage text-[58px] font-[600] leading-[0.9] tracking-[-0.075em] text-[#000000] sm:text-[78px] md:text-[94px] lg:text-[108px] xl:text-[120px]">
                        Our
                        <br />
                        Projects
                    </h1>
                </div>

                <div className="max-w-[690px] lg:pt-[10px]">
                    <p className="max-w-[635px] !font-inter text-[20px] font-[600] leading-[1.08] tracking-[-0.03em] text-[#373737] sm:text-[25px] lg:text-[20px] xl:text-[20px]">
                        Built to perform, our ready-made digital products are designed to
                        drive higher conversions, deeper engagement, and long-term retention
                        for modern brands.
                    </p>

                    <p className="mt-[38px] max-w-[620px] !font-inter text-[16px] !font-[400] leading-[100%] tracking-[-0.025em] text-[#373737] sm:text-[18px] lg:text-[18px] xl:text-[18px]">
                        Our ready-made products eliminate delays and rework—delivering
                        high-quality solutions, fast. Built for growing businesses, they
                        help you launch quicker, scale smarter, and drive real impact from
                        day one.
                    </p>

                    <div className="mt-[34px] flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:gap-8">
                        <Link href="/ContactForm" className="max-[768px]:w-full">
                            <div className="flex items-center justify-center pb-[34px] max-md:pb-[16px]">
                                <div className="relative rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.35),_rgba(180,180,180,0.25),_rgba(120,120,120,0.15),_transparent_70%)] shadow-[0px_4px_14.6px_0_#959595] max-[768px]:w-full">
                                    <div className="rounded-full bg-[linear-gradient(175deg,#F5F5F5,#BDBDBD,#8F8F8F,#666666)] p-[6px] shadow-[0_0_40px_rgba(180,180,180,0.5)]">
                                        <div className="flex h-[56px] items-center gap-4 rounded-full border-[0.5px] border-[#fff] bg-black px-4 py-2 shadow-inner max-[768px]:justify-center max-[768px]:text-[16px] max-[768px]:font-[500] max-md:px-3 max-md:py-1.5">
                                            <h3 className="text-[16px] font-[500] tracking-tight text-white max-md:text-[14px] max-[768px]:!text-[16px]">
                                                Let’s Talk
                                            </h3>

                                            <div className="flex -space-x-3">
                                                {["/Avatar1.png", "/Avatar2.png", "/Avatar3.png", "/Avatar4.png"].map(
                                                    (src, i) => (
                                                        <div
                                                            key={i}
                                                            className="h-[26px] w-[26px] overflow-hidden rounded-full max-md:h-[22px] max-md:w-[22px]"
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

                        <div className="relative pl-0 sm:pl-[28px] max-[768px]:flex max-[768px]:mx-auto">
                            <svg
                                className="absolute left-[-86px] top-[40px] hidden sm:block"
                                width="98"
                                height="44"
                                viewBox="0 0 98 44"
                                fill="none"
                            >
                                <path
                                    d="M96 39C78 43 34 47 10 16C6 11 3 6 1 1"
                                    stroke="#BDBDBD"
                                    strokeWidth="1.1"
                                    strokeLinecap="round"
                                />
                            </svg>

                            <p className="font-calligraffitti text-[22px] italic leading-[1.35] text-[#ABABAB] sm:text-[24px] xl:text-[26px] max-[768px]:!mx-auto max-[768px]:!text-center">
                                We get booked fast 🚀
                                <br />
                                contact us now
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <ProjectGrid />
        </>
    );
}