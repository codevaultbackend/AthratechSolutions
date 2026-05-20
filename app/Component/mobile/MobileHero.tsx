import Image from "next/image";

export default function MobileHero() {
  return (
    <section className="relative bg-white pt-[12px] sm:pt-[32px] mt-[100px] mb-[19px]">
      <div className="max-w-[1127px] mx-auto ">
        <Image 
        src="https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255584/website-images/lqcl3pmsdgpxsmlhacf0.png"
        alt="Mobile application design"
        width={1920}
        height={1080}
        className="h-auto w-full object-cover max-h-[780px] h-full object-cover"
        priority />
      </div>
    </section>
  );
}