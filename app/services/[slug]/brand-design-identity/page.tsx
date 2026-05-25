import type { Metadata } from "next";
import type { ReactNode } from "react";

import BrandHero from "../../../Component/brand/BrandHero";
import BrandGallery from "../../../Component/brand/BrandGallery";
import BrandApproach from "../../../Component/brand/BrandApproach";
import MarketingCTA from "@/app/Component/MarketingCTA";
import CommonHeroHeader from "@/app/Component/CommonHeroHead";
import VideoSection from "@/app/home/Component/VideoSection";
import Strategy from "@/app/Component/Strategy";
import Platforms from "@/app/Component/Platforms";
import ProcessBanner from "@/app/Component/brand/ProcessBanner";
import Process from "@/app/Component/Process";
import Uiux from "@/app/Component/landing/Uiux";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Brand and Identity Design | Athratech",
  description:
    "Strategic brand identity design, logo systems, visual language, brand storytelling, and UI/UX-ready design systems for modern businesses.",
  keywords: [
    "brand identity design",
    "logo design",
    "branding agency",
    "visual identity",
    "brand strategy",
    "UI UX branding",
  ],
  openGraph: {
    title: "Brand and Identity Design | Athratech",
    description:
      "Pixel-perfect brand identity and visual system design for strong businesses.",
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
  title: "Brand and Identity",
  para: "A brand is more than how your business looks—it’s how it feels, communicates, and stays in people’s minds. It’s the perception that remains long after the first interaction. We create brand identities built on clarity, purpose, and meaning.",
  buttonText: "Contact Us",
  buttonHref: "#contact",
};

const appStrategyData = {
  heading: "Your brand powers your business",
  para: "Your brand is more than a name or logo—it’s the foundation of your identity. It reflects your values, shapes perception, and builds trust. A strong brand connects your vision to your audience, making your impact clear, consistent, and memorable.",
};
const appExperienceStrategyData = {
  heading: "The Outcome",
  para: "You walk away with more than a design system — you gain a clear identity. One that helps youraudience understand you, trust you, and remember you.Because when your brand is clear, everything else becomes easier — from marketing to decision-making to growth.",
};

const platformsData = {
  badge: "Brand systems",
  heading: "What we Create",
  description:
    "We design identity systems that work across websites, social media, product interfaces, marketing assets and business touchpoints with consistency and clarity.",
  services: [
    {
      title: "Thoughtfully crafted logos that carry meaning",
      content:
        "Thoughtfully crafted logos that carry meaningEvery logo we create is built with purpose and strategy. Designed to reflect your brand story and leave a lasting impression.",
    },
    {
      title: "Cohesive color systems and typography that set the tone",
      content:
        "* Cohesive color systems and typography that set the tone * Every color and font choice is made to match your brand vision.Creating a consistent visual experience across every platform.",
    },
    {
      title: "Visual identities designed for real-world use, not just presentation",
      content:
        "Visual identities designed for real-world use, not just presentationOur branding works seamlessly across digital and print applications.Built to stay practical, flexible, and impactful everywhere.",
    },
    {
      title: "Brand guidelines that bring clarity and consistency to your team",
      content:
        "Brand guidelines that bring clarity and consistency to your teamClear guidelines help maintain a unified brand presence.Ensuring every design and communication stays aligned.",
    },
    {
      title: "Supporting assets that help your brand show up confidently everywhere",
      content:
        " Supporting assets that help your brand show up confidently everywhereFrom social media to marketing materials, we design every asset with care. Helping your brand appear polished, professional, and recognizable.",
    },
  ],
  cta: {
    text: "Need a strong brand identity or redesign? We can help!",
    buttonText: "Let’s Connect",
    href: "/contact-us",
    ariaLabel: "Contact Athratech",
  },
};

export type ProcessStep = {
  title: string;
  text: string;
};

export type ProcessContent = {
  title: string;
  description: ReactNode;
  steps: ProcessStep[];
};

const landingProcessContent: ProcessContent = {
  title: "Our Design Process",
  description: (
    <>
      We used a{" "}
      <strong className="font-medium text-[#050505]">
        human-centered design
      </strong>{" "}
      approach to understand attendance challenges and build a simple,{" "}
      <strong className="font-medium text-[#050505]">
        effective solution
      </strong>{" "}
      for easy tracking and management.
    </>
  ),
  steps: [
    {
      title: "User Insights",
      text: "We analyze your product, target audience, and goals to build a strong foundation.",
    },
    {
      title: "Brand Strategy",
      text: "We map out the structure and journey of your application to ensure smooth navigation",
    },
    {
      title: "Brand Identity",
      text: "Modern interfaces and interactive prototypes that visualize your product before development.",
    },
    {
      title: "Logo/Brand Concept",
      text: "Continuous improvements based on feedback to refine the experience.",
    },
  ],
};

export default function BrandPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#101010]">
      <CommonHeroHeader headData={headData} />

      <BrandHero />

      <div className="max-w-[1440px] mx-auto lg:mb-[95px]">
        <VideoSection />
      </div>

      <Strategy StrategyData={appStrategyData} />

      <BrandGallery />

      <BrandApproach />

      <Platforms
        badge={platformsData.badge}
        heading={platformsData.heading}
        description={platformsData.description}
        services={platformsData.services}
        cta={platformsData.cta}
        defaultOpenIndex={0}
      />

      <ProcessBanner />
      <Process content={landingProcessContent} />
      <div className="">
        <Strategy StrategyData={appExperienceStrategyData} />
      </div>
      <Uiux />


      <MarketingCTA />
    </main>
  );
}