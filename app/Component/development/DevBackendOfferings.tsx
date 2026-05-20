const offerings = [
  {
    title: "Backend Architecture",
    text: "Reliable APIs, structured databases and scalable server-side flows.",
  },
  {
    title: "CRM & ERP Platforms",
    text: "Custom business systems with roles, reports, workflows and dashboards.",
  },
  {
    title: "Database Design",
    text: "Clean schema planning, relations, validations and query optimization.",
  },
  {
    title: "API Development",
    text: "Secure REST APIs with validation, authentication and stable responses.",
  },
  {
    title: "Integrations",
    text: "Payment gateways, third-party APIs, cloud storage and automation flows.",
  },
  {
    title: "Deployment Support",
    text: "Production deployment guidance, environment setup and performance checks.",
  },
];

export default function DevBackendOfferings() {
  return (
    <section className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1280px] px-0 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[8px] bg-[#1c0b27] px-5 py-16 text-white sm:rounded-[16px] sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-white/40">
              Backend Offerings
            </p>

            <h2 className="text-[34px] font-semibold leading-[1] tracking-[-0.08em] sm:text-[52px]">
              Backend Offerings
            </h2>

            <p className="mx-auto mt-4 max-w-[540px] text-[13px] leading-[1.8] text-white/50 sm:text-[15px]">
              We build backend systems that keep your product secure,
              maintainable and ready for growth.
            </p>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((item) => (
              <article key={item.title}>
                <div className="mb-5 grid h-9 w-9 place-items-center rounded-full bg-white text-[13px] font-semibold text-black">
                  ✦
                </div>

                <h3 className="text-[18px] font-semibold tracking-[-0.05em]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[280px] text-[13px] leading-[1.7] text-white/52">
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