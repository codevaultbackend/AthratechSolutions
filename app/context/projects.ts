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
    image: "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/Project4_YJROaams7.jpg",
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
      heroImage: "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/Attendance1_7sGFXRW_s.jpg",
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
          image: "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/Attendance2__4yiuvcHF.jpg",
          alt: "Mark Day mobile screen preview",
          imageClassName: "object-cover object-center w-full h-full",
        },
        {
          image: "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/Attendance3_GZPXEUdqP.jpg",
          alt: "Mark Day desktop dashboard preview",
          imageClassName: "object-cover object-center w-full h-full",
        },
        {
          image: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1775215039/Attendance4_emhfo1.png",
          alt: "Mark Day attendance calendar screen",
          imageClassName:
            "object-contain object-center w-full h-full p-3 md:p-5 lg:p-6 scale-[0.96]",
        },
      ],

      sectionTwoBottomImage: {
        image: "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/Attendance5_T05xQ_lLL.jpg",
        alt: "Mark Day attendance insight screen",
        imageClassName: "object-cover object-center w-full h-full",
      },

      sectionTwoTitle: "Improving Attendance Accuracy & Insights",
      sectionTwoDescription:
        "Mark Day gives organizations better visibility into attendance behavior, leave tracking, and day-to-day workforce activity. It helps teams reduce manual effort, improve clarity, and make smarter operational decisions through a more connected attendance experience.",
      sectionTwoBottomImage: {
        image: "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/Attendance5_T05xQ_lLL.jpg",
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
    image: "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/Project3_wIA5PzDqk.jpg",
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
      heroImage: "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/fastresponce1_LvsKDntV5.jpg",
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
          image: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1775215667/fastresponce2_fkmrkz.png",
          alt: "FastResponse mobile booking interface",
          className:
            "rounded-[16px] md:rounded-[22px] bg-[#F1F1F1] overflow-hidden",
          imageClassName:
            "object-contain object-center w-full h-full p-4 sm:p-5 md:p-8",
        },
        {
          image: "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/fastresponce3_XT1BVsD6j.jpg",
          alt: "Technician service visual",
          className:
            "rounded-[16px] md:rounded-[22px] bg-[#F1F1F1] overflow-hidden",
          imageClassName: "object-cover object-center w-full h-full",
        },
        {
          image: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1775198144/fastresponce4_dzib4i.png",
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
          image: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1775198150/fastresponce5_idni7b.png",
          alt: "FastResponse map and tracking UI",
          className:
            "rounded-[16px] md:rounded-[22px] bg-[#F1F1F1] overflow-hidden",
          imageClassName:
            "object-contain object-center w-full h-full p-3 sm:p-4 md:p-6",
        },
        {
          image: "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/fastresponce6_C5KAAqV81.jpg",
          alt: "FastResponse premium salon service banner",
          className:
            "rounded-[16px] md:rounded-[22px] bg-[#F1F1F1] overflow-hidden",
          imageClassName: "object-cover object-center w-full h-full",
        },
      ],
      sectionTwoBottomImage: {
        image: "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/fastresponce7_7zgy4TIHU.jpg",
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
    image: "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/SankalpSetu_bVzi2YGgL.jpg",
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
  }
];