"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projectsData } from "@/app/context/projects";

type ProjectCard = {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
  external?: boolean;
  cardBg: string;
};

const projectCards: ProjectCard[] = [
  {
    id: 1,
    title: "Mark Day",
    description:
      "A smart attendance and leave management system enabling seamless check-ins, leave requests, and history tracking—built to simplify workforce management and boost organizational efficiency.",
    image: "/project1.png",
    href: "/Projects/markday",
    external: false,
    cardBg: "bg-[#09185F]",
  },
  {
    id: 3,
    title: "Fast Response",
    description:
      "A fast-response platform to quickly book trusted professionals for electrical, plumbing, cleaning, carpentry, and other household services—ensuring reliable and hassle-free service.",
    image: "/project3.png",
    href: "/Projects/fastresponse",
    external: false,
    cardBg: "bg-[#050505]",
  },
  {
    id: 4,
    title: "SankalPSetu Foundation",
    description:
      "Empowering underserved communities through education, healthcare, and skill development—bridging hope with opportunity.",
    image: "/SankalpSetu.png",
    href: "https://www.sankalpsetufoundation.org/",
    external: true,
    cardBg: "bg-[#ECEAEA]",
  },
];

export default function ProjectGrid() {
  return (
    <main className="w-full bg-[#FDFDFD] text-[#111111]">
      <section className="mx-auto w-full max-w-[1728px] px-4 pb-[110px] sm:px-6 lg:px-8 xl:px-12 xl:pb-[140px]">
        <div className="grid grid-cols-1 gap-x-[58px] gap-y-[54px] sm:grid-cols-2 lg:grid-cols-3 xl:gap-y-[68px]">
          {projectCards.map((item) => {
            const cardContent = (
              <article className="w-full">
                <div
                  className={`relative h-[250px] w-full overflow-hidden rounded-[28px] ${item.cardBg} sm:h-[280px] lg:h-[320px] xl:h-[392px]`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="pt-[18px]">
                  <h3 className="font-inter text-[26px] font-[500] leading-[1.02] tracking-[-0.05em] text-[#181818] sm:text-[30px] xl:text-[32px]">
                    {item.title}
                  </h3>

                  <p className="mt-[8px] max-w-[96%] font-inter text-[13px] font-[400] leading-[1.28] tracking-[-0.01em] text-[#717171] sm:text-[14px] xl:text-[15px]">
                    {item.description}
                  </p>

                  <div className="mt-[14px] inline-flex items-center gap-[7px] text-[14px] font-[500] text-[#4F74FF]">
                    <span>{item.external? "View site" : "View Project"}</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </article>
            );

            if (item.external) {
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <Link key={item.id} href={item.href} className="group block">
                {cardContent}
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}