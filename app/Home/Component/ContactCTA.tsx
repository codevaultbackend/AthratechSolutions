"use client";

import ArrowTop2 from "@/app/svgIcons/ArrowTop2";
import Image from "next/image";
import Link from "next/link";

type ContactCTAProps = {
image: string;
};

export default function ContactCTA({ image }: ContactCTAProps) {
return (
<section
id="contactcta"
className="
relative
flex
w-full
items-center
justify-center
overflow-hidden
    px-4
    max-[768px]:px-[16px]
    lg:px-[72px]
    xl:px-[72px]

    py-6
    max-[768px]::py-8
    md:py-10

    mb-12
    sm:mb-16
    lg:mb-[80px]
  "
>
  <div
    className="
      mx-auto
      flex
      w-full
      max-w-full

      flex-col-reverse
      items-start
      justify-between

      gap-6
      sm:gap-8
      md:gap-10

      rounded-[20px]
      sm:rounded-[24px]
      md:rounded-[32px]
      lg:rounded-[40px]

      border
      border-[#CDCDCD]
      bg-white

      p-4
      sm:p-6
      md:p-8

      lg:h-[470px]
      lg:flex-row
      lg:gap-12
    "
  >
    {/* LEFT CONTENT */}
    <div
      className="
        relative
        z-10
        w-full

        lg:max-w-fit
        lg:mt-[60px]
      "
    >
      <h2
        className="
          text-left
          font-bricolage
          font-[600]
          leading-[1.05]
          text-black

          text-[30px]
          min-[480px]:text-[32px]
          sm:text-[40px]
          lg:text-[48px]
        "
      >
        We’ll reply in 24hrs
      </h2>

      <p
        className="
          mt-4
          mb-5

          text-left
          font-[400]
          text-[#2B2B2B]

          text-[14px]
          leading-[150%]

          sm:my-8
          sm:text-[16px]
        "
      >
        only 3 slots left for new projects
      </p>

      <Link href="/contact-us" className="block w-full sm:w-fit">
        <div className="w-full sm:w-fit">
          <div
            className="
              relative
              w-full
              rounded-full

              bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.35),_rgba(180,180,180,0.25),_rgba(120,120,120,0.15),_transparent_70%)]

              shadow-[0px_4px_14.6px_0_#959595]

              sm:w-fit
            "
          >
            <div
              className="
                rounded-full
                bg-[linear-gradient(175deg,#F5F5F5,#BDBDBD,#8F8F8F,#666666)]
                p-[5px]
                sm:p-[6px]
              "
            >
              <div
                className="
                  flex
                  w-full
                  items-center
                  justify-center

                  gap-3
                  sm:gap-4

                  rounded-full
                  border-[0.5px]
                  border-white
                  bg-black

                  px-4
                  py-3
                  sm:px-5

                  sm:w-auto
                "
              >
                <h3
                  className="
                    whitespace-nowrap
                    text-[14px]
                    font-[500]
                    text-white

                    sm:text-[16px]
                  "
                >
                  Let’s Talk
                </h3>

                <div className="flex shrink-0 -space-x-3">
                  {[
                    "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero2_eKVVHgfGm.jpg",
                    "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero1_CpKdYK8kd.jpg",
                    "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero_NaRzEsvqk.jpg",
                    "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero2_eKVVHgfGm.jpg",
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="
                        h-[22px]
                        w-[22px]
                        shrink-0
                        overflow-hidden
                        rounded-full

                        sm:h-[26px]
                        sm:w-[26px]
                      "
                    >
                      <Image
                        src={src}
                        alt="avatar"
                        width={56}
                        height={56}
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

      {/* Desktop Decorative Text */}
      <div
        className="
          hidden
          lg:block

          absolute
          left-[20%]
          top-[128%]
        "
      >
        <p
          className="
            font-calligraffitti
            text-[24px]
            italic
            leading-relaxed
            text-[#888888]
          "
        >
          We get booked fast 🚀
          <br />
          contact us now
        </p>

        <ArrowTop2
          className="
            !absolute
            !left-[-40%]
            top-[-52px]
          "
        />
      </div>
    </div>

    {/* IMAGE FROM PROP */}
    <div
      className="
        relative
        flex
        w-full
        items-center
        justify-center
        overflow-hidden

        lg:h-full
        lg:w-1/2
      "
    >
      <Image
        src={image}
        alt="contact-us"
        width={756}
        height={539}
        sizes="
          (max-width: 639px) calc(100vw - 32px),
          (max-width: 1023px) calc(100vw - 64px),
          (max-width: 1279px) 50vw,
          620px
        "
        className="
          h-auto
          w-full
          object-cover

          max-h-[240px]
          max-w-full

          rounded-[18px]
          sm:max-h-[280px]
          sm:rounded-[22px]

          md:max-h-[320px]
          md:rounded-[28px]

          lg:max-h-[430px]
          lg:max-w-[620px]
          lg:rounded-[28px]
        "
      />
    </div>
  </div>
</section>


);
}
