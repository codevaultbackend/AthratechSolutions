export default function AppDevPhoneShowcase() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-8">
        <div className="relative h-[430px] sm:h-[620px]">
          <div className="absolute left-[5%] top-[88px] h-[300px] w-[145px] rotate-[-18deg] rounded-[30px] border-[6px] border-black bg-white p-3 shadow-[0_32px_70px_rgba(0,0,0,0.18)] sm:h-[430px] sm:w-[205px] sm:rounded-[40px]">
            <div className="mx-auto mb-4 h-4 w-16 rounded-full bg-black" />
            <div className="space-y-3">
              <div className="h-14 rounded-xl bg-[#f7f7f7]" />
              <div className="h-20 rounded-xl bg-[#fff4eb]" />
              <div className="h-20 rounded-xl bg-black/5" />
            </div>
          </div>

          <div className="absolute left-1/2 top-[20px] z-20 h-[340px] w-[165px] -translate-x-1/2 rotate-[9deg] rounded-[34px] border-[7px] border-black bg-white p-3 shadow-[0_36px_90px_rgba(0,0,0,0.24)] sm:h-[500px] sm:w-[235px] sm:rounded-[44px]">
            <div className="mx-auto mb-5 h-4 w-20 rounded-full bg-black" />
            <div className="space-y-3">
              <div className="h-16 rounded-xl bg-[#f6f2ea]" />
              <div className="grid grid-cols-2 gap-2">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className="h-11 rounded-lg bg-black/7" />
                ))}
              </div>
              <div className="h-14 rounded-xl bg-[#dbc59c]" />
            </div>
          </div>

          <div className="absolute right-[6%] top-[92px] h-[310px] w-[150px] rotate-[17deg] rounded-[30px] border-[6px] border-black bg-white p-3 shadow-[0_32px_70px_rgba(0,0,0,0.2)] sm:h-[440px] sm:w-[210px] sm:rounded-[40px]">
            <div className="mx-auto mb-4 h-4 w-16 rounded-full bg-black" />
            <div className="space-y-3">
              <div className="h-20 rounded-xl bg-[#f6ead6]" />
              <div className="h-12 rounded-xl bg-[#e4c99a]" />
              <div className="h-12 rounded-xl bg-black/6" />
              <div className="h-20 rounded-xl bg-[#f8f1e2]" />
            </div>
          </div>

          <div className="absolute bottom-3 left-1/2 h-16 w-[80%] -translate-x-1/2 rounded-full bg-black/10 blur-2xl" />
        </div>
      </div>
    </section>
  );
}