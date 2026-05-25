import type { Metadata } from "next";
import type { ReactNode } from "react";

import MobileHero from "../../../Component/mobile/MobileHero";
import Strategy from "../../../Component/Strategy";
import MarketingCTA from "@/app/Component/MarketingCTA";
import CommonHeroHeader from "@/app/Component/CommonHeroHead";
import VideoSection from "@/app/home/Component/VideoSection";
import Platforms from "@/app/Component/Platforms";
import Process from "@/app/Component/Process";
import Uiux from "@/app/Component/landing/Uiux";
import Execution from "@/app/Component/mobile/Execution";
import MobilePhoneShowcase from "@/app/Component/mobile/MobilePhoneShowcase";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Mobile Application Design | Athratech",
  description:
    "Pixel-perfect mobile application design, app UI/UX, responsive mobile interfaces, design systems, and scalable digital product experiences.",
  keywords: [
    "mobile application design",
    "app UI design",
    "mobile UX design",
    "app design agency",
    "mobile app interface",
    "UI UX design",
  ],
  openGraph: {
    title: "Mobile Application Design | Athratech",
    description:
      "Premium mobile app UI/UX design for scalable digital products.",
    type: "website",
  },
};

type HeadDataItem = {
  title: ReactNode;
  para: string;
  buttonText?: string;
  buttonHref?: string;
  avatars?: string[];
};

const headData: HeadDataItem = {
  title: "Mobile Application Design",
  para:
    "Designing applications isn’t just about how they look — it’s about how they work, feel, and guide users through every interaction.",
  buttonText: "Contact Us",
  buttonHref: "/contact",
};

const strategyData = {
  heading: (
    <>
      App UI/UX that{" "}
      <span className="text-[#999999]">Grows</span> your business
    </>
  ),
  para:
    "We design applications from the ground up, starting with understanding your users, product vision, and functionality requirements. From structuring flows to crafting final UI, every step is focused on clarity, usability, and performance. We ensure that your application not only looks modern but also solves real problems efficiently, keeping users engaged at every stage.",
};

const platformsData = {
  badge: "Digital systems",
  heading: "How We Make You Stand Out",
  description:
    "We design digital products with clear structure, business-focused flows and scalable interface systems that work across every important screen.",
  services: [
    {
      title: "User-Centered Interface",
      content:
        "Landing pages, company websites, portfolio pages and marketing websites designed with clear conversion flow, strong visual hierarchy and responsive structure.",
    },
    {
      title: "Scalable Design System",
      content:
        "Modern UI systems, scalable components, product flows, interaction patterns and responsive screens built for digital products.",
    },
    {
      title: "Responsive Experience",
      content:
        "Clean dashboards, role-based interfaces, analytics cards, tables, forms and workflow screens designed for business operations.",
    },
    {
      title: "Consistency Across Screens",
      content:
        "Consistent design systems, reusable layouts, typography and UI patterns that create seamless user experiences across all screens.",
    },
  ],
  cta: {
    text: "Need a website design or redesign? We can help!",
    buttonText: "Let’s Connect",
    href: "/contact-us",
    ariaLabel: "Contact Athratech",
  },
};

const landingProcessData = {
  title: "Our Process",
  description:
    "We follow a clear design process that keeps every project structured, focused and conversion-ready.",
  steps: [
    {
      title: "Research & Understanding",
      text:
        "We analyze your product, target audience, and goals to build a strong foundation.",
    },
    {
      title: "Wireframing & User Flow",
      text:
        "We map out the structure and journey of your application to ensure smooth navigation",
    },
    {
      title: "UI Design & Prototyping",
      text:
        "Modern interfaces and interactive prototypes that visualize your product before development.",
    },
    {
      title: "Feedback & Iteration",
      text:
        "Continuous improvements based on feedback to refine the experience.",
    },
  ],
};

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#101010]">
      {/* HERO */}
      <CommonHeroHeader headData={headData} />

      {/* MOBILE HERO */}
      <section className="w-full overflow-hidden">
        <MobileHero />
      </section>

      {/* VIDEO */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1440px] overflow-hidden rounded-[20px] sm:rounded-[28px] lg:rounded-[40px]">
          <VideoSection />
        </div>
      </section>


      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <Strategy StrategyData={strategyData} />
      </div>


      {/* PHONE SHOWCASE */}
      <section className="w-full overflow-hidden">
        <MobilePhoneShowcase />
      </section>

    
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <Platforms
            badge={platformsData.badge}
            heading={platformsData.heading}
            description={platformsData.description}
            services={platformsData.services}
            cta={platformsData.cta}
            defaultOpenIndex={0}
          />
        </div>

      {/* EXECUTION */}
      <section className="w-full overflow-hidden">
        <Execution />
      </section>

      {/* PROCESS */}
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <Process content={landingProcessData} />
        </div>

      {/* UI UX */}
      <section className="w-full overflow-hidden">
        <Uiux />
      </section>

      {/* CTA */}
      <section className="w-full px-4 pb-[70px] pt-[40px] sm:px-6 sm:pb-[90px] lg:px-8 lg:pb-[120px]">
        <div className="mx-auto w-full max-w-[1440px]">
          <MarketingCTA />
        </div>
      </section>
    </main>
  );
}