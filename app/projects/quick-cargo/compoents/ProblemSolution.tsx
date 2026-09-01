"use client";

import Image from "next/image";

export default function ProblemSolution() {
    return (
        <section
            className="
                relative
                w-full
                overflow-hidden
                bg-white
            "
        >
            <div
                className="
                    relative
                    mx-auto
                    w-full
                    max-w-[1280px]
                    px-4

                    min-[375px]:px-5

                    sm:px-6

                    lg:px-0
                "
            >
                {/* =====================================================
                    HEADING
                ====================================================== */}
                <h3
                    className="
                        relative
                        z-40
                        m-0
                        font-sfpro
                        font-[510]
                        leading-[1]
                        tracking-normal
                        text-[#3A3A3A]

                        text-[28px]

                        min-[375px]:text-[30px]

                        sm:text-[38px]

                        md:text-[46px]

                        lg:text-[56px]
                    "
                >
                    Problem &
                    <br />
                    Solution
                </h3>

                {/* =====================================================
                    MAP + GLASS STAGE
                ====================================================== */}
                <div
                    className="
                        relative
                        mt-7
                        w-full

                        min-[375px]:mt-8

                        lg:mt-[74px]
                    "
                >
                    {/* =================================================
                        MAP BACKGROUND

                        IMPORTANT:
                        The map is completely independent from the glass
                        container.

                        It sits behind the glass.
                    ================================================== */}
                    <div
                        className="
                            pointer-events-none
                            absolute
                            z-0

                            right-[-30px]
                            top-[-5px]

                            h-[300px]
                            w-[440px]

                            sm:right-[-25px]
                            sm:top-[-10px]
                            sm:h-[340px]
                            sm:w-[550px]

                            md:right-[-15px]
                            md:top-[-20px]
                            md:h-[390px]
                            md:w-[680px]

                            lg:right-[-10px]
                            lg:top-[-35px]
                            lg:h-[432px]
                            lg:w-[900px]
                        "
                    >
                        <Image
                            src="/map.png"
                            alt=""
                            width={654}
                            height={317}
                            aria-hidden="true"
                            draggable={false}
                            className="
                                absolute
                                right-0
                                top-[-28%]
                                rounded-full
                                max-h-[317px]
                                max-w-[654px]

                                h-full
                                w-full
                                opacity-[0.82]
                            "
                        />
                    </div>

                    {/* =================================================
                        GLASS CONTAINER

                        VERY IMPORTANT:

                        The background is almost completely transparent.

                        The map remains visible through it.

                        Only a SMALL amount of blur is applied.
                    ================================================== */}
                    <div
                        className="
                            relative
                            z-10
                            w-full

                            rounded-[64px]

                            border-[4px]
                            border-[#FFFFFF]

                            bg-[#D1CFCF14]

                            backdrop-blur-[10px]
                            backdrop-saturate-[105%]

                            px-4
                            py-5

                            min-[375px]:rounded-[28px]
                            min-[375px]:px-5
                            min-[375px]:py-6

                            sm:rounded-[40px]
                            sm:border-[2px]
                            sm:px-7
                            sm:py-7
                            

                            md:rounded-[50px]
                            md:px-9
                            md:py-8
                        

                            lg:min-h-[432px]
                            lg:rounded-[64px]
                            lg:border-[3px]
                            lg:px-[48px]
                            lg:pt-[48px]
                            lg:pb-[48px]
                            lg:backdrop-blur-[4px]
                        "
                    >
                        {/* =================================================
                            CONTENT CONTAINER

                            Everything stays inside ONE container.
                        ================================================== */}
                        <div
                            className="
                                relative
                                z-20
                                flex
                                min-h-full
                                w-full
                                flex-col
                            "
                        >
                            {/* =============================================
                                TOP ROW
                            ============================================== */}
                            <div
                                className="
                                    relative
                                    z-30
                                    flex
                                    w-full
                                    items-center
                                    justify-between
                                "
                            >
                                {/* =========================================
                                    PROBLEM BADGE
                                ========================================== */}
                                <div
                                    className="
                                        flex
                                        w-fit
                                        shrink-0
                                        items-center
                                        gap-1.5

                                        rounded-full
                                        bg-white

                                        px-3
                                        py-1.5

                                        min-[375px]:gap-2
                                        min-[375px]:px-3.5

                                        sm:gap-2
                                        sm:px-4
                                        sm:py-2

                                        lg:gap-3
                                        lg:px-5
                                        lg:py-2
                                    "
                                >
                                    <Image
                                        src="/user.png"
                                        alt=""
                                        width={38}
                                        height={38}
                                        aria-hidden="true"
                                        draggable={false}
                                        className="
                                            h-6
                                            w-6
                                            shrink-0
                                            rounded-full
                                            object-cover

                                            min-[375px]:h-7
                                            min-[375px]:w-7

                                            sm:h-8
                                            sm:w-8

                                            lg:h-[38px]
                                            lg:w-[38px]
                                        "
                                    />

                                    <span
                                        className="
                                            whitespace-nowrap
                                            font-sfpro
                                            font-normal
                                            leading-none
                                            text-[#3A3A3A]

                                            text-[12px]

                                            min-[375px]:text-[13px]

                                            sm:text-[14px]

                                            lg:text-[16px]
                                        "
                                    >
                                        Problem
                                    </span>
                                </div>

                                {/* =========================================
                                    MAP DART
                                ========================================== */}
                                <Image
                                    src="/mapdart.png"
                                    alt=""
                                    width={315}
                                    height={210}
                                    aria-hidden="true"
                                    draggable={false}
                                    className="
                                        pointer-events-none
                                        absolute

                                        right-[-8px]
                                        !top-[-120px]

                                        z-40

                                        hidden

                                        h-auto
                                        w-[180px]

                                        select-none
                                        object-contain

                                        md:block
                                        md:right-[-8px]
                                        md:top-[-18px]
                                        md:w-[230px]

                                        lg:right-0
                                        lg:top-[-22%]
                                        lg:w-[315px]
                                    "
                                />
                            </div>

                            {/* =============================================
                                DESCRIPTION
                            ============================================== */}
                            <div
                                className="
                                    relative
                                    z-30
                                    mt-7
                                    w-full

                                    min-[375px]:mt-8

                                    sm:mt-10

                                    md:mt-14

                                    lg:mt-[80px]
                                "
                            >
                                <p
                                    className="
                                        m-0
                                        w-full
                                        max-w-[900px]

                                        font-sfpro
                                        font-[274]
                                        tracking-normal
                                        text-[#414141]

                                        text-[17px]
                                        leading-[1.3]

                                      

                                        max-[768px]:text-[23px]
                                        max-[768px]:leading-[1.25]

                                        lg:text-[40px]
                                        lg:leading-[1.05]
                                    "
                                >
                                    Customers, Transport Agencies, and
                                    Drivers struggle with fragmented
                                    logistics workflows,
                                    <span className="text-[#8B8B8B]">
                                        {" "}
                                        while trucks often return empty
                                    </span>{" "}
                                    — leading to wasted capacity, higher
                                    transportation costs, and inefficient
                                    freight movement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =====================================================
                    DASHED DIVIDER
                ====================================================== */}
                <div
                    className="
                        relative
                        z-20
                        mx-auto

                        my-8

                        h-[4px]
                        w-full

                        min-[375px]:my-9

                        sm:my-11
                        sm:h-[5px]

                        md:my-14

                        lg:my-[99px]
                        lg:h-[8px]
                    "
                    style={{
                        background:
                            "repeating-linear-gradient(to right, #D5D5D5 0 3px, transparent 3px 6px)",
                    }}
                    aria-hidden="true"
                />
            </div>
        </section>
    );
}