import Image from "next/image";
import CommonHeroHeader from "../CommonHeroHead";

export default function SaasHero() {
  return (
    <section className="relative bg-white pt-[112px] sm:pt-[132px]">
      <div className="">
        <Image
        src='/erpdesktopicon.png'
        alt="erpdesktopicon"
        height={911}
        width={1207}
        className="max-h-[911px] h-full max-w-[1207px] w-full mx-auto object-cover"
        priority />
      </div>
    </section>
  );
}