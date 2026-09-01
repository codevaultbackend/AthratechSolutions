"use client";

export default function StoryIntro() {
    return (
        <section className="w-full">
            <div
                className="
                    mx-auto
                    mt-[70px]
                    w-full
                    max-w-[1280px]

                    max-[767px]:mt-[35px]
                    max-[767px]:px-[10px]
                "
            >
                {/* Intro Statement */}
                <p
                    className="
                        m-0
                        max-w-[1053px]
                        font-inter
                        text-[56px]
                        font-normal
                        leading-[1.12]
                        tracking-[-0.025em]
                        text-[#000000]

                        max-[767px]:max-w-[100%]
                        max-[767px]:text-[16px]
                        max-[767px]:leading-[1.08]
                        max-[767px]:tracking-[-0.02em]
                    "
                >
                    A{" "}
                    <span className="font-semibold">
                        centralized ERP
                    </span>{" "}
                    built for the jewellery trade, managing gold and silver
                    ornaments across branches with real-time stock visibility,
                    secure transfers, and complete item-level traceability.
                </p>

                {/* ERP Ecosystem */}
                <div
                    className="
                        mt-[90px]
                        mb-[72px]
                        flex
                        items-start
                        justify-between
                        gap-[40px]
                        max-[767px]:flex-col
                        max-[767px]:mt-[30px]
                        max-[767px]:mb-[30px]
                        max-[767px]:gap-[12px]
                    "
                >
                    {/* Section Title */}
                    <h1
                        className="
                            m-0
                            min-w-0
                            shrink
                            font-bricolage
                            text-[48px]
                            font-medium
                            leading-none
                            tracking-[-0.045em]

                            max-[767px]:text-[16px]
                            max-[767px]:tracking-[-0.03em]
                        "
                    >
                        ERP Ecosystem
                    </h1>

                    {/* Metadata */}
                    <div
                        className="
                            flex
                            shrink-0
                            gap-[55px]
                            pt-[3px]

                            max-[767px]:gap-[12px]
                            max-[767px]:pt-0
                        "
                    >
                        {/* Deliverables */}
                        <div className="min-w-0">
                            <p
                                className="
                                    m-0
                                    whitespace-nowrap
                                    font-geist
                                    text-[16px]
                                    font-normal
                                    leading-[110%]
                                    text-[#525252]

                                    max-[767px]:text-[6px]
                                    max-[767px]:leading-[110%]
                                "
                            >
                                Deliverables
                            </p>

                            <p
                                className="
                                    m-0
                                    mt-[3px]
                                    whitespace-nowrap
                                    font-geist
                                    text-[20px]
                                    font-bold
                                    leading-[110%]
                                    text-[#000000]

                                    max-[767px]:mt-[2px]
                                    max-[767px]:text-[6px]
                                    max-[767px]:leading-[110%]
                                "
                            >
                                UI/UX, Strategy, Development
                            </p>
                        </div>

                        {/* Platform */}
                        <div className="min-w-0">
                            <p
                                className="
                                    m-0
                                    whitespace-nowrap
                                    font-geist
                                    text-[16px]
                                    font-normal
                                    leading-[110%]
                                    text-[#525252]

                                    max-[767px]:text-[6px]
                                    max-[767px]:leading-[110%]
                                "
                            >
                                Platform
                            </p>

                            <p
                                className="
                                    m-0
                                    mt-[3px]
                                    whitespace-nowrap
                                    font-geist
                                    text-[20px]
                                    font-bold
                                    leading-[110%]
                                    text-[#000000]

                                    max-[767px]:mt-[2px]
                                    max-[767px]:text-[6px]
                                    max-[767px]:leading-[110%]
                                "
                            >
                                CRM, SAAS, Sales Tool
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}