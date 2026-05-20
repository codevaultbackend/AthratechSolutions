const logos = ["Humano", "Centene", "Amazon", "SKT", "McAfee"];

export default function AppDevLogoStrip() {
  return (
    <section aria-label="Trusted companies" className="bg-white">
      <div className="mx-auto grid max-w-[1120px] grid-cols-2 gap-y-8 px-5 py-11 sm:grid-cols-5 sm:px-6">
        {logos.map((logo) => (
          <div
            key={logo}
            className="flex items-center justify-center text-[12px] font-semibold tracking-[-0.04em] text-black/35 grayscale"
          >
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}