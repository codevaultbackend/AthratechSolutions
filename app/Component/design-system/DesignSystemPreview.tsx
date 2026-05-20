import Image from "next/image";

const colorBlocks = ["#6C4DFF", "#D7CCFF", "#F3F0FF", "#111111", "#F6F6F6"];
const avatars = ["A", "B", "C", "D"];

export default function DesignSystemPreview() {
  return (
    <section className="bg-white max-[768px]:py-16">
      <Image
      src='https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255524/website-images/lq5z9yvhra24aolb69wh.png'
      alt="designAccordian"
      height={854}
      width={1440}
      className="max-w-[1440px] mx-auto w-full object-cover"
      priority />
    </section>
  );
}