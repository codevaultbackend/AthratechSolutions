"use client";

import Image from "next/image";

interface Leader {
id: number;
name: string;
role: string;
image: string;
}

const leaders: Leader[] = [
{
id: 1,
name: "Vishal Gupta",
role: "Co-founder & Operations Head",
image: "/vishal.jpeg",
},
{
id: 2,
name: "Shivanshi Gupta",
role: "Management & Business Head",
image: "/shivanshi.jpeg",
},
{
id: 3,
name: "Ankit Das",
role: "Co-founder & Project Manager",
image: "/ankit.jpeg",
},
];

export default function Leadership() {
return (
<section
className="
relative
w-full
overflow-hidden
bg-white

    py-10
    sm:py-14
    md:py-16
    lg:py-20
    xl:py-[123px]
  "
>
  <div
    className="
      relative
      mx-auto
      w-full
      max-w-full

      px-4
      max-[768px]:px-4
      lg:px-[72px]
      xl:px-[72px]
    "
  >
    {/* ================= Header ================= */}

    <div
      className="
        mb-10
        grid
        grid-cols-1

        gap-6
        sm:gap-8
        md:gap-10

        lg:mb-20
        lg:grid-cols-2
        lg:items-end
      "
    >
      <div className="w-full">
        <p
          className="
            mb-3

            font-inter
            font-[400]
            italic
            text-[#848484]

            text-[14px]
            leading-[20px]

            sm:text-[16px]
            sm:leading-[24px]

            tracking-[-2%]
          "
        >
          Our Leadership
        </p>

        <h2
          className="
            max-w-lg

            font-inter
            font-[500]
            tracking-[-3%]
            text-[#0F0F0F]

            text-[30px]
            leading-[38px]

            sm:text-[34px]
            sm:leading-[42px]

            md:text-[38px]
            md:leading-[46px]

            lg:text-[40px]
            lg:leading-[48px]
          "
        >
          Meet the Leaders Behind Athratech
        </h2>
      </div>

      <div
        className="
          w-full
          max-w-[506px]

          lg:ml-auto
        "
      >
        <p
          className="
            font-[400]
            tracking-[-2%]
            text-[#0F0F0F]

            text-[16px]
            leading-[24px]

            sm:text-[17px]
            sm:leading-[25px]

            lg:text-[19px]
          "
        >
          Real impact comes from working together with purpose. Through
          leadership, service, and a culture of compassion, we create
          opportunities that transform lives and build stronger communities.
        </p>
      </div>
    </div>

    {/* ================= Team Cards ================= */}

    <div
      className="
        mx-auto
        mt-10
        grid
        w-full
        max-w-full

        grid-cols-1

        gap-8

        sm:mt-14
        sm:grid-cols-2
        sm:gap-8

        md:mt-16
        md:gap-10

        lg:mt-[98px]
        lg:grid-cols-3
        lg:gap-[44px]

        min-[1119px]:gap-[60px]
        xl:gap-[80px]
        2xl:gap-[133px]
      "
    >
      {leaders.map((leader) => (
        <div
          key={leader.id}
          className="
            group
            w-full

            justify-self-center

            lg:w-[308px]
          "
        >
          {/* Card */}

          <div className="w-full overflow-hidden bg-white">
            {/* Image */}

            <div
              className="
                relative
                w-full
                overflow-hidden
                rounded-[14px]
                bg-neutral-100

                aspect-[4/5]

                sm:min-h-[320px]

                lg:h-[350px]
                lg:min-h-[350px]
                lg:max-h-[350px]
                lg:w-[308px]
                lg:min-w-[308px]
              "
            >
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                sizes="
                  (max-width: 639px) calc(100vw - 32px),
                  (max-width: 1023px) calc((100vw - 80px) / 2),
                  308px
                "
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />
            </div>

            {/* Content */}

            <div className="pt-2">
              <h3
                className="
                  font-geist
                  font-[500]
                  text-[#2B2B2B]

                  text-[20px]
                  leading-[28px]

                  sm:text-[21px]
                  sm:leading-[29px]

                  lg:text-[23px]
                  lg:leading-[31px]
                "
              >
                {leader.name}
              </h3>

              <p
                className="
                  mt-1
                  max-w-[260px]

                  font-geist
                  font-[400]
                  tracking-[-2%]
                  text-neutral-500

                  text-[15px]
                  leading-[22px]

                  sm:text-[16px]
                  sm:leading-[24px]
                "
              >
                {leader.role}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Decorative Blur */}

  <div className="pointer-events-none absolute -left-24 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-neutral-100 blur-[140px]" />

  <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-neutral-100 blur-[160px]" />
</section>


);
}
