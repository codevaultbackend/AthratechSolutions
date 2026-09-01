"use client";

import Image from "next/image";

export default function StoryGoal() {
    return (
        <section className="w-full overflow-hidden">
            <div
                className="
                    mx-auto
                    w-full
                    max-w-[1280px]

                    max-[767px]:px-[10px]
                "
            >
                {/* =========================
                    MAIN HEADING
                ========================== */}
                <h2
                    className="
                        m-0
                        mt-[75px]
                        max-w-[972px]
                        font-inter
                        text-[56px]
                        font-semibold
                        leading-[100%]
                        tracking-[-0.045em]
                        text-[#0E0E0E]

                        max-[767px]:max-w-full
                        max-[767px]:mt-[20px]
                        max-[767px]:text-[16px]
                        max-[767px]:leading-[1.05]
                        max-[767px]:tracking-[-0.025em]
                    "
                >
                    Ambitious goals to become the most trusted ERP for the
                    jewellery trade in India.
                </h2>

                {/* =========================
                    DESCRIPTION
                ========================== */}
                <p
                    className="
                        m-0
                        mt-[28px]
                        max-w-[850px]
                        font-inter
                        text-[20px]
                        font-normal
                        leading-[100%]
                        text-[#606060]

                        max-[767px]:mt-[14px]
                        max-[767px]:max-w-full
                        max-[767px]:text-[8px]
                        max-[767px]:leading-[1.35]
                    "
                >
                    A fast, reliable platform that connects users with
                    verified professionals for everyday household services
                    like plumbing, electrical, cleaning, and carpentry—making
                    booking, scheduling, and service delivery seamless,
                    efficient, and completely hassle-free.
                </p>

                {/* =========================
                    IMAGE CONTENT
                ========================== */}
                <div
                    className="
                        mt-[45px]
                        grid
                        grid-cols-[1.2fr_.8fr]
                        items-start
                        gap-[12px]

                        max-[767px]:mt-[18px]
                        max-[767px]:grid-cols-[1.55fr_1fr]
                        max-[767px]:gap-[5px]
                    "
                >
                    {/* =====================
                        LEFT IMAGE
                    ====================== */}
                    <div
                        className="
                            relative
                            aspect-square
                            w-full
                            overflow-hidden
                            rounded-[32px]
                            bg-black

                            max-[767px]:rounded-[8px]
                        "
                    >
                        <Image
                            src="/catalog2.png"
                            alt="Billing application"
                            fill
                            sizes="
                                (max-width: 767px) 60vw,
                                60vw
                            "
                            className="object-cover"
                        />
                    </div>

                    {/* =====================
                        RIGHT COLUMN
                    ====================== */}
                    <div
                        className="
                            min-w-0
                            flex
                            flex-col
                            items-start
                        "
                    >
                        {/* Right Image */}
                        <div
                            className="
                                relative
                                aspect-[1/1.08]
                                w-full
                                overflow-hidden
                                rounded-[32px]

                                max-[767px]:rounded-[7px]
                            "
                        >
                            <Image
                                src="/catalog3.png"
                                alt="Fast billing by scanning"
                                fill
                                sizes="
                                    (max-width: 767px) 40vw,
                                    35vw
                                "
                                className="object-cover"
                            />
                        </div>

                        {/* Catalog 4 */}
                        <div
                            className="
                                relative
                                mt-[57px]
                                ml-[22px]
                                h-[95px]
                                w-[411px]
                                overflow-hidden

                                max-[767px]:mt-[8px]
                                max-[767px]:ml-0
                                max-[767px]:h-[28px]
                                max-[767px]:w-full
                            "
                        >
                            <Image
                                src="/catalog4.png"
                                alt="Billing workflow"
                                fill
                                sizes="
                                    (max-width: 767px) 40vw,
                                    411px
                                "
                                className="
                                    object-contain
                                    object-left
                                "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}