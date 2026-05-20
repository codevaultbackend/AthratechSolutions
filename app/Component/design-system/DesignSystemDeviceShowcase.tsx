import Image from "next/image";

export default function DesignSystemDeviceShowcase() {
  return (
    <section className="bg-white py-10 sm:py-20 !pb-0">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <h2 className="max-w-[420px] text-[34px] font-semibold leading-[0.98] tracking-[-0.08em] sm:text-[52px]">
          Top-tier design systems & UI kits
        </h2>

   <div className="">
    <Image
    src='https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255530/website-images/abbmjvhnp4pwmgeu5eup.png'
    alt="designsysui"
    height={881}
    width={1440}
    className="max-h-[881px] h-full max-w-[1280px] w-full object-cover " 
    priority />
   </div>
       
      </div>
    </section>
  );
}