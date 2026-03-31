"use client";

import Image from "next/image";

type GalleryItem = {
  id: number;
  title: string;
  image: string;
};

const topRow: GalleryItem[] = [
  { id: 1, title: "Attendance App", image: "/Project7.png" },
  { id: 2, title: "Chugen", image: "/Project5.png" },
  { id: 3, title: "Fastresponce", image: "/Project2.png" },
  { id: 4, title: "Attendance", image: "/Project3.png" },
  { id: 5, title: "Presentation", image: "/Project6.jpeg" },
  { id: 6, title: "Collaboration", image: "/Project1.png" },
];

const bottomRow: GalleryItem[] = [
  { id: 1, title: "Attendance App", image: "/Project7.png" },
  { id: 2, title: "Chugen", image: "/Project5.png" },
  { id: 3, title: "Fastresponce", image: "/Project2.png" },
  { id: 4, title: "Attendance", image: "/Project3.png" },
  { id: 5, title: "Presentation", image: "/Project6.jpeg" },
  { id: 6, title: "Collaboration", image: "/Project1.png" },
];

function GalleryCard({
  item,
  rowType,
}: {
  item: GalleryItem;
  rowType: "top" | "bottom";
}) {
  const outerRoundedClass =
    rowType === "top"
      ? "rounded-bl-[20px] rounded-br-[20px]"
      : "rounded-tl-[20px] rounded-tr-[20px]";

  const innerRoundedClass =
    rowType === "top"
      ? "rounded-bl-[20px] rounded-br-[20px]"
      : "rounded-tl-[20px] rounded-tr-[20px]";

  return (
    <article
      className={` autoslide
        relative shrink-0 overflow-hidden
        ${outerRoundedClass}
        bg-[#EEECEA]
        shadow-[1px_2px_4px_2px_#7573730F]
        w-[124px] h-[124px]
        sm:w-[150px] sm:h-[150px]
        md:w-[180px] md:h-[180px]
        lg:w-[230px] lg:h-[230px]
        xl:w-[260px] xl:h-[260px]
        !p-[20px]
      `}
    >
      <div
        className={`absolute inset-[13px] overflow-hidden  !rounded-[20px]`}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 124px, (max-width: 768px) 150px, (max-width: 1024px) 180px, (max-width: 1280px) 230px, 260px"
          className="object-cover !rounded-[20px]"
          priority={false}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-black/4 to-transparent" />

       
      </div>
    </article>
  );
}

function SlidingRow({
  items,
  direction = "left",
  rowType,
}: {
  items: GalleryItem[];
  direction?: "left" | "right";
  rowType: "top" | "bottom";
}) {
  const duplicated = [...items, ...items];

  return (
    <div className="gallery-row relative overflow-hidden pb-[2px]">
      <div
        className={`gallery-track ${
          direction === "left" ? "gallery-move-right" : "gallery-move-left"
        }`}
      >
        {duplicated.map((item, index) => (
          <GalleryCard
            key={`${item.id}-${index}`}
            item={item}
            rowType={rowType}
          />
        ))}
      </div>
    </div>
  );
}

export default function HeroGalleryCarousel() {
  return (
    <section className="relative w-full overflow-hidden ">
      <div className="border-[#FFFFFF] border-t-2 h-[32px] bg-[#EEECEA] shadow-[inset_-2px_6px_5px_-3px_gray] border-b-[3px] border-[#fff]" />

      <div className="mx-auto w-full max-w-[1600px] border-[#EEECEA] ">
        <div className="rounded-[10px] bg-white">
          <div className="space-y-3 sm:space-y-4 md:space-y-5">
            <SlidingRow items={topRow} direction="right" rowType="top" />
            <SlidingRow items={bottomRow} direction="left" rowType="bottom" />
          </div>
        </div>
      </div>

      <div className="border-[#FFFFFF] border-t-2 h-[32px] bg-[#EEECEA] shadow-[inset_-2px_6px_5px_-3px_gray] border-b-[3px] border-[#fff]" />

      <style jsx>{`
        .gallery-row {
          width: 100%;
        }

        .gallery-track {
          display: flex;
          align-items: center;
          gap: 12px;
          width: max-content;
          will-change: transform;
        }

        .gallery-move-left {
          animation: marqueeLeft 28s linear infinite;
        }

        .gallery-move-right {
          animation: marqueeRight 28s linear infinite;
        }

        @keyframes marqueeLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(calc(-50% - 6px), 0, 0);
          }
        }

        @keyframes marqueeRight {
          0% {
            transform: translate3d(calc(-50% - 6px), 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        @media (min-width: 640px) {
          .gallery-track {
            gap: 14px;
          }

          @keyframes marqueeLeft {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(calc(-50% - 7px), 0, 0);
            }
          }

          @keyframes marqueeRight {
            0% {
              transform: translate3d(calc(-50% - 7px), 0, 0);
            }
            100% {
              transform: translate3d(0, 0, 0);
            }
          }
        }

        @media (min-width: 768px) {
          .gallery-track {
            gap: 16px;
          }

          @keyframes marqueeLeft {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(calc(-50% - 8px), 0, 0);
            }
          }

          @keyframes marqueeRight {
            0% {
              transform: translate3d(calc(-50% - 8px), 0, 0);
            }
            100% {
              transform: translate3d(0, 0, 0);
            }
          }
        }

        @media (min-width: 1024px) {
          .gallery-track {
            gap: 18px;
          }

          @keyframes marqueeLeft {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(calc(-50% - 9px), 0, 0);
            }
          }

          @keyframes marqueeRight {
            0% {
              transform: translate3d(calc(-50% - 9px), 0, 0);
            }
            100% {
              transform: translate3d(0, 0, 0);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gallery-move-left,
          .gallery-move-right {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}