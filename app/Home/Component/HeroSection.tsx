"use client";

import PrimaryButton from "./PrimaryButton";

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-screen bg-white overflow-hidden">
            {/* ================= BACKGROUND DOT PATTERN ================= */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "radial-gradient(#d9d9d9 1px, transparent 1px)",
                    backgroundSize: "18px 18px",
                    opacity: 0.45,
                }}
            />


            {/* ================= HERO CONTENT ================= */}
            <div className="relative z-10 flex flex-col items-center text-center !pt-[116px] px-6">
                {/* Headline */}
                <h1 className="max-w-[1100px] text-[116px] leading-[100%] font-semibold max-[1024px]:text-[64px] max-[768px]:text-[44px]">
                    <span className="text-black">Where </span>

                    {/* Yellow UI Card (NO IMAGE, PIXEL PERFECT) */}
                    <span className="inline-flex align-middle mx-2">
                        <span
                            className="
                w-[161px] h-[100px]
                rounded-[30px]
                bg-gradient-to-b from-[#FFD976] to-[#F4A900]
                shadow-[0_12px_30px_rgba(0,0,0,0.25)]
                flex items-center justify-center border-[2px] border-black  rotate-[-8deg] ;
              "
                        >
                            
                        </span>
                    </span>

                    <span className="text-gray-400">Ideas</span>
                    <br />
                    <span className="text-gray-400">become </span>
                    <span className="text-black">Impact</span>
                </h1>

                {/* Floating Black Card */}
                <div className="absolute right-[12%] top-[46%] max-[1024px]:hidden">
                    <div className="w-[138px] h-[88px] rounded-2xl bg-black shadow-xl" />
                </div>

                {/* Subtext */}
                <p className="mt-10 max-w-[520px] text-gray-600 text-[16px] leading-[1.7]">
                    We help startups and brands create beautiful,
                    <br />
                    functional products — fast and hassle-free.
                </p>

                {/* CTA ROW */}
                <div className="mt-10 flex items-center gap-6 flex-wrap justify-center">
                    {/* Contact Button */}
                    <img src="/ContactUs.png" className="w-[187px] h-[62px] object-cover" alt="contactUs" />

                    {/* Trusted Clients */}
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 rounded-full bg-gray-300 border border-white"
                                />
                            ))}
                        </div>
                        <span className="text-xs text-gray-500">
                            50+ Trusted Clients
                        </span>
                    </div>
                </div>
            </div>

            {/* ================= BOTTOM FADE ================= */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
}
