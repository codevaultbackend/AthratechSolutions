import Image from "next/image";

const performancePoints = [
  "Most websites fail because they focus only on design.",
  "We focus on strategy + psychology + design.",
  "We design based on user behaviour",
  "We structure content for maximum engagement",
  "We optimize for conversions, not just clicks",
];

export default function ConversionPerformance() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-[50px] px-4 sm:px-6 md:grid-cols-2 md:gap-[60px] lg:px-8">
        
        {/* LEFT VISUAL */}
        <div className="relative flex items-center justify-center">
          {/* Background Glow */}
          <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/[0.05] blur-[60px] sm:h-[360px] sm:w-[360px] lg:h-[430px] lg:w-[430px]" />

          {/* Image */}
          <div className="relative w-full max-w-[640px]">
            <Image
              src="https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255627/website-images/gzjw9ueks5ovvw2aph7r.png"
              alt="Website Performance"
              width={640}
              height={540}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex justify-center md:justify-start">
          <div className="w-full max-w-[560px]">
            <h2 className="font-bricolage text-[32px] font-semibold leading-[110%] tracking-[-0.04em] text-[#111111] sm:text-[42px] md:text-[48px] lg:text-[56px]">
              Why Our Websites Perform Better
            </h2>

            <ul className="mt-[24px] space-y-[14px] pl-[20px]">
              {performancePoints.map((point) => (
                <li
                  key={point}
                  className="font-inter text-[16px] font-[400] leading-[145%] text-[#272727] marker:text-[#272727] sm:text-[18px] lg:text-[20px]"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}