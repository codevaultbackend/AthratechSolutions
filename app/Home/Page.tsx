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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F7FB]">
      <HeroSection />
      <AutoSlidingCards />
      <VideoSection />
      <WhyAthraTechSection />
      <WhatWeExcelAtSection/>
      <StepsSection />
      <StackedProjectsSection />
      <ContactCTA />
      <ImpactSection />
      <BlogsSection />
      <TestimonialsSection />
      <FAQSection />
    </main>
  );
}