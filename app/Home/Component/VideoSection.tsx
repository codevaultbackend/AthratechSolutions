"use client";

import Image from "next/image";

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

  const optimizeLogo = (url: string) => {
    if (!url.includes("res.cloudinary.com")) {
      return url;
    }

    return url.replace(
      "/image/upload/",
      "/image/upload/w_160,h_84,c_fit,q_auto,f_auto/"
    );
  };

  return (
    <section className="relative z-[9] w-full">
      <div className="relative overflow-hidden rounded-bl-[32px] rounded-br-[32px] bg-[#fff] pb-[32px]">
        <h3
          className="
            mt-[38px]
            text-center
            text-[18px]
            font-[400]
            leading-[31px]
            tracking-[-3%]
            text-[#626262]
            font-calligraffitti
            max-[768px]:mt-[21px]
          "
        >
          Trusted by Companies
        </h3>

        <div className="my-8 flex w-max animate-logo-scroll gap-16 max-[768px]:mb-1">
          {[...AllLogos, ...AllLogos].map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="flex min-w-[160px] items-center justify-center"
            >
              <Image
                src={optimizeLogo(logo)}
                width={160}
                height={48}
                sizes="160px"
                alt="Client Logo"
                className="h-12 w-auto object-contain opacity-70 transition hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}