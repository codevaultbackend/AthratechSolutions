import Image from "next/image";

type GalleryCard = {
  src: string;
  alt: string;
  className?: string;
  bg: string;
  imageClassName?: string;
  objectPosition?: string;
};

const galleryCards: GalleryCard[] = [
  {
    src: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255507/website-images/aeyazhosu7aszfru4ztu.png",
    alt: "Sankalp Setu app icon preview",
    className: "lg:col-[1/4]",
    bg: "bg-[#003d3f]",
    imageClassName:
      "lg:scale-[0.9] max-lg:scale-[0.85] !left-auto !top-[-13px] !bottom-auto !right-[-16px] lg:!w-[86%] max-[768px]:!top-[-21px] max-[768px]:!right-[-75px]",
       objectPosition: "object-contain",
  },
  {
    src: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255509/website-images/q8ygrchvej1malvealvq.png",
    alt: "Sankalp Setu Foundation brand board",
    className: "lg:col-[4/9]",
    bg: "bg-[#20140f]",
    imageClassName: "scale-[1.02]",
    objectPosition: "object-cover",
  },
  {
    src: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255512/website-images/ccfjdharc7y7pqjtkglo.png",
    alt: "Sankalp Setu foundation outdoor banner",
    className: "lg:col-[9/12]",
    bg: "bg-[#d8ece8]",
    imageClassName: "scale-[1.03]",
    objectPosition: "object-cover",
  },
  {
    src: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255515/website-images/ieskjqmhu3fwzcfq3ea9.png",
    alt: "Children running outdoors",
    className: "lg:col-[1/6]",
    bg: "bg-[#9b5b43]",
    imageClassName: "scale-[1.03]",
    objectPosition: "object-cover",
  },
  {
    src: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255517/website-images/xwqawhbrouke4qg2uzoi.png",
    alt: "Children running together",
    className: "lg:col-[6/9]",
    bg: "bg-[#b98e66]",
    imageClassName: "scale-[1.03]",
    objectPosition: "object-cover",
  },
  {
    src: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255519/website-images/ebtrgtr4mfv5nl60plks.png",
    alt: "Sankalp Setu group photo",
    className: "lg:col-[9/12]",
    bg: "bg-[#d8ece8]",
    imageClassName: "scale-[1.03]",
    objectPosition: "object-cover",
  },
];

export default function BrandGallery() {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-[113px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-0">

        <div
          className="
          grid
          grid-cols-1
          gap-4

          sm:grid-cols-2
          md:gap-5

          lg:grid-cols-[repeat(11,minmax(0,1fr))]
          lg:gap-6
        "
        >
          {galleryCards.map((card, index) => (
            <article
              key={card.src}
              className={[
                "relative overflow-hidden rounded-[24px]",
                "sm:rounded-[28px]",
                "lg:rounded-[40px]",

                card.bg,

                "min-h-[220px]",
                "h-[240px]",
                "sm:h-[260px]",
                "md:h-[300px]",
                "lg:h-[245px]",

                "shadow-[0_10px_30px_rgba(0,0,0,0.08)]",
                "transition-all duration-300 hover:scale-[1.02]",

                card.className || "",

                index === 1 ? "sm:col-span-2 lg:col-[4/9]" : "",
                index === 3 ? "sm:col-span-2 lg:col-[1/6]" : "",
                index === 5 ? "sm:col-span-2 lg:col-[9/12]" : "",
              ].join(" ")}
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                priority={index < 3}
                sizes="
                  (max-width:640px) 100vw,
                  (max-width:1024px) 50vw,
                  33vw
                "
                className={[
                  "transition-transform duration-500",
                  "hover:scale-105",

                  card.objectPosition ?? "object-center",
                  card.imageClassName ?? "",
                ].join(" ")}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}