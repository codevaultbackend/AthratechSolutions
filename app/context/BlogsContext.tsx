"use client";

import { createContext, useContext } from "react";

export type BlogItem = {
  id: number;
  date: string;
  title: string;
  image: string;
  href: string;
};

type BlogsContextType = {
  blogs: BlogItem[];
};

const BlogsContext = createContext<BlogsContextType | undefined>(undefined);

const blogsData: BlogItem[] = [
  {
    id: 1,
    date: "February 16,2026",
    title: "Glassmorphism in 2026: How to Use Frosted Glass...",
    image: "/Glassmorphism.png",
    href: "/blogs/glassmorphism-in-2026",
  },
  {
    id: 2,
    date: "February 16,2026",
    title: "How AI can change the future of Coding",
    image: "/Ai.png",
    href: "/blogs/ai-future-of-coding",
  },
  {
    id: 3,
    date: "February 16,2026",
    title: "AI will replace 70% of marketers in 2026..unless....",
    image: "/Aireplace.png",
    href: "/blogs/ai-marketers-2026",
  },
  {
    id: 4,
    date: "February 16,2026",
    title: "Glassmorphism in 2026: How to Use Frosted Glass...",
    image: "/Seo.png",
    href: "/blogs/seo-glassmorphism",
  },
  {
    id: 5,
    date: "February 16,2026",
    title: "Glassmorphism in 2026: How to Use Frosted Glass...",
    image: "/Adds.png",
    href: "/blogs/ads-glassmorphism",
  },
  {
    id: 6,
    date: "February 16,2026",
    title: "Glassmorphism in 2026: How to Use Frosted Glass...",
    image: "/Uiux.png",
    href: "/blogs/uiux-glassmorphism",
  },
];

export function BlogsProvider({ children }: { children: React.ReactNode }) {
  return (
    <BlogsContext.Provider value={{ blogs: blogsData }}>
      {children}
    </BlogsContext.Provider>
  );
}

export function useBlogs() {
  const context = useContext(BlogsContext);

  if (!context) {
    throw new Error("useBlogs must be used inside BlogsProvider");
  }

  return context;
}