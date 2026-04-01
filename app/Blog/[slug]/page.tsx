import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import LetsTeamUp from "../Component/LetsTeamUp";
import { blogsData } from "../../context/blogs";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;

  const blog = blogsData.find(
    (item) =>
      item.slug.trim().toLowerCase() ===
      decodeURIComponent(slug).trim().toLowerCase()
  );

  if (!blog) {
    notFound();
  }

  return (
    <main className="w-full bg-[#fff]">
      <section className="px-4 pb-0 pt-[40px] sm:px-6 md:pt-[60px]">
        <div className="mx-auto max-w-[900px]">
          <div className="mx-auto w-full max-w-[783px]">
            <p className="mb-4 text-[13px] font-medium text-[#606060] md:text-[14px]">
              {blog.date}
            </p>

            <h1 className="text-[34px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#2A2A2A] sm:text-[42px] md:text-[58px]">
              {blog.title}
            </h1>
          </div>

          <div className="mx-auto mt-8 w-full max-w-[783px] md:mt-10">
            <div className="relative overflow-hidden rounded-[28px] bg-[#D8DDE3] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <Image
                src={blog.heroImage || blog.image}
                alt={blog.title}
                width={1200}
                height={800}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-[90px] pt-[40px] sm:px-6 md:pb-[120px] md:pt-[56px]">
        <div className="mx-auto max-w-[900px]">
          <div className="mx-auto max-w-[783px]">
            {blog.content.map((section, index) => {
              if (section.type === "heading") {
                return (
                  <h2
                    key={`${section.type}-${index}`}
                    className={`font-semibold font-bricolage tracking-[-0.03em] text-[#202020] ${
                      index === 0
                        ? "mt-0 text-[56px] font-[600] leading-[100%] md:text-[30px]"
                        : "mt-10 text-[24px] leading-[100%] md:mt-12 md:text-[30px]"
                    }`}
                  >
                    {section.content}
                  </h2>
                );
              }

              if (section.type === "paragraph") {
                return (
                  <p
                    key={`${section.type}-${index}`}
                    className="mt-4 text-[14px] leading-[24px] text-[#5A5A5A] md:text-[15px] md:leading-[26px]"
                  >
                    {section.content}
                  </p>
                );
              }

              return (
                <div
                  key={`${section.type}-${index}`}
                  className="mt-10 overflow-hidden rounded-[28px] bg-[#D8DDE3] shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:mt-12"
                >
                  <Image
                    src={section.src}
                    alt={section.alt}
                    width={1200}
                    height={900}
                    className="h-auto w-full object-cover"
                  />
                </div>
              );
            })}

            <div className="mt-10">
              <Link
                href="/Blog"
                className="inline-flex h-[46px] items-center justify-center rounded-full bg-black px-6 text-[14px] font-medium text-white shadow-[0_8px_25px_rgba(0,0,0,0.18)] transition-all duration-300 hover:scale-[1.02]"
              >
                Back to Blogs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}