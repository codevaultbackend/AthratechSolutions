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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F7FB]">
      <HeroSection />
      <AutoSlidingCards />
      <VideoSection />
      <OurOfferings />
      <Steps />
      <StackedProjectsSection />
      <ContactCTA />
      <ImpactSection />
      <BlogsSection />
      <TestimonialsSection />
      <FAQSection />
    </main>
  );
}