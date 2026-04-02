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

export type CaseStudyMeta = {
  label: string;
  value: string;
};

export type CaseStudyImageCard = {
  image: string;
  alt: string;
  className?: string;
  imageClassName?: string;
};

export type ProjectCaseStudy = {
  layoutVariant?: "markday" | "fastresponse" | "default";
  heroDescription: string;
  heroHighlight?: string;
  heroImage: string;
  heroImageAlt: string;
  meta: CaseStudyMeta[];

  sectionOneTitle: string;
  sectionOneDescription: string;

  sectionOneImages?: [CaseStudyImageCard, CaseStudyImageCard];

  sectionOneStackImages?: [
    CaseStudyImageCard,
    CaseStudyImageCard,
    CaseStudyImageCard
  ];

  sectionOneMarkDayStackImages?: [
    CaseStudyImageCard,
    CaseStudyImageCard,
    CaseStudyImageCard
  ];

  sectionTwoTitle: string;
  sectionTwoDescription: string;

  sectionTwoTopImages?: [CaseStudyImageCard, CaseStudyImageCard];

  sectionTwoBottomImage: CaseStudyImageCard;
};

export type ProjectItem = {
  title: string;
  slug: string;
  description: string;
  image: string;
  image2?: string;
  reverse: boolean;
  imageBg: string;
  imageConfig: ProjectImageConfig;
  details: ProjectDetail[];
  hasCaseStudy?: boolean;
  websiteUrl?: string;
  caseStudy?: ProjectCaseStudy;
};

export const projectsData: ProjectItem[] = [
  {
    title: "Mark Day",
    slug: "markday",
    description:
      "An intuitive attendance portal designed for seamless tracking and leave management, enhancing workforce efficiency and contributing to scalable organizational growth.",
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
    hasCaseStudy: true,
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
    caseStudy: {
      layoutVariant: "markday",
      heroDescription:
        "An intuitive attendance portal designed for seamless tracking and leave management, enhancing workforce efficiency and contributing to scalable organizational growth.",
      heroHighlight: "designed for seamless tracking and leave management",
      heroImage: "/Attendance1.png",
      heroImageAlt: "Mark Day attendance portal hero image",
      meta: [
        {
          label: "Role",
          value: "UI/UX, Strategy, Development",
        },
        {
          label: "Platform",
          value: "Web Responsive",
        },
      ],

      sectionOneTitle: "Workforce Tracking Redefined",
      sectionOneDescription:
        "The attendance application was limited by a basic, outdated interface that failed to reflect its full capabilities. This hindered user experience, efficiency, and overall scalability. The goal was to transform it into a modern, intuitive platform that streamlines attendance, simplifies leave management, and delivers a seamless experience for organizations and their workforce.",
      sectionOneMarkDayStackImages: [
        {
          image: "/Attendance2.png",
          alt: "Mark Day mobile screen preview",
          imageClassName: "object-cover object-center w-full h-full",
        },
        {
          image: "/Attendance3.png",
          alt: "Mark Day desktop dashboard preview",
          imageClassName: "object-cover object-center w-full h-full",
        },
        {
          image: "/Attendance4.png",
          alt: "Mark Day attendance calendar screen",
          imageClassName:
            "object-contain object-center w-full h-full p-3 md:p-5 lg:p-6 scale-[0.96]",
        },
      ],

      sectionTwoBottomImage: {
        image: "/Attendance5.png",
        alt: "Mark Day attendance insight screen",
        imageClassName: "object-cover object-center w-full h-full",
      },

      sectionTwoTitle: "Improving Attendance Accuracy & Insights",
      sectionTwoDescription:
        "Mark Day gives organizations better visibility into attendance behavior, leave tracking, and day-to-day workforce activity. It helps teams reduce manual effort, improve clarity, and make smarter operational decisions through a more connected attendance experience.",
      sectionTwoBottomImage: {
        image: "/Attendance5.png",
        alt: "Mark Day attendance insight screen",
        className:
          "rounded-[20px] bg-black min-h-[260px] md:min-h-[520px] overflow-hidden",
        imageClassName: "object-cover w-full h-full",
      },
    },
  },
  {
    title: "Fast Response",
    slug: "fastresponse",
    description:
      "FastResponse is a platform for quickly booking trusted professionals for household services, offering seamless scheduling and a fast, hassle-free experience.",
    image: "/fastresponce1.png",
    reverse: true,
    imageBg: "linear-gradient(135deg, #020617 0%, #111827 45%, #000000 100%)",
    imageConfig: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      top: "0%",
      left: "0%",
    },
    hasCaseStudy: true,
    details: [
      {
        title: "Quick Service Booking",
        description:
          "Users can discover and book trusted household professionals with a fast, intuitive flow.",
      },
      {
        title: "Better Visibility & Operations",
        description:
          "Improves technician scheduling, job tracking, and service efficiency across the platform.",
      },
    ],
    caseStudy: {
      layoutVariant: "fastresponse",
      heroDescription:
        "FastResponse is a platform for quickly booking trusted professionals for household services, offering seamless scheduling and a fast, hassle-free experience.",
      heroHighlight:
        "quickly booking trusted professionals for household services",
      heroImage: "/fastresponce1.png",
      heroImageAlt: "FastResponse app hero image",
      meta: [
        {
          label: "Role",
          value: "UI/UX, Strategy, Development",
        },
        {
          label: "Platform",
          value: "Mobile Application",
        },
      ],

      sectionOneTitle: "Household Services, Reimagined",
      sectionOneDescription:
        "A visually delightful yet practical experience that helps users find trusted service professionals for everyday home needs. From repairs and maintenance to technician bookings, FastResponse brings speed, clarity, and convenience into a single seamless flow.",

      sectionOneStackImages: [
        {
          image: "/fastresponce2.png",
          alt: "FastResponse mobile booking interface",
          className:
            "rounded-[16px] md:rounded-[22px] bg-[#F1F1F1] overflow-hidden",
          imageClassName:
            "object-contain object-center w-full h-full p-4 sm:p-5 md:p-8",
        },
        {
          image: "/fastresponce3.png",
          alt: "Technician service visual",
          className:
            "rounded-[16px] md:rounded-[22px] bg-[#F1F1F1] overflow-hidden",
          imageClassName: "object-cover object-center w-full h-full",
        },
        {
          image: "/fastresponce4.png",
          alt: "Book your technician caption card",
          className:
            "rounded-[16px] md:rounded-[22px] bg-transparent overflow-hidden",
          imageClassName: "object-contain object-left w-full h-full",
        },
      ],

      sectionTwoTitle: "Improving Service Efficiency & Visibility",
      sectionTwoDescription:
        "FastResponse was designed to simplify how users search, compare, and book technicians while giving businesses greater operational visibility. The experience improves booking speed, service discoverability, scheduling clarity, and trust across the complete customer journey.",
      sectionTwoTopImages: [
        {
          image: "/fastresponce5.png",
          alt: "FastResponse map and tracking UI",
          className:
            "rounded-[16px] md:rounded-[22px] bg-[#F1F1F1] overflow-hidden",
          imageClassName:
            "object-contain object-center w-full h-full p-3 sm:p-4 md:p-6",
        },
        {
          image: "/fastresponce6.png",
          alt: "FastResponse premium salon service banner",
          className:
            "rounded-[16px] md:rounded-[22px] bg-[#F1F1F1] overflow-hidden",
          imageClassName: "object-cover object-center w-full h-full",
        },
      ],
      sectionTwoBottomImage: {
        image: "/fastresponce7.png",
        alt: "Happy customers using FastResponse services",
        className:
          "rounded-[16px] md:rounded-[22px] bg-[#F1F1F1] overflow-hidden",
        imageClassName: "object-cover object-center w-full h-full",
      },
    },
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
    websiteUrl: "https://www.sankalpsetufoundation.org/",
    details: [],
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
    websiteUrl: "https://your-live-site.com",
    details: [],
  },
];