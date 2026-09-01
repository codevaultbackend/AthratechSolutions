"use client";

import Image from "next/image";

export default function ERPOverview() {
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
                <div
                    className="
                        relative
                        w-full
                        aspect-[16/9]
                        overflow-hidden
                        rounded-[32px]
                        bg-[#111111]

                        max-[767px]:aspect-[16/9]
                        max-[767px]:rounded-[8px]
                    "
                >
                    <Image
                        src="/catalog1.png"
                        alt="ERP dashboard"
                        fill
                        priority
                        sizes="(max-width: 767px) calc(100vw - 40px), 1280px"
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}