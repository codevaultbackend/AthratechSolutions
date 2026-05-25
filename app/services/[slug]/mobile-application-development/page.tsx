import type { Metadata } from "next";
import type { ReactNode } from "react";

import AppDevHero from "../../../Component/application/AppDevHero";
import AppDevPhoneShowcase from "../../../Component/application/AppDevPhoneShowcase";
import AppDevBackendOfferings from "../../../Component/application/AppDevBackendOfferings";
import AppDevProcess from "../../../Component/application/AppDevProcess";
import AppDevFeatureGrid from "../../../Component/application/AppDevFeatureGrid";
import MarketingCTA from "@/app/Component/MarketingCTA";
import CommonHeroHeader from "@/app/Component/CommonHeroHead";
import VideoSection from "@/app/home/Component/VideoSection";
import Strategy from "@/app/Component/Strategy";
import OfferingSection from "@/app/Component/OfferingSection";
import Multimobilesec from "@/app/Component/application/Multimobilesec";
import Process from "@/app/Component/Process";
import Uiux from "@/app/Component/landing/Uiux";

import LifeBouy from "@/app/svgIcons/LifeBouy";
import CodaLogo from "@/app/svgIcons/CodaLogo";
import Option from "@/app/svgIcons/Option";
import Sidebarsimple from "@/app/svgIcons/Sidebarsimple";
import Browser from "@/app/svgIcons/Browser";
import Shapes from "@/app/svgIcons/Shapes";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),

  title: "Application Development | Athratech",

  description:
    "Custom application development for mobile apps, web apps, SaaS platforms, CRM, ERP, dashboards, backend systems, APIs, and scalable digital products.",

  keywords: [
    "application development",
    "mobile app development",
    "web app development",
    "custom application development",
    "frontend development",
    "backend development",
    "CRM development",
    "ERP development",
    "SaaS application development",
    "UI UX application design",
  ],

  alternates: {
    canonical: "/services/application-development",
  },

  openGraph: {
    title: "Application Development | Athratech",

    description:
      "We design and develop scalable web and mobile applications with clean UI, strong backend, and production-ready architecture.",

    type: "website",
    url: "/services/application-development",
  },

  twitter: {
    card: "summary_large_image",

    title: "Application Development | Athratech",

    description:
      "Build scalable mobile apps, web apps, CRM, ERP, SaaS platforms, APIs, and dashboards.",
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
  title: "Application Development",

  para:
    "Your app isn’t just a digital product—it’s a direct connection between your business and your users. We build fast, scalable, and user-friendly mobile applications designed to deliver smooth performance and real value.",

  buttonText: "Contact Us",
  buttonHref: "#contact",
};

const strategyData = {
  heading: "What we Do ?",
  para:
    "EWe design and develop high-performance mobile     applications tailored to your business goals. From intuitive user interfaces to powerful functionality, we create apps that are fast, reliable, and easy to use.Whether it’s Android, iOS, or cross-platform, our focus is on delivering seamless experiences ",
};

const landingProcessData = {
  title: "Our Process",

  description:
    "We follow a clear design process that keeps every project structured, focused and conversion-ready.",

  steps: [
    {
      title: "Understand",

      text:
        "We learn about your business, audience, and objectives to define the right direction.",
    },

    {
      title: "Planning",

      text: "We plan a structure that guides users toward action.",
    },

    {
      title: "Development & Testing",

      text:
        "We turn designs into a fully functional, responsive website using clean, optimized, and scalable code.",
    },

    {
      title: "Launch & Support",

      text:
        "We launch smoothly and continue to support, maintain, and improve your website over time.",
    },
  ],
};

const frontendOfferings = [
  {
    title: "Responsive App & Tab Design",

    description:
      "Seamless performance across mobile, tablet, and desktop for a consistent user journey.",

    icon: <Shapes className="h-[30px] w-[30px] text-[#000]" />,
  },

  {
    title: "Cross platform App Development",

    description:
      "Consistent and smooth performance across Android and iOS devices, ensuring a wider reach and unified experience.",

    icon: <Browser className="h-[30px] w-[30px] text-[#000]" />,
  },

  {
    title: "Interactive and Engaging Interface",

    description:
      "Smooth animations and user interactions that improve engagement and usability",

    icon: <Sidebarsimple className="h-[30px] w-[30px] text-[#000]" />,
  },

  {
    title: "UI/Performance Optimization",

    description:
      "Fast-loading, optimized interfaces to reduce bounce rates and improve retention.",

    icon: <Option className="h-[30px] w-[30px] text-[#000]" />,
  },

  {
    title: "Security Implementation",

    description:
      "Advanced security practices to protect your data and users.",

    icon: <CodaLogo className="h-[30px] w-[30px] text-[#000]" />,
  },

  {
    title: "Interactive and Engaging Interface",

    description:
      "Smooth animations and user interactions that improve engagement and usability",

    icon: <LifeBouy className="h-[30px] w-[30px] text-[#000]" />,
  },

  {
    title: "Device feature full access",

    description:
      "Fast-loading, optimized interfaces to reduce bounce rates and improve retention.",

    icon: <LifeBouy className="h-[30px] w-[30px] text-[#000]" />,
  },

  {
    title: "Offline Support",

    description:
      "Fast-loading, optimized interfaces to reduce bounce rates and improve retention.",

    icon: <LifeBouy className="h-[30px] w-[30px] text-[#000]" />,
  },
];

const backendOfferings = [
  {
    title: "Backend System Development",

    description:
      "Robust systems that power your website’s functionality and business logic.",

    icon: <Shapes className="h-[30px] w-[30px] text-[#000]" />,
  },

  {
    title: "API Development & Integration",

    description:
      "Seamless connection with third-party tools and services.",

    icon: <Browser className="h-[30px] w-[30px] text-[#000]" />,
  },

  {
    title: "Database Development & Management",

    description:
      "Secure and structured data handling for reliability and efficiency.",

    icon: <Sidebarsimple className="h-[30px] w-[30px] text-[#000]" />,
  },

  {
    title: "Security Implementation",

    description:
      "Advanced security practices to protect your data and users.",

    icon: <Option className="h-[30px] w-[30px] text-[#000]" />,
  },

  {
    title: "Performance & Server Optimization",

    description:
      "Fast, stable, and reliable backend operations.",

    icon: <CodaLogo className="h-[30px] w-[30px] text-[#000]" />,
  },

  {
    title: "Maintenance & Technical Support",

    description:
      "Continuous monitoring, updates, and technical support.",

    icon: <LifeBouy className="h-[30px] w-[30px] text-[#000]" />,
  },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "Service",

    name: "Application Development",

    provider: {
      "@type": "Organization",
      name: "Athratech",
    },

    serviceType: "Application Development",

    areaServed: "Worldwide",

    description:
      "Custom application development for mobile apps, web apps, SaaS products, CRM, ERP, dashboards, APIs, and scalable digital platforms.",

    offers: {
      "@type": "Offer",

      availability: "https://schema.org/InStock",

      category: "Software Development",
    },
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#101010]">
      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* HERO */}
      <CommonHeroHeader headData={headData} />

      {/* HERO SECTION */}
      <AppDevHero />

      {/* VIDEO */}
      <div className="mx-auto w-full max-w-[1440px] overflow-hidden">
        <VideoSection />
      </div>

      {/* STRATEGY */}
      <section
        className="
          
        "
      >
        <Strategy StrategyData={strategyData} />
      </section>

      {/* FRONTEND OFFERINGS */}
      <OfferingSection
        title="Frontend Offerings"
        description="We build modern, responsive and production-ready frontend systems with clean UI, reusable components and strong performance."
        items={frontendOfferings}
        variant="frontend"
      />

      {/* MOBILE SHOWCASE */}
      <section
        className="
          py-[60px]

          sm:py-[80px]

          lg:py-[120px]
        "
      >
        <Multimobilesec />
      </section>

      {/* BACKEND OFFERINGS */}
      <OfferingSection
        title="Back end Offerings"
        description="We build secure, scalable and reliable backend systems that support real business operations, APIs, dashboards and integrations."
        items={backendOfferings}
        variant="backend"
      />

      {/* PROCESS */}
        <Process content={landingProcessData} />
      {/* UI UX */}
      <section
        className="
          pb-[80px]

          sm:pb-[110px]

          lg:pb-[150px]
        "
      >
        <Uiux slug="frontend-backend-development" />
      </section>

      {/* CTA */}
      <MarketingCTA />
    </main>
  );
}