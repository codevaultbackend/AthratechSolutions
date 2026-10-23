
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
  const leftColumn = offerings
    .map((item, index) => ({ item, index }))
    .filter(({ index }) => index % 2 === 0);

  const rightColumn = offerings
    .map((item, index) => ({ item, index }))
    .filter(({ index }) => index % 2 !== 0);

  return (
    <section className="w-full py-[70px] md:py-[90px] lg:py-[100px]">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 lg:px-0">
        <div className="text-center">
          <h2 className="mb-[110px] text-[34px] font-[600] font-bricolage leading-[100%] tracking-[-4%] text-black max-[768px]:text-[44px] lg:text-[56px]">
            Our Offerings
          </h2>
        </div>

        {/* One set of cards for every screen size */}
        <div className="mt-[40px] grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:flex lg:items-start lg:gap-6">
          {/* Left column on desktop */}
          <div className="contents lg:flex lg:w-1/2 lg:flex-col lg:gap-6">
            {leftColumn.map(({ item, index }) => (
              <Card key={item.title} item={item} order={index} />
            ))}
          </div>

          {/* Right column on desktop */}
          <div className="contents lg:flex lg:w-1/2 lg:flex-col lg:gap-6">
            {rightColumn.map(({ item, index }) => (
              <Card key={item.title} item={item} order={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type Offering = (typeof offerings)[number];

function Card({
  item,
  order,
}: {
  item: Offering;
  order: number;
}) {
  return (
    <article
      style={{ order }}
      className={`
        relative w-full min-h-[230px] overflow-hidden rounded-[24px]
        shadow-[0px_4px_20px_rgba(0,0,0,0.18)]
        transition-transform duration-300 hover:-translate-y-1
        md:min-h-[260px] md:rounded-[28px]
        lg:min-h-0 lg:rounded-[32px] ${item.height}
        ${item.bg}
      `}
    >
      <div
        className={`
          flex h-full flex-col justify-between p-5
          sm:flex-row sm:items-start sm:gap-5 sm:p-6
          md:p-7
          lg:gap-5
          ${item.large
            ? "lg:flex-col lg:justify-between lg:p-8"
            : "lg:flex-row lg:items-start lg:justify-start lg:p-6 lg:pt-6"}
        `}
      >
        {/* One image per card */}
        <div className="shrink-0">
          <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-white shadow-[0px_8px_24px_rgba(0,0,0,0.18)] sm:h-[72px] sm:w-[72px]">
            <Image
              src={item.src}
              alt=""
              width={72}
              height={72}
              sizes="72px"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* One heading and description per card */}
        <div
          className={`
            mt-6 w-full
            sm:mt-0 sm:min-w-0 sm:flex-1 sm:pt-1
            ${item.large ? "lg:mt-8 lg:flex-none lg:pt-0" : "lg:mt-0"}
          `}
        >
          <h3
            className={`
              whitespace-pre-line font-[500] leading-[100%]
              tracking-[-0.04em] text-white
              text-[26px]
              ${item.large ? "lg:text-[32px]" : "lg:text-[28px]"}
            `}
          >
            {item.title}
          </h3>

          <p
            className={`
              mt-4 text-[14px] font-[400] leading-[1.6] text-[#CECECE]
              sm:max-w-full sm:text-[14px]
              lg:text-[15px]
              ${item.large
                ? "lg:max-w-[420px] lg:text-[16px] lg:leading-[1.65]"
                : "lg:max-w-[320px]"}
            `}
          >
            {item.description}
          </p>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_100%]" />
    </article>
  );
}
