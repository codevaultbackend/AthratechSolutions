const backendOfferings = [
  {
    title: "API Development",
    text: "Secure REST APIs with validation, authentication and stable response shape.",
  },
  {
    title: "Backend Logic",
    text: "Business workflows, role-based actions, approvals and automation.",
  },
  {
    title: "Database Design",
    text: "Scalable schema, relations, indexes and optimized query patterns.",
  },
  {
    title: "Authentication",
    text: "Login, roles, permissions, token handling and protected routes.",
  },
  {
    title: "Admin Systems",
    text: "Dashboards, reports, user management and operational controls.",
  },
  {
    title: "Cloud Deployment",
    text: "Production deployment, environment setup and maintainability support.",
  },
];

export default function AppDevBackendOfferings() {
  return (
    <section className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1280px] px-0 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[8px] bg-[#1c0b27] px-5 py-16 text-white sm:rounded-[16px] sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-white/40">
              Server-side systems
            </p>

            <h2 className="text-[34px] font-semibold leading-[1] tracking-[-0.08em] sm:text-[52px]">
              Backend Offerings
            </h2>

            <p className="mx-auto mt-4 max-w-[560px] text-[13px] leading-[1.8] text-white/50 sm:text-[15px]">
              We build backend systems that power reliable applications,
              secure workflows and long-term business scalability.
            </p>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
            {backendOfferings.map((item, index) => (
              <article key={item.title}>
                <div className="mb-5 grid h-9 w-9 place-items-center rounded-full bg-white text-[13px] font-semibold text-black">
                  {index + 1}
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