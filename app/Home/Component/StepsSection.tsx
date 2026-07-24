"use client";

import Image from "next/image";
import React from "react";

export default function StepsSection() {
    return (
        <section
            className="
                relative 
                z-[2]
                w-full
                overflow-hidden
                bg-white
                pt-[92px]
                sm:pt-[100px]
                lg:pt-[118px]
                pb-[120px]
                lg:pb-[224px]
            "
            id="steps"
        >

            <div
                className="
                    mx-auto
                    w-full
                    max-w-[1440px]
                   
                "
            >

                {/* HEADER */}
                <div
                    className="
                        relative
                        z-10
                        mb-[56px]
                        text-center
                        sm:mb-[70px]
                        md:mb-[90px]
                    "
                >

                    <p
                        className="
                            mx-auto
                            mb-4
                            flex
                            w-full
                            max-w-[320px]
                            items-center
                            justify-center
                            font-calligraffitti
                            text-[18px]
                            text-[#7A7A7A]

                            sm:mb-5
                            sm:max-w-[380px]
                            sm:text-[20px]

                            md:mb-6
                            md:max-w-[460px]
                            md:text-[24px]
                        "
                    >

                        <span
                            className="
                                h-[1px]
                                flex-1
                                bg-gradient-to-r
                                from-[#9C9C9C]
                                to-[#DFDFDF]
                            "
                        />

                        <span className="shrink-0 px-3 sm:px-4">
                            Process
                        </span>

                        <span
                            className="
                                h-[1px]
                                flex-1
                                bg-gradient-to-l
                                from-[#9C9C9C]
                                to-[#DFDFDF]
                            "
                        />

                    </p>



                    <h2
                        className="
                            mx-auto
                            max-w-[300px]
                            text-center
                            font-bricolage
                            font-[400]
                            text-[24px]
                            leading-[1.15]

                            sm:max-w-[420px]
                            sm:text-[34px]

                            md:max-w-[540px]
                            md:text-[44px]

                            lg:max-w-[620px]
                            lg:text-[56px]
                        "
                    >

                        Take the first step 🚶
                        <br />

                        <span className="text-[#8A8A8A]">
                            and we will guide you
                        </span>

                    </h2>


                </div>





                {/* DESKTOP CARDS */}
                <div
                    className="
                        relative
                        mx-auto
                        mt-[76px]
                        hidden
                        h-[390px]
                        w-full
                        max-w-[1440px]
                        md:block

                        lg:mt-[86px]
                        lg:h-[430px]
                    "
                >


                    {/* TOP CURVE ARROW */}
                    <svg
                        className="
                            pointer-events-none
                            absolute
                            left-[59.5%]
                            top-[-54px]
                            z-20
                            h-[84px]
                            w-[238px]
                        "
                        viewBox="0 0 238 84"
                        fill="none"
                    >

                        <path
                            d="M5 37C62 5 151 -12 225 65"
                            stroke="#111111"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                        />

                        <path
                            d="M220 53L226 66L212 62"
                            stroke="#111111"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                    </svg>





                    {/* BOTTOM CURVE ARROW */}
                    <svg
                        className="
                            pointer-events-none
                            absolute
                            left-[25.7%]
                            bottom-[-217px]
                            z-20
                            h-[88px]
                            w-[258px]
                        "
                        viewBox="0 0 258 88"
                        fill="none"
                    >

                        <path
                            d="M4 27C68 82 158 84 244 12"
                            stroke="#111111"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                        />

                        <path
                            d="M231 12L246 10L242 25"
                            stroke="#111111"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                    </svg>






                    {/* CARD 1 */}
                    <article
                        className="
                            absolute
                            left-[1.8%]
                            top-[52px]
                            z-10

                            h-[514px]
                            w-[426px]

                            rotate-[-6.2deg]

                            overflow-hidden
                            rounded-[28px]
                            border-[9px]
                            border-[#EFEFEFD9]

                            bg-white

                            shadow-[0_0_0_1px_rgba(0,0,0,0.015),0_10px_26px_rgba(0,0,0,0.035)]
                        "
                    >

                        <Image
                            src="/step3.png"
                            alt="Conversation"
                            fill
                            className="
                                object-cover
                                rounded-[20px]
                            "
                        />


                        <div
                            className="
                                absolute
                                bottom-[10px]
                                left-[15px]
                                right-[15px]

                                w-[90%]

                                rounded-[16px]

                                bg-[#0000005C]

                                p-[20px]

                                backdrop-blur-sm
                            "
                        >

                            <h3
                                className="
                                    mb-[8px]
                                    font-bricolage
                                    text-[24px]
                                    font-medium
                                    leading-none
                                    tracking-[-0.025em]
                                    text-white
                                "
                            >
                                Conversation
                            </h3>


                            <p
                                className="
                                    max-w-[220px]
                                    font-bricolage
                                    text-[16px]
                                    font-normal
                                    leading-[1.2]
                                    tracking-[-0.018em]
                                    text-white
                                "
                            >
                                We talk about your business, your idea and current activities
                                and results.
                            </p>

                        </div>

                    </article>
                                        {/* CARD 2 */}
                    <article
                        className="
                            absolute
                            left-1/2
                            top-[10px]

                            z-40

                            h-[514px]
                            w-[426px]

                            -translate-x-1/2
                            rotate-[13deg]

                            overflow-hidden

                            rounded-[28px]

                            border-[9px]
                            border-[#EFEFEFD9]

                            bg-white

                            shadow-[0_18px_38px_rgba(0,0,0,0.2)]
                        "
                    >

                        <Image
                            src="/step2.png"
                            alt="Analysis"
                            fill
                            className="
                                object-cover
                                rounded-[20px]
                            "
                        />



                        <div
                            className="
                                absolute
                                bottom-[12px]
                                left-[12px]
                                right-[12px]

                                w-[95%]

                                rounded-[16px]

                                bg-[#2F2F2F96]

                                p-[21px]

                                backdrop-blur-sm
                            "
                        >

                            <h3
                                className="
                                    mb-[8px]
                                    font-bricolage
                                    text-[24px]
                                    font-medium
                                    leading-none
                                    tracking-[-0.025em]
                                    text-white
                                "
                            >
                                Analysis
                            </h3>



                            <p
                                className="
                                    max-w-[220px]
                                    font-bricolage
                                    text-[16px]
                                    font-normal
                                    leading-[1.2]
                                    tracking-[-0.018em]
                                    text-white
                                "
                            >
                                We analyse you, collect relevant data, understand you and will
                                create a strategy just for your brand.
                            </p>


                        </div>


                    </article>







                    {/* CARD 3 */}
                    <article
                        className="
                            absolute
                            right-[1.8%]
                            top-[52px]

                            z-30

                            h-[514px]
                            w-[426px]

                            rotate-[-4.2deg]

                            overflow-hidden

                            rounded-[28px]

                            border-[9px]
                            border-[#EFEFEF]

                            bg-white

                            shadow-[0_0_0_1px_rgba(0,0,0,0.015),0_10px_26px_rgba(0,0,0,0.035)]
                        "
                    >

                        <Image
                            src="/step1.png"
                            alt="Get Your Work Done"
                            fill
                            className="
                                object-cover
                                rounded-[20px]
                            "
                        />



                        <div
                            className="
                                absolute
                                bottom-[12px]

                                left-[12px]
                                right-[12px]

                                rounded-[16px]

                                bg-[#0000005C]

                                p-[21px]

                                backdrop-blur-sm
                            "
                        >

                            <h3
                                className="
                                    mb-[8px]
                                    font-bricolage
                                    text-[24px]
                                    font-medium
                                    leading-none
                                    tracking-[-0.025em]

                                    text-white
                                "
                            >
                                Get Your Work Done
                            </h3>



                            <p
                                className="
                                    max-w-[220px]

                                    font-bricolage
                                    text-[16px]
                                    font-normal

                                    leading-[1.2]

                                    tracking-[-0.018em]

                                    text-white
                                "
                            >
                                We talk about your business, your idea and current activities
                                and results.
                            </p>


                        </div>


                    </article>



                </div>
                                {/* MOBILE CARDS */}
                <div
                    className="
                        mx-auto
                        mt-[48px]
                        flex
                        w-full
                        max-w-[390px]
                        flex-col
                        gap-[24px]

                        md:hidden
                    "
                >


                    {/* MOBILE CARD 1 */}
                    <article
                        className="
                            relative
                            h-[420px]
                            w-full

                            overflow-hidden

                            rounded-[28px]

                            border-[8px]
                            border-[#EFEFEFD9]

                            bg-white

                            shadow-[0_8px_24px_rgba(0,0,0,0.08)]
                        "
                    >

                        <Image
                            src="/step3.png"
                            alt="Conversation"
                            fill
                            className="
                                object-cover
                            "
                        />


                        <div
                            className="
                                absolute

                                bottom-[14px]
                                left-[14px]
                                right-[14px]

                                rounded-[18px]

                                bg-[#0000008C]

                                p-[18px]

                                backdrop-blur-sm
                            "
                        >

                            <h3
                                className="
                                    mb-2
                                    font-bricolage
                                    text-[22px]
                                    font-medium
                                    tracking-[-0.03em]
                                    text-white
                                "
                            >
                                Conversation
                            </h3>


                            <p
                                className="
                                    max-w-[260px]
                                    font-bricolage
                                    text-[14px]
                                    leading-[1.35]
                                    text-white
                                "
                            >
                                We talk about your business, your idea and current activities
                                and results.
                            </p>

                        </div>

                    </article>






                    {/* MOBILE CARD 2 */}
                    <article
                        className="
                            relative
                            h-[420px]
                            w-full

                            overflow-hidden

                            rounded-[28px]

                            border-[8px]
                            border-[#EFEFEFD9]

                            bg-white

                            shadow-[0_8px_24px_rgba(0,0,0,0.12)]
                        "
                    >

                        <Image
                            src="/step2.png"
                            alt="Analysis"
                            fill
                            className="
                                object-cover
                            "
                        />



                        <div
                            className="
                                absolute

                                bottom-[14px]
                                left-[14px]
                                right-[14px]

                                rounded-[18px]

                                bg-[#2F2F2FB5]

                                p-[18px]

                                backdrop-blur-sm
                            "
                        >

                            <h3
                                className="
                                    mb-2
                                    font-bricolage
                                    text-[22px]
                                    font-medium
                                    tracking-[-0.03em]
                                    text-white
                                "
                            >
                                Analysis
                            </h3>



                            <p
                                className="
                                    max-w-[270px]
                                    font-bricolage
                                    text-[14px]
                                    leading-[1.35]
                                    text-white
                                "
                            >
                                We analyse you, collect relevant data, understand you and will
                                create a strategy just for your brand.
                            </p>


                        </div>


                    </article>








                    {/* MOBILE CARD 3 */}
                    <article
                        className="
                            relative
                            h-[420px]
                            w-full

                            overflow-hidden

                            rounded-[28px]

                            border-[8px]
                            border-[#EFEFEFD9]

                            bg-white

                            shadow-[0_8px_24px_rgba(0,0,0,0.08)]
                        "
                    >

                        <Image
                            src="/step1.png"
                            alt="Get Your Work Done"
                            fill
                            className="
                                object-cover
                            "
                        />



                        <div
                            className="
                                absolute

                                bottom-[14px]
                                left-[14px]
                                right-[14px]

                                rounded-[18px]

                                bg-[#0000008C]

                                p-[18px]

                                backdrop-blur-sm
                            "
                        >

                            <h3
                                className="
                                    mb-2
                                    font-bricolage
                                    text-[22px]
                                    font-medium
                                    tracking-[-0.03em]
                                    text-white
                                "
                            >
                                Get Your Work Done
                            </h3>



                            <p
                                className="
                                    max-w-[270px]
                                    font-bricolage
                                    text-[14px]
                                    leading-[1.35]
                                    text-white
                                "
                            >
                                We talk about your business, your idea and current activities
                                and results.
                            </p>


                        </div>


                    </article>


                </div>


            </div>

        </section>
    );
}