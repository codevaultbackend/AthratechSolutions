"use client";

import Image from "next/image";

export default function FeatureShowcase() {
    return (
        <section className="w-full overflow-hidden">
            <div
                className="
                    mx-auto
                    w-full
                    max-w-[1280px]
                    pb-[55px]

                    max-[767px]:px-[10px]
                    max-[767px]:pb-[35px]
                "
            >
                <div
                    className="
                        grid
                        grid-cols-[48fr_50fr]
                        items-end
                        gap-[2fr]

                        max-[767px]:grid-cols-[minmax(0,1fr)_minmax(0,1.04fr)]
                        max-[767px]:gap-[6px]
                    "
                >
                    {/* LEFT FEATURE */}
                    <div
                        className="
                            min-w-0
                            flex
                            flex-col
                            mt-[40px]
                            gap-[42px]
                            max-[767px]:mt-[10px]
                            max-[767px]:gap-[8px]
                        "
                    >
                        <p
                            className="
                                m-0
                                w-full
                                max-w-full
                                font-sfpro
                                text-[24px]
                                font-[100]
                                leading-[1.35]
                                text-[#000000]

                                max-[767px]:max-w-full
                                max-[767px]:text-[8px]
                                max-[767px]:leading-[1.3]
                            "
                        >
                            No more{" "}
                            <span className="font-semibold text-black">
                                blind transfers
                            </span>
                            , every piece travels with full Security,
                            accountability and visibility.
                        </p>

                        <div
                            className="
                                relative
                                mt-[15px]
                                w-full
                                aspect-[1.6/1]
                                overflow-hidden
                                rounded-[14px]

                                max-[767px]:mt-0
                                max-[767px]:aspect-[1.55/1]
                                max-[767px]:rounded-[7px]
                            "
                        >
                            <Image
                                src="/catalog5.png"
                                alt="Stock transfer truck"
                                fill
                                sizes="(max-width: 767px) 47vw, 48vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* RIGHT FEATURE */}
                    <div
                        className="
                            relative
                            min-w-0
                            w-full
                            aspect-[1.2/1]
                            overflow-hidden
                            rounded-[14px]

                            max-[767px]:aspect-[1.18/1]
                            max-[767px]:rounded-[7px]
                        "
                    >
                        <Image
                            src="/catalog6.png"
                            alt="ERP stock management"
                            fill
                            sizes="(max-width: 767px) 50vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}