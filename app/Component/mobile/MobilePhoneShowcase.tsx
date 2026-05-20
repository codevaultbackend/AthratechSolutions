import Image from "next/image";

export default function MobilePhoneShowcase() {
  return (
    <section className="relative bg-white ">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8">
        <Image
          src="https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255577/website-images/g4zenqu0cq1cio48tprm.png"
          alt="Mobile application showcase"
          width={1440}
          height={982}
          priority
          className="h-auto w-full object-contain"
        />
      </div>
    </section>
  );
}