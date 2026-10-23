import type { Metadata } from "next";
import { seoPages, getPageMetadata } from "@/app/lib/seo"

import MarketingHero from "../../Component/marketing/MarketingHero";
import MarketingBusiness from "../../Component/marketing/MarketingBusiness";
import MarketingOfferings from "../../Component/marketing/MarketingOfferings";
import MarketingCTA from "@/app/Component/MarketingCTA";
import CommonHeroHeader from "@/app/Component/CommonHeroHead";
import Strategy from "@/app/Component/Strategy";
import ContactCTA from "@/app/Home/Component/ContactCTA";


export const metadata: Metadata = getPageMetadata(seoPages.marketing);


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
    title: "Digital Marketing Services in Gurgaon",
    para: "We help your business grow online by combining strategy, creativity, and data-driven decisions. From increasing visibility to driving conversions, our digital marketing services are designed to deliver real results.",
    buttonText: "Contact Us",
    buttonHref: "/contact-us",
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
    <div className="min-h-screen overflow-x-hidden bg-white text-[#101010]">
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
      <ContactCTA image="/mockup8.jpg" />

    </div>
  );
}