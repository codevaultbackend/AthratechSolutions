"use client";

import Image from "next/image";

export default function Solution() {
    return (
        <section
            className="
                mb-10
                w-full
                overflow-hidden

                min-[375px]:mb-12
                sm:mb-14
                md:mb-16
                lg:mb-[80px]
            "
        >
            <div
                className="
                    relative
                    mx-auto
                    w-full
                    overflow-hidden

                    rounded-[20px]
                    border
                    border-white
                    bg-[#F5F7F2]

                    px-4
                    pt-4
                    pb-8

                    min-[375px]:rounded-[22px]
                    min-[375px]:px-5
                    min-[375px]:pt-5
                    min-[375px]:pb-9

                    sm:rounded-[32px]
                    sm:px-7
                    sm:pt-7
                    sm:pb-12

                    md:rounded-[48px]
                    md:border-2
                    md:px-9
                    md:pt-9
                    md:pb-16

                    lg:rounded-[64px]
                    lg:px-[56px]
                    lg:pt-[52px]
                    lg:pb-[126px]

                    lg:min-h-[420px]
                "
            >
                {/* =====================================================
                    TOP ROW
                ====================================================== */}
                <div
                    className="
                        relative
                        z-10
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-4
                    "
                >
                    {/* =================================================
                        SOLUTION BADGE
                    ================================================== */}
                    <div
                        className="
                            flex
                            h-auto
                            min-h-[32px]
                            w-fit
                            shrink-0
                            items-center
                            gap-1.5
                            rounded-full
                            bg-[#16D000]
                            px-3
                            py-1.5

                            min-[375px]:min-h-[34px]
                            min-[375px]:gap-2
                            min-[375px]:px-3.5
                            min-[375px]:py-1.5

                            sm:min-h-[40px]
                            sm:gap-2.5
                            sm:px-4
                            sm:py-2

                            md:min-h-[48px]
                            md:gap-3
                            md:px-5

                            lg:h-[72px]
                            lg:min-h-0
                            lg:gap-6
                            lg:px-[28px]
                            lg:py-0
                        "
                    >
                        <Image
                            src="/solution.png"
                            alt=""
                            width={47}
                            height={47}
                            aria-hidden="true"
                            className="
                                h-5
                                w-5
                                shrink-0
                                object-contain

                                min-[375px]:h-[21px]
                                min-[375px]:w-[21px]

                                sm:h-6
                                sm:w-6

                                md:h-7
                                md:w-7

                                lg:h-[47px]
                                lg:w-[47px]
                            "
                        />

                        <span
                            className="
                                whitespace-nowrap
                                font-sfpro
                                font-[300]
                                leading-none
                                text-white

                                text-[11px]

                                min-[375px]:text-[12px]

                                sm:text-[14px]

                                md:text-[17px]

                                lg:text-[28px]
                                lg:font-[200]
                            "
                        >
                            Solution
                        </span>
                    </div>

                    {/* =================================================
                        AVATAR
                    ================================================== */}
                    <div
                        className="
                            relative
                            flex
                            shrink-0
                            items-center
                        "
                    >
                        <Image
                            src="/solutionavatar.png"
                            alt="People"
                            width={172}
                            height={52}
                            sizes="
                                (max-width: 374px) 58px,
                                (max-width: 767px) 68px,
                                (max-width: 1023px) 110px,
                                172px
                            "
                            className="
                                h-auto
                                w-[58px]
                                max-w-full
                                object-contain

                                min-[375px]:w-[64px]

                                sm:w-[82px]

                                md:w-[110px]

                                lg:w-[172px]
                            "
                        />
                    </div>
                </div>

                {/* =====================================================
                    CONTENT
                ====================================================== */}
                <div
                    className="
                        relative
                        z-10
                        mt-8
                        w-full

                        min-[375px]:mt-9

                        sm:mt-12

                        md:mt-16

                        lg:mt-[130px]
                    "
                >
                    <h2
                        className="
                            m-0
                            w-full
                            max-w-[1560px]
                            font-sfpro
                            font-[300]
                            tracking-[-0.02em]
                            text-[#404040]

                            text-[18px]
                            leading-[125%]

                            min-[375px]:text-[19px]
                            min-[375px]:leading-[125%]

                            sm:text-[23px]
                            sm:leading-[120%]

                            md:text-[30px]
                            md:leading-[115%]

                            lg:text-[40px]
                            lg:leading-[112%]
                            lg:tracking-[-0.04em]
                            lg:font-[200]
                        "
                    >
                        Quick Cargo unifies truck booking, fleet management,
                        driver operations, and real-time shipment tracking
                        into one seamless platform{" "}
                        <span className="text-[#9B9B9B]">
                            while maximizing truck utilization through a
                            dedicated Share Space feature that helps reduce
                            empty return trips.
                        </span>
                    </h2>
                </div>
            </div>
        </section>
    );
}