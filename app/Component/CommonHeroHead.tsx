import Image from "next/image";
import type { ReactNode } from "react";

type CommonHeroHeaderProps = {
  headData: {
    title: ReactNode;
    para: string;
    buttonText?: string;
    buttonHref?: string;
    avatars?: string[];
  };
};

const defaultAvatars = [
  "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero2_eKVVHgfGm.jpg",
  "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero1_CpKdYK8kd.jpg",
  "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero_NaRzEsvqk.jpg",
  "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero2_eKVVHgfGm.jpg",
];

export default function CommonHeroHeader({ headData }: CommonHeroHeaderProps) {
  const avatars = headData.avatars?.length ? headData.avatars : defaultAvatars;

  return (
    <div className="mx-auto mt-[116px] max-w-[1180px] px-4 text-center sm:px-6 lg:px-8">
      <h1 className="mx-auto text-[40px] font-semibold leading-[0.96] tracking-[-0.08em] text-black sm:text-[56px] md:text-[72px] lg:text-[82px] font-bricolage">
        {headData.title}
      </h1>

      <p className="font-inter mx-auto mt-[30px] max-w-[733px] text-[13px] font-medium leading-[1.45] text-[#6D6D6D] sm:text-[16px] md:text-[18px] md:leading-[1.35]">
        {headData.para}
      </p>

      <a
        href={headData.buttonHref ?? "#contact"}
        className="mx-auto mb-[22px] mt-[52px] block w-full max-w-full rounded-full bg-[linear-gradient(175deg,#F5F5F5,#BDBDBD,#8F8F8F,#666666)] p-[6px] shadow-[0_0_40px_rgba(180,180,180,0.5)] sm:max-w-[217px]"
      >
        <div className="flex h-[52px] w-full items-center justify-center gap-3 rounded-full border-[0.5px] border-white bg-black px-3 py-1.5 shadow-inner sm:h-auto sm:gap-4 sm:px-4 sm:py-2">
          <h3 className="whitespace-nowrap text-[20px] font-medium tracking-tight text-white sm:text-[16px]">
            {headData.buttonText ?? "Contact Us"}
          </h3>

          <div className="flex shrink-0 -space-x-2.5 sm:-space-x-3">
            {avatars.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="relative h-[28px] w-[28px] overflow-hidden rounded-full sm:h-[22px] sm:w-[22px]"
              >
                <Image
                  src={src}
                  alt={`avatar-${i + 1}`}
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}