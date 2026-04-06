"use client";

import Image from "next/image";

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar?: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    avatar :"https://res.cloudinary.com/ddcy9noqo/image/upload/v1775475611/WhatsApp_Image_2026-04-06_at_17.09.07_a0ih5z.jpg",
    quote:
      "Athratech helped us simplify our product experience with a user-friendly interface, stronger UX decisions, and a modern design system. After launch, customer engagement improved, onboarding became smoother, and our team received far better feedback from users.",
    name: "Vijaya",
    role: "Founder & CTO, Tamarisk",
  },
  {
    id: 2,
    avatar :"https://res.cloudinary.com/ddcy9noqo/image/upload/v1775475610/WhatsApp_Image_2026-04-06_at_17.09.07_1_kzwxoq.jpg",
    quote:
      "The Athratech team turned complex business data into clear dashboards and actionable insights. Their strategy improved campaign visibility, supported faster decisions, and helped us strengthen conversion performance across multiple marketing channels.",
    name: "Rohan",
    role: "Growth Lead, MarketEdge",
  },
  {
    id: 3,
    avatar :"https://res.cloudinary.com/ddcy9noqo/image/upload/v1775475610/WhatsApp_Image_2026-04-06_at_17.09.06_z3vfwm.jpg",
    quote:
      "Their product design and frontend execution gave our platform a cleaner structure, better usability, and a more premium brand presence. The final result felt polished, responsive, and aligned with what our users actually needed.",
    name: "Aarohi",
    role: "Product Manager, NovaSuite",
  },
  {
    id: 4,
    avatar :"https://res.cloudinary.com/ddcy9noqo/image/upload/v1775475610/WhatsApp_Image_2026-04-06_at_17.09.08_tg3o7q.jpg",
    quote:
      "Athratech completely improved our app experience by focusing on real user behavior, not just visuals. They reduced friction, streamlined the core journey, and delivered a scalable UI that helped increase retention and overall customer satisfaction.",
    name: "Karan",
    role: "Co-Founder, PixelForge",
  },
  {
    id: 5,
    avatar :"https://res.cloudinary.com/ddcy9noqo/image/upload/v1775475610/WhatsApp_Image_2026-04-06_at_17.09.07_2_xx9dmf.jpg",
    quote:
      "From brand communication to UI consistency, Athratech helped us build a more trustworthy digital presence. Their design thinking, attention to detail, and responsive implementation made a visible difference in how customers interacted with our product.",
    name: "Sneha",
    role: "Marketing Head, Elevana",
  },
  {
    id: 6,
    avatar :"https://res.cloudinary.com/ddcy9noqo/image/upload/v1775475610/WhatsApp_Image_2026-04-06_at_17.09.08_1_s95sgw.jpg",
    quote:
      "Working with Athratech gave us a dependable digital partner for design, development, and growth strategy. Their team communicated clearly, delivered on time, and helped us launch a high-quality product with measurable business impact.",
    name: "Manavi",
    role: "Director, BrightLayer",
  },
];

const initialsBg = [
  "bg-[#0EA5E9]",
  "bg-[#F97316]",
  "bg-[#22C55E]",
  "bg-[#A855F7]",
  "bg-[#EC4899]",
  "bg-[#3B82F6]",
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#EFEFEF] px-4 py-[70px] sm:px-6 md:px-8 lg:py-[90px] xl:px-0">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-12 text-center sm:mb-14 lg:mb-16">
          <p
            className="mx-auto mb-3 flex w-full max-w-[430px] items-center justify-center text-[18px] font-normal text-[#7A7A7A] sm:max-w-[470px] sm:text-[22px] lg:max-w-[520px] lg:text-[24px]"
            style={{ fontFamily: "var(--font-calligraffitti), cursive" }}
          >
            <span className="h-[1px] flex-1 bg-[linear-gradient(-90deg,#9C9C9C_0%,#3A3A3A_18%,#707070_32%,#A3A3A3_58%,#D9D9D9_80%,#F3F3F3_100%)]" />
            <span className="shrink-0 px-4">Testimonials</span>
            <span className="h-[1px] flex-1 bg-[linear-gradient(-270deg,#9C9C9C_0%,#3A3A3A_18%,#707070_42%,#A3A3A3_68%,#D9D9D9_88%,#F3F3F3_100%)]" />
          </p>

          <h2
            className="mx-auto max-w-[320px] text-[28px] font-normal leading-[1.05] tracking-[-0.04em] text-black sm:max-w-[500px] sm:text-[36px] md:max-w-[650px] md:text-[42px] lg:max-w-[760px] lg:text-[48px]"
            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
          >
            Client testimonials on web <br /> design, development.
          </h2>

          
        </div>

        {/* mobile */}
        <div className="grid grid-cols-1 gap-5 md:hidden">
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={item.id}
              item={item}
              index={index}
              className="min-h-[250px]"
            />
          ))}
        </div>

        {/* tablet */}
        <div className="hidden grid-cols-2 gap-6 md:grid xl:hidden">
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={item.id}
              item={item}
              index={index}
              className="min-h-[280px]"
            />
          ))}
        </div>

        {/* desktop */}
        <div className="hidden xl:grid xl:grid-cols-3 xl:gap-x-[34px] xl:gap-y-[24px]">
          <TestimonialCard item={testimonials[0]} index={0} className="min-h-[290px]" />
          <TestimonialCard item={testimonials[1]} index={1} className="min-h-[330px]" />
          <TestimonialCard item={testimonials[2]} index={2} className="min-h-[290px]" />
          <TestimonialCard item={testimonials[3]} index={3} className="min-h-[330px]" />
          <TestimonialCard item={testimonials[4]} index={4} className="min-h-[290px]" />
          <TestimonialCard item={testimonials[5]} index={5} className="min-h-[330px]" />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  item,
  index,
  className = "",
}: {
  item: Testimonial;
  index: number;
  className?: string;
}) {
  const initial = item.name?.trim()?.charAt(0)?.toUpperCase() || "A";
  const initialBg = initialsBg[index % initialsBg.length];

  return (
    <article
      className={`flex w-full flex-col rounded-[24px] border border-[#DCDCDC] bg-[#F8F8F8] px-5 pb-6 pt-6 shadow-[0px_20px_45px_rgba(0,0,0,0.10)] sm:rounded-[28px] sm:px-6 sm:pb-7 sm:pt-7 lg:rounded-[34px] lg:px-[30px] lg:pb-[28px] lg:pt-[28px] ${className}`}
    >
      <div className="flex-1">
        <p className="font-bricolage text-[14px] font-[400] leading-[1.65] tracking-[-0.02em] text-[#727272] sm:text-[15px] lg:text-[16px]">
          “{item.quote}”
        </p>
      </div>

      <div className="mt-6 flex items-center gap-4 sm:mt-7 sm:gap-5">
        <div className="relative flex h-[58px] w-[58px] shrink-0 items-center justify-center overflow-hidden rounded-full sm:h-[64px] sm:w-[64px] lg:h-[72px] lg:w-[72px]">
          {item.avatar ? (
            <Image
              src={item.avatar}
              alt={item.name}
              fill
              className="object-cover"
            />
          ) : (
            <div
              className={`flex h-full w-full items-center justify-center rounded-full text-[22px] font-semibold text-white sm:text-[24px] lg:text-[28px] ${initialBg}`}
            >
              {initial}
            </div>
          )}
        </div>

        <div className="min-w-0">
          <h3 className="truncate font-bricolage text-[20px] font-[500] leading-[1.05] text-[#000000] sm:text-[22px] lg:text-[24px]">
            {item.name}
          </h3>
          <p className="mt-[6px] line-clamp-2 font-bricolage text-[14px] font-[500] leading-[1.35] text-[#8B8B8B] sm:text-[15px] lg:mt-[8px] lg:text-[17px]">
            {item.role}
          </p>
        </div>
      </div>
    </article>
  );
}

/* ===== Stat Component ===== */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="mb-[44px]">
      <p className="font-bricolage text-[72px] font-[700] leading-[100%] text-[#FFFFFF] max-[768px]:text-[60px]">
        {value}
      </p>
      <p className="font-bricolage text-[16px] font-[400] text-[#FFFFFF]">
        {label}
      </p>
    </div>
  );
}