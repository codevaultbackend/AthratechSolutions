"use client";

import Image from "next/image";

export default function Hero() {
    return (
        <section className="w-full overflow-hidden">
            <div
                className="
                    mx-auto
                    max-w-[1282px]
                    px-6
                    sm:px-8
                    md:px-10
                    lg:px-0
                    xl:px-0
                    py-14
                    md:py-20
                    xl:py-28
                "
            >
                <div
                    className="
                        grid
                        items-center
                        gap-10
                        md:gap-12
                        lg:gap-20
                        xl:gap-28
                        grid-cols-1
                        lg:grid-cols-2
                    "
                >
                    {/* Left Content */}

                    <div
                        className="
                            order-2
                            lg:order-1
                        "
                    >
                        <span
                            className="
                                block
                                text-[#8A8A8A]
                                text-[20px]
                                sm:text-[22px]
                                md:text-[24px]
                                lg:text-[24px]
                                xl:text-[24px]
                                font-normal
                                font-calligraffitti
                            "
                        >
                            About Us
                        </span>

                        <h2
                            className="
                                mt-4
                                lg:mt-6

                                font-semibold
                                font-geist
                                text-[#323232]

                                leading-[115%]
                                tracking-[-0.02em]

                                text-[34px]
                                sm:text-[42px]
                                md:text-[48px]
                                lg:text-[54px]
                            "
                        >
                            We’re Here to Make
                            <br />
                            a Difference
                        </h2>

                        <p
                            className="
                                mt-4
                                lg:mt-[16px]

                                text-[#000000]
                                font-geist
                                font-[400]

                                text-[16px]
                                md:text-[17px]
                                lg:text-[18px]

                                leading-[140%]
                                tracking-[-0.02em]
                            "
                        >
                            From concept to execution, every project showcases
                            our passion for technology, innovation, and
                            meaningful digital experiences.
                        </p>
                    </div>

                    {/* Right Image */}

                    <div
                        className="
                            order-1
                            lg:order-2

                            relative

                            w-full
                            max-w-[662px]
                            aspect-[1.08]

                            lg:max-h-[467px]

                            rounded-[20px]
                            md:rounded-[28px]
                            lg:rounded-[32px]

                            overflow-hidden
                            mx-auto
                        "
                    >
                        <Image
                            src="/about-us.png"
                            alt="About Image"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width:1024px) 100vw, 662px"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}