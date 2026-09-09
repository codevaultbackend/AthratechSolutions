type SectionLabelProps = {
  label: string;
};

export default function SectionLabel({ label }: SectionLabelProps) {
  return (
    <p
      className="mb-3 flex items-center justify-center gap-4 text-[18px] !font-semibold !text-[#626262] sm:text-[22px] lg:text-[24px]"
      style={{ fontFamily: "var(--font-calligraffitti), cursive" }}
    >
      {/* Left line: light → dark */}
      <span className="inline-block h-[1px] w-[124px] border border-solid [border-image:linear-gradient(90deg,#DFDFDF_0%,#9C9C9C_100%)_1]" />

      {label}

      {/* Right line: dark → light */}
      <span className="inline-block h-[1px] w-[124px] border border-solid [border-image:linear-gradient(90deg,#9C9C9C_0%,#DFDFDF_100%)_1]" />
    </p>
  );
}