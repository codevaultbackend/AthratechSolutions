import Image from "next/image";

export default function Performance() {
  return (
    <>
      <section className="bg-white py-10 sm:py-16">
        <div className="mx-auto grid max-w-[1080px] items-center gap-10 px-5 sm:grid-cols-2 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-[420px]">
            <Image
              src="/landing/performance-preview.png"
              alt="Website performance preview"
              width={720}
              height={460}
              className="h-auto w-full object-contain"
            />
          </div>

          <div>
            <h2 className="max-w-[430px] text-[28px] font-semibold leading-[1.05] tracking-[-0.07em] sm:text-[42px]">
              Why Our Websites Perform Better
            </h2>

            <p className="mt-5 max-w-[450px] text-[13px] leading-[1.8] text-black/50 sm:text-[15px]">
              We combine sharp design, meaningful copy, fast loading structure,
              clean spacing and mobile-first behaviour so the page feels
              premium on every screen size.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-0 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[28px]">
            <Image
              src="/landing/laptop-dark.png"
              alt="Dark website design displayed on laptop"
              width={1600}
              height={920}
              className="h-[430px] w-full object-cover sm:h-[560px] lg:h-[650px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}