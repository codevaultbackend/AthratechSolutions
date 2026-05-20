const steps = [
  {
    title: "Discovery",
    text: "We understand your business, audience and positioning.",
  },
  {
    title: "Direction",
    text: "We define logo style, visual mood and design language.",
  },
  {
    title: "Identity",
    text: "We build logo, colors, type and brand assets.",
  },
  {
    title: "Guidelines",
    text: "We prepare a consistent system for long-term usage.",
  },
];

export default function BrandProcess() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-0 sm:px-6 lg:px-8">
        <div className="relative min-h-[560px] overflow-hidden rounded-[4px] bg-[#eee8e4] px-5 py-14 sm:rounded-[14px] sm:px-10 lg:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(85,25,65,0.35),transparent_30%),radial-gradient(circle_at_78%_14%,rgba(255,255,255,0.9),transparent_28%),linear-gradient(135deg,#764967,#f6f1ed)]" />

          <div className="relative grid min-h-[430px] gap-10 sm:grid-cols-2">
            <div className="self-end">
              <div className="max-w-[330px] rounded-[18px] bg-[#6f3e62] p-6 text-white shadow-[0_28px_60px_rgba(0,0,0,0.24)]">
                <p className="text-[42px] font-light italic leading-none tracking-[-0.08em]">
                  A
                </p>
                <p className="mt-6 text-[12px] uppercase tracking-[0.28em] text-white/70">
                  Arden Vista
                </p>
              </div>
            </div>

            <div className="self-center">
              <div className="max-w-[440px] rounded-[20px] bg-white/88 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.12)] backdrop-blur">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-black/40">
                  Identity kit
                </p>

                <h2 className="text-[34px] font-semibold leading-[1] tracking-[-0.08em] sm:text-[48px]">
                  Brand system ready for launch
                </h2>

                <p className="mt-5 text-[13px] leading-[1.8] text-black/50 sm:text-[15px]">
                  We create refined identity assets that work across packaging,
                  stationery, social media and websites.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-0 sm:py-24">
          <div className="grid gap-8 sm:grid-cols-[0.9fr_1.1fr]">
            <h2 className="text-[32px] font-semibold leading-[1] tracking-[-0.08em] sm:text-[48px]">
              Our Process
            </h2>

            <p className="max-w-[480px] text-[13px] leading-[1.8] text-black/50 sm:text-[15px]">
              Our branding process keeps every decision intentional, from
              strategy to final export files.
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
      </div>
    </section>
  );
}