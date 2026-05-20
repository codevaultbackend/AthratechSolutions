import type { Metadata } from "next";
import type { ReactNode } from "react";

import DevHero from "../../../Component/development/DevHero";
import MarketingCTA from "@/app/Component/MarketingCTA";
import Uiux from "@/app/Component/landing/Uiux";
import CommonHeroHeader from "@/app/Component/CommonHeroHead";
import VideoSection from "@/app/Home/Component/VideoSection";
import Strategy from "@/app/Component/Strategy";
import OfferingSection from "@/app/Component/OfferingSection";
import WebsiteDemo from "@/app/Component/development/WebsiteDemo";
import Process from "@/app/Component/Process";

import Shapes from "@/app/svgIcons/Shapes";
import Browser from "@/app/svgIcons/Browser";
import Sidebarsimple from "@/app/svgIcons/Sidebarsimple";
import Option from "@/app/svgIcons/Option";
import CodaLogo from "@/app/svgIcons/CodaLogo";
import LifeBouy from "@/app/svgIcons/LifeBouy";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Website Development | Athratech",
  description:
    "Pixel-perfect website development, frontend development, backend development, CRM and ERP platforms, responsive websites, and scalable web applications.",
  keywords: [
    "website development",
    "frontend development",
    "backend development",
    "web application development",
    "CRM development",
    "ERP development",
    "responsive website development",
    "Next.js development",
  ],
  openGraph: {
    title: "Website Development | Athratech",
    description:
      "Frontend and backend website development for scalable digital products.",
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
  title: "Website Development",
  para:
    "From first impression to final click, we build landing pages that perform at every step. Focused on clarity, speed, and user experience.",
  buttonText: "Contact Us",
  buttonHref: "#contact",
};

const strategyData = {
  heading: "What we Do ?",
  para:
    "Your website is more than an online presence—it’s a growth engine. We build fast, scalable, high-performance websites designed to drive leads, boost sales, and strengthen your brand.",
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
      title: "Understand",
      text:
        "We learn about your business, audience, and objectives to define the right direction.",
    },
    {
      title: "Planning",
      text:
        "We plan a structure that guides users toward action.",
    },
    {
      title: "Development & Testing",
      text:
        "We build your website with clean, scalable code and test it to ensure speed, responsiveness, and flawless performance.",
    },
    {
      title: "Launch & Support",
      text:
        "We launch smoothly and continue to support, maintain, and improve your website over time.",
    },
  ],
};

const backendOfferings = [
  {
    title: "Backend API Development",
    description:
      "Secure and scalable REST APIs built for real business workflows, dashboards and web applications.",
    icon: <Shapes className="h-[30px] w-[30px] text-[#000]" />,
  },
  {
    title: "Database Architecture",
    description:
      "Clean database schema, optimized relations and reliable data structure for long-term scalability.",
    icon: <Browser className="h-[30px] w-[30px] text-[#000]" />,
  },
  {
    title: "Authentication & Authorization",
    description:
      "Role-based access, secure login flows, protected APIs and permission-controlled user actions.",
    icon: <Option className="h-[30px] w-[30px] text-[#000]" />,
  },
  {
    title: "Admin Dashboard Backend",
    description:
      "Backend systems for CRM, ERP, reports, analytics, users, products, payments and operations.",
    icon: <CodaLogo className="h-[30px] w-[30px] text-[#000]" />,
  },
  {
    title: "Third-Party Integrations",
    description:
      "Payment gateways, email services, cloud storage, notifications and external business tools.",
    icon: <LifeBouy className="h-[30px] w-[30px] text-[#000]" />,
  },
  {
    title: "Deployment & Maintenance",
    description:
      "Production deployment, server setup, monitoring support and backend performance improvements.",
    icon: <Sidebarsimple className="h-[30px] w-[30px] text-[#000]" />,
  },
];

const frontendOfferings = [
  {
    title: "UI/UX Design",
    description:
      "We create modern, intuitive, and visually engaging designs that align with your brand and enhance user experience.",
    icon: <Shapes className="h-[30px] w-[30px] text-[#000]" />,
  },
  {
    title: "Responsive Web Design",
    description:
      "Seamless performance across mobile, tablet, and desktop for a consistent user journey.",
    icon: <Browser className="h-[30px] w-[30px] text-[#000]" />,
  },
  {
    title: "Interactive & Engaging Interfaces",
    description:
      "Smooth animations and user interactions that improve engagement and usability.",
    icon: <Sidebarsimple className="h-[30px] w-[30px] text-[#000]" />,
  },
  {
    title: "Performance Optimization",
    description:
      "Fast-loading, optimized interfaces to reduce bounce rates and improve retention.",
    icon: <Option className="h-[30px] w-[30px] text-[#000]" />,
  },
  {
    title: "Progressive Web App (PWA)",
    description:
      "App-like experience with offline access and enhanced performance.",
    icon: <CodaLogo className="h-[30px] w-[30px] text-[#000]" />,
  },
  {
    title: "Front-End Maintenance & Support",
    description:
      "Regular updates and improvements to keep your interface modern and effective.",
    icon: <LifeBouy className="h-[30px] w-[30px] text-[#000]" />,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#101010]">
      {/* HERO */}
      <CommonHeroHeader headData={headData} />

      {/* DEV HERO */}
      <section className="w-full overflow-hidden">
        <DevHero />
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

    
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <OfferingSection
            variant="frontend"
            title="Frontend Offerings"
            description="We build fast, responsive and scalable frontend experiences that look clean, perform well and support real business growth."
            items={frontendOfferings}
          />
        </div>

      {/* WEBSITE DEMO */}
      <section className="w-full overflow-hidden py-[40px] sm:py-[60px] lg:py-[80px]">
        <WebsiteDemo />
      </section>


        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <OfferingSection
            variant="backend"
            title="Backend Offerings"
            description="We create secure, scalable and production-ready backend systems that power websites, dashboards and business platforms."
            items={backendOfferings}
          />
        </div>

     
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <Process content={landingProcessData} />
        </div>


      {/* UI UX */}
      <section className="w-full overflow-hidden">
        <Uiux slug="frontend-backend-development" />
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