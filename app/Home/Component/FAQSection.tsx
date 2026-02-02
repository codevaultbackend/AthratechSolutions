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
    <section className="bg-[#EDEDED] py-[120px] px-4">
      {/* ===== Header ===== */}
      <div className="text-center mb-[64px]">
        <p className="font-calligraffitti text-[#8A8A8A] mb-2">FAQs</p>
        <h2 className="text-[42px] font-[400] text-black mb-2">
          Your Questions, Answered
        </h2>
        <p className="text-sm text-gray-500 max-w-[520px] mx-auto">
          Helping you understand our process and offerings at Athratech
        </p>
      </div>

      {/* ===== FAQ Grid ===== */}
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-[32px] gap-y-[20px]">
        {faqs.map((item, index) => {
          const isOpen = open === index;

          return (
            <div
              key={index}
              className="rounded-[14px] bg-white px-5 py-4 shadow-sm transition"
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
                    ${isOpen ? "rotate-45" : "rotate-0"}
                  `}
                >
                  +
                </span>
              </button>

              {/* Answer */}
              <div
                className={`
                  overflow-hidden transition-all duration-300
                  ${isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}
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
