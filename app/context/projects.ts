export type ProjectDetail = {
  title: string;
  description: string;
};

export type ProjectImageConfig = {
  width: string;
  height: string;
  objectFit?: "contain" | "cover";
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

export type ProjectItem = {
  title: string;
  slug: string;
  description: string;
  image: string;
  reverse: boolean;
  imageBg: string;
  imageConfig: ProjectImageConfig;
  details: ProjectDetail[];
};

export const projectsData: ProjectItem[] = [
  {
    title: "Mark Day",
    slug: "markday",
    description:
      "Mark Day (Attendance Portal) helps companies streamline employee attendance management through secure real-time tracking, biometric verification, and cloud-based automation across India.",
    image: "/Project1.png",
    reverse: false,
    imageBg: "linear-gradient(135deg, #0F172A 0%, #1E293B 45%, #334155 100%)",
    imageConfig: {
      width: "110%",
      height: "110%",
      objectFit: "contain",
      top: "-10%",
      left: "-10%",
    },
    details: [
      {
        title: "Biometric & GPS Attendance Tracking",
        description:
          "Facial recognition, fingerprint, and GPS verification for secure, tamper-proof attendance.",
      },
      {
        title: "End-to-End Attendance Management",
        description:
          "Manages check-ins, leave, shifts, overtime, and payroll in one mobile-friendly system.",
      },
    ],
  },
  {
    title: "SankalpSetu Foundation",
    slug: "sankalpsetufoundation",
    description:
      "Empowering underserved communities through education, healthcare, and skill development—bridging hope with opportunity.",
    image: "/SankalpSetu.png",
    reverse: true,
    imageBg: "#EDEDED",
    imageConfig: {
      width: "140%",
      height: "140%",
      objectFit: "contain",
      top: "-20%",
      left: "-16%",
    },
    details: [
      {
        title: "Education",
        description:
          "Supporting children with access to learning and awareness programs.",
      },
      {
        title: "Healthcare",
        description:
          "Providing essential aid, hygiene support, and community health initiatives.",
      },
      {
        title: "Skill Development",
        description:
          "Enabling youth with vocational training for sustainable livelihoods.",
      },
    ],
  },
  {
    title: "Chugen Hatcheries",
    slug: "chugenhatcheries",
    description:
      "Chugen Hatcheries delivers high-quality day-old chicks, sustainable hatching solutions, and expert poultry care across India.",
    image: "/Project2.png",
    reverse: false,
    imageBg: "#EFEFEF",
    imageConfig: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      top: "0%",
      left: "0%",
    },
    details: [
      {
        title: "High-Quality Chicks",
        description:
          "Superior broiler and layer chicks—healthy, uniform, and vaccinated for top performance in commercial and farm setups.",
      },
      {
        title: "Poultry Hatchery & Equipment",
        description:
          "Advanced hatching technology, incubators, brooders, and farm essentials manufactured with precision for reliable results.",
      },
      {
        title: "Training & Expert Support",
        description:
          "Hands-on poultry training programs and guidance to help farmers scale efficiently and sustainably.",
      },
    ],
  },
  {
    title: "Man Power Solutions",
    slug: "manpower",
    description:
      "Manpower Solutions helps companies scale faster through structured bulk hiring from top colleges across India.",
    image: "/mpsmockup.png",
    reverse: true,
    imageBg: "linear-gradient(135deg, #312E81 0%, #4F46E5 50%, #4C3AA5 100%)",
    imageConfig: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      top: "0.6%",
      left: "0%",
    },
    details: [
      {
        title: "Campus Hiring Network",
        description:
          "Access to a wide network of reputed colleges for efficient bulk hiring.",
      },
      {
        title: "End-to-End Recruitment",
        description:
          "Manages sourcing, screening, and onboarding in one streamlined system.",
      },
      {
        title: "Faster Talent Acquisition",
        description:
          "Helps companies hire qualified candidates quickly at scale.",
      },
    ],
  },
];