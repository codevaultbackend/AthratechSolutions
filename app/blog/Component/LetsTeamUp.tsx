"use client";

import LetsTallk from "@/app/svgIcons/LetsTallk";
import Image from "next/image";
import Link from "next/link";

const avatars = [
  "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero2_eKVVHgfGm.jpg",
  "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero1_CpKdYK8kd.jpg",
  "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero_NaRzEsvqk.jpg",
  "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero2_eKVVHgfGm.jpg",
];

export default function LetsTeamUp() {
  return (
    <section
      id="contactcta"
      className="
        bg-white
        px-4
        py-8

        sm:px-6
        md:px-8

        lg:px-8
        lg:py-5
      "
    >
      {/* Main Container */}

      <div
        className="
          relative
          mx-auto
          mb-16

          flex
          w-full
          max-w-[1280px]
          flex-col
          items-center
          justify-center
          overflow-hidden

          rounded-[28px]

          bg-[#09031B]

          px-6
          py-14

          sm:rounded-[36px]
          sm:px-8
          sm:py-16

          md:rounded-[44px]
          md:px-10
          md:py-20

          lg:mb-[100px]
          lg:rounded-[56px]
          lg:px-12
          lg:pt-[109px]
          lg:pb-[109px]
        "
      >
        {/* Background Glow */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-70
          "
        >
          <div
            className="
              absolute
              left-1/2
              top-[28%]

              h-[260px]
              w-[260px]

              -translate-x-1/2

              rounded-full

              bg-[radial-gradient(circle,rgba(131,104,255,.16)_0%,rgba(131,104,255,.05)_45%,transparent_75%)]

              blur-3xl

              sm:h-[340px]
              sm:w-[340px]

              md:h-[420px]
              md:w-[420px]

              lg:h-[520px]
              lg:w-[520px]
            "
          />
        </div>

        {/* Content */}

        <div
          className="
            relative
            z-10
            mx-auto

            flex
            w-full
            max-w-[1180px]
            flex-col
            items-center

            text-center
          "
        >
          {/* Heading */}

          <h2
            className="
              font-bricolage
              font-normal

              leading-[1.08]

              tracking-[-0.04em]

              text-white

              text-[30px]

              max-[768px]:text-[28px]

              md:text-[42px]

              lg:text-[48px]

              xl:text-[48px]
            "
          >
            Unlimited{" "}

            <span
              className="
                bg-[linear-gradient(180deg,#BCA9FF_0%,#8A77D9_100%)]

                bg-clip-text

                text-transparent
              "
            >
              high-quality
            </span>{" "}

            design support

            <br />

            with quick and consistent delivery.
          </h2>

          {/* Subtitle */}

          <p
            className="
              mt-6

              max-w-[920px]

              font-bricolage
              font-normal

              leading-[1.35]

              text-[#F0F0F0]

              text-[16px]

              sm:text-[18px]

              md:text-[22px]

              lg:mt-[56px]
              lg:text-[28px]
            "
          >
            at an affordable rate to help scale your business
          </p>

          {/* CTA */}

          <div
            className="
              mt-10

              flex
              w-full
              flex-col
              items-center

              lg:mt-16
            "
          >
            <Link
              href="/contact-us"
              className="inline-flex w-full justify-center sm:w-auto"
            >
                            <div className="flex items-center justify-center">

                {/* OUTER GLOW */}

                <div
                  className="
                    relative

                    rounded-full

                    bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.35),_rgba(180,180,180,0.25),_rgba(120,120,120,0.15),_transparent_70%)]

                    shadow-[0_4px_14.6px_rgba(149,149,149,.9)]

                    transition-all
                    duration-300

                    hover:scale-[1.03]
                  "
                >

                  {/* Metallic Ring */}

                  <div
                    className="
                      rounded-full

                      bg-[linear-gradient(175deg,#F5F5F5,#BDBDBD,#8F8F8F,#666666)]

                      p-[5px]

                      sm:p-[6px]

                      shadow-[0_0_40px_rgba(180,180,180,.45)]
                    "
                  >

                    {/* Button */}

                    <div
                      className="
                        flex
                        items-center
                        justify-center

                        gap-3
                        sm:gap-4

                        rounded-full

                        border
                        border-white/80

                        bg-black

                        px-5
                        py-3

                        sm:px-6

                        lg:px-8
                        lg:py-[14px]

                        shadow-inner
                      "
                    >

                      <h3
                        className="
                          whitespace-nowrap

                          font-medium

                          tracking-tight

                          text-white

                          text-[15px]

                          sm:text-[16px]
                        "
                      >
                        Contact Us
                      </h3>

                      {/* Avatar Stack */}

                      <div
                        className="
                          flex

                          -space-x-2

                          sm:-space-x-3
                        "
                      >

                        {avatars.map((src, index) => (

                          <div
                            key={index}
                            className="
                              h-7
                              w-7

                              overflow-hidden

                              rounded-full

                              border-2
                              border-black

                              sm:h-[28px]
                              sm:w-[28px]

                              lg:h-[30px]
                              lg:w-[30px]
                            "
                          >

                            <Image
                              src={src}
                              alt={`Team member ${index + 1}`}
                              width={60}
                              height={60}
                              className="h-full w-full object-cover"
                            />

                          </div>

                        ))}

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </Link>

            {/* Reply Text */}

            <p
              className="
                mt-5

                text-center

                font-bricolage

                font-normal

                text-[#ADADAD]

                text-[14px]

                sm:text-[15px]

                lg:mt-6

                lg:text-[20px]
              "
            >
              We'll reply in 24 hrs
            </p>

          </div>

        </div>
                {/* Bottom Glow */}

        <div
          aria-hidden
          className="
            pointer-events-none

            absolute

            left-1/2

            bottom-[-100px]

            h-[260px]
            w-[340px]

            -translate-x-1/2

            rounded-full

            bg-[radial-gradient(circle,rgba(120,98,255,0.10)_0%,transparent_72%)]

            blur-[80px]

            sm:bottom-[-130px]

            sm:h-[320px]
            sm:w-[520px]

            md:bottom-[-170px]

            md:h-[420px]
            md:w-[700px]

            lg:bottom-[-220px]

            lg:h-[520px]
            lg:w-[900px]

            lg:blur-[120px]
          "
        />

      </div>

    </section>
  );
}