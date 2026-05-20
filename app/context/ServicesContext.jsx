"use client";

import React, {
  createContext,
  useContext,
  useMemo,
} from "react";

const ServicesContext = createContext(null);

const slugify = (value = "") => {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

const rawServices = [
  {
    title: "UI/UX Design",
    description:
      "Where design meets motion and performance. Thoughtfully crafted experiences that engage, impress, and convert.",
    image:
      "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255606/website-images/ggr6qpqd3u7yoynlacon.png",
    variant: "featured",
  },

  {
    title: "Frontend & Backend Development",
    description:
      "We build reliable, scalable digital solutions aligned with your business goals. Focused on performance and usability, we ensure everything runs seamlessly as you grow.",
    image: "/servicefrontend.png",
    variant: "green",
  },

  {
    title: "Marketing",
    description:
      "We create focused marketing strategies that improve visibility, attract the right audience, and help your brand grow with consistency.",
    image:
      "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255603/website-images/e2nexbk4opwgc2pkg5gs.png",
    variant: "dark",
  },

  {
    title: "Want Point Solution",
    description:
      "A complete solution approach for brands that need design, development, performance, and digital growth under one clear process.",
    image: "/servicepointsolution.png",
    variant: "purple",
  },
];

export const ServicesProvider = ({ children }) => {
  const services = useMemo(() => {
    return rawServices.map((service, index) => {
      const slug = slugify(service.title);

      return {
        ...service,
        id: index + 1,
        slug,
        route: `/info/${slug}`,
      };
    });
  }, []);

  const featuredService = services.find(
    (service) => service.variant === "featured"
  );

  const secondaryServices = services.filter(
    (service) => service.variant !== "featured"
  );

  return (
    <ServicesContext.Provider
      value={{
        services,
        featuredService,
        secondaryServices,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export const useServicesContext = () => {
  const context = useContext(ServicesContext);

  if (!context) {
    throw new Error(
      "useServicesContext must be used inside ServicesProvider"
    );
  }

  return context;
};