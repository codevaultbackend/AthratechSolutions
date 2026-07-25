"use client";

import HeroAnimation from "./HeroAnimation";
import HeroButtons from "./HeroButtons";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroSecondContent from "./HeroSecondContent";

export default function Hero() {
  return (
    <>
      {/* ========================================================= */}
      {/* DESKTOP HERO */}
      {/* ========================================================= */}

      <section
        id="hero-section"
        className="relative hidden overflow-hidden bg-white xl:block"
      >
        <HeroAnimation />

        <div
          id="hero-pin"
          className="
            relative
            h-screen
            min-h-[900px]
            overflow-hidden
          "
        >
          <div
            className="
              relative
              mx-auto
              h-full
              w-full
              max-w-[min(1900px,92vw)]
              px-8
              2xl:px-12
            "
          >
            {/* ================================================= */}
            {/* TOP CONTENT */}
            {/* ================================================= */}

            <div
              className="
                relative
                z-20
                grid
                h-full
                grid-cols-2
                items-start
                gap-[clamp(40px,6vw,140px)]
                pt-14
                2xl:pt-40
              "
            >
              {/* LEFT */}

              <div
                id="leftContent"
                className="
                  relative
                  flex
                  flex-col
                  justify-start
                  will-change-transform
                "
              >
                <HeroContent />
              </div>

              {/* RIGHT */}

              <div
                id="rightContent"
                className="
                  flex
                  justify-end
                  will-change-transform
                "
              >
                <div
                  className="
                    w-full
                    max-w-[520px]
                  "
                >
                  <p
                    className="
                      font-geist
                      text-[16px]
                      leading-[150%]
                      text-[#717171]
                    "
                  >Athratech delivers modern IT, web, app, branding and  marketing solutions that help businesses grow faster  online.
                  </p><HeroButtons />
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* HERO IMAGE */}
            {/* ================================================= */}

            <div
              id="centerImage"
              className="
    absolute
    left-1/2
    bottom-[-22vh]
    -translate-x-1/2
    z-10
    flex
    items-end
    justify-center
    pointer-events-none
    will-change-transform
  "
            >
              <HeroImage />
            </div>

            {/* ================================================= */}
            {/* SECOND CONTENT */}
            {/* ================================================= */}

            <HeroSecondContent />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* MOBILE / TABLET */}
      {/* ========================================================= */}

      <section className="relative block overflow-hidden bg-white xl:hidden">
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[640px]
            flex-col
            px-5
            pt-24
            max-[768px]:pt-16
            pb-10
          "
        >
          <HeroContent />

          <div className="mt-5">
            <p className="text-[16px] leading-7 text-[#6B6B6B]">
              Athratech delivers modern IT, web, app, branding and marketing
              solutions that help businesses grow faster online.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <HeroImage />
          </div>

          <div className="mt-10">
            <h2
              className="
                max-w-[320px]
                text-[34px]
                font-semibold
                leading-[1.05]
                tracking-[-0.03em]
                text-[#202020]
              "
            >
              Why Businesses Trust Us?
            </h2>

            <p
              className="
                mt-4
                font-geist
                text-[16px]
                leading-[150%]
                text-[#717171]
              "
            >
              Athratech delivers custom digital solutions tailored to your
              business goals. We focus on scalable design, seamless user
              experience, performance-driven development, and long-term digital
              growth that helps businesses stand out and convert more customers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}