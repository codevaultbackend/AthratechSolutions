export default function DevMonitorShowcase() {
  return (
    <section className="bg-white py-10 sm:py-20">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-8">
        <div className="relative mx-auto h-[420px] max-w-[900px] sm:h-[560px]">
          <div className="absolute left-1/2 top-[20px] h-[270px] w-[88%] -translate-x-1/2 rotate-[-4deg] rounded-[8px] border-[8px] border-black bg-white shadow-[0_35px_90px_rgba(0,0,0,0.22)] sm:h-[390px]">
            <div className="flex h-full flex-col overflow-hidden">
              <div className="flex h-10 items-center gap-2 border-b border-black/10 bg-[#f8f8f8] px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
                <div className="ml-4 h-3 w-40 rounded-full bg-black/10" />
              </div>

              <div className="grid flex-1 gap-6 bg-[#fafafa] p-7 sm:grid-cols-2 sm:p-10">
                <div>
                  <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-black/40">
                    Learning platform
                  </p>

                  <h2 className="max-w-[300px] text-[30px] font-semibold leading-[0.96] tracking-[-0.08em] text-[#1854c9] sm:text-[48px]">
                    Where Students learn, Teacher trust
                  </h2>

                  <div className="mt-8 h-8 w-28 rounded-full bg-[#315ed8]" />
                </div>

                <div className="rounded-[18px] bg-[linear-gradient(135deg,#e7e7e7,#ffffff)] p-5">
                  <div className="h-full rounded-[14px] bg-white shadow-inner" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[45px] left-1/2 h-[120px] w-10 -translate-x-1/2 bg-[#d7d7d7]" />
          <div className="absolute bottom-[18px] left-1/2 h-8 w-[390px] -translate-x-1/2 rounded-full bg-[#dedede]" />
          <div className="absolute bottom-0 left-1/2 h-8 w-[530px] -translate-x-1/2 rounded-full bg-black/8 blur-xl" />
        </div>
      </div>
    </section>
  );
}