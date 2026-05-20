export default function DevWhatWeDo() {
  return (
    <section className="bg-white py-10 sm:py-16">
      <div className="mx-auto grid max-w-[980px] gap-8 px-5 sm:grid-cols-[0.9fr_1.1fr] sm:px-6 lg:px-8">
        <div />

        <div>
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-black/35">
            What we do
          </p>

          <h2 className="max-w-[460px] text-[28px] font-semibold leading-[1.02] tracking-[-0.075em] text-black sm:text-[42px]">
            Websites that are beautiful, fast and scalable
          </h2>

          <p className="mt-5 max-w-[470px] text-[13px] leading-[1.8] tracking-[-0.02em] text-black/50 sm:text-[15px]">
            We develop frontend interfaces, backend systems, dashboards,
            landing pages and digital products with clean code, responsive UI
            and long-term maintainability.
          </p>
        </div>
      </div>
    </section>
  );
}