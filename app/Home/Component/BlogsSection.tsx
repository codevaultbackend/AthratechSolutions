"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const blogsContent = [
    {
        slug: "glassmorphism-in-2026",
        author: "Parag Sharma",
        date: "16 March, 2026",
        title: "Glassmorphism in 2026: How to Use Frosted Glass Without Killing UX",
        cta1: "Motion Design",
        cta2: "Design",
        img: "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/Glassmorphism_DDWuIzHvq.jpg",
        featured: true,
    },
    {
        slug: "ai-future-of-coding",
        author: "Parag Sharma",
        date: "16 March, 2026",
        title: "How AI can change the future of Coding",
        cta1: "AI",
        cta2: "Technology",
        img: "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/Ai_JfGmO1aGA.jpg",
        featured: false,
    },
    {
        slug: "ai-marketers-2026",
        author: "Parag Sharma",
        date: "16 March, 2026",
        title: "AI will replace 70% of marketers in 2026… unless you do THIS",
        cta1: "Marketing",
        cta2: "AI",
        img: "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/Aireplace_MZOyTSSRr.jpg",
        featured: false,
    },
];

type Blog = (typeof blogsContent)[number];

function FeaturedBlogCard({ blog }: { blog: Blog }) {
    return (
        <article className="group relative flex h-full flex-col max-[768px]:!flex-col-reverse overflow-hidden rounded-[28px] border border-[#DADADA] bg-white p-[9px] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0px_8px_30px_rgba(0,0,0,0.04)]">
            <div className="flex flex-col p-5 sm:p-6 lg:p-7">
                <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] font-medium text-[#707070]">
                    <span
                        className="text-[#1A1A1A]"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                        {blog.author}
                    </span>

                    <span className="h-[4px] w-[4px] rounded-full bg-[#BEBEBE]" />

                    <span style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                        {blog.date}
                    </span>
                </div>

                <h3
                    className="max-w-[560px] text-[22px] font-medium leading-[1.08] tracking-[-0.04em] text-[#101010] sm:text-[26px] lg:text-[32px]"
                    style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                >
                    {blog.title}
                </h3>

                <div className="mt-6 flex items-center justify-between">
                    <div className="flex flex-wrap gap-2.5">
                        <span className="inline-flex h-[32px] items-center justify-center rounded-full border border-[#E0E0E0] bg-white px-4 text-[12px] font-medium text-[#161616] shadow-[0px_1px_2px_rgba(16,24,40,0.04)]">
                            {blog.cta1}
                        </span>

                        <span className="inline-flex h-[32px] items-center justify-center rounded-full border border-[#E0E0E0] bg-white px-4 text-[12px] font-medium text-[#161616] shadow-[0px_1px_2px_rgba(16,24,40,0.04)]">
                            {blog.cta2}
                        </span>
                    </div>

                    <Link
                        href={`/Blog/${blog.slug}`}
                        aria-label={`Open blog: ${blog.title}`}
                        className="inline-flex h-[32px] w-[64px] items-center justify-center rounded-full border border-[#DCDCDC] bg-[#F4F4F4] text-black transition-all duration-300 hover:scale-[1.04] hover:bg-[#EFEFEF]"
                    >
                        <FaArrowRightLong />
                    </Link>
                </div>
            </div>

            <div className="relative mt-auto min-h-[280px] w-full overflow-hidden rounded-[23px] sm:min-h-[340px] lg:min-h-[390px]">
                <Image
                    src={blog.img}
                    alt={blog.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
            </div>
        </article>
    );
}

function SideBlogCard({ blog }: { blog: Blog }) {
    return (
        <article className="group relative overflow-hidden rounded-[28px] border border-[#DADADA] bg-white p-[9px] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0px_8px_30px_rgba(0,0,0,0.04)]">
            <div className="grid h-full grid-cols-1 sm:grid-cols-[0.92fr_1.08fr]">
                <div className="relative min-h-[220px] overflow-hidden rounded-[23px] sm:min-h-full">
                    <Image
                        src={blog.img}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                </div>

                <div className="flex h-full flex-col justify-between p-5 sm:p-6">
                    <div>
                        <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] font-medium text-[#707070]">
                            <span
                                className="text-[#1A1A1A]"
                                style={{ fontFamily: "var(--font-inter), sans-serif" }}
                            >
                                {blog.author}
                            </span>

                            <span className="h-[4px] w-[4px] rounded-full bg-[#BEBEBE]" />

                            <span style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                                {blog.date}
                            </span>
                        </div>

                        <h3
                            className="max-w-[360px] text-[20px] font-medium leading-[1.1] tracking-[-0.04em] text-[#101010] sm:text-[22px] lg:text-[24px]"
                            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                        >
                            {blog.title}
                        </h3>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                        <div className="flex flex-wrap gap-2.5">
                            <span className="inline-flex h-[32px] items-center justify-center rounded-full border border-[#E0E0E0] bg-white px-4 text-[12px] font-medium text-[#161616] shadow-[0px_1px_2px_rgba(16,24,40,0.04)]">
                                {blog.cta1}
                            </span>

                            <span className="inline-flex h-[32px] items-center justify-center rounded-full border border-[#E0E0E0] bg-white px-4 text-[12px] font-medium text-[#161616] shadow-[0px_1px_2px_rgba(16,24,40,0.04)]">
                                {blog.cta2}
                            </span>
                        </div>

                        <Link
                            href={`/Blog/${blog.slug}`}
                            aria-label={`Open blog: ${blog.title}`}
                            className="inline-flex h-[32px] w-[64px] items-center justify-center rounded-full border border-[#DCDCDC] bg-[#F4F4F4] text-black transition-all duration-300 hover:scale-[1.04] hover:bg-[#EFEFEF]"
                        >
                            <FaArrowRightLong />
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default function BlogsSection() {
    const featuredBlog = blogsContent[0];
    const sideBlogs = blogsContent.slice(1);

    return (
        <section className="w-full bg-[#EFEFEF] px-4 py-20 sm:px-6 md:px-8 lg:px-10 lg:py-28">
            <div className="mx-auto max-w-[1280px]">
                <div className="mb-12 text-center sm:mb-14 lg:mb-16">
                    <p
                        className="mb-3 flex items-center justify-center gap-4 text-[18px] font-normal text-[#7A7A7A] sm:text-[22px] lg:text-[24px]"
                        style={{ fontFamily: "var(--font-calligraffitti), cursive" }}
                    >
                        <span className="inline-block h-[1px] w-[124px] bg-[linear-gradient(-90deg,#9C9C9C_0%,#3A3A3A_18%,#707070_32%,#A3A3A3_58%,#D9D9D9_80%,#F3F3F3_100%)]" />
                        Blogs
                        <span className="inline-block h-[1px] w-[124px] bg-[linear-gradient(-270deg,#9C9C9C_0%,#3A3A3A_18%,#707070_42%,#A3A3A3_68%,#D9D9D9_88%,#F3F3F3_100%)]" />

                    </p>

                    <h2
                        className="text-[28px] font-normal leading-[100%] tracking-[-0.04em] text-black sm:text-[36px] md:text-[42px] lg:text-[48px]"
                        style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                    >
                        Fresh insights & ideas
                        <br />
                        from the team.
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-5 rounded-[40px] border border-[#E6E6E6] bg-[#F9F9F9] p-[30px] lg:grid-cols-[.9fr_1fr] lg:gap-6 max-[768px]:p-[14px]">
                    <div className="min-h-full">
                        <FeaturedBlogCard blog={featuredBlog} />
                    </div>

                    <div className="grid grid-cols-1 gap-5 lg:gap-6">
                        {sideBlogs.map((blog, index) => (
                            <SideBlogCard key={index} blog={blog} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}