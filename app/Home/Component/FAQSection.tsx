"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How to request work?",
    a: "You can request work by contacting us through our website or scheduling a call. We’ll guide you through the process step by step.",
  },
  {
    q: "What if I don’t get the results?",
    a: "We iterate until expectations are met. Our focus is delivering measurable impact, not just visuals.",
  },
  {
    q: "What’s your speed of delivery?",
    a: "Timelines depend on project scope, but most projects begin within 48 hours and deliver in clear milestones.",
  },
  {
    q: "Are there any refunds?",
    a: "Refunds depend on project stage. We believe in transparency and fairness in all engagements.",
  },
  {
    q: "What does the Athratech’s workflow look like?",
    a: "Our workflow includes discovery, analysis, design, iteration, and delivery—keeping you involved at every stage.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#EFEFEF]  px-4 h-fit  pb-[225px] pt-[165px] " id="Faq">
      {/* ===== Header ===== */}
      <div className="mb-12 text-center sm:mb-14 lg:mb-16">
          <p
            className="mb-3 flex items-center justify-center gap-4 text-[18px] font-normal text-[#7A7A7A] sm:text-[22px] lg:text-[24px]"
            style={{ fontFamily: "var(--font-calligraffitti), cursive" }}
          >
            <span className="inline-block h-[1px] w-[124px] bg-[linear-gradient(-90deg,#9C9C9C_0%,#3A3A3A_18%,#707070_32%,#A3A3A3_58%,#D9D9D9_80%,#F3F3F3_100%)]" />
            FAQs
            <span className="inline-block h-[1px] w-[124px] bg-[linear-gradient(-270deg,#9C9C9C_0%,#3A3A3A_18%,#707070_42%,#A3A3A3_68%,#D9D9D9_88%,#F3F3F3_100%)]" />
          </p>

          <h2
            className="text-[28px] font-normal leading-[100%] tracking-[-0.04em] text-black sm:text-[36px] md:text-[42px] lg:text-[48px]"
            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
          >
            Your Questions, Answered
          </h2>
          <p className="text-[#8A8A8A] text-[16px] font-[400] leading-[100%] mt-[24px] font-inter">Helping you understand our process and offerings at Athratech</p>
        </div>

      {/* ===== FAQ Grid ===== */}
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2  gap-x-[32px] gap-y-[20px]">
        {faqs.map((item, index) => {
          const isOpen = open === index;

          return (
            <div
              key={index}
              className={`rounded-[14px] bg-white px-5 py-4 shadow-sm transition max-[768px]:!h-auto ${isOpen ? "h-auto" : "h-[56px]"}`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-center justify-between text-left"
                aria-expanded={isOpen}
              >
                <span className="text-[15px] font-medium text-[#1A1A1A]">
                  {item.q}
                </span>

                {/* Plus / Minus Icon */}
                <span
                  className={`
                    ml-4 flex h-6 w-6 items-center justify-center
                    rounded-full bg-black text-white
                    transition-transform duration-300
                    
                  `}
                >
                  <i className={`fa-solid  ${isOpen ? "fa-minus" : "fa-plus"}`}></i>
                </span>
              </button>

              {/* Answer */}
              <div
                className={`
                  overflow-hidden transition-all duration-300 font-bricolage
                  ${isOpen ? "!max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}
                `}
              >
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
