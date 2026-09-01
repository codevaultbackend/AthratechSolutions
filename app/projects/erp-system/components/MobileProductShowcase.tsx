"use client";

export default function MobileProductShowcase() {
    return (
        <section className="w-full bg-white">
            <div
                className="
                    mx-auto
                    w-full
                    max-w-[1280px]
                    pb-[70px]

                    max-[767px]:px-[10px]
                    max-[767px]:pb-[48px]
                "
            >
                <div
                    className="
                        flex
                        min-h-[320px]
                        w-full
                        flex-col
                        items-center
                        justify-center
                        rounded-[28px]
                        bg-[#09031d]
                        px-10
                        text-center
                        text-white

                        max-[767px]:min-h-[149px]
                        max-[767px]:rounded-[14px]
                        max-[767px]:px-[30px]
                    "
                >
                   

                    <p
                        className="
                            mt-[16px]
                            text-[11px]
                            text-white/70

                            max-[767px]:mt-[8px]
                            max-[767px]:text-[5px]
                        "
                    >
                        at an affordable rate to help scale your business
                    </p>

                    <button
                        type="button"
                        className="
                            mt-[22px]
                            rounded-full
                            border
                            border-white/60
                            bg-black
                            px-[22px]
                            py-[8px]
                            text-[10px]
                            leading-none
                            shadow-[0_0_15px_rgba(255,255,255,.3)]

                            max-[767px]:mt-[11px]
                            max-[767px]:px-[12px]
                            max-[767px]:py-[4px]
                            max-[767px]:text-[5px]
                        "
                    >
                        Contact Us
                    </button>

                    <p
                        className="
                            mt-[9px]
                            text-[7px]
                            text-white/50

                            max-[767px]:mt-[4px]
                            max-[767px]:text-[3.5px]
                        "
                    >
                        We reply within 24 hours
                    </p>
                </div>
            </div>
        </section>
    );
}