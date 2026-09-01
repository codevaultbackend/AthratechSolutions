"use client";

import Image from "next/image";

export default function TraceabilityShowcase() {
    return (
        <section className="w-full">
            <div
                className="
                    relative
                    mx-auto
                    w-full
                    max-w-[1280px]
                    overflow-hidden
                    px-[20px]
                    pb-[70px]

                    max-[767px]:px-0
                    max-[767px]:pb-[8px]
                "
            >
                <div
                    className="
                        relative
                        mx-auto
                        h-[620px]
                        w-full
                        max-w-[850px]
                        overflow-hidden

                        max-[767px]:h-[330px]
                        max-[767px]:w-full
                    "
                >
                    <Image
                        src="/catalog7.png"
                        alt="Mobile ERP application"
                        fill
                        sizes="(max-width: 767px) 100vw, 850px"
                        className="
                            object-contain
                            object-center
                        "
                    />
                </div>
            </div>
        </section>
    );
}