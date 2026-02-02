"use client";

export default function VideoSection() {
    const AllLogos = [
        "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769605214/SSA_Logo_png_qrzh36.png",
        "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769605211/Manpower_Logo_png_zhavrl.png",
        "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769605212/Sankalp_Setu_Logo_png_c9dokb.png",
        "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769605210/Construct_Ability_png_cxisnq.png",
        "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769605211/Gengross_Logo_png_tknk1h.png",
        "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769605211/JD_poulgrow_Logo_png_uhqzwf.png",
        "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769605210/Chugen_Logo_png_u4tihj.png",
        "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769605210/Decovista_logo_png_gkqzqy.webp",
    ];

    return (
        <section className="w-full  rounded-bl-[40px] bg-[#fff] relative bottom-[-30px] z-[9] rounded-br-[40px]  ">
            {/* Video Section */}
            <div className="max-w-full  ">
                <div className="h-[847px] max-[768px]:h-[263px] max-[768px]:!rounded-0 bg-black rounded-[40px]"></div>
            </div>

            {/* Logo Carousel */}
            <div className="relative  pb-[32px] overflow-hidden ">
                <h3 className="text-center text-[#939393] text-[23px] font-[400] mt-[32px] font-calligraffitti ">Trusted by Companies</h3>
                <div className="flex mt-8 w-max animate-logo-scroll gap-16 ">
                    {[...AllLogos, ...AllLogos].map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center min-w-[160px]"
                        >
                            <img
                                src={logo}
                                alt="Client Logo"
                                className="h-12 object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
