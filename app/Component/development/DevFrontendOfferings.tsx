const offerings = [
  {
    title: "Responsive Website Development",
    text: "We build fast, clean and responsive websites that work smoothly across desktop, tablet and mobile screens.",
  },
  {
    title: "Frontend Architecture",
    text: "Scalable component structure, reusable UI blocks and maintainable code for long-term product growth.",
  },
  {
    title: "Interactive UI Development",
    text: "Smooth interactions, animations and modern interface behavior built with performance in mind.",
  },
  {
    title: "Next.js Development",
    text: "SEO-friendly, production-ready Next.js websites with clean routing, optimized rendering and fast loading.",
  },
  {
    title: "API Integration",
    text: "Frontend integration with backend APIs, forms, dashboards, authentication and dynamic business data.",
  },
  {
    title: "Performance Optimization",
    text: "Image optimization, lazy loading, clean bundles and speed improvements for better user experience.",
  },
];

export default function DevFrontendOfferings() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-[1380px] px-4">

        <div className="overflow-hidden rounded-[36px] bg-[#02031d] px-8 py-16 text-white lg:px-[72px] lg:py-[84px]">

          {/* heading */}
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="text-[38px] font-semibold tracking-[-0.05em] lg:text-[62px]">
              Frontend Offerings
            </h2>

            <p className="mx-auto mt-5 max-w-[640px] text-[14px] leading-7 text-white/55">
              We build fast, responsive and scalable frontend experiences
              that look clean, perform well and support real business growth.
            </p>
          </div>

          <div className="relative mt-20">

            {/* DESKTOP GRID LINES */}

            {/* left vertical */}
            <div className="absolute left-[33.333%] top-0 hidden h-full w-px bg-white/10 lg:block" />

            {/* right vertical */}
            <div className="absolute left-[66.666%] top-0 hidden h-full w-px bg-white/10 lg:block" />

            {/* only one horizontal separator */}
            <div className="absolute left-0 top-1/2 hidden w-full lg:block">
              <div className="h-px -translate-y-6 bg-white/10" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

              {offerings.map((item) => (
                <div
                  key={item.title}
                  className="min-h-[190px] px-9 py-12 lg:px-10 lg:py-14"
                >

                  <div className="mb-8 flex h-5 w-5 items-center justify-center rounded-full border border-white/70 text-[10px]">
                    +
                  </div>

                  <h3 className="max-w-[260px] text-[20px] font-medium leading-[1.1] tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-[290px] text-[14px] leading-7 text-white/55">
                    {item.text}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}