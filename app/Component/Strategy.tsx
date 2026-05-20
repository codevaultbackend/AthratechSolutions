import type { ReactNode } from "react";

type StrategyDataType = {
  heading: ReactNode;
  para: string;
};

type StrategyProps = {
  StrategyData: StrategyDataType;
};

export default function Strategy({ StrategyData }: StrategyProps) {
  return (
    <section
      id="work"
      className="bg-white my-[100px]"
    >
      <div className="mx-auto grid max-w-[1180px] gap-8 px-5 sm:grid-cols-[0.9fr_1.1fr] ">
        <div className="hidden sm:block" />

        <div>
          <h2 className="max-w-[440px] font-bricolage text-[32px] font-semibold leading-[1.05] tracking-[-0.07em] text-black sm:text-[38px]">
            {StrategyData.heading}
          </h2>

          <div className="mt-20 flex items-stretch justify-start gap-5 max-[768px]:mt-14 max-[768px]:gap-4">
            <span className="inline-block w-[3px] min-w-[3px] bg-[#6D6D6D] sm:mr-[52px]" />

            <p className="max-w-[519px] text-[20px] font-normal leading-[1.45] tracking-normal text-[#6D6D6D] max-[768px]:text-[18px] max-[768px]:leading-[1.5]">
              {StrategyData.para}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}