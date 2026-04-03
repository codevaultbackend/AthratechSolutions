"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/app/context/projects";

export default function StackedProjects() {
  return (
    <section className="bg-[#EFEFEF] pt-[120px] pb-[48px] sm:pt-[130px] sm:pb-[64px] md:pt-[140px] md:pb-[80px] lg:pt-[170px] lg:pb-[120px]">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-6 lg:px-6">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-14 lg:mb-16">
          <p
            className="mb-3 flex items-center justify-center gap-4 text-[18px] font-normal text-[#7A7A7A] sm:text-[22px] lg:text-[24px]"
            style={{ fontFamily: "var(--font-calligraffitti), cursive" }}
          >
            <span className="inline-block h-[1px] w-[124px] bg-[linear-gradient(-90deg,#9C9C9C_0%,#3A3A3A_18%,#707070_32%,#A3A3A3_58%,#D9D9D9_80%,#F3F3F3_100%)]" />
            Projects
            <span className="inline-block h-[1px] w-[124px] bg-[linear-gradient(-270deg,#9C9C9C_0%,#3A3A3A_18%,#707070_42%,#A3A3A3_68%,#D9D9D9_88%,#F3F3F3_100%)]" />
          </p>

          <h2
            className="text-[28px] font-normal leading-[100%] tracking-[-0.04em] text-black sm:text-[36px] md:text-[42px] lg:text-[48px]"
            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
          >
            Work Booming in the Market
          </h2>
        </div>

        {/* Sticky stacked cards */}
        <div className="relative space-y-6 pb-4 sm:space-y-10 sm:pb-6 md:space-y-16 md:pb-8">
          {projectsData.map((project, index) => {
            const scale = 1 - index * 0.02;
            const offsetCompensation = `${index * -10}px`;

            return (
              <div
                key={project.slug}
                className="sticky top-[90px] sm:top-[100px] md:top-[120px]"
                style={{
                  zIndex: 10 + index,
                }}
              >

                <div
                  className="overflow-hidden rounded-[24px] border border-[#EAEAEA] bg-white shadow-[0px_30px_80px_rgba(0,0,0,0.06)]"
                  style={{
                    transform: `scale(${scale})`,
                    transformOrigin: "top center",
                    marginTop: offsetCompensation,
                    marginBottom: index === projectsData.length - 1 ? "104px" : "0px",
                  }}
                >
                  <div
                    className={`grid min-h-[420px] grid-cols-1 items-stretch md:grid-cols-2 ${project.reverse
                      ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
                      : ""
                      }`}
                  >
                    {/* Image */}
                    <div className="relative h-full p-4 sm:p-5 md:p-6">
                      <div
                        className="relative h-[240px] overflow-hidden rounded-[18px] border border-[#EEEEEE] shadow-md sm:h-[300px] md:h-full md:min-h-[368px]"
                        style={{ background: project.imageBg }}
                      >
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_28%)]" />

                        <div
                          className="absolute bg-[#000]"
                          style={{
                            width: project.imageConfig.width,
                            height: project.imageConfig.height,
                            top: project.imageConfig.top ?? "50%",
                            left: project.imageConfig.left,
                            right: project.imageConfig.right,
                            bottom: project.imageConfig.bottom,
                            transform:
                              !project.imageConfig.top &&
                                !project.imageConfig.left &&
                                !project.imageConfig.right &&
                                !project.imageConfig.bottom
                                ? "translate(-50%, -50%)"
                                : undefined,
                          }}
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className={
                              project.imageConfig.objectFit === "cover"
                                ? "object-cover"
                                : "object-contain"
                            }
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={index < 2}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-between px-5 py-6 sm:px-7 sm:py-7 md:px-10 md:py-9">
                      <div>
                        <h3 className="mb-4 font-bricolage text-[40px] font-[500] leading-[100%] text-[#000000] line-clamp-1 md:text-[30px]">
                          {project.title}
                        </h3>

                        <p className="mb-5 max-w-[460px] text-[16px] font-[400] leading-[100%] text-[#797979] line-clamp-1 md:text-[15px]">
                          {project.description}
                        </p>

                        <div className="space-y-5">
                          {project.details.map((detail, detailIndex) => (
                            <div
                              key={`${project.slug}-${detailIndex}`}
                              className="pt-4"
                            >
                              <h4 className="text-[16px] font-[500] tracking-[0] text-[#0E0E0E]">
                                {detail.title}
                              </h4>
                              <p className="max-w-[460px] text-[16px] font-[400] leading-[100%] text-[#797979] line-clamp-1 md:text-[15px]">
                                {detail.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8">
                        <Link
                          href={`/Projects/${project.slug}`}
                          className="inline-flex h-[50px] items-center gap-1 rounded-[33px] border-[0.5px] border-[#CCCCCC] bg-[#F2F2F2] p-[9px] text-sm font-medium text-black transition-all hover:gap-4 max-w-[194px] w-full justify-between"
                        >
                          <span className="text-[16px] font-[400] leading-[100%] text-[#797979] text-center pl-[20px]">
                            View Project
                          </span>
                          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DDD] bg-[#121212] text-[#fff]">
                            <ArrowUpRight size={16} />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}