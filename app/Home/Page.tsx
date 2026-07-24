"use client";
import HeroSection from "./Component/HeroSection";
import AutoSlidingCards from "./Component/AutoSlidingCards";

import VideoSection from "./Component/VideoSection";
import OurOfferings from "./Component/OurOfferings";
import Steps from "./Component/Steps";
import StackedProjectsSection from "./Component/StackedScrollSections";
import ContactCTA from "./Component/ContactCTA";
import TestimonialsSection from "./Component/TestimonialsSection";
import FAQSection from "./Component/FAQSection";
import ImpactSection from "./Component/ImpactSection";
import BlogsSection from "./Component/BlogsSection";
import WhyAthraTechSection from "./Component/WhyAthraTechSection";
import WhatWeExcelAtSection from "./Component/Whatweexcel";
import StepsSection from "./Component/StepsSection";
import Hero from "../Component/Hero/Hero";
import { useEffect } from "react";

export default function Home() {
  
  useEffect(() => {
  if (!window.location.hash) return;

  const id = window.location.hash.substring(1);

  const scrollToSection = () => {
    const element = document.getElementById(id);

    if (!element) return false;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Remove #testimonial or #faq from the URL
    window.history.replaceState(
      null,
      "",
      window.location.pathname
    );

    return true;
  };

  if (scrollToSection()) return;

  const interval = setInterval(() => {
    if (scrollToSection()) {
      clearInterval(interval);
    }
  }, 100);

  return () => clearInterval(interval);
}, []);
  return (
    <main className="min-h-screen ">
      <Hero />
      {/* <HeroSection /> */}
      <AutoSlidingCards />
      <VideoSection />
      <div className="px-[80px] max-[768px]:px-[16px]">

        {/* <WhyAthraTechSection /> */}
        <WhatWeExcelAtSection />
        <StepsSection />
        <StackedProjectsSection />
        <ContactCTA image="/contact.png" />
        <ImpactSection />
        <BlogsSection />
        <TestimonialsSection />
        <FAQSection />
      </div>

    </main>
  );
}