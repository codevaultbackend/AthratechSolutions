const steps = [
  {
    title: "Discovery",
    text: "We understand your product, pages, users, features and technical scope.",
  },
  {
    title: "Architecture",
    text: "We plan frontend structure, backend APIs, database and deployment flow.",
  },
  {
    title: "Development",
    text: "We build responsive UI, API integration, backend logic and validations.",
  },
  {
    title: "Launch",
    text: "We test, optimize, deploy and prepare the product for production use.",
  },
];

export default function DevProcess() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-[0.9fr_1.1fr]">
          <h2 className="text-[32px] font-semibold leading-[1] tracking-[-0.08em] sm:text-[48px]">
            Our Process
          </h2>

          <p className="max-w-[500px] text-[13px] leading-[1.8] text-black/50 sm:text-[15px]">
            Our development process keeps the product stable, scalable and easy
            to maintain from planning to final deployment.
          </p>
        </div>

        <div className="relative mt-16 grid gap-8 sm:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title}>
              <span className="mb-5 block h-px w-full bg-black/15" />

              <span className="mb-4 grid h-9 w-9 place-items-center rounded-full bg-black text-[12px] font-semibold text-white">
                {index + 1}
              </span>

              <h3 className="text-[18px] font-semibold tracking-[-0.05em]">
                {step.title}
              </h3>

              <p className="mt-3 text-[13px] leading-[1.7] text-black/48">
                {step.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-[1fr_0.7fr_1fr_0.7fr] gap-2">
          <div className="h-5 rounded-full bg-[repeating-linear-gradient(90deg,#d7d7d7_0,#d7d7d7_2px,transparent_2px,transparent_5px)]" />
          <div className="h-5 rounded-full bg-black" />
          <div className="h-5 rounded-full bg-[repeating-linear-gradient(90deg,#d7d7d7_0,#d7d7d7_2px,transparent_2px,transparent_5px)]" />
          <div className="h-5 rounded-full bg-black" />
        </div>
      </div>
    </section>
  );
}