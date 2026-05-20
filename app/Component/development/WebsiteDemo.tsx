import Image from "next/image";

export default function WebsiteDemo() {
  return (
    <section className="w-full overflow-hidden bg-white py-[40px] sm:py-[70px] lg:py-[100px]">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1197px]
            overflow-hidden

            rounded-[18px]
            sm:rounded-[28px]
            lg:rounded-[40px]

            h-[180px]
            min-[380px]:h-[220px]
            min-[480px]:h-[280px]
            max-[768px]:!h-[323px]
            md:h-[520px]
            lg:h-[720px]
            xl:h-[936px]

            shadow-[0px_10px_40px_rgba(0,0,0,0.08)]
          "
        >
          <Image
            src="https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255623/website-images/u1mbelgx5vquddbyxezl.png"
            alt="Website Demo"
            fill
            priority
            sizes="
              (max-width:480px) 100vw,
              (max-width:640px) 100vw,
              (max-width:768px) 95vw,
              (max-width:1280px) 90vw,
              1197px
            "
            className="
              object-cover
              object-top

              transition-transform
              duration-700
              ease-out

              hover:scale-[1.02]
            "
          />

          {/* Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
        </div>
      </div>
    </section>
  );
}