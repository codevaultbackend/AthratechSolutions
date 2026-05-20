"use client";

import Image from "next/image";
import Link from "next/link";

type ServiceSection = {
  slug: string;
  title: string;
  description: string;
  image: string;
  cardTheme: "blue" | "dark" | "light" | string;
};

type ServiceType = {
  slug: string;
  detailPage: {
    sections: ServiceSection[];
  };
};

type CardsProps = {
  service: ServiceType;
};

const normalizeSlug = (value: string) => {
  return String(value || "").trim().toLowerCase();
};

const isDevelopmentService = (serviceSlug: string) => {
  return normalizeSlug(serviceSlug) === "frontend-backend-development";
};

const getOrderedSections = (
  serviceSlug: string,
  sections: ServiceSection[]
) => {
  if (!isDevelopmentService(serviceSlug)) {
    return sections;
  }

  const wantedOrder = [
    "website-development",
    "crm-erp-development",
    "crp-erp-developement",
    "crm-erp-developement",
    "saas-product-development",
    "saas-products-development",
    "mobile-application-development",
    "mobile-webapplication-design",
  ];

  const ordered = wantedOrder
    .map((slug) =>
      sections.find((section) => normalizeSlug(section.slug) === slug)
    )
    .filter(Boolean) as ServiceSection[];

  const remaining = sections.filter(
    (section) =>
      !ordered.some(
        (orderedSection) =>
          normalizeSlug(orderedSection.slug) === normalizeSlug(section.slug)
      )
  );

  return [...ordered, ...remaining];
};

const getCardBgClass = (theme: string) => {
  if (theme === "blue") return "bg-[#305BC0]";
  if (theme === "dark") return "bg-[#6d6d6d]";
  return "bg-[#F4F3F7]";
};

const getDevelopmentGridClass = (slug: string) => {
  const cleanSlug = normalizeSlug(slug);

  if (cleanSlug === "website-development") {
    return `
      lg:col-start-1 
      lg:col-end-7 
      lg:row-start-1 
      lg:row-end-3
    `;
  }

  if (
    cleanSlug === "crm-erp-development" ||
    cleanSlug === "crm-erp-developement" ||
    cleanSlug === "crp-erp-developement"
  ) {
    return `
      lg:col-start-7 
      lg:col-end-13 
      lg:row-start-1 
      lg:row-end-2
    `;
  }

  if (
    cleanSlug === "saas-product-development" ||
    cleanSlug === "saas-products-development"
  ) {
    return `
      lg:col-start-1 
      lg:col-end-7 
      lg:row-start-3 
      lg:row-end-4
    `;
  }

  if (
    cleanSlug === "mobile-application-development" ||
    cleanSlug === "mobile-webapplication-design"
  ) {
    return `
      lg:col-start-7 
      lg:col-end-13 
      lg:row-start-2 
      lg:row-end-4
    `;
  }

  return "lg:col-span-6";
};

const getDefaultGridClass = (index: number) => {
  if (index === 0) {
    return `
      lg:col-start-1 
      lg:row-start-1 
      lg:row-span-2
    `;
  }

  if (index === 1) {
    return `
      lg:col-start-2 
      lg:row-start-1
    `;
  }

  if (index === 2) {
    return `
      lg:col-start-2 
      lg:row-start-2 
      lg:row-span-2
    `;
  }

  return `
    lg:col-start-1 
    lg:row-start-3
  `;
};

const getHeightClass = (
  serviceSlug: string,
  slug: string,
  index: number
) => {
  if (isDevelopmentService(serviceSlug)) {
    const cleanSlug = normalizeSlug(slug);

    if (
      cleanSlug === "website-development" ||
      cleanSlug === "mobile-application-development" ||
      cleanSlug === "mobile-webapplication-design"
    ) {
      return `
        min-h-[320px]
        max-[768px]:min-h-[420px]
        bg-[#060301]
        md:min-h-[500px]
        lg:min-h-0
      `;
    }

    return `
      min-h-[220px]
      sm:min-h-[280px]
      lg:min-h-0
    `;
  }

  if (index === 0 || index === 2) {
    return `
      min-h-[320px]
      sm:min-h-[420px]
      lg:min-h-0
    `;
  }

  return `
    min-h-[220px]
    sm:min-h-[280px]
    lg:min-h-0
  `;
};

const getImageClass = (
  serviceSlug: string,
  slug: string,
  index: number
) => {
  const cleanServiceSlug = normalizeSlug(serviceSlug);
  const cleanSlug = normalizeSlug(slug);

  if (cleanServiceSlug === "frontend-backend-development") {
    if (cleanSlug === "website-development") {
      return `
        object-cover
        object-center
        sm:object-bottom
      `;
    }

    if (
      cleanSlug === "crm-erp-development" ||
      cleanSlug === "crm-erp-developement" ||
      cleanSlug === "crp-erp-developement"
    ) {
      return `
        object-contain
        object-bottom
        !w-[52%]
        !h-[58%]
        !right-2
        !left-auto
        !top-auto
        !bottom-2

        sm:!w-[45%]
        sm:!h-[80%]

        lg:!w-[48%]
        lg:!h-full
      `;
    }

    if (
      cleanSlug === "saas-product-development" ||
      cleanSlug === "saas-products-development"
    ) {
      return `
        object-contain
        object-bottom

        !w-[46%]
        !h-[70%]
        !left-2
        !bottom-0
        !top-auto

        sm:!w-[34%]
      `;
    }

    if (
      cleanSlug === "mobile-application-development" ||
      cleanSlug === "mobile-webapplication-design"
    ) {
      return `
        object-contain
        object-bottom

        !w-full
        !h-[72%]
        !right-0
        !bottom-0
        !top-auto
      `;
    }
  }

  const isUiUx =
    cleanServiceSlug === "ui-ux-design" ||
    cleanServiceSlug === "uiux" ||
    cleanServiceSlug.includes("ui-ux") ||
    cleanServiceSlug.includes("uiux");

  if (isUiUx) {
    switch (index) {
      case 0:
        return "object-cover object-center !h-[70%] !top-auto";

      case 1:
        return `
          object-cover
          !w-[45%]
          sm:!w-[34%]
          !ml-auto
          !right-0
          !left-auto
        `;

      case 2:
        return `
          object-contain
          object-bottom
          px-6
          pt-20
          sm:px-[76px]
          sm:pt-[128px]
          !h-[90%]
          !top-auto
        `;

      case 3:
        return `
          object-cover
          !w-[180px]
          max-[768px]:!top-0
          max-[768px]:!w-[130px]
          sm:!w-[220px]
          !left-0
        `;

      default:
        return "object-cover object-center";
    }
  }

  switch (index) {
    case 0:
      return "object-cover object-center";

    case 1:
      return `
        object-cover
        object-center
        !left-auto
        !right-0
        !w-[55%]
      `;

    case 2:
      return `
        object-contain
        object-bottom
        px-6
        pt-20
        sm:px-[56px]
        sm:pt-[96px]
      `;

    case 3:
      return `
        object-cover
        object-left
        !w-[49%]
      `;

    default:
      return "object-cover object-center";
  }
};

const getContentClass = (
  serviceSlug: string,
  slug: string,
  index: number
) => {
  const cleanServiceSlug = normalizeSlug(serviceSlug);
  const cleanSlug = normalizeSlug(slug);

  if (cleanServiceSlug === "frontend-backend-development") {
    if (
      cleanSlug === "crm-erp-development" ||
      cleanSlug === "crm-erp-developement" ||
      cleanSlug === "crp-erp-developement"
    ) {
      return `
        items-start
        justify-start
       w-[60%]
       mr-auto
       ml-0
        p-5
        pr-[42%]

        sm:p-8
        sm:pr-[260px]
        max-[768px]:max-w-[100%]
        max-[768px]:w-[100%]

        lg:p-8
      `;
    }

    if (
      cleanSlug === "saas-product-development" ||
      cleanSlug === "saas-products-development"
    ) {
      return `
        items-start
        justify-center
        p-5
        pl-[42%]
        w-[60%]
        max-[768px]:max-w-[100%]
        max-[768px]:w-[100%]
        ml-auto
        sm:p-8
        sm:pl-[230px]

        lg:p-8
      `;
    }

    return `
      items-start
      justify-start
      p-5
      sm:p-8
    `;
  }

  if (index === 3) {
    return `
      items-start
      justify-center

      p-5
      pl-[42%]

      sm:p-8
      sm:pl-[240px]
      
    `;
  }
  if (index === 1) {
    return `
    max-[768px]:w-[60%]
     p-5
      
    `;
  }


  return `
    items-start
    justify-start
    p-5
    sm:p-8
  `;
};

const getTitleClass = (
  serviceSlug: string,
  slug: string,
  index: number
) => {
  return `
    max-w-[92%]

    text-[24px]
    leading-[1.08]

    sm:text-[28px]
    md:text-[30px]
    lg:text-[34px]
  `;
};

const getDescriptionClass = (
  serviceSlug: string,
  slug: string,
  index: number
) => {
  return `
    max-w-[92%]

    text-[13px]
    leading-[1.55]

    sm:max-w-[320px]
    sm:text-[14px]
  `;
};

export default function CardGrid({ service }: CardsProps) {
  const finalSections = getOrderedSections(
    service.slug,
    service.detailPage.sections
  );

  const getHref = (serviceSlug: string, item: ServiceSection) => {
    const cleanSlug = normalizeSlug(item.slug);

    const isCrmErp =
      cleanSlug.includes("crm") && cleanSlug.includes("erp");

    if (isCrmErp) {
      return `/services/${serviceSlug}/saas-product-development`;
    }

    return `/services/${serviceSlug}/${item.slug}`;
  };

  return (
    <section className="px-4 pt-[50px] sm:px-6 md:px-8 lg:px-10 lg:pt-[52px]">
      <div
        className={[
          "mx-auto w-full max-w-[1120px]",
          "grid grid-cols-1 gap-5 py-[20px]",

          isDevelopmentService(service.slug)
            ? `
              lg:grid-cols-12
              lg:grid-rows-[220px_270px_220px]
              lg:gap-x-[42px]
              lg:gap-y-[38px]
            `
            : `
              lg:grid-cols-2
              lg:grid-rows-[220px_220px_220px]
              lg:gap-x-[42px]
              lg:gap-y-[38px]
            `,
        ].join(" ")}
      >
        {finalSections.map((item, index) => {
          const isLight = item.cardTheme === "light";

          return (
            <Link
              key={item.slug}
              href={getHref(service.slug, item)}
              aria-label={`Open ${item.title}`}
              className={[
                "group relative block overflow-hidden",
                "rounded-[24px] sm:rounded-[32px] lg:rounded-[40px]",
                "outline-none",
                "transition-all duration-300 hover:-translate-y-[2px]",
                "focus-visible:ring-2 focus-visible:ring-black/50",
                "shadow-[0px_4px_4px_0px_#00000040]",
                "hover:shadow-[0px_4px_4px_0px_#00000040]",

                isDevelopmentService(service.slug)
                  ? getDevelopmentGridClass(item.slug)
                  : getDefaultGridClass(index),

                getHeightClass(service.slug, item.slug, index),
                getCardBgClass(item.cardTheme),
              ].join(" ")}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority={index === 0}
                quality={100}
                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 50vw,
                  560px
                "
                className={[
                  "transition-transform duration-700 group-hover:scale-[1.02]",
                  getImageClass(service.slug, item.slug, index),
                ].join(" ")}
              />

              <div
                className={[
                  "relative z-10 flex h-full min-h-[inherit] flex-col ",
                  getContentClass(service.slug, item.slug, index),
                ].join(" ")}
              >
                <h2
                  className={[
                    "font-bricolage font-medium tracking-[-0.058em]",
                    getTitleClass(service.slug, item.slug, index),
                    isLight ? "text-[#2A2A2A]" : "text-white",
                  ].join(" ")}
                >
                  {item.title}
                </h2>

                <p
                  className={[
                    "mt-3 font-inter font-normal tracking-[-0.035em]",
                    getDescriptionClass(service.slug, item.slug, index),
                    isLight ? "text-[#666666]" : "text-white/82",
                  ].join(" ")}
                >
                  {item.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}