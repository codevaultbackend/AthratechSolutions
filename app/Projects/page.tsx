"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";

const projectCards = [
    {
        id: 1,
        title: "Mark Day",
        description:
            "A smart attendance and leave management system enabling seamless check-ins, leave requests, and history tracking—built to simplify workforce management and boost organizational efficiency.",
        image: "/project1.png",
        href: "/projects/mark-day",
        cardBg: "bg-[#09185F]",
    },
    {
        id: 2,
        title: "Chugen",
        description:
            "A poultry farm focused on efficient livestock management, ensuring healthy bird production, quality output, and sustainable practices to meet growing food and supply demands.",
        image: "/project2.png",
        href: "/projects/chugen",
        cardBg: "bg-[#ECEAEA]",
    },
    {
        id: 3,
        title: "Fast Response",
        description:
            "A fast-response platform to quickly book trusted professionals for electrical, plumbing, cleaning, carpentry, and other household services—ensuring reliable and hassle-free service.",
        image: "/project3.png",
        href: "/projects/fast-response",
        cardBg: "bg-[#050505]",
    },
    {
        id: 4,
        title: "SankalPSetu Foundation",
        description:
            "Empowering underserved communities through education, healthcare, and skill development—bridging hope with opportunity.",
        image: "/project4.png",
        href: "/projects/sankalp-setu-foundation",
        cardBg: "bg-[#ECEAEA]",
    },
    {
        id: 5,
        title: "Man Power Solutions",
        description:
            "Manpower Solutions helps companies scale faster through structured bulk hiring from top colleges across India.",
        image: "/project5.png",
        href: "/projects/man-power-solutions",
        cardBg: "bg-[#2D3A74]",
    },
    {
        id: 6,
        title: "Mark Day",
        description:
            "A smart attendance and leave management system enabling seamless check-ins, leave requests, and history tracking—built to simplify workforce management and boost organizational efficiency.",
        image: "/project6.png",
        href: "/projects/mark-day-2",
        cardBg: "bg-[#173D78]",
    },
];

export default function Projects() {
    return (
        <main className="w-full bg-[#FDFDFD] text-[#111111]">

            <section className="mx-auto grid w-full max-w-[1728px] grid-cols-1 gap-y-10 px-4 pb-[82px] pt-[86px] sm:px-6 md:pt-[100px] lg:grid-cols-[540px_1fr] lg:gap-x-[90px] lg:px-8 lg:pb-[120px] xl:grid-cols-[600px_1fr] xl:gap-x-[140px] xl:px-12 xl:pt-[118px]">
                <div className="flex items-start">
                    <h1 className="font-bricolage text-[58px] font-[600] leading-[0.9] tracking-[-0.075em] text-[#000000] sm:text-[78px] md:text-[94px] lg:text-[108px] xl:text-[120px]">
                        Our
                        <br />
                        Projects
                    </h1>
                </div>

                <div className="max-w-[690px] lg:pt-[10px]">
                    <p className="max-w-[635px] font-inter text-[22px] font-[600] leading-[1.08] tracking-[-0.03em] text-[#373737] sm:text-[25px] lg:text-[20px] xl:text-[20px]">
                        Built to perform, our ready-made digital products are designed to
                        drive higher conversions, deeper engagement, and long-term retention
                        for modern brands.
                    </p>

                    <p className="mt-[26px] max-w-[620px] mt-[48px] font-inter text-[16px] font-[400] leading-[100%] tracking-[-0.025em] text-[#373737] sm:text-[18px] lg:text-[21px] xl:text-[18px]">
                        Our ready-made products eliminate delays and rework—delivering
                        high-quality solutions, fast. Built for growing businesses, they
                        help you launch quicker, scale smarter, and drive real impact from
                        day one.
                    </p>

                    <div className="mt-[34px] flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:gap-8">
                        <Link href="/ContactForm">
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
                                                {["/Avatar1.png", "/Avatar2.png", "/Avatar3.png", "/Avatar4.png"].map(
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

                        <div className="relative pl-0 sm:pl-[28px]">
                            <svg
                                className="absolute left-[-86px] top-[20%] hidden sm:block top-[40px]"
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

                            <p className="font-calligraffitti text-[22px] italic leading-[1.35] text-[#ABABAB] sm:text-[24px] xl:text-[26px]">
                                We get booked fast 🚀
                                <br />
                                contact us now
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* project cards */}
            <section className="mx-auto w-full max-w-[1728px] px-4 pb-[110px] sm:px-6 lg:px-8 xl:px-12 xl:pb-[140px]">
                <div className="grid grid-cols-1 gap-x-[58px] gap-y-[54px] sm:grid-cols-2 lg:grid-cols-3 xl:gap-y-[68px]">
                    {projectCards.map((item) => (
                        <Link key={item.id} href={item.href} className="group block">
                            <article className="w-full">
                                <div
                                    className={`relative h-[250px] w-full overflow-hidden rounded-[28px] ${item.cardBg} sm:h-[280px] lg:h-[320px] xl:h-[392px]`}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                    />
                                </div>

                                <div className="pt-[18px]">
                                    <h3 className="font-inter text-[26px] font-[500] leading-[1.02] tracking-[-0.05em] text-[#181818] sm:text-[30px] xl:text-[32px]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-[8px] max-w-[96%] font-inter text-[13px] font-[400] leading-[1.28] tracking-[-0.01em] text-[#717171] sm:text-[14px] xl:text-[15px]">
                                        {item.description}
                                    </p>

                                    <div className="mt-[14px] inline-flex items-center gap-[7px] text-[14px] font-[500] text-[#4F74FF]">
                                        <span>View Project</span>
                                        <ArrowRight size={14} />
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </section>


        </main>
    );
}