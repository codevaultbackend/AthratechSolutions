"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ProjectCard = {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
  external?: boolean;

  bg: string;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
};

const projectCards: ProjectCard[] = [
  {
    id: 1,
    title: "ERP System",
    description:
      "A complete enterprise resource planning platform that streamlines procurement, inventory, finance, sales, HR, and operations into one centralized ecosystem for growing businesses.",
    image:
      "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255491/website-images/v4devfvpwskmbgvrhcep.png",
    href: "/projects/erp-system",
    bg: "bg-[#0B0B0B]",
    objectFit: "cover",
    objectPosition: "center",
  },

  {
    id: 2,
    title: "Inventory Management",
    description:
      "A role-based inventory management platform with procurement, stock tracking, warehouse management, billing, reporting, and complete transaction visibility.",
    image:
      "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255491/website-images/v4devfvpwskmbgvrhcep.png",
    href: "/projects/inventory-management",
    bg: "bg-[#EFEFEF]",
    objectFit: "contain",
    objectPosition: "center",
  },

  {
    id: 3,
    title: "Mark Day",
    description:
      "A smart attendance and leave management system enabling seamless check-ins, leave requests, approvals, and employee history tracking.",
    image:
      "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255491/website-images/v4devfvpwskmbgvrhcep.png",
    href: "/projects/markday",
    bg: "bg-[#020B39]",
    objectFit: "cover",
    objectPosition: "center",
  },

  {
    id: 4,
    title: "Fast Response",
    description:
      "Book trusted electricians, plumbers, cleaners, carpenters, and more through a modern service platform with instant response and real-time scheduling.",
    image:
      "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255545/website-images/huwkjxzwoghicynh3evn.png",
    href: "/projects/fastresponse",
    bg: "bg-[#020B39]",
    objectFit: "cover",
    objectPosition: "center",
  },

  {
    id: 5,
    title: "SankalpSetu Foundation",
    description:
      "Empowering underserved communities through education, healthcare, and sustainable development initiatives with an accessible digital experience.",
    image:
      "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255599/website-images/f6rytrr2w2pua0cu0hza.png",
    href: "https://www.sankalpsetufoundation.org/",
    external: true,
    bg: "bg-[#F2F2F2]",
    objectFit: "contain",
    objectPosition: "center",
  },

  {
    id: 6,
    title: "Chugen",
    description:
      "A clean corporate website crafted to present company services, achievements, and digital identity with a modern visual experience.",
    image:
      "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255491/website-images/v4devfvpwskmbgvrhcep.png",
    href: "/projects/chugen",
    bg: "bg-[#F7F7F7]",
    objectFit: "contain",
    objectPosition: "center",
  },
];

export default function ProjectGrid() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1728px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-12
          pb-24
          md:pb-32
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-10
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-x-10
            lg:gap-y-16
          "
        >
          {projectCards.map((project) => {
            const card = (
              <article
                className="
        group
        flex
        h-full
        flex-col
      "
              >
                {/* ================= Image Card ================= */}

                <div
                  className={`
          relative
          overflow-hidden
          rounded-[28px]
          ${project.bg}

          h-[260px]
          sm:h-[300px]
          lg:h-[360px]
          xl:h-[392px]

          transition-all
          duration-500
        `}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={project.id <= 2}
                    sizes="
            (max-width:768px) 100vw,
            (max-width:1200px) 50vw,
            33vw
          "
                    className={`
            transition-transform
            duration-700
            group-hover:scale-[1.04]

            ${project.objectFit === "contain"
                        ? "object-contain p-8 md:p-10"
                        : "object-cover"
                      }
          `}
                    style={{
                      objectPosition: project.objectPosition,
                    }}
                  />
                </div>

                {/* ================= Content ================= */}

                <div
                  className="
          mt-6
          flex
          flex-1
          flex-col
        "
                >
                  <h3
                    className="
            text-[#171717]
            text-[26px]
            md:text-[30px]
            xl:text-[34px]

            font-medium

            tracking-[-0.04em]
            leading-[1.05]
          "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
            mt-3
            flex-1

            text-[#6D6D6D]

            text-[15px]
            md:text-[16px]

            leading-7
          "
                  >
                    {project.description}
                  </p>

                  <div
                    className="
            mt-7

            inline-flex
            items-center
            gap-2

            text-[#4F74FF]
            font-medium

            transition-all
            duration-300

            group-hover:gap-3
          "
                  >
                    <span>
                      {project.external ? "Visit Website" : "View Project"}
                    </span>

                    <ArrowRight
                      size={18}
                      strokeWidth={2}
                    />
                  </div>
                </div>
              </article>
            );

            return project.external ? (
              <a
                key={project.id}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                {card}
              </a>
            ) : (
              <Link
                key={project.id}
                href={project.href}
                className="block h-full"
              >
                {card}
              </Link>
            );
          })}        </div>
      </div>
    </section>
  );
}