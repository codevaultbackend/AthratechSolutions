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
    avatar :"https://res.cloudinary.com/ddcy9noqo/image/upload/v1769168057/ss_page_assets/adck0mq8ewiejntqq6si.jpg",
    quote:
      "ATHRATECH delivered seamless digital solutions with strong technical expertise and reliable support throughout the project.",
    name: "Nihal Kumar Gupta",
    role: "Treasurer, SankalpSetu Foundation",
  },
  {
    id: 2,
    avatar :"https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779518706/website-images/inwcmkfwygfkokaxgjj4.png",
    quote:
      "ATHRATECH combined creativity and timely execution to strengthen our digital presence and user experience.",
    name: "Heera Lal",
    role: "Project Manager, Amsom Construct Ability Pvt Ltd",
  },
  {
    id: 3,
    avatar :"https://res.cloudinary.com/ddcy9noqo/image/upload/v1769168057/ss_page_assets/g0iebuslpunmn0fidvz8.jpg",
    quote:
      "Their team delivered a smooth experience through creative thinking, technical expertise, and professional execution.",
    name: "Sangita Kumari",
    role: "Director, Fast Response",
  },
  {
    id: 4,
    avatar :"https://res.cloudinary.com/ddcy9noqo/image/upload/v1769168059/ss_page_assets/idrhtutsykug6jajedxy.png",
    quote:
      "ATHRATECH provided scalable and reliable solutions tailored to our business needs with excellent communication.",
    name: "Raman Kumar",
    role: "HOD, Jagsom Electricals Pvt Ltd",
  },
  {
    id: 5,
    avatar :"https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779518067/website-images/f552c4djelk2amskqp5a.png",
    quote:
      "The team helped us build a modern brand presence with high-quality design and attention to every detail.",
    name: "Krishna Mishra",
    role: "Manager, Vibhushanam",
  },
  {
    id: 6,
    avatar :"https://res.cloudinary.com/ddcy9noqo/image/upload/v1769168056/ss_page_assets/suhawmdyttxpzfbaj49v.jpg",
    quote:
      "ATHRATECH delivered innovative digital solutions with quick execution, smooth coordination, and dependable service.",
    name: "Deepak Kumar Jha",
    role: "Director, Chugen Hatcheries",
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
              className={`${['Krishna Mishra', "Heera Lal"].includes(item.name) &&  '!h-auto'} object-cover`}
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