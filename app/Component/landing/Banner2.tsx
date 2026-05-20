import Image from "next/image";

export default function Banner2() {
  return (
    <section className="w-full px-4 pt-[60px] pb-[70px] sm:px-6 sm:pt-[90px] sm:pb-[100px] lg:px-8 lg:pt-[132px]">
      <div className="mx-auto w-full max-w-[1440px] overflow-hidden rounded-[18px] sm:rounded-[28px] lg:rounded-[40px]">
        <Image
          src="https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779260018/website-images/yoo8shopt8macabxvszh.png"
          alt="Banner"
          width={1440}
          height={911}
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1440px"
          className="
            h-[240px]
            w-full
            object-cover
            object-center
            rounded-[18px]
            sm:h-[500px]
            sm:rounded-[28px]
            lg:h-auto
            lg:rounded-[40px]
          "
        />
      </div>
    </section>
  );
}