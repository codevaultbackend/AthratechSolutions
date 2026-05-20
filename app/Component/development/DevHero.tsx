import Image from "next/image";

export default function DevHero() {
  return (
    <section
      className="
        relative
        bg-white

        px-4
        sm:px-6
        lg:px-0

        pt-[70px]
        sm:pt-[85px]
        md:pt-[95px]
        lg:pt-[99px]
      "
    >
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1440px]

          overflow-hidden

          rounded-[20px]
          sm:rounded-[28px]
          lg:rounded-[40px]

          h-[220px]
          sm:h-[350px]
          md:h-[520px]
          lg:h-[920px]
        "
      >
        <Image
          src="https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255619/website-images/ftq7snjz0abdjsqg9doq.png"
          alt="Website development hero banner"
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