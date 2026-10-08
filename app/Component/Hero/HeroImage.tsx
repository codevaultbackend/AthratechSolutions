import Image from "next/image";

export default function HeroImage() {
  return (
    <div
      id="hero-image-wrapper"
      className="
        relative
        isolate
        flex
        items-end
        justify-center
        w-full
        max-[768px]:min-h-fit
        min-h-[650px]
        lg:min-h-[850px]
        overflow-visible
      "
    >
      {/* Back Cloud */}
      <div
        className="
          absolute
          max-[768px]:hidden
          left-1/2
          bottom-[-120px]
          -translate-x-1/2
          z-[666666]
          pointer-events-none
          w-full
          max-w-[140vw]
        "
      >
        <Image
          src="/herocloude.png"
          alt=""
          width={1400}
          height={350}
          sizes="
            (min-width: 1920px) 100vw,
            (min-width: 1280px) 75vw,
            621px
          "
          className="
            w-full
            h-auto
            object-contain
            select-none
          "
        />
      </div>

      {/* Front Cloud */}
      <div
        className="
          absolute
          max-[768px]:hidden
          left-1/2
          bottom-[-100px]
          -translate-x-1/2
          z-[9999999]
          pointer-events-none
          w-full
        "
      >
        <Image
          src="/cloude2.png"
          alt=""
          width={1200}
          height={300}
          sizes="
            (min-width: 1920px) 100vw,
            (min-width: 1280px) 75vw,
            621px
          "
          className="
            w-full
            h-auto
            object-contain
            select-none
          "
        />
      </div>

      {/* Hero */}
      <div
        id="hero-image"
        className="
          relative
          z-20
          flex
          items-end
          justify-center
        "
      >
        <Image
          src="/Hero.png"
          alt="Athratech digital solutions"
          preload
          draggable={false}
          width={1400}
          height={1100}
          sizes="
            (max-width: 767px) 90vw,
            (max-width: 1279px) 55vw,
            (max-width: 1535px) 820px,
            (max-width: 1919px) 900px,
            (max-width: 2559px) 1000px,
            1100px
          "
          className="
            block
            w-[90vw]
            md:w-[clamp(560px,55vw,1300px)]
            xl:w-[clamp(720px,55vw,1300px)]
            h-auto
            object-contain
            select-none
          "
        />
      </div>
    </div>
  );
}