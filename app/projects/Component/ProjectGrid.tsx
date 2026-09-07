"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type ProjectCard = {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
  external?: boolean;
  imageClassName: string;
};

/* =========================================================
   PROJECT DATA
========================================================= */

const projectCards: ProjectCard[] = [
  {
    id: 1,
    title: "Mark Day",
    description:
      "A smart attendance and leave management system enabling seamless check-ins, leave requests, and history tracking—built to simplify workforce management and boost organizational efficiency.",
    image: "/markdaymock.png",
    href: "/projects/markday",
    imageClassName: "object-contain",
  },

  {
    id: 2,
    title: "Star 154 Foundations",
    description:
      "A poultry farm focused on efficient livestock management, ensuring healthy bird production, quality output, and sustainable practices to meet growing food and supply demands.",
    image: "/starfoundationmock.png",
    href: "https://www.star154foundation.org",
    external: true,
    imageClassName: "object-contain",
  },

  {
    id: 3,
    title: "Fast Response",
    description:
      "A fast-response platform to quickly book trusted professionals for electrical, plumbing, cleaning, carpentry, and other household services—ensuring reliable and hassle-free service.",
    image: "/fastresmock.png",
    href: "/projects/fastresponse",
    imageClassName: "object-contain bg-[#060302]",
  },

  {
    id: 4,
    title: "SankalPSetu Foundation",
    description:
      "Empowering underserved communities through education, healthcare, and skill development—bridging hope with opportunity.",
    image: "/sankalsetumock.png",
    href: "https://sankalpsetufoundation.org/",
    external: true,
    imageClassName: "object-contain",
  },

  {
    id: 5,
    title: "ERP Ecosystem",
    description:
      "The Vibhushanam ERP Ecosystem is a centralized business management platform designed to streamline and digitize the core operations of a jewellery business.",
    image: "/erpmock.png",
    href: "/projects/erp-system",
    imageClassName:
      "object-cover bg-[linear-gradient(180deg,_#4E4E4E_0%,_#272222_100%)]",
  },

  {
    id: 6,
    title: "Quick Cargo",
    description:
      "Quick Cargo connects customers, agency owners, and drivers through one intuitive platform for truck bookings, route management, and real-time shipment tracking.",
    image: "/quickcargomock.png",
    href: "/projects/quick-cargo",
    imageClassName:
      "object-contain bg-[linear-gradient(180deg,_#4E4E4E_0%,_#272222_100%)]",
  },

  {
    id: 7,
    title: "Inventory Management System",
    description:
      "Empowering underserved communities through education, healthcare, and skill development—bridging hope with opportunity.",
    image: "/inventory-management.png",
    href: "/projects/inventory-management",
    imageClassName:
      "object-cover bg-[linear-gradient(180deg,_#4E4E4E_0%,_#272222_100%)]",
  },

  {
    id: 8,
    title: "G. Harmannssons Travel Agency",
    description:
      "G. Harmannsson crafts unforgettable Icelandic journeys with curated tours and authentic local experiences.",
    image: "/G-Harmannssons.png",
    href: "#",
    imageClassName:
      "object-cover bg-[linear-gradient(180deg,_#4E4E4E_0%,_#272222_100%)]",
  },
];

/* =========================================================
   PROJECT CARD CONTENT
========================================================= */

function ProjectCardContent({
  project,
}: {
  project: ProjectCard;
}) {
  return (
    <article
      className="
        group
        flex
        h-full
        min-h-0
        w-full
        min-w-0
        flex-col
      "
    >
      {/* =================================================
          IMAGE
      ================================================= */}

      <div
        className="
          relative
          isolate
          flex
          w-full
          shrink-0
          items-center
          justify-center
          overflow-hidden
          rounded-[32px]

          /* Mobile: constant image container height */
          h-[300px]

          /* Tablet */
          md:h-[320px]

          /* Desktop: existing sizes preserved */
          lg:h-[330px]
          xl:h-[362px]
        "
      >
        <Image
          src={project.image}
          alt={`${project.title} project mockup`}
          fill
          sizes="
            (max-width: 767px) 100vw,
            (max-width: 1023px) 50vw,
            33vw
          "
          priority={project.id <= 2}
          className={`
            block
            h-full
            w-full
            max-w-none
            rounded-[32px]

            transition-transform
            duration-500
            ease-out

            group-hover:scale-[1.02]

            ${project.imageClassName}
          `}
        />
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div
        className="
          flex
          min-h-0
          flex-1
          flex-col

          pt-[20px]
          sm:pt-[22px]
        "
      >
        {/* TITLE */}

        <h3
          className="
            shrink-0

            font-bricolage
            font-medium
            text-[#171717]

            text-[24px]
            leading-[1.05]
            tracking-[-0.04em]

            sm:text-[26px]
            md:text-[30px]
            xl:text-[34px]
          "
        >
          {project.title}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            mt-[14px]
            max-w-[500px]

            font-inter
            text-[#6D6D6D]

            text-[16px]
            font-normal
            leading-[1.2]

            sm:text-[16px]
            lg:text-[16px]
          "
        >
          {project.description}
        </p>

        {/* CTA */}

        <span
          className="
            mt-auto
            inline-flex
            w-fit
            shrink-0
            items-center
            gap-2

            pt-[20px]

            font-geist
            text-[14px]
            font-medium
            text-[#4F74FF]

            transition-all
            duration-300

            sm:pt-[24px]
            sm:text-[15px]

            group-hover:gap-3
          "
        >
          <span>
            {project.external ? "Visit Website" : "View Project"}
          </span>

          <ArrowRight
            size={18}
            strokeWidth={2}
            className="
              shrink-0
              transition-transform
              duration-300
              ease-out
              group-hover:translate-x-0.5
            "
          />
        </span>
      </div>
    </article>
  );
}

/* =========================================================
   PROJECT GRID
========================================================= */

export default function ProjectGrid() {
  return (
    <section
      aria-label="Our projects"
      className="
        w-full
        overflow-hidden
        bg-white
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1728px]

          px-5
          sm:px-8
          md:px-10
          lg:px-[82px]
          xl:px-[82px]

          pb-[80px]
          sm:pb-[100px]
          md:pb-[120px]
        "
      >
        <div
          className="
            grid
            w-full
            items-stretch

            grid-cols-1

            gap-x-6
            gap-y-12

            sm:grid-cols-2
            sm:gap-x-8
            sm:gap-y-14

            lg:grid-cols-3
            lg:gap-x-10
            lg:gap-y-16

            xl:gap-x-[64px]
            xl:gap-y-[75px]
          "
        >
          {projectCards.map((project) => {
            const cardContent = (
              <ProjectCardContent project={project} />
            );

            /* EXTERNAL PROJECT */

            if (project.external) {
              return (
                <a
                  key={project.id}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title} website`}
                  className="
                    flex
                    h-full
                    min-h-0
                    w-full
                    min-w-0
                    flex-col
                    self-stretch
                  "
                >
                  {cardContent}
                </a>
              );
            }

            /* INTERNAL PROJECT */

            return (
              <Link
                key={project.id}
                href={project.href}
                aria-label={`View ${project.title} project`}
                className="
                  flex
                  h-full
                  min-h-0
                  w-full
                  min-w-0
                  flex-col
                  self-stretch
                "
              >
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}