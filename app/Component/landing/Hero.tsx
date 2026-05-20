import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-[12px] sm:pt-[30px]">
      

      <div className="relative mx-auto mt-12 w-full max-w-[1440px] px-0 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-t-[28px] bg-[#f5f0ff]  sm:rounded-[34px] ">
         

          <div className="relative ">
            <Image
              src="https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255550/website-images/hfr3dr2e88llcpkotvnf.png"
              alt="Dashboard website design displayed on desktop monitor"
              width={1200}
              height={760}
              priority
              className="h-auto w-full object-contain drop-shadow-[0_30px_45px_rgba(0,0,0,0.22)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}