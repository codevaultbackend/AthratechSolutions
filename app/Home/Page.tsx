import Image from "next/image";
import TopNavigation from "../Component/topNavigation";
import HeroSection from "./Component/HeroSection";
import VideoSection from "./Component/VideoSection";
import OurOfferings from "./Component/OurOfferings";
import Steps from "./Component/Steps";
import Projects from "./Component/Projects";
import ContactCTA from "./Component/ContactCTA";
import FAQSection from "./Component/FAQSection";
import TestimonialsSection from "./Component/TestimonialsSection";

export default function Home() {
    return (
        <div className=" min-h-[100vh]">
           <HeroSection />
           <VideoSection />
           <OurOfferings />
           <Steps />
           <Projects />
           <ContactCTA />
           <TestimonialsSection />
           <FAQSection />
        </div>
    );
}
