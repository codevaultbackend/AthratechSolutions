import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full bg-[#FDFDFD] text-[#111111]">
      <section className="mx-auto flex min-h-screen w-full max-w-[1728px] flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[760px]">
          <p className="font-inter text-[18px] font-[500] tracking-[-0.03em] text-[#4F74FF] sm:text-[20px]">
            404 Error
          </p>

          <h1 className="mt-3 font-bricolage text-[52px] font-[600] leading-[0.92] tracking-[-0.075em] text-black sm:text-[72px] md:text-[92px] lg:text-[110px]">
            Page Not
            <br />
            Found
          </h1>

          <p className="mx-auto mt-6 max-w-[620px] font-inter text-[15px] font-[400] leading-[1.6] tracking-[-0.02em] text-[#6F6F6F] sm:text-[17px] md:text-[18px]">
            Sorry, the page you are looking for does not exist, has been moved,
            or the link you followed is incorrect.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-black px-8 py-3 font-inter text-[15px] font-[500] text-white transition-all duration-300 hover:opacity-90"
            >
              Back to Home
            </Link>

            <Link
              href="/ContactForm"
              className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-[#D9D9D9] bg-white px-8 py-3 font-inter text-[15px] font-[500] text-[#111111] transition-all duration-300 hover:bg-[#F7F7F7]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}