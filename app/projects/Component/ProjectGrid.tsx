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
  bg?: string;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
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
    objectFit: "contain",
  },

  {
    id: 2,
    title: "Star 154 Foundations",
    description:
      "A poultry farm focused on efficient livestock management, ensuring healthy bird production, quality output, and sustainable practices to meet growing food and supply demands.",
    image: "/starfoundationmock.png",
    href: "https://www.star154foundation.org",
    external: true,
    objectFit: "contain",
  },

  {
    id: 3,
    title: "Fast Response",
    description:
      "A fast-response platform to quickly book trusted professionals for electrical, plumbing, cleaning, carpentry, and other household services—ensuring reliable and hassle-free service.",
    image: "/fastresmock.png",
    href: "/projects/fastresponse",
    bg: "#060302",
    objectFit: "contain",
  },

  {
    id: 4,
    title: "SankalPSetu Foundation",
    description:
      "Empowering underserved communities through education, healthcare, and skill development—bridging hope with opportunity.",
    image: "/sankalsetumock.png",
    href: "https://sankalpsetufoundation.org/",
    external: true,
    objectFit: "contain",
  },

  {
    id: 5,
    title: "ERP Ecosystem",
    description:
      "The Vibhushanam ERP Ecosystem is a centralized business management platform designed to streamline and digitize the core operations of a jewellery business.",
    image: "/erpmock.png",
    href: "/projects/erp-system",
    bg: "linear-gradient(180deg, #4E4E4E 0%, #272222 100%)",
    objectFit: "cover",
  },

  {
    id: 6,
    title: "Quick Cargo",
    description:
      "Quick Cargo connects customers, agency owners, and drivers through one intuitive platform for truck bookings, route management, and real-time shipment tracking.",
    image: "/quickcargomock.png",
    href: "/projects/quick-cargo",
    bg: "linear-gradient(180deg, #4E4E4E 0%, #272222 100%)",
    objectFit: "contain",
  },
];

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
            const card = (
              <article
                className="
                  group
                  flex
                  h-full
                  min-w-0
                  w-full
                  flex-col
                "
              >
                {/* =================================================
                    IMAGE
                ================================================= */}

                <div
                  className="
                    relative
                    flex
                    w-full
                    items-center
                    justify-center
                    overflow-hidden

                    rounded-[24px]

                    h-[260px]

                    max-[768px]:h-[350px]
                    sm:rounded-[28px]

                  

                    lg:h-[330px]
                    lg:rounded-[32px]

                    xl:h-[362px]
                  "
                  style={{
                    background: project.bg ?? "#F7F7F7",
                  }}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} project mockup`}
                    fill
                    priority={project.id <= 2}
                   
                    className={`
                      transition-transform
                      duration-500
                      ease-out
                      

                      ${
                        project.objectFit === "contain"
                          ? "object-cover"
                          : "object-cover"
                      }
                    `}
                    style={{
                      objectPosition:
                        project.objectPosition ?? "center",
                    }}
                  />
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div
                  className="
                    flex
                    flex-1
                    flex-col

                    pt-[20px]

                    sm:pt-[22px]
                  "
                >
                  {/* TITLE */}

                  <h3
                    className="
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

                      text-[14px]
                      leading-[1.55]

                      sm:mt-[16px]
                      sm:text-[15px]

                      md:text-[16px]
                      md:leading-[1.65]
                    "
                  >
                    {project.description}
                  </p>

                  {/* CTA */}

                  <span
                    className="
                      mt-[20px]

                      inline-flex
                      w-fit
                      items-center
                      gap-2

                      font-geist
                      text-[14px]
                      font-medium

                      text-[#4F74FF]

                      transition-all
                      duration-300

                      sm:mt-[24px]
                      sm:text-[15px]

                      group-hover:gap-3
                    "
                  >
                    <span>
                      {project.external
                        ? "Visit Website"
                        : "View Project"}
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

            /* =====================================================
               EXTERNAL LINK
            ===================================================== */

            if (project.external) {
              return (
                <a
                  key={project.id}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title} website`}
                  className="
                    block
                    min-w-0
                    w-full
                    h-full
                  "
                >
                  {card}
                </a>
              );
            }

            /* =====================================================
               INTERNAL LINK
            ===================================================== */

            return (
              <Link
                key={project.id}
                href={project.href}
                aria-label={`View ${project.title} project`}
                className="
                  block
                  min-w-0
                  w-full
                  h-full
                "
              >
                {card}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

