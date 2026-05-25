import type { Metadata } from "next";
import SaasHero from "../../../Component/saas/SaasHero";
import SaasOfferings from "../../../Component/saas/SaasOfferings";
import MarketingCTA from "@/app/Component/MarketingCTA";
import CommonHeroHeader from "@/app/Component/CommonHeroHead";
import VideoSection from "@/app/Home/Component/VideoSection";
import Strategy from "@/app/Component/Strategy";
import Uiux from "@/app/Component/landing/Uiux";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "SaaS Product Development | Athratech",
  description:
    "Custom SaaS product development for CRM, ERP, dashboards, subscription platforms, admin panels, web apps, mobile apps, and scalable cloud-based business software.",
  keywords: [
    "SaaS product development",
    "CRM SaaS development",
    "ERP SaaS development",
    "custom SaaS development",
    "web app development",
    "dashboard development",
    "subscription software development",
    "cloud software development",
    "B2B SaaS platform",
    "admin panel development",
  ],
  alternates: {
    canonical: "/services/saas-product-development",
  },
  openGraph: {
    title: "SaaS Product Development | Athratech",
    description:
      "We design and develop scalable SaaS products, CRM platforms, ERP systems, dashboards, and web applications for growing businesses.",
    type: "website",
    url: "/services/saas-product-development",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Product Development | Athratech",
    description:
      "Build scalable SaaS platforms, CRM systems, ERP products, dashboards, and cloud-based applications.",
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
  title: "Saas Product Development",
  para: "We develop secure, scalable, cloud-based SaaS products with seamless user experience, strong architecture, and long-term growth support.",
  buttonText: "Contact Us",
  buttonHref: "#contact",
};

const strategyData = {
  heading: " What we Do ?",
  para: (
    <>
      Our <span className="text-[20px] font-[600] text-[#000000] leading-[100%] tracking-[0%]">CRM & ERP</span> system are designed to work together - connecting your customer data with your business operations. The result is a unified, cloud-
      based platform that improves efficiency, enhances customer relationships, </>
  ),
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SaaS Product Development",
    provider: {
      "@type": "Organization",
      name: "Athratech",
    },
    serviceType: "SaaS Product Development",
    areaServed: "Worldwide",
    description:
      "Custom SaaS product development for CRM, ERP, dashboards, web apps, mobile apps, subscription platforms, and scalable cloud-based business software.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      category: "Software Development",
    },
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
      <SaasHero />
      <div className="logo-section max-w-[1440px] mx-auto">
        <VideoSection />
      </div>
      <Strategy StrategyData={strategyData} />
      <SaasOfferings />
      <Uiux slug="frontend-backend-development" />
      <MarketingCTA />
    </main>
  );
}