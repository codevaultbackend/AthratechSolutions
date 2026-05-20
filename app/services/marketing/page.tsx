import type { Metadata } from "next";

import MarketingHero from "../../Component/marketing/MarketingHero";
import MarketingBusiness from "../../Component/marketing/MarketingBusiness";
import MarketingOfferings from "../../Component/marketing/MarketingOfferings";
import MarketingCTA from "@/app/Component/MarketingCTA";
import CommonHeroHeader from "@/app/Component/CommonHeroHead";
import Strategy from "@/app/Component/Strategy";


export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Digital Marketing Services | Athratech",
  description:
    "SEO, PPC, Google Ads, Meta Ads, Amazon PPC, WhatsApp marketing, email marketing, social media marketing, content marketing, and affiliate marketing services.",
  keywords: [
    "digital marketing services",
    "SEO services",
    "PPC advertising",
    "Google Ads agency",
    "Meta Ads",
    "Facebook Ads",
    "Instagram Ads",
    "Amazon PPC",
    "WhatsApp marketing",
    "email marketing",
    "social media marketing",
    "content marketing",
    "affiliate marketing",
  ],
  alternates: {
    canonical: "/services/digital-marketing-services",
  },
  openGraph: {
    title: "Digital Marketing Services | Athratech",
    description:
      "Grow your business with SEO, paid ads, content, email, social media, WhatsApp, and performance marketing.",
    type: "website",
    url: "/services/digital-marketing-services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services | Athratech",
    description:
      "Performance-focused digital marketing services for modern brands and businesses.",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital Marketing Services",
    provider: {
      "@type": "Organization",
      name: "Athratech",
    },
    serviceType: "Digital Marketing",
    areaServed: "Worldwide",
    description:
      "Digital marketing services including SEO, PPC, Google Ads, Meta Ads, Amazon PPC, email marketing, WhatsApp marketing, content marketing, social media marketing, and affiliate marketing.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      category: "Marketing Services",
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
    title: "Digital Marketing Services",
    para: "We help your business grow online by combining strategy, creativity, and data-driven decisions. From increasing visibility to driving conversions, our digital marketing services are designed to deliver real results.",
    buttonText: "Contact Us",
    buttonHref: "#contact",
  };

  const strategyData = {
    heading: (
      <>
      App UI/UX that <span className="text-[#999999]">Grows</span> your business
        
      </>
    ),
    para: "We design applications from the ground up, starting with understanding your users, product vision, andfunctionality requirements. From structuring flows to crafting final UI, every step is focused on clarity,usability, and performance.We ensure that your application not only looks modern but also solves real problems efficiently, keeping users engaged at every stage.",
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#101010]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <CommonHeroHeader headData={headData} />
      <MarketingHero />
      <Strategy StrategyData={strategyData} />
      <MarketingOfferings />
      <MarketingCTA />

    </main>
  );
}