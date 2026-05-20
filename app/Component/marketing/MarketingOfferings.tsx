"use client";

import Image from "next/image";

const offerings = [
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "We improve your website’s visibility on search engines so your customers can find you easily. Our SEO strategies focus on increasing organic traffic, improving rankings, and building long-term online presence.",
    bg: "bg-black",
    src: "/marketingCard2.png",
    height: "lg:h-[435px]",
    large: true,
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    description:
      "Get instant visibility with targeted paid ads. We create and manage high-performing campaigns that bring the right audience to your website while maximizing your return on investment.",
    bg: "bg-[#8D250D]",
    src: "/marketingCard7.png",
    height: "lg:h-[279px]",
    large: false,
  },
  {
    title: "Amazon PPC (AMPPC)",
    description:
      "Boost your product visibility on Amazon with optimized ad campaigns. We help you reach the right buyers, increase product rankings, and drive more sales on the platform.",
    bg: "bg-[#566C1A]",
    src: "/marketingCard3.png",
    height: "lg:h-[279px]",
    large: false,
  },
  {
    title: "Meta Ads (Facebook & Instagram)",
    description:
      "We design engaging ad campaigns on Facebook and Instagram that connect with your audience, increase brand awareness, and drive conversions through precise targeting.",
    bg: "bg-[#214D8D]",
    src: "/marketingCard8.png",
    height: "lg:h-[435px]",
    large: true,
  },
  {
    title: "Google Ads",
    description:
      "Reach potential customers exactly when they are searching for your services. Our Google Ads campaigns are optimized for better clicks, leads, and measurable results.",
    bg: "bg-[#3C1148]",
    src: "/marketingCard4.png",
    height: "lg:h-[279px]",
    large: false,
  },
  {
    title: "Email Marketing",
    description:
      "Stay connected with your audience through personalized email campaigns. We help you nurture leads, build relationships, and increase customer retention.",
    bg: "bg-black",
    src: "/marketingCard9.png",
    height: "lg:h-[279px]",
    large: false,
  },
  {
    title: "WhatsApp Marketing",
    description:
      "Engage directly with your customers through WhatsApp. From promotions to updates, we create campaigns that feel personal, instant, and highly effective.",
    bg: "bg-[#8C240D]",
    src: "/marketingCard5.png",
    height: "lg:h-[279px]",
    large: false,
  },
  {
    title: "Social Media Marketing",
    description:
      "We manage and grow your social media presence with creative content and strategic planning to increase engagement, followers, and brand loyalty.",
    bg: "bg-[#566C1A]",
    src: "/marketingCard10.png",
    height: "lg:h-[279px]",
    large: false,
  },
  {
    title: "Content Marketing",
    description:
      "We create valuable and relevant content that attracts, informs, and converts your audience, helping you build trust and authority in your industry.",
    bg: "bg-[#214D8D]",
    src: "/marketingCard6.png",
    height: "lg:h-[279px]",
    large: false,
  },
  {
    title: "Affiliate Marketing",
    description:
      "Expand your reach by partnering with affiliates who promote your products or services. We help you build and manage performance-based marketing networks.",
    bg: "bg-[#3C1148]",
    src: "/marketingCard11.png",
    height: "lg:h-[279px]",
    large: false,
  },
];

export default function MarketingOfferings() {
  return (
    <section className="w-full py-[70px] md:py-[90px] lg:py-[100px]">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 lg:px-0">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[34px] font-[600] font-bricolage leading-[100%] tracking-[-4%] text-black max-[768px]:text-[44px] lg:text-[56px] mb-[110px]">
            Our Offerings
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="mt-[40px] hidden grid-cols-2 gap-6 lg:grid">
          {/* LEFT */}
          <div className="flex flex-col gap-6">
            <Card item={offerings[0]} />
            <Card item={offerings[2]} />
            <Card item={offerings[4]} />
            <Card item={offerings[6]} />
            <Card item={offerings[8]} />
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">
            <Card item={offerings[1]} />
            <Card item={offerings[3]} />
            <Card item={offerings[5]} />
            <Card item={offerings[7]} />
            <Card item={offerings[9]} />
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="mt-[45px] hidden grid-cols-2 gap-5 sm:grid lg:hidden">
          {offerings.map((item, index) => (
            <Card key={index} item={item} tablet />
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="mt-[35px] flex flex-col gap-4 sm:hidden">
          {offerings.map((item, index) => (
            <Card key={index} item={item} mobile />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  item,
  mobile = false,
  tablet = false,
}: {
  item: {
    title: string;
    description: string;
    bg: string;
    src: string;
    height: string;
    large: boolean;
  };
  mobile?: boolean;
  tablet?: boolean;
}) {
  const isResponsiveSmall = mobile || tablet;

  return (
    <article
      className={`
        relative overflow-hidden rounded-[24px] md:rounded-[28px] lg:rounded-[32px]
        ${item.bg}
        ${
          mobile
            ? "min-h-[230px]"
            : tablet
            ? "min-h-[260px]"
            : item.height
        }
        w-full
        shadow-[0px_4px_20px_rgba(0,0,0,0.18)]
        transition-all duration-300 hover:-translate-y-1
      `}
    >
      {/* LARGE CARD DESKTOP */}
      {item.large && !isResponsiveSmall ? (
        <div className="flex h-full flex-col justify-between p-8">
          {/* Icon */}
          <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white shadow-[0px_8px_24px_rgba(0,0,0,0.18)]">
            <Image
              src={item.src}
              alt={item.title}
              width={72}
              height={72}
              className="h-[72px] w-[72px] rounded-full object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="mt-8">
            <h3 className="whitespace-pre-line text-[32px] font-[500] leading-[100%] tracking-[-0.04em] text-white">
              {item.title}
            </h3>

            <p className="mt-4 max-w-[420px] text-[16px] font-[400] leading-[1.65] text-[#CECECE]">
              {item.description}
            </p>
          </div>
        </div>
      ) : (
        /* SMALL + RESPONSIVE CARD */
        <div
          className={`
            flex h-full
            ${
              mobile
                ? "flex-col justify-between p-5"
                : "flex-row items-start gap-5 p-6 md:p-7"
            }
          `}
        >
          {/* Icon */}
          <div className="shrink-0">
            <div
              className={`
                flex items-center justify-center rounded-full bg-white
                shadow-[0px_8px_24px_rgba(0,0,0,0.18)]
                ${
                  mobile
                    ? "h-[64px] w-[64px]"
                    : "h-[72px] w-[72px]"
                }
              `}
            >
              <Image
                src={item.src}
                alt={item.title}
                width={72}
                height={72}
                className={`
                  rounded-full object-cover
                  ${
                    mobile
                      ? "h-[64px] w-[64px]"
                      : "h-[72px] w-[72px]"
                  }
                `}
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className={`${mobile ? "mt-6" : "flex-1 pt-1"}`}>
            <h3
              className={`
                whitespace-pre-line font-[500] leading-[100%]
                tracking-[-0.04em] text-white
                ${
                  mobile
                    ? "text-[26px]"
                    : tablet
                    ? "text-[26px]"
                    : "text-[28px]"
                }
              `}
            >
              {item.title}
            </h3>

            <p
              className={`
                mt-4 font-[400] leading-[1.6] text-[#CECECE]
                ${
                  mobile
                    ? "max-w-full text-[14px]"
                    : tablet
                    ? "max-w-full text-[14px]"
                    : "max-w-[320px] text-[15px]"
                }
              `}
            >
              {item.description}
            </p>
          </div>
        </div>
      )}

      {/* Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_100%)]" />
    </article>
  );
}