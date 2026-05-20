const createItems = [
  "Thoughtful brand logo that carries meaning",
  "Color palette systems and typography that set the tone",
  "Visual concepts designed for real-world use, not just presentation",
  "Brand guidelines that help teams maintain consistency everywhere",
  "Supporting assets that help you launch across digital and print platforms",
];

export default function BrandCreate() {
  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <h2 className="text-[32px] font-semibold leading-[1] tracking-[-0.08em] sm:text-[48px]">
          What we Create
        </h2>

        <div className="mt-8 border-t border-black/10">
          {createItems.map((item) => (
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
            Need a website design or rebrand? We can help.
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