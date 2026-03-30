"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MedDope",
    description:
      "A modern healthcare platform crafted to simplify appointment booking, doctor discovery, and patient interaction with a clean mobile-first experience.",
    image: "/images/projects/meddope.png",
    bg: "bg-[#0D1B66]",
    imageFirst: true,
  },
  {
    id: 2,
    title: "SocialStartUp Foundation",
    description:
      "A professional foundation website with strong storytelling, service clarity, and a trustworthy interface built to help users understand the mission instantly.",
    image: "/images/projects/socialstartup.png",
    bg: "bg-[#F6F7FB]",
    imageFirst: false,
  },
  {
    id: 3,
    title: "Shagun Handicraft",
    description:
      "A handcrafted products showcase with elegant layouts, product storytelling, and a premium visual identity tailored for modern Indian ecommerce audiences.",
    image: "/images/projects/shagun.png",
    bg: "bg-[#F6F7FB]",
    imageFirst: true,
  },
  {
    id: 4,
    title: "Mami Power Solutions",
    description:
      "A bold and conversion-focused business website that presents services, trust signals, and contact flow in a sharp and structured format.",
    image: "/images/projects/mami.png",
    bg: "bg-[#6B46FF]",
    imageFirst: false,
  },
];

function ProjectCard({
  title,
  description,
  image,
  bg,
  imageFirst,
  index,
}: {
  title: string;
  description: string;
  image: string;
  bg: string;
  imageFirst: boolean;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group"
    >
      <div className="overflow-hidden rounded-[28px] border border-[#E7E7E7] bg-white shadow-[0_10px_35px_rgba(16,24,40,0.06)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_50px_rgba(16,24,40,0.10)]">
        <div
          className={`grid min-h-[280px] grid-cols-1 lg:min-h-[330px] lg:grid-cols-2 ${
            !imageFirst ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
          }`}
        >
          <div className="flex items-center p-4 sm:p-5 lg:p-6">
            <div
              className={`relative h-[220px] w-full overflow-hidden rounded-[22px] ${bg} sm:h-[260px] lg:h-full`}
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={index < 2}
              />
            </div>
          </div>

          <div className="flex items-center p-5 sm:p-7 lg:p-9">
            <div className="max-w-[460px]">
              <div className="mb-4 inline-flex rounded-full border border-[#E8E8E8] bg-[#FAFAFA] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[#666666]">
                Featured Project
              </div>

              <h3 className="text-[24px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#111111] sm:text-[30px] lg:text-[36px]">
                {title}
              </h3>

              <p className="mt-4 max-w-[46ch] text-[14px] leading-[1.8] text-[#5F5F5F] sm:text-[15px]">
                {description}
              </p>

              <button className="mt-7 inline-flex h-11 items-center gap-2 rounded-full bg-[#111111] px-5 text-[13px] font-medium text-white transition-all duration-300 hover:bg-[#222222]">
                View Project
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  return (
    <section className="w-full bg-[#ECECEC] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-12 max-w-[760px] text-center sm:mb-16"
        >
          <span className="inline-flex rounded-full border border-[#DCDCDC] bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#555555]">
            Our Projects
          </span>

          <h2 className="mt-5 text-[30px] font-semibold leading-[1.02] tracking-[-0.05em] text-[#111111] sm:text-[44px] lg:text-[58px]">
            Work Blooming in the Market
          </h2>

          <p className="mx-auto mt-4 max-w-[620px] text-[14px] leading-[1.8] text-[#666666] sm:text-[15px]">
            We craft digital products that look premium, feel smooth, and help
            brands stand out with clarity, trust, and strong visual impact.
          </p>
        </motion.div>

        <div className="space-y-5 sm:space-y-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              bg={project.bg}
              imageFirst={project.imageFirst}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}