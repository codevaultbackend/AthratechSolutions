import Link from "next/link";

const cards = [
  {
    title: "Landing Page Website Design",
    text: "Website sections aligned with your new brand identity.",
    type: "monitor",
    className: "sm:col-span-1 sm:row-span-2",
  },
  {
    title: "Brand Design System",
    text: "Colors, cards, buttons, typography and reusable blocks.",
    type: "phone",
    className: "",
  },
  {
    title: "Website System UI Kit",
    text: "Responsive interface elements prepared for development.",
    type: "wireframe",
    className: "",
  },
];

function VisualMockup({ type }: { type: string }) {
  if (type === "monitor") {
    return (
      <div className="mt-6 rounded-[16px] bg-[#1b1b1b] p-3">
        <div className="rounded-[10px] bg-white p-4">
          <div className="mb-4 h-3 w-24 rounded-full bg-black/10" />
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="h-28 rounded-xl bg-[#edeaff]" />
            <div className="space-y-3">
              <div className="h-4 w-full rounded-full bg-black/10" />
              <div className="h-4 w-2/3 rounded-full bg-black/10" />
              <div className="h-8 w-24 rounded-full bg-black" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "phone") {
    return (
      <div className="mt-6 flex justify-end rounded-[18px] bg-[#315ed8] p-6">
        <div className="h-[220px] w-[120px] rounded-[22px] border-[6px] border-black bg-white p-3 shadow-xl">
          <div className="mx-auto mb-3 h-3 w-10 rounded-full bg-black" />
          <div className="grid grid-cols-2 gap-2">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="h-9 rounded-md bg-black/10" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-[16px] bg-[#f6f3ff] p-5">
      <div className="grid grid-cols-3 gap-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="h-12 rounded-xl border border-black/10 bg-white"
          />
        ))}
      </div>
    </div>
  );
}

export default function BrandUIDesign() {
  return (
    <section className="bg-[#f7f7f7] py-16 sm:py-24">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-black/35">
              Digital extension
            </p>

            <h2 className="text-[34px] font-semibold leading-[1] tracking-[-0.08em] sm:text-[52px]">
              UI/UX Design
            </h2>

            <p className="mt-4 max-w-[470px] text-[13px] leading-[1.8] text-black/50 sm:text-[15px]">
              Your brand identity can extend into websites, applications,
              landing pages and product dashboards with consistent UI design.
            </p>
          </div>

          <Link
            href="#contact"
            className="hidden rounded-full bg-black px-5 py-2.5 text-[11px] font-semibold text-white sm:inline-flex"
          >
            Start now
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className={`overflow-hidden rounded-[22px] bg-white p-5 shadow-[0_18px_60px_rgba(0,0,0,0.05)] ${card.className}`}
            >
              <h3 className="max-w-[280px] text-[20px] font-semibold leading-[1.1] tracking-[-0.06em]">
                {card.title}
              </h3>

              <p className="mt-3 max-w-[330px] text-[13px] leading-[1.7] text-black/48">
                {card.text}
              </p>

              <VisualMockup type={card.type} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}