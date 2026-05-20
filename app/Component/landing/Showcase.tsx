import Image from "next/image";

export default function Showcase() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-0 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-[26px] bg-[#f8f2ff] px-5 py-12 sm:grid-cols-2 sm:gap-12 sm:px-10 lg:px-16">
          <article className="flex min-h-[310px] flex-col justify-between">
            <div>
              <h3 className="text-[32px] leading-[100%] font-semibold tracking-[-0.06em]">
                Modern
              </h3>
              <p className="mt-3 max-w-[542px] text-[14px] font-[400] leading-[120%] text-[#7C7C7C]">
                We craft modern, high-impact websites that don’t just look good—they perform.<br/> Clean design, seamless experience, and built to convert 🚀
              </p>
            </div>

            <Image
              src="https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255553/website-images/yruloqk8n3m1clzwqzv1.png"
              alt="Website card preview on keyboard"
              width={669}
              height={380}
              className="mt-10 h-auto w-[82%] max-w-[430px] -rotate-6 object-contain drop-shadow-[0_22px_32px_rgba(0,0,0,0.16)] max-[768px]:w-full max-[768px]:rotate-0"
            />
          </article>

          <article className="mt-12 flex min-h-[310px] flex-col max-[768px]:flex-col-reverse max-[768px]:gap-[10px] justify-between sm:mt-0">
            <Image
              src="https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255556/website-images/ol66kwscanqu7x3xpaon.png"
              alt="Website preview displayed on monitor"
              width={614}
              height={470}
              className="ml-auto h-auto w-[95%] max-w-[520px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)]"
            />

            <div className="ml-auto mt-8 max-w-[542px]">
              <h3 className="text-[32px] leading-[100%] font-semibold tracking-[-0.06em]">
                Conservative
              </h3>
              <p className="mt-3 max-w-[542px] text-[14px] font-[400] leading-[130%] text-[#7C7C7C]">
                We craft modern, high-impact websites that don’t just look good—they perform.<br/> Clean design, seamless experience, and built to convert 🚀
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}