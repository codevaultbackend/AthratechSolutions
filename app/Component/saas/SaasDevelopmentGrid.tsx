import Link from "next/link";

const cards = [
  {
    title: "Website Development",
    text: "Conversion-focused SaaS websites, landing pages and marketing sites.",
    type: "website",
    className: "sm:col-span-1 sm:row-span-2",
  },
  {
    title: "CRM & ERP Development",
    text: "Cloud-based CRM and ERP platforms with role-based workflows.",
    type: "dashboard",
    className: "",
  },
  {
    title: "Mobile & Web Application Design",
    text: "Mobile-first SaaS app interfaces for customers, teams and admins.",
    type: "phone",
    className: "",
  },
  {
    title: "SaaS Products Development",
    text: "Subscription-ready products with dashboards, users, roles and analytics.",
    type: "saas",
    className: "",
  },
];

function SaasMockVisual({ type }: { type: string }) {
  if (type === "website") {
    return (
      <div className="mt-6 rounded-[18px] bg-[#1b1b1b] p-3">
        <div className="rounded-[12px] bg-white p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="h-3 w-24 rounded-full bg-black/10" />
            <div className="h-7 w-20 rounded-full bg-black" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="h-40 rounded-xl bg-[linear-gradient(135deg,#ff8a00,#f5d142,#ffffff)]" />
            <div className="space-y-3">
              <div className="h-5 w-full rounded-full bg-black/10" />
              <div className="h-5 w-3/4 rounded-full bg-black/10" />
              <div className="h-20 rounded-xl bg-black/5" />
              <div className="h-8 w-28 rounded-full bg-[#315ed8]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "dashboard") {
    return (
      <div className="mt-6 rounded-[18px] bg-[#f3f5f7] p-5">
        <div className="rounded-[12px] border border-black/10 bg-white p-4 shadow-sm">
          <div className="mb-4 h-4 w-32 rounded-full bg-black/10" />
          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className="h-12 rounded-xl bg-black/5" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "phone") {
    return (
      <div className="mt-6 flex justify-center rounded-[18px] bg-black p-6">
        <div className="h-[250px] w-[135px] rounded-[24px] border-[6px] border-white bg-white p-3 shadow-xl">
          <div className="mx-auto mb-4 h-3 w-12 rounded-full bg-black" />
          <div className="space-y-3">
            <div className="h-20 rounded-xl bg-[#f4efff]" />
            <div className="grid grid-cols-2 gap-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="h-9 rounded-lg bg-black/10" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-[18px] bg-white p-5 shadow-inner">
      <div className="flex items-end gap-3">
        <div className="h-[210px] w-[110px] rounded-[24px] border-[6px] border-black bg-white p-3">
          <div className="mx-auto mb-3 h-3 w-10 rounded-full bg-black" />
          <div className="space-y-2">
            <div className="h-12 rounded-xl bg-[#eef2ff]" />
            <div className="h-8 rounded-lg bg-black/8" />
            <div className="h-8 rounded-lg bg-black/8" />
          </div>
        </div>

        <div className="flex-1 pb-4">
          <div className="h-4 w-32 rounded-full bg-black/10" />
          <div className="mt-3 h-4 w-44 rounded-full bg-black/10" />
          <div className="mt-6 h-9 w-28 rounded-full bg-black" />
        </div>
      </div>
    </div>
  );
}

export default function SaasDevelopmentGrid() {
  return (
    <section className="bg-[#f7f7f7] py-16 sm:py-24">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-black/35">
              Full stack SaaS development
            </p>

            <h2 className="text-[34px] font-semibold leading-[1] tracking-[-0.08em] sm:text-[52px]">
              Frontend & Backend Development
            </h2>

            <p className="mt-4 max-w-[560px] text-[13px] leading-[1.8] text-black/50 sm:text-[15px]">
              We build complete SaaS products with frontend interfaces, backend
              APIs, database architecture, authentication, role-based access,
              reporting, and deployment-ready code.
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
              <h3 className="max-w-[330px] text-[20px] font-semibold leading-[1.1] tracking-[-0.06em]">
                {card.title}
              </h3>

              <p className="mt-3 max-w-[380px] text-[13px] leading-[1.7] text-black/48">
                {card.text}
              </p>

              <SaasMockVisual type={card.type} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}