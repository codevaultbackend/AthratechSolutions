import Image from "next/image";

const approach = [
  {
    src: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255479/website-images/czqvfr2cxshzggb7kood.png",
    title: "Visual research",
    text: (
      <>
        <span className="text-[#000000]">Communicate</span> clearly
        without over explaining
      </>
    ),
  },
  {
    src: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255481/website-images/hgftgyuo028flhddg3wc.png",
    title: "Identity direction",
    text: (
      <>
        Feel <span className="text-[#000000]">Consistent
          </span> across every platform and interaction
      </>
    ),
  },
  {
    src: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255484/website-images/hks9fi69j8ewd0ipgvnp.png",
    title: "Brand system",
    text: (
      <>
        Build <span className="text-[#000000]">trust

        </span>   through authenticity, not trends
      </>
    ),
  },
  {
    src: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255487/website-images/zg363wlmca8nl2mt7qot.png",
    title: "Launch assets",
    text: (
      <>
        Be <span className="text-[#000000]">flexible

        </span> enough to evolve over time
      </>
    ),
  },
];

export default function BrandApproach() {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-0">

        {/* Heading */}
        <div className="text-center">
          <h2
            className="
            font-bricolage
            font-semibold
            text-[#111111]

            text-[34px]
            leading-[110%]

            sm:text-[44px]
            md:text-[52px]
            lg:text-[56px]

            tracking-[-0.04em]
          "
          >
            Our Approach
          </h2>

          <p
            className="
            mx-auto
            mt-6
            max-w-[900px]

            text-[#6D6D6D]
            font-inter
            font-normal

            text-[15px]
            leading-[170%]

            sm:text-[17px]
            lg:text-[18px]
          "
          >
            Every decision we make is guided by strategy. We focus on creating brands that are not only visually compelling but also aligned with your values and built to grow with your business.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
          mt-12
          grid
          grid-cols-1
          gap-8

          sm:grid-cols-2
          sm:gap-8

          lg:grid-cols-4
          lg:gap-[36px]
          lg:mt-[90px]
        "
        >
          {approach.map((item) => (
            <article
              key={item.title}
              className="
              group
              flex
              flex-col
              items-center
              text-center
            "
            >
              <div
                className="
                relative
                w-full
                overflow-hidden
                rounded-[24px]

                h-[220px]
                sm:h-[250px]
                lg:h-[230px]

                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
              "
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  priority
                  sizes="
                    (max-width:640px) 100vw,
                    (max-width:1024px) 50vw,
                    25vw
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              <p
                className="
                mt-3
                max-w-[260px]

                text-[20px]
                leading-[100%]
                text-[#6D6D6D]
                font-medium
                mt-[24px]
              "
              >
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}