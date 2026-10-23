
import type { Metadata } from "next";

type SeoEntry = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
};

export const seoPages = {
  home: {
    title: "Digital Marketing & SEO Agency in Gurgaon",
    description:
      "Athratech is a digital marketing agency in Gurgaon offering SEO, Google Ads, web development and AI search optimization to help businesses generate qualified leads.",
    path: "/",
    keywords: [
      "Digital Marketing Agency in Gurgaon",
      "SEO Agency in Gurgaon",
      "Digital Marketing Company in Gurgaon",
      "SEO Services in Gurgaon",
      "Google Ads Agency",
    ],
  },

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
    title: "Frontend & Backend Development Services",
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

  brandIdentity: {
    title: "Brand Identity Design Services",
    description:
      "Discover Athratech's brand identity design services, including logo design, brand strategy, visual identity systems and brand guidelines.",
    // Replace with the exact route for the Brand Identity page.
    path: "/REPLACE-WITH-BRAND-IDENTITY-ROUTE",
    keywords: [
      "brand identity design",
      "logo design services",
      "branding agency",
      "visual identity design",
      "brand strategy",
      "brand guidelines design",
    ],
  },

  projects: {
    title: "Our Projects & Digital Portfolio",
    description:
      "Explore Athratech's digital portfolio, including website development, software and digital solutions.",
    path: "/projects",
    keywords: [
      "web development portfolio",
      "software development projects",
      "website design portfolio",
      "digital solutions portfolio",
    ],
  },

  contact: {
    title: "Contact Athratech | Start Your Project",
    description:
      "Contact Athratech to discuss your website, software, mobile app or digital marketing project.",
    path: "/contact-us",
    keywords: [
      "contact Athratech",
      "web development consultation",
      "software development consultation",
      "digital marketing consultation",
    ],
  },
} satisfies Record<string, SeoEntry>;

export function getPageMetadata(page: SeoEntry): Metadata {
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,

    alternates: {
      canonical: page.path,
    },

    openGraph: {
      title: `${page.title} | Athratech`,
      description: page.description,
      url: page.path,
      siteName: "Athratech",
      type: "website",
    },
  };
}
