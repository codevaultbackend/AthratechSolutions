
"use client";

type HeroContentProps = {
  headingLevel?: "h1" | "h2";
};

export default function HeroContent({
  headingLevel = "h1",
}: HeroContentProps) {
  const headingClassName = `
    max-w-[960px]
    font-bricolage
    font-medium
    text-[clamp(48px,3vw,76px)]
    leading-[0.98]
    tracking-[-0.05em]
    text-[#878787]
  `;

  const headingContent = (
    <>   
      <span className="text-[#202020]">Digital </span>
      <span>Marketing &</span>

      <br />

      <span>SEO Agency </span>
      <span className="text-[#202020]">in Gurgaon</span>
    </>
  );

  return (
    <div className="flex w-full flex-col items-start">
      {headingLevel === "h1" ? (
        <h1 className={headingClassName}>{headingContent}</h1>
      ) : (
        <h2 className={headingClassName}>{headingContent}</h2>
      )}

      <div className="hidden h-12 xl:block 2xl:h-16" />
    </div>
  );
}
