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
        <section className="w-full  bg-[#EFEFEF]  relative  z-[9]    ">
            {/* Logo Carousel */}
            <div className="relative bg-[#fff] pb-[32px] overflow-hidden rounded-bl-[32px] rounded-br-[32px] ">
                <h3 className="text-center text-[#939393] text-[23px] font-[400] mt-[38px] font-calligraffitti ">Trusted by Companies</h3>
                <div className="flex my-8 w-max animate-logo-scroll gap-16 ">
                    {[...AllLogos, ...AllLogos].map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center min-w-[160px]"
                        >
                            <img
                                src={logo}
                                alt="Client Logo"
                                className="h-12 object-contain  opacity-70 hover:opacity-100  transition"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
