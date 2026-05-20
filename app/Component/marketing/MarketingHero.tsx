import Image from "next/image";

export default function MarketingHero() {
  return (
    <section className="relative w-full bg-white px-4 pt-[60px] pb-[70px] sm:px-6 sm:pt-[80px] sm:pb-[100px] lg:px-8 lg:pt-[87px] lg:pb-[158px]">
      <div className="mx-auto w-full max-w-[1440px] overflow-hidden rounded-[18px] sm:rounded-[28px] lg:rounded-[40px]">
        <Image
          src="https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255561/website-images/e8recu5ucfuquxgnacjm.png"
          alt="Marketing hero banner"
          width={1440}
          height={769}
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1440px"
          className="
            h-[220px]
            w-full
            object-cover
            object-center
            sm:h-[420px]
            lg:h-auto
            rounded-[18px]
            sm:rounded-[28px]
            lg:rounded-[40px]
          "
        />
      </div>
    </section>
  );
}