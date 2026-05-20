import Image from "next/image";

export default function BrandHero() {
  return (
    <section className="relative bg-white px-3 sm:px-4 pt-[72px] ">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          items-center
          justify-center
          rounded-[24px]
          sm:rounded-[32px]
          lg:rounded-[40px]
          bg-[#096360]
          min-h-[260px]
          sm:min-h-[420px]
          md:min-h-[520px]
          lg:min-h-[674px]
          px-4
        "
      >
        <Image
          src="https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255600/website-images/kcisltneswolpiswjqpt.png"
          alt="Sankalp White Logo"
          width={369}
          height={369}
          priority
          className="
            h-auto
            w-[140px]
            sm:w-[220px]
            md:w-[280px]
            lg:w-[369px]
            object-contain
          "
        />
      </div>
    </section>
  );
}