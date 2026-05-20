import type { Metadata } from "next";
import type { ReactNode } from "react";

import Hero from "../../../Component/landing/Hero";
import Strategy from "../../../Component/Strategy";
import Showcase from "../../../Component/landing/Showcase";
import Platforms from "../../../Component/Platforms";
import Process from "../../../Component/Process";

import MarketingCTA from "@/app/Component/MarketingCTA";
import VideoSection from "@/app/Home/Component/VideoSection";
import ConversionPerformance from "@/app/Component/landing/ConversionPerformance";
import Banner2 from "@/app/Component/landing/Banner2";
import Uiux from "@/app/Component/landing/Uiux";
import CommonHeroHeader from "@/app/Component/CommonHeroHead";

export const metadata: Metadata = {
  title: "Landing Page & Website Design | Athratech",
  description:
    "High-converting landing page, website design, UI/UX design, mobile scaling, and digital platform design for modern brands.",
  keywords: [
    "landing page design",
    "website design",
    "UI UX design",
    "web design agency",
    "mobile website design",
    "digital business platform",
  ],
  openGraph: {
    title: "Landing Page & Website Design | Athratech",
    description: "Pixel-perfect landing page and UI/UX design for digital brands.",
    type: "website",
    images: [
      {
        url: "/landing/hero-dashboard.png",
        width: 1200,
        height: 720,
        alt: "Landing page dashboard website design preview",
      },
    ],
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
  title: (
    <>
      Landing Page/
      <br className="min-[768px]:hidden" />
      Website Design
    </>
  ),
  para: "A well-designed landing page builds instant trust, keeps users engaged, and turns visits into meaningful actions. It creates a smooth journey, making every click feel natural.",
  buttonText: "Contact Us",
  buttonHref: "#contact",
};

const strategyData = {
  heading: (
    <>
      We are The <span className="text-[#999999]">Strategy</span> Behind Strong
      Brands
    </>
  ),
  para: "Every section is designed with a clear purpose: build trust, communicate value, improve readability and guide users towards the right action.",
};

const platformsData = {
  badge: "Digital systems",
  heading: "Digital Business Products that Perform",
  description:
    "We design digital products with clear structure, business-focused flows and scalable interface systems that work across every important screen.",
  services: [
    {
      title: "Custom Website Solutions",
      content:
        "Landing pages, company websites, portfolio pages and marketing websites designed with clear conversion flow, strong visual hierarchy and responsive structure.",
    },
    {
      title: "Smart Product Design",
      content:
        "Modern UI systems, scalable components, product flows, interaction patterns and responsive screens built for digital products.",
    },
    {
      title: "CRM & ERP Software Design",
      content:
        "Clean dashboards, role-based interfaces, analytics cards, tables, forms and workflow screens designed for business operations.",
    },
  ],
  cta: {
    text: "Need a website design or redesign? We can help!",
    buttonText: "Let’s Connect",
    href: "/ContactForm",
    ariaLabel: "Contact Athratech",
  },
};

const landingProcessData = {
  title: "Our Process",
  description:
    "We follow a clear design process that keeps every project structured, focused and conversion-ready.",
  steps: [
    {
      title: "Discover",
      text: "We understand your brand, goals, audience and product direction.",
    },
    {
      title: "Wireframe",
      text: "We create clean structure and user flow before visual design starts.",
    },
    {
      title: "Design",
      text: "We design responsive, pixel-perfect screens with strong hierarchy.",
    },
    {
      title: "Launch",
      text: "We prepare production-ready assets and handoff support.",
    },
  ],
};



export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#101010]">
        <CommonHeroHeader headData={headData} />

        <Hero />

        <div className="mx-auto max-w-[1440px] overflow-clip">
          <VideoSection />
        </div>

        <Strategy StrategyData={strategyData} />

        <Showcase />

        <Platforms
          badge={platformsData.badge}
          heading={platformsData.heading}
          description={platformsData.description}
          services={platformsData.services}
          cta={platformsData.cta}
          defaultOpenIndex={0}
        />

        <ConversionPerformance />
        <Banner2 />
        <Process content={landingProcessData} />
        <Uiux />
        <MarketingCTA />
    </main>
  );
}