
import type { Metadata } from "next";

type SeoEntry = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
};

export const seoPages = {
  // =========================
  // MAIN WEBSITE PAGES
  // =========================

  home: {
    title: "Website Development & Digital Marketing Agency in Gurgaon",
    description:
      "Website development and digital marketing company in Gurgaon. SEO, Google Ads,Web and App solutions to generate qualified leads.",
    path: "/",
    keywords: [
      "Digital Marketing Agency in Gurgaon",
      "SEO Agency in Gurgaon",
      "Digital Marketing Company in Gurgaon",
      "SEO Services in Gurgaon, Google Ads Agency",
    ],
  },

  aboutUs: {
    title: "About Athratech | Digital Solutions Company",
    description:
      "Learn about Athratech, our team, expertise, and approach to website development, digital marketing, and digital product solutions.",
    path: "/about-us",
    keywords: [
      "About Athratech",
      "Athratech digital agency",
      "digital solutions company",
    ],
  },

  services: {
    title: "Website Development & Digital Marketing Services",
    description:
      "Explore Athratech services, including UI/UX design, web development, mobile app development, SaaS solutions, and digital marketing.",
    path: "/services",
    keywords: [
      "Athratech services",
      "web development services",
      "digital marketing services",
    ],
  },

  projects: {
    title: "Our Projects & Case Studies | Athratech",
    description:
      "Explore Athratech projects and case studies covering website development, digital products, business applications, and design solutions.",
    path: "/projects",
    keywords: [
      "Athratech projects",
      "web development portfolio",
      "digital agency case studies",
    ],
  },

  blog: {
    title: "Digital Insights, Development & Marketing Blog | Athratech",
    description:
      "Explore articles on web development, UI/UX design, SEO, digital marketing, and emerging technology from Athratech.",
    path: "/blog",
    keywords: [
      "Athratech blog",
      "web development blog",
      "digital marketing insights",
    ],
  },

  contactUs: {
    title: "Contact Athratech | Get in Touch",
    description:
      "Contact Athratech to discuss website development, UI/UX design, mobile applications, and digital marketing services.",
    path: "/contact-us",
    keywords: [
      "Contact Athratech",
      "Athratech contact",
      "web development agency contact",
    ],
  },

  privacyPolicy: {
    title: "Privacy Policy | Athratech",
    description:
      "Read Athratech's privacy policy to understand how website information and personal data are handled.",
    path: "/privacy-policy",
    keywords: ["Athratech privacy policy", "privacy policy"],
  },

  termsConditions: {
    title: "Terms and Conditions | Athratech",
    description:
      "Read the terms and conditions governing the use of the Athratech website and its services.",
    path: "/terms-conditions",
    keywords: ["Athratech terms and conditions", "website terms"],
  },

  // =========================
  // SERVICE PARENT PAGES
  // =========================

  uiUxDesign: {
    title: "UI/UX Design Company in Gurgaon",
    description:
      "Athratech is a UI/UX design agency in Gurgaon offering website design, mobile app UI/UX, wireframing and scalable design systems for businesses.",
    path: "/services/ui-ux-design",
    keywords: [
      "UI UX design agency in Gurgaon",
      "UI UX design company in Gurgaon",
      "UI UX design services",
      "website UI UX design",
      "user interface design services",
      "user experience design agency",
      "web design agency in Gurgaon",
      "UI UX design company in India",
    ],
  },

  frontendBackend: {
    title: "Frontend & Backend Development Services | Athratech",
    description:
      "Athratech offers frontend and backend development services in Gurgaon, including website development, custom web applications, CRM, ERP and SaaS solutions.",
    path: "/services/frontend-backend-development",
    keywords: [
      "frontend development services",
      "backend development services",
      "frontend and backend development company",
      "web development company in Gurgaon",
      "full stack development services",
      "custom web application development",
      "website development services",
      "CRM development services",
      "ERP software development",
      "SaaS development company",
      "web application development company",
    ],
  },

  marketing: {
    title: "Digital Marketing Services in Gurgaon",
    description:
      "Grow your business with Athratech's digital marketing services in Gurgaon. Explore SEO, Google Ads, PPC, social media marketing and lead generation.",
    path: "/services/marketing",
    keywords: [
      "Google Ads management services",
      "PPC advertising services",
      "social media marketing agency in Gurgaon",
      "Digital Marketing Services in Gurgaon",
      "PPC Advertising Services in Gurgaon",
    ],
  },

  // =========================
  // UI/UX DESIGN SUBPAGES
  // =========================

  mobileAppDesign: {
    title: "Mobile App UI/UX Design Services",
    description:
      "Athratech creates intuitive Android and iOS app interfaces, user flows, wireframes and prototypes through its mobile app UI/UX design services.",
    path: "/services/ui-ux-design/mobile-application-design",
    keywords: [
      "mobile app UI UX design services",
      "mobile application design company",
      "Android app UI design",
      "iOS app UI UX design",
      "mobile app wireframing",
      "mobile app prototyping",
      "mobile user experience design",
    ],
  },

  designSystemUiKit: {
    title: "Design System UI Kit | Athratech",
    description:
      "Explore scalable UI design systems and reusable UI kits for consistent digital experiences.",
    path: "/services/ui-ux-design/design-system-ui-kit",
    keywords: [
      "design system UI kit",
      "UI design system",
      "reusable UI components",
    ],
  },

  brandIdentity: {
    title: "Brand Identity Design Services",
    description:
      "Discover Athratech's brand identity design services, including logo design, brand strategy, visual identity systems and brand guidelines.",
    path: "/services/ui-ux-design/brand-design-identity",
    keywords: [
      "brand identity design",
      "logo design services",
      "branding agency",
      "visual identity design",
      "brand strategy",
      "brand guidelines design",
    ],
  },

  landingPageDesign: {
    title: "Landing Page & Website Design Services | Athratech",
    description:
      "Explore landing page and website design services focused on user experience, visual consistency, and conversion-oriented layouts.",
    path: "/services/ui-ux-design/landing-page-website-design",
    keywords: [
      "landing page design services",
      "website design services",
      "conversion focused landing pages",
      "UI UX website design",
    ],
  },

  // =========================
  // DEVELOPMENT SUBPAGES
  // =========================

  websiteDevelopment: {
    title: "Website Development Services | Athratech",
    description:
      "Explore Athratech website development services for business websites and modern digital experiences.",
    path: "/services/frontend-backend-development/website-development",
    keywords: [
      "website development services",
      "website development company",
      "business website development",
      "custom website development",
    ],
  },

  mobileApplicationDevelopment: {
    title: "Mobile Application Development | Athratech",
    description:
      "Explore mobile application development services for modern business needs and digital products.",
    path: "/services/frontend-backend-development/mobile-application-development",
    keywords: [
      "mobile application development",
      "mobile app development services",
      "Android app development",
      "iOS app development",
    ],
  },

  saasProductDevelopment: {
    title: "SaaS Product Development Services | Athratech",
    description:
      "Explore SaaS product development services for building scalable software products and web applications.",
    path: "/services/frontend-backend-development/saas-product-development",
    keywords: [
      "SaaS product development",
      "SaaS development company",
      "software product development",
      "SaaS application development",
    ],
  },

  crmErpDevelopment: {
    title: "CRM & ERP Development Services | Athratech",
    description:
      "Explore CRM and ERP development services for business workflows, operational management, and custom software solutions.",
    path: "/services/frontend-backend-development/crm-erp-development",
    keywords: [
      "CRM development services",
      "ERP development services",
      "custom CRM software",
      "ERP software development",
      "business management software",
    ],
  },

  performanceMarketing: {
    title: "Performance Marketing Services | Athratech",
    description:
      "Explore performance marketing services covering paid campaigns, advertising optimization, and lead generation.",
    path: "/services/marketing/performance-marketing",
    keywords: [
      "performance marketing services",
      "paid advertising services",
      "PPC campaign management",
      "lead generation marketing",
    ],
  },

  // =========================
  // BLOG ARTICLES
  // =========================

  blogGlassmorphism2026: {
    title: "Glassmorphism in 2026 | Athratech",
    description:
      "Explore glassmorphism design trends and their use in modern digital interfaces.",
    path: "/blog/glassmorphism-in-2026",
    keywords: ["glassmorphism design", "UI design trends", "web design"],
  },

  blogAiFutureOfCoding: {
    title: "AI and the Future of Coding | Athratech",
    description:
      "Explore how artificial intelligence is changing software development and coding workflows.",
    path: "/blog/ai-future-of-coding",
    keywords: ["AI coding", "AI software development", "future of coding"],
  },

  blogAiMarketers2026: {
    title: "AI for Marketers in 2026 | Athratech",
    description:
      "Explore the role of artificial intelligence in modern marketing strategies and workflows.",
    path: "/blog/ai-marketers-2026",
    keywords: ["AI marketing", "AI for marketers", "digital marketing"],
  },

  blogSeoGlassmorphism: {
    title: "SEO and Glassmorphism | Athratech",
    description:
      "Explore considerations for SEO and user experience when implementing glassmorphism in web design.",
    path: "/blog/seo-glassmorphism",
    keywords: ["SEO web design", "glassmorphism SEO", "website user experience"],
  },

  blogAdsGlassmorphism: {
    title: "Ads and Glassmorphism | Athratech",
    description:
      "Explore glassmorphism-inspired visual design and its potential applications in digital advertising.",
    path: "/blog/ads-glassmorphism",
    keywords: ["glassmorphism design", "digital advertising", "ad design"],
  },

  blogUiUxGlassmorphism: {
    title: "UI/UX and Glassmorphism | Athratech",
    description:
      "Explore glassmorphism in UI/UX design, including interface styling and user experience considerations.",
    path: "/blog/uiux-glassmorphism",
    keywords: ["UI UX design", "glassmorphism UI", "interface design"],
  },

  // =========================
  // PROJECT / CASE STUDY PAGES
  // Verify each route exists before using its entry.
  // =========================

  projectFastresponse: {
    title: "FastResponse Project | Athratech",
    description:
      "Explore the FastResponse project and its digital solution through Athratech's project portfolio.",
    path: "/projects/fastresponse",
    keywords: ["FastResponse project", "Athratech portfolio", "case study"],
  },

  projectMarkday: {
    title: "Markday Project | Athratech",
    description:
      "Explore the Markday project and its digital solution through Athratech's project portfolio.",
    path: "/projects/markday",
    keywords: ["Markday project", "Athratech portfolio", "case study"],
  },

  projectErpSystem: {
    title: "ERP System Project | Athratech",
    description:
      "Explore Athratech's ERP system project, featuring business software and operational management solutions.",
    path: "/projects/erp-system",
    keywords: ["ERP system project", "ERP software", "Athratech portfolio"],
  },

  projectQuickCargo: {
    title: "Quick Cargo Project | Athratech",
    description:
      "Explore the Quick Cargo project through Athratech's digital project portfolio.",
    path: "/projects/quick-cargo",
    keywords: ["Quick Cargo project", "cargo software", "Athratech portfolio"],
  },

  projectInventoryManagement: {
    title: "Inventory Management Project | Athratech",
    description:
      "Explore Athratech's inventory management project and its business inventory software solution.",
    path: "/projects/inventory-management",
    keywords: [
      "inventory management project",
      "inventory management software",
      "Athratech portfolio",
    ],
  },
} satisfies Record<string, SeoEntry>;

// =========================
// CANONICAL / SITE CONFIG
// =========================

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.athratech.com"
).replace(/\/+$/, "");

export function getPageMetadata(page: SeoEntry): Metadata {
  const canonicalPath =
    page.path === "/"
      ? "/"
      : `/${page.path.replace(/^\/+|\/+$/g, "")}`;

  const canonicalUrl = new URL(canonicalPath, `${SITE_URL}/`).toString();

  return {
    title: page.title.trim(),
    description: page.description.trim(),
    keywords: page.keywords,

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: `${page.title.trim()} | Athratech`,
      description: page.description.trim(),
      url: canonicalUrl,
      siteName: "Athratech",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Athratech Digital Marketing and Web Development",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${page.title.trim()} | Athratech`,
      description: page.description.trim(),
      images: ["/og-image.jpg"],
    },
  };
}
