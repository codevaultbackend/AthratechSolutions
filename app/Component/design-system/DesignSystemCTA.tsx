import Link from "next/link";

export default function DesignSystemCTA() {
  return (
    <section className="bg-white py-24 text-center sm:py-36">
      <div className="mx-auto max-w-[760px] px-5">
        <div className="mx-auto mb-8 h-[180px] w-[180px] rounded-full bg-[#f4f4f4] blur-2xl" />

        <h2 className="-mt-24 text-[34px] font-semibold leading-[1] tracking-[-0.08em] sm:text-[56px]">
          Let&apos;s Build Something That Works
        </h2>

        <p className="mx-auto mt-5 max-w-[450px] text-[13px] leading-[1.8] text-black/50 sm:text-[15px]">
          From UI components to final product screens, we design scalable
          systems that help your product move faster.
        </p>

        <Link
          href="#contact"
          className="mt-7 inline-flex h-9 items-center rounded-full bg-black px-5 text-[11px] font-semibold text-white shadow-[0_16px_35px_rgba(0,0,0,0.18)]"
        >
          Get started
        </Link>
      </div>
    </section>
  );
}