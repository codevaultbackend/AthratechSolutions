"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full overflow-hidden">
      <div
        className="
          mx-auto
          w-full
          max-w-full
          py-10
          sm:py-12
          md:py-16
          lg:py-20
          
          xl:py-[105px]
           px-[72px]
        max-[768px]:px-[16px]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center

            gap-8
            sm:gap-10
            md:gap-12
            lg:gap-14
            xl:gap-20
            2xl:gap-28

            lg:grid-cols-2
          "
        >
          {/* Left Content */}
          <div
            className="
              order-2
              w-full

              lg:order-1
            "
          >
            <span
              className="
                block
                text-[#626262]
                !font-[600]
                font-calligraffitti

                text-[18px]
                min-[480px]:text-[20px]
                sm:text-[22px]
                md:text-[24px]
                lg:text-[24px]
              "
            >
              About Us
            </span>

            <h2
              className="
                mt-3
                sm:mt-4
                lg:mt-6

                font-semibold
                font-geist
                text-[#323232]

                leading-[115%]
                tracking-[-0.02em]

                text-[32px]
                min-[480px]:text-[36px]
                sm:text-[42px]
                md:text-[46px]
                lg:text-[50px]
                xl:text-[54px]
              "
            >
              We’re Here to Make
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              a Difference
            </h2>

            <p
              className="
                mt-4
                lg:mt-[16px]

                max-w-[600px]

                text-[#000000]
                font-geist
                font-normal

                text-[15px]
                min-[480px]:text-[16px]
                md:text-[17px]
                lg:text-[18px]

                leading-[150%]
                lg:leading-[140%]

                tracking-[-0.02em]
              "
            >
              From concept to execution, every project showcases our passion
              for technology, innovation, and meaningful digital experiences.
            </p>
          </div>

          {/* Right Image */}
          <div
            className="
              order-1
              relative

              mx-auto
              w-full

              max-w-[100%]
              sm:max-w-[620px]
              lg:max-w-[662px]

              aspect-[1.08]

              lg:order-2
              lg:max-h-[467px]

              rounded-[16px]
              sm:rounded-[20px]
              md:rounded-[28px]
              lg:rounded-[32px]

              overflow-hidden
            "
          >
            <Image
              src="/about-us.png"
              alt="About Image"
              fill
              priority
              className="object-cover"
              sizes="
                (max-width: 479px) 100vw,
                (max-width: 639px) calc(100vw - 48px),
                (max-width: 767px) calc(100vw - 64px),
                (max-width: 1023px) calc(100vw - 80px),
                (max-width: 1279px) 50vw,
                662px
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}