"use client";

import Image from "next/image";
import Link from "next/link";
import { useBlogs } from "@/app/context/BlogsContext";

export default function BlogGrids() {
  const { blogs } = useBlogs();

  return (
    <section className="bg-[#fff] px-4 pb-[70px] pt-[56px] sm:px-6 sm:pb-[90px] sm:pt-[70px] md:px-8 md:pb-[110px] md:pt-[86px] lg:px-10 lg:pb-[140px] lg:pt-[110px] xl:px-[42px] xl:pb-[180px] xl:pt-[124px] 2xl:px-[48px]">
      <div className="mx-auto max-w-[780px] text-center">
        <h1 className="mb-[22px] font-bricolage text-[80px] font-[600] text-[#111111] leading-[0.95] tracking-[-0.06em] text-[#111111] min-[480px]:text-[44px] sm:mb-[28px] max-[768px]:text-[52px] md:text-[61px] lg:mb-[34px] lg:text-[72px] xl:mb-[40px] xl:text-[80px]">
          Our Blogs
        </h1>

        <p className="mx-auto max-w-[590px] pb-[34px] font-inter text-[16px] font-[500] leading-[1.45] tracking-[-0.01em] text-[#6D6D6D] min-[480px]:text-[14px] sm:pb-[42px] sm:text-[15px] md:pb-[48px] md:text-[16px] xl:pb-[52px] xl:text-[16px]">
          Not only do we focus on building delightful user experiences for real
          projects, but we also love to explore concepts and inspire the design
          community.
        </p>
      </div>

      <div className="mx-auto mt-[28px] max-w-[1320px] sm:mt-[40px] md:mt-[48px] lg:mt-[64px] xl:mt-[72px]">
        <div className="grid grid-cols-1 justify-items-center gap-x-[20px] gap-y-[28px] sm:grid-cols-2 sm:gap-x-[24px] sm:gap-y-[34px] lg:grid-cols-3 lg:gap-x-[28px] lg:gap-y-[40px] xl:gap-x-[38px] xl:gap-y-[54px]">
          {blogs.map((blog) => (
            <Link key={blog.id} href={blog.href} className="group block w-full">
              <article className="mx-auto w-full max-w-full sm:max-w-[362px]">
                <div className="relative h-[220px] w-full overflow-hidden rounded-[18px] bg-[#D9D9D9] min-[400px]:h-[240px] sm:h-[255px] sm:rounded-[22px] md:h-[270px] lg:h-[285px] xl:h-[324px] xl:rounded-[26px]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    priority={blog.id <= 3}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="py-[12px] sm:py-[14px]">
                  <p className="font-bricolage text-[11px] font-[400] leading-[1.3] tracking-[-0.01em] text-[#919191] min-[480px]:text-[12px] sm:text-[13px] xl:text-[16px]">
                    {blog.date}
                  </p>

                  <h2 className="mt-[6px] max-w-[98%] font-bricolage text-[20px] font-[500] leading-[1.08] tracking-[-0.05em] text-[#000000] min-[480px]:text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[32px]">
                    {blog.title}
                  </h2>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}