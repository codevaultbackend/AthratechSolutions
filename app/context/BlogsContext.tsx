"use client";

import React, { createContext, useContext } from "react";
import { blogsData, BlogItem } from "./blogs";

type BlogsContextType = {
  blogs: BlogItem[];
};

const BlogsContext = createContext<BlogsContextType | undefined>(undefined);

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