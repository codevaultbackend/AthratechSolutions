export default function MobileDarkShowcase() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-0 sm:px-6 lg:px-8">
        <div className="relative min-h-[430px] overflow-hidden rounded-[8px] bg-[#9a9a9a] px-5 py-16 sm:min-h-[620px] sm:rounded-[16px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.9),transparent_22%),linear-gradient(135deg,#d9d9d9,#767676)]" />

          <div className="absolute left-[-8%] top-[12%] h-[250px] w-[330px] rotate-[-20deg] rounded-[52px] border border-black/15 bg-white/25 backdrop-blur-sm sm:h-[390px] sm:w-[540px]" />

          <div className="absolute right-[-10%] bottom-[-6%] h-[250px] w-[330px] rotate-[-18deg] rounded-[52px] border border-black/15 bg-white/20 backdrop-blur-sm sm:h-[390px] sm:w-[540px]" />

          <div className="absolute left-1/2 top-1/2 h-[300px] w-[150px] -translate-x-1/2 -translate-y-1/2 rotate-[-17deg] rounded-[34px] border-[7px] border-black bg-[#080808] p-4 text-white shadow-[0_35px_90px_rgba(0,0,0,0.45)] sm:h-[420px] sm:w-[210px]">
            <div className="mx-auto mb-8 h-4 w-20 rounded-full bg-white/15" />

            <p className="text-[10px] uppercase tracking-[0.25em] text-white/45">
              Your idea
            </p>

            <h2 className="mt-5 text-[25px] font-semibold leading-[0.95] tracking-[-0.08em] sm:text-[38px]">
              Our Execution
            </h2>

            <div className="mt-8 h-8 w-28 rounded-full bg-[#d9ff57]" />

            <div className="mt-8 space-y-3">
              <div className="h-3 w-full rounded-full bg-white/12" />
              <div className="h-3 w-2/3 rounded-full bg-white/12" />
              <div className="h-3 w-4/5 rounded-full bg-white/12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}