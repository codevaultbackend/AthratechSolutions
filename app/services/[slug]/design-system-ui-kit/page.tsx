import type { Metadata } from "next";
import type { ReactNode } from "react";

import DesignSystemHero from "../../../Component/design-system/DesignSystemHero";
import DesignSystemPreview from "../../../Component/design-system/DesignSystemPreview";
import DesignSystemDeviceShowcase from "../../../Component/design-system/DesignSystemDeviceShowcase";
import MarketingCTA from "@/app/Component/MarketingCTA";
import CommonHeroHeader from "@/app/Component/CommonHeroHead";
import VideoSection from "@/app/Home/Component/VideoSection";
import Strategy from "@/app/Component/Strategy";
import Platforms from "@/app/Component/Platforms";
import Uiux from "@/app/Component/landing/Uiux";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Design System & UI Kit || Athratech",
  description:
    "Great products aren’t just designed—they’re built to scale. We create design systems and UI kits that bring consistency, clarity, and speed, giving your team reusable components and a seamless foundation across platforms.",
  keywords: [
    "design system",
    "UI kit",
    "component library",
    "design tokens",
    "Figma UI kit",
    "product design system",
    "UI UX design",
  ],
  openGraph: {
    title: "Design System & UI Kit | Athratech",
    description:
      "Pixel-perfect design systems and UI kits for scalable digital products.",
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
  title: "Design System & UI Kit",
  para: "Great products aren’t just designed—they’re built to scale. We create design systems and UI kits that bring consistency, clarity, and speed, giving your team reusable components and a seamless foundation across platforms.",
  buttonText: "Contact Us",
  buttonHref: "/contact",
};

const strategyData = {
  heading: "Our Approach",
  para: "Your brand is more than a name or logo—it’s the foundation of your identity. It reflects your values, shapes perception, and builds trust. A strong brand connects your vision to your audience, making your impact clear, consistent, and memorable.",
};
const strategy2Data = {
  heading: "Why it matters",
  para: "Without a design system, products become inconsistent and slow to evolve.With one, your team works smarter, ships faster, and delivers a better user experience — every time.",
};

const platformsData = {
  badge: "Design systems",
  heading: "What you get",
  description:
    "We create structured UI systems with reusable components, design tokens, responsive rules, and consistent interaction patterns that help teams design and build faster.",
  services: [
    {
      title: "Scalable design system tailored to your brand",
      content:
        "We design flexible buttons, cards, inputs, modals, navigation patterns, tables, and layout blocks that can be reused across product screens.",
    },
    {
      title: "Reusable UI components (buttons, forms, cards, etc.)",
      content:
        "We define consistent colors, typography, spacing, shadows, radius, and layout rules so your interface stays clean and scalable.",
    },
    {
      title: "Design documentation for team alignment",
      content:
        "We prepare responsive behavior for desktop, tablet, and mobile screens so every component works across important breakpoints.",
    },
    {
      title: "Developer-friendly assets for smooth implementation",
      content:
        "We organize components, variants, naming, states, and usage guidelines clearly so developers can build faster with fewer design gaps.",
    },
      {
      title: "Typography, color, and spacing guidelines",
      content:
        "We organize components, variants, naming, states, and usage guidelines clearly so developers can build faster with fewer design gaps.",
    },
  ],
  cta: {
    text: "Need a scalable design system or UI kit? We can help!",
    buttonText: "Let’s Connect",
    href: "/contact-us",
    ariaLabel: "Contact Athratech",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#101010]">
      <CommonHeroHeader headData={headData} />

      <DesignSystemHero />

      <div className="mx-auto max-w-[1440px] overflow-clip">
        <VideoSection />
      </div>

      <Strategy StrategyData={strategyData} />

      <DesignSystemPreview />

      <Platforms
        sectionId="design-system-platforms"
        badge={platformsData.badge}
        heading={platformsData.heading}
        description={platformsData.description}
        services={platformsData.services}
        cta={platformsData.cta}
        defaultOpenIndex={0}
      />

      <DesignSystemDeviceShowcase />
      <Strategy StrategyData={strategy2Data} />
      <Uiux />
      <MarketingCTA />
    </main>
  );
}