const items = [
  "Scalable design system tailored to your brand",
  "Reusable UI components: buttons, forms, cards, states",
  "Design documentation for team alignment",
  "Developer-friendly assets for smooth implementation",
  "Typography, color, and spacing guidelines",
];

export default function DesignSystemWhatYouGet() {
  return (
    <section className="bg-white py-14 sm:py-22">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-8">
        <h2 className="text-[34px] font-semibold leading-[0.98] tracking-[-0.08em] sm:text-[52px]">
          What you get
        </h2>

        <div className="mt-10 border-t border-black/10">
          {items.map((item) => (
            <div
              key={item}
              className="border-b border-black/10 py-6 text-[15px] font-medium leading-[1.5] tracking-[-0.04em] text-black/72 sm:text-[20px]"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 rounded-[18px] bg-[#f7f7f7] px-5 py-4 shadow-[0_16px_50px_rgba(0,0,0,0.05)]">
          <p className="text-[13px] font-medium tracking-[-0.03em] text-black/70">
            Need a website design or UI redesign? We can help.
          </p>

          <a
            href="#contact"
            className="shrink-0 rounded-full bg-black px-4 py-2 text-[11px] font-semibold text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}