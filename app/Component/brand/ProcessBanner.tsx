import Image from "next/image";

export default function ProcessBanner() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-0">
      <div
        className="
        relative
        mx-auto
        w-full
        max-w-[1440px]

        overflow-hidden
        rounded-[24px]

        sm:rounded-[30px]
        lg:rounded-[40px]

        h-[220px]
        sm:h-[350px]
        md:h-[500px]
        lg:h-[865px]
      "
      >
        <Image
          src="https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779260743/website-images/hsx91sdwkxllsg5imorq.png"
          alt="Process Banner"
          fill
          priority
          sizes="
            (max-width:640px) 100vw,
            (max-width:1024px) 100vw,
            1440px
          "
          className="
            object-cover
            transition-transform
            duration-700
            hover:scale-[1.02]
          "
        />
      </div>
    </section>
  );
}