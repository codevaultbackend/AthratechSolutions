import Image from "next/image";

export default function AppDevHero() {
  return (
    <section className="relative bg-white pt-[172px] max-[768px]:pt-[132px]">
      <div className="">'
        <Image 
        src='https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255476/website-images/twr3lfnaylmpygmagqz2.png'
        alt=""
        height={845}
        width={1053}
        className="max-h-[845px] h-full max-w-[1053px] w-full object-cover mx-auto rounded-[40px]"
        priority/>
      </div>
    </section>
  );
}