const frontendOfferings = [
  {
    title: "Mobile App UI",
    text: "Clean mobile-first screens with smooth user journeys and reusable components.",
  },
  {
    title: "Web App Interface",
    text: "Responsive web application screens built for usability and speed.",
  },
  {
    title: "Dashboard UI",
    text: "Analytics cards, tables, filters, charts, forms and admin panels.",
  },
  {
    title: "Design System",
    text: "Consistent typography, colors, spacing, buttons and component states.",
  },
  {
    title: "Frontend Integration",
    text: "API-connected UI flows with loading states, validation and error handling.",
  },
  {
    title: "Responsive Experience",
    text: "Pixel-perfect layouts that work across mobile, tablet and desktop.",
  },
  {
    title: "App Prototyping",
    text: "Interactive screen flows for testing product behaviour before development.",
  },
  {
    title: "Performance UI",
    text: "Optimized frontend structure with smooth interactions and fast loading.",
  },
];

export default function AppDevFrontendOfferings() {
  return (
    <section className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1280px] px-0 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[8px] bg-[#03031c] px-5 py-16 text-white sm:rounded-[16px] sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-white/40">
              Interface engineering
            </p>

            <h2 className="text-[34px] font-semibold leading-[1] tracking-[-0.08em] sm:text-[52px]">
              Frontend Offerings
            </h2>

            <p className="mx-auto mt-4 max-w-[560px] text-[13px] leading-[1.8] text-white/50 sm:text-[15px]">
              We craft application interfaces that are fast, accessible,
              responsive, and easy for users to understand.
            </p>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-11 sm:grid-cols-2 lg:grid-cols-4">
            {frontendOfferings.map((item, index) => (
              <article key={item.title}>
                <div className="mb-5 grid h-9 w-9 place-items-center rounded-full bg-white text-[13px] font-semibold text-black">
                  {index + 1}
                </div>

                <h3 className="text-[18px] font-semibold tracking-[-0.05em]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[260px] text-[13px] leading-[1.7] text-white/52">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}