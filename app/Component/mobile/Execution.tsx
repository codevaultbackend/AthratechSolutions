import Image from "next/image";

export default function Execution() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-0 py-8 lg:py-12">
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
          sm:h-[320px]
          md:h-[450px]
          lg:h-[780px]
        "
      >
        <Image
          src="https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255543/website-images/r0wvwn2ikscvmba5lukv.png"
          alt="Execution"
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