export type ServiceSection = {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  cardTheme: "dark" | "light" | "blue";
  cardSize: "large" | "small" | "tall";
  imageClassName?: string;
  contentClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  detailPage: {
    title: string;
    description: string;
    image: string;
  };
};

export type ServiceCard = {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  alt: string;
  cardType: "large" | "wide" | "small";
  bgColor?: string;
  detailPage: {
    heroTitle: string;
    heroDescription: string;
    heroImage: string;
    sections: ServiceSection[];
  };
};

const UI_UX_HERO_DESCRIPTION =
  "UI/UX design is what transforms good products into great ones. Whether it's a website, mobile app, or dashboard, we create visually appealing and seamless experiences that users love.";

const DEVELOPMENT_HERO_DESCRIPTION =
  "We build reliable, scalable and performance-focused digital products with clean frontend interfaces, secure backend systems and production-ready architecture.";

const MARKETING_HERO_DESCRIPTION =
  "We help brands grow through smart marketing strategies, creative campaigns and measurable execution focused on real business outcomes.";

export const services: ServiceCard[] = [
  {
    id: 1,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description:
      "Where design meets motion and performance. Thoughtfully crafted to engage, impress, and convert.",
    image: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255606/website-images/ggr6qpqd3u7yoynlacon.png",
    alt: "UI UX Design",
    cardType: "large",
    detailPage: {
      heroTitle: "UI/UX Design",
      heroDescription: UI_UX_HERO_DESCRIPTION,
      heroImage: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255606/website-images/ggr6qpqd3u7yoynlacon.png",
      sections: [
        {
          id: 1,
          title: "Landing Page / Website Design",
          slug: "landing-page-website-design",
          description:
            "Turn your landing page into real momentum with conversion-focused designs.",
          image: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255609/website-images/s3r7ctaxopspyfdhe7xs.png",
          cardTheme: "dark",
          cardSize: "large",
          contentClassName: "items-start justify-start p-[34px]",
          imageClassName: "object-cover",
          detailPage: {
            title: "Landing Page / Website Design",
            description:
              "Turn your landing page into real momentum with conversion-focused designs.",
            image: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255606/website-images/ggr6qpqd3u7yoynlacon.png",
          },
        },
        {
          id: 2,
          title: "Brand Design & Identity",
          slug: "brand-design-identity",
          description:
            "We craft distinctive brand identities and designs that communicate your vision and make your business memorable.",
          image: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255610/website-images/omzu8niyvythesebf52e.png",
          cardTheme: "light",
          cardSize: "small",
          contentClassName: "items-start justify-start p-[34px]",
          imageClassName: "object-cover object-right",
          detailPage: {
            title: "Brand Design & Identity",
            description:
              "We craft distinctive brand identities and designs that communicate your vision and make your business memorable.",
            image: "/servicebrand.png",
          },
        },
        {
          id: 3,
          title: "Mobile Application Design",
          slug: "mobile-application-design",
          description:
            "We design mobile application experiences with clear user flows, modern UI and scalable design systems.",
          image: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255613/website-images/mdm5whcxrfztrusnqpv2.png",
          cardTheme: "blue",
          cardSize: "tall",
          contentClassName: "items-start justify-start p-[34px]",
          imageClassName: "object-contain object-bottom px-[70px] pt-[130px]",
          detailPage: {
            title: "Mobile Application Design",
            description:
              "We design mobile application experiences with clear user flows, modern UI and scalable design systems.",
            image: "/servicemobile.png",
          },
        },
        {
          id: 4,
          title: "Design System & UI Kit",
          slug: "design-system-ui-kit",
          description:
            "We create reusable UI kits, design tokens and scalable component systems for consistent digital products.",
          image: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255611/website-images/nyjpbbauydjvqadi6sjo.png",
          cardTheme: "light",
          cardSize: "small",
          contentClassName: "items-center justify-center p-[34px] pl-[220px]",
          imageClassName: "object-cover object-left",
          detailPage: {
            title: "Design System & UI Kit",
            description:
              "We create reusable UI kits, design tokens and scalable component systems for consistent digital products.",
            image: "/serviceuikit.png",
          },
        },
      ],
    },
  },
  {
    id: 2,
    title: "Frontend & Backend Development",
    slug: "frontend-backend-development",
    description:
      "We build reliable, scalable digital solutions aligned with your business goals.",
    image: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255601/website-images/hlu7pvlhtx1cl8aoju2z.png",
    alt: "Frontend and Backend Development",
    cardType: "wide",
    bgColor: "#4E641F",
    detailPage: {
      heroTitle: "Frontend & Backend Development",
      heroDescription: DEVELOPMENT_HERO_DESCRIPTION,
      heroImage: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255601/website-images/hlu7pvlhtx1cl8aoju2z.png",
      sections: [
        {
          id: 1,
          title: "Website Development",
          slug: "website-development",
          description:
            "We build fast, responsive and scalable websites with clean frontend structure and backend support.",
          image: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255565/website-images/zfl8ib3yqeuxtotb83lt.png",
          cardTheme: "dark",
          cardSize: "large",
          contentClassName: "items-start justify-start p-[34px]",
          imageClassName: "object-cover",
          detailPage: {
            title: "Website Development",
            description:
              "We build fast, responsive and scalable websites with clean frontend structure and backend support.",
            image: "/developmentwebsite.png",
          },
        },
        {
          id: 2,
          title: "Mobile & Web Application Development",
          slug: "mobile-application-development",
          description:
            "We develop mobile and web applications with smooth interfaces, secure APIs and scalable architecture.",
          image: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255569/website-images/qiw3jaz02nnhroffzhqy.png",
          cardTheme: "dark",
          cardSize: "tall",
          contentClassName: "items-start justify-start p-[34px]",
          imageClassName: "object-contain object-bottom px-[70px] pt-[110px]",
          detailPage: {
            title: "Mobile & Web Application Development",
            description:
              "We develop mobile and web applications with smooth interfaces, secure APIs and scalable architecture.",
            image: "/developmentmobile.png",
          },
        },
        {
          id: 3,
          title: "SaaS Product Development",
          slug: "saas-product-development",
          description:
            "We build scalable SaaS products with authentication, dashboards, subscriptions, APIs and admin workflows.",
          image: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255570/website-images/dpdmuzqhw1wibeqfjsm7.png",
          cardTheme: "light",
          cardSize: "small",
          contentClassName: "items-center justify-center p-[34px] pl-[220px]",
          imageClassName: "object-cover object-left",
          detailPage: {
            title: "SaaS Product Development",
            description:
              "We build scalable SaaS products with authentication, dashboards, subscriptions, APIs and admin workflows.",
            image: "/developmentsaas.png",
          },
        },
        {
          id: 4,
          title: "CRM & ERP Development",
          slug: "crm-erp-development",
          description:
            "We build scalable CRM & ERP systems that simplify workflows, automate operations and boost efficiency.",
          image: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255567/website-images/ky2dbmqeihgyuy0p6joh.png",
          cardTheme: "light",
          cardSize: "small",
          contentClassName: "items-center justify-center p-[34px] pl-[0px]",
          imageClassName: "object-cover object-right",
          detailPage: {
            title: "CRM & ERP Development",
            description:
              "We build scalable CRM & ERP systems that simplify workflows, automate operations and boost efficiency.",
            image: "/developmentcrm.png",
          },
        },
      ],
    },
  },
  {
    id: 3,
    title: "Marketing",
    slug: "marketing",
    description:
      "Smart strategies focused on real growth, your audience, your brand, and measurable success.",
    image: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255603/website-images/e2nexbk4opwgc2pkg5gs.png",
    alt: "Marketing",
    cardType: "small",
    detailPage: {
      heroTitle: "Marketing",
      heroDescription: MARKETING_HERO_DESCRIPTION,
      heroImage: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255603/website-images/e2nexbk4opwgc2pkg5gs.png",
      sections: [
        {
          id: 1,
          title: "Performance Marketing",
          slug: "performance-marketing",
          description:
            "Campaigns focused on leads, conversions and measurable business growth.",
          image: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255603/website-images/e2nexbk4opwgc2pkg5gs.png",
          cardTheme: "dark",
          cardSize: "large",
          contentClassName: "items-start justify-start p-[34px]",
          imageClassName: "object-cover",
          detailPage: {
            title: "Performance Marketing",
            description:
              "Campaigns focused on leads, conversions and measurable business growth.",
            image: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255603/website-images/e2nexbk4opwgc2pkg5gs.png",
          },
        },
      ],
    },
  },
];

export const normalizeServiceSlug = (slug: string) => {
  return String(slug || "").trim().toLowerCase();
};

export const getServiceBySlug = (slug: string) => {
  const cleanSlug = normalizeServiceSlug(slug);

  return services.find(
    (service) => normalizeServiceSlug(service.slug) === cleanSlug
  );
};

export const getServiceSectionBySlug = (
  serviceSlug: string,
  sectionSlug: string
) => {
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return null;
  }

  const cleanSectionSlug = normalizeServiceSlug(sectionSlug);

  const section = service.detailPage.sections.find(
    (item) => normalizeServiceSlug(item.slug) === cleanSectionSlug
  );

  if (!section) {
    return null;
  }

  return {
    service,
    section,
  };
};