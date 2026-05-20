"use client";

import React from "react";
import { BlogsProvider } from "./context/BlogsContext";
import { ServicesProvider } from "./context/ServicesContext";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ServicesProvider>
      <BlogsProvider>
        {children}
      </BlogsProvider>
    </ServicesProvider>
  );
}