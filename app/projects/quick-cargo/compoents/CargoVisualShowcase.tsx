"use client";

import Image from "next/image";

export default function CargoVisualShowcase() {
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
                    mx-auto
                    w-full
                    max-w-[1280px]
                    px-4
                    pb-10

                    sm:px-6
                    sm:pb-12

                    md:px-8
                    md:pb-14

                    lg:px-0
                    lg:pb-[110px]
                "
            >
                {/* =====================================================
                    MOBILE
                    320px - 639px

                    Desktop layout is NOT reused here.
                    Changes below do not affect lg+ desktop.
                ====================================================== */}
                <div
                    className="
                        flex
                        w-full
                        flex-col
                        items-center

                        gap-5

                        sm:hidden
                    "
                >
                    {/* =================================================
                        PHONE + HAND
                    ================================================== */}
                    <div
                        className="
                            relative
                            flex
                            w-full
                            max-w-[420px]
                            justify-center
                        "
                    >
                        <div
                            className="
                                relative
                                w-full
                                aspect-[1664/921]
                            "
                        >
                            <Image
                                src="/cargobottom1.png"
                                alt="Quick Cargo mobile shipment management"
                                fill
                                priority
                                draggable={false}
                                sizes="(max-width: 639px) calc(100vw - 32px), 420px"
                                className="
                                    pointer-events-none
                                    select-none
                                    object-contain
                                    object-center
                                "
                            />
                        </div>
                    </div>

                    {/* =================================================
                        SHIPMENT STATUS
                    ================================================== */}
                    <div
                        className="
                            relative
                            w-full
                            max-w-[320px]
                            aspect-[1.93/1]

                            xs:max-w-[340px]
                        "
                    >
                        <Image
                            src="/cargobottom2.png"
                            alt="Shipment status interface"
                            fill
                            draggable={false}
                            sizes="(max-width: 639px) min(340px, calc(100vw - 48px)), 340px"
                            className="
                                pointer-events-none
                                select-none
                                object-contain
                                object-center
                            "
                        />
                    </div>
                </div>

                {/* =====================================================
                    TABLET
                    640px - 1023px

                    Still independent from desktop.
                ====================================================== */}
                <div
                    className="
                        hidden
                        w-full
                        flex-col
                        items-center

                        gap-8

                        sm:flex
                        lg:hidden
                    "
                >
                    {/* =================================================
                        PHONE + HAND
                    ================================================== */}
                    <div
                        className="
                            relative
                            w-full
                            max-w-[720px]
                            aspect-[1664/921]
                        "
                    >
                        <Image
                            src="/cargobottom1.png"
                            alt="Quick Cargo mobile shipment management"
                            fill
                            draggable={false}
                            sizes="(max-width: 1023px) calc(100vw - 48px), 720px"
                            className="
                                pointer-events-none
                                select-none
                                object-contain
                                object-center
                            "
                        />
                    </div>

                    {/* =================================================
                        SHIPMENT STATUS
                    ================================================== */}
                    <div
                        className="
                            relative
                            w-full
                            max-w-[480px]
                            aspect-[1.93/1]
                        "
                    >
                        <Image
                            src="/cargobottom2.png"
                            alt="Shipment status interface"
                            fill
                            draggable={false}
                            sizes="(max-width: 1023px) min(480px, calc(100vw - 48px)), 480px"
                            className="
                                pointer-events-none
                                select-none
                                object-contain
                                object-center
                            "
                        />
                    </div>
                </div>

                {/* =====================================================
                    DESKTOP
                    1024px+

                    ORIGINAL DESKTOP LAYOUT — UNCHANGED
                ====================================================== */}
                <div
                    className="
                        relative
                        hidden
                        w-full
                        aspect-[1664/921]

                        lg:block
                    "
                >
                    {/* =================================================
                        MAIN PHONE + HAND ARTWORK
                    ================================================== */}
                    <div
                        className="
                            absolute
                            inset-0
                            z-10
                        "
                    >
                        <Image
                            src="/cargobottom1.png"
                            alt="Quick Cargo mobile shipment management"
                            fill
                            priority
                            draggable={false}
                            sizes="1280px"
                            className="
                                pointer-events-none
                                h-full
                                w-full
                                select-none
                                object-contain
                                object-left
                            "
                        />
                    </div>

                    {/* =================================================
                        FLOATING SHIPMENT STATUS CARD
                    ================================================== */}
                    <div
                        className="
                            absolute
                            right-0
                            top-[34.5%]
                            z-20
                            w-[32.5%]
                            aspect-[1.93/1]
                        "
                    >
                        <Image
                            src="/cargobottom2.png"
                            alt="Shipment status interface"
                            fill
                            draggable={false}
                            sizes="416px"
                            className="
                                pointer-events-none
                                h-full
                                w-full
                                select-none
                                object-contain
                                object-center
                            "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}