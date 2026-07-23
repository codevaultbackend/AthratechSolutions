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
      {/* DESKTOP HERO (GSAP ENABLED) */}
      {/* ========================================================= */}

      <section
        id="hero-section"
        className="relative hidden  bg-white xl:block overflow-hidden "
      >
        {/* GSAP Animation */}
        <HeroAnimation />

        {/* Sticky Viewport */}
        <div
          id="hero-pin"
          className="
    relative
    h-screen
    max-h-[980px]
    mt-[50px]
  "
        >
          <div className="relative mx-auto h-full w-full max-w-[1640px] px-6 lg:px-10 xl:px-[60px]">


            <div
              className="
relative
z-20
grid
h-full
items-start
gap-10

pt-10
2xl:pt-20

xl:grid-cols-2
"
            >
              {/* LEFT CONTENT */}

              <div
                id="leftContent"
                className="relative flex flex-col justify-start will-change-transform"
              >
                <HeroContent />
              </div>

              <div
                id="rightContent"
                className="hidden justify-end will-change-transform xl:flex flex-col items-end max-w-full "
              >
                <div className="max-w-[500px] xl:flex flex-col">
                  <div className=" ">
                    <p className="text-[16px] font-[400] leading-[134%] font-geist text-[#717171]">
                      Athratech delivers modern IT, web, app, branding and
                      marketing solutions that help businesses grow faster online.
                    </p>
                  </div>
                  {/* Buttons */}
                  <HeroButtons />
                </div>

              </div>
            </div>

            {/* ========================= */}
            {/* HERO IMAGE */}
            {/* ========================= */}

            <div
              id="centerImage"
              className="
absolute
left-1/2
bottom-[-18%]
2xl:bottom-[-10%]
-translate-x-1/2
flex
justify-center
z-10
pointer-events-none
will-change-transform
"
            >
              <HeroImage />
            </div>

            {/* ========================= */}
            {/* SECOND CONTENT */}
            {/* ========================= */}

            <HeroSecondContent />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* MOBILE / TABLET HERO (NO GSAP) */}
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
            pb-10
          "
        >
          {/* Hero Heading */}

          <HeroContent />

          {/* Description */}

          <div className="mt-5">
            <p className="text-[16px] leading-7 text-[#6B6B6B]">
              Athratech delivers modern IT, web, app, branding and marketing
              solutions that help businesses grow faster online.
            </p>
          </div>

          {/* Hero Image */}

          <div className="mt-8 flex justify-center">
            <HeroImage />
          </div>

          {/* Why Businesses Trust Us */}

          <div className="mt-10">
            <h2 className="max-w-[320px] text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#202020]">
              Why Businesses Trust Us?
            </h2>

            <p className="mt-4 text-[16px] font-geist font-[400] leading-[120%] text-[#717171]">
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