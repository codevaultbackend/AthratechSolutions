"use client";

import Image from "next/image";
import Link from "next/link";

/* =========================================================
   TYPES
========================================================= */

type Project = {
  title: string;
  description: string;
  image: string;
  href: string;
  imageClassName: string;
};

/* =========================================================
   TRUSTED AVATARS
========================================================= */

const trustedAvatars = [
  "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/trusted2_Gpx2WsvJL.jpg",
  "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/trusted1_SqdS_J0U0.jpg",
  "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/trusted3_Z1_e49fKev.jpg",
  "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/trusted4_Ktz0pbcRZ.jpg",
  "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/trusted5_SyyYgiQk2.jpg",
];

/* =========================================================
   PROJECT DATA

   Order intentionally matches the Figma:

   1. Mark Day
   2. Star Foundation
   3. Fast Response
   4. Sankalp Setu
   5. ERP / Manpower Solutions
   6. Quick Cargo
========================================================= */

const projects: Project[] = [
  {
    title: "Mark Day",
    description:
      "A smart attendance and leave management system enabling seamless check-ins, leave requests, and history tracking—built to simplify workforce management and boost organizational efficiency.",
    image: "/markdaymock.png",
    href: "/projects/markday",
    imageClassName:
      "h-[280px] w-full max-w-[430px] object-contain sm:h-[300px] lg:h-[310px] xl:h-[330px]",
  },
  {
    title: "Star 154 Foundations",
    description:
      "A poultry farm focused on efficient livestock management, ensuring healthy bird production, quality output, and sustainable practices to meet growing food and supply demands.",
    image: "/starfoundationmock.png",
    href: "https://www.star154foundation.org",
    imageClassName:
      "h-[280px] w-full max-w-[430px] object-contain sm:h-[300px] lg:h-[310px] xl:h-[330px]",
  },
  {
    title: "Fast Response",
    description:
      "A fast-response platform to quickly book trusted professionals for electrical, plumbing, cleaning, carpentry, and other household services—ensuring reliable and hassle-free service.",
    image: "/fastresmock.png",
    href: "/projects/fastresponse",
    imageClassName:
      "h-[280px] w-full max-w-[430px] object-contain bg-[#060302] rounded-[32px] sm:h-[300px] lg:h-[310px] xl:h-[330px]",
  },
  {
    title: "SankalPSetu Foundation",
    description:
      "Empowering underserved communities through education, healthcare, and skill development—bridging hope with opportunity.",
    image: "/sankalsetumock.png",
    href: "https://sankalpsetufoundation.org/",
    imageClassName:
      "h-[280px] w-full max-w-[430px] object-contain sm:h-[300px] lg:h-[310px] xl:h-[330px]",
  },
  {
    title: "ERP Ecosystem",
    description:
      "The Vibhushanam ERP Ecosystem is a centralized business management platform designed to streamline and digitize the core operations of a jewellery business.",
    image: "/erpmock.png",
    href: "/projects/erp-system",
    imageClassName:
      "h-[280px] w-full max-w-[430px] bg-[linear-gradient(180deg,_#4E4E4E_0%,_#272222_100%)] rounded-[32px] object-cover sm:h-[300px] lg:h-[310px] xl:h-[330px]",
  },
  {
    title: "Quick Cargo",
    description:
      "Quick Cargo connects customers, agency owners, and drivers through one intuitive platform for truck bookings, route management, and real-time shipment tracking.",
    image: "/quickcargomock.png",
    href: "/projects/quick-cargo",
    imageClassName:
      "h-[280px] w-full max-w-[430px] bg-[linear-gradient(180deg,_#4E4E4E_0%,_#272222_100%)] rounded-[32px] object-contain sm:h-[300px] lg:h-[310px] xl:h-[330px]",
  },
];

/* =========================================================
   ARROW ICON
========================================================= */

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
    >
      <path
        d="M3.5 9H14.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M9.75 4.25L14.5 9L9.75 13.75"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   TRUSTED AVATAR STACK
========================================================= */

function TrustedAvatars() {
  return (
    <div
      className="flex items-center"
      aria-label="Trusted by our clients"
    >
      {trustedAvatars.map((src, index) => (
        <div
          key={src}
          className={[
            "relative h-[26px] w-[26px] shrink-0 overflow-hidden rounded-full",
            "border border-black",
            index > 0 ? "-ml-[7px]" : "",
            "max-[767px]:h-[22px] max-[767px]:w-[22px]",
          ].join(" ")}
        >
          <img
            src={src}
            alt=""
            aria-hidden="true"
            className="block h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   LET'S TALK BUTTON
========================================================= */

function LetsTalkButton() {
  return (
    <Link
      href="/contact-us"
      aria-label="Let's Talk - contact us"
      className="group inline-flex shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#737373] focus-visible:ring-offset-4"
    >
      <span
        className="
          relative inline-flex rounded-full
          bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.35),rgba(180,180,180,0.25),rgba(120,120,120,0.15),transparent_70%)]
          shadow-[0_4px_14.6px_0_#959595]
          transition-transform duration-300 ease-out
          group-hover:-translate-y-0.5
          group-active:translate-y-0
        "
      >
        <span
          className="
            rounded-full
            bg-[linear-gradient(175deg,#F5F5F5,#BDBDBD,#8F8F8F,#666666)]
            p-[6px]
            shadow-[0_0_40px_rgba(180,180,180,0.5)]
          "
        >
          <span
            className="
              flex h-[56px] items-center gap-4
              rounded-full
              border-[0.5px] border-white
              bg-black
              px-4
              shadow-inner
              max-[767px]:h-[52px]
              max-[767px]:gap-3
              max-[767px]:px-4
            "
          >
            <span className="text-[16px] font-[500] tracking-[-0.02em] text-white">
              Let’s Talk
            </span>

            <TrustedAvatars />
          </span>
        </span>
      </span>
    </Link>
  );
}

/* =========================================================
   HANDWRITTEN BOOKING NOTE
========================================================= */

function BookingNote() {
  return (
    <div className="relative flex items-center max-[767px]:justify-center">
      <svg
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-[86px] top-[69px] rotate-[-10deg]
          hidden sm:block
        "
        width="98"
        height="44"
        viewBox="0 0 98 44"
        fill="none"
      >
        <path
          d="M96 39C78 43 34 47 10 16C6 11 3 6 1 1"
          stroke="#BDBDBD"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </svg>

      <p
        className="
          font-calligraffitti
          text-[22px]
          font-normal
          italic
          leading-[1.35]
          tracking-[-0.01em]
          text-[#ABABAB]
          sm:text-[24px]
          xl:text-[26px]
          max-[767px]:text-center
        "
      >
        We get booked fast 🚀
        <br />
        contact us now
      </p>
    </div>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group min-w-0 max-w-[362px]">
      {/* ---------------------------------------------------
          IMAGE
      --------------------------------------------------- */}

      <div
        className="
          relative flex
          h-[300px]
          w-full
          items-center
          justify-center
          overflow-hidden
          sm:h-[320px]
          lg:h-[340px]
          xl:h-[360px]
        "
      >
        <Image
          src={project.image}
          alt={`${project.title} project mockup`}
          width={700}
          height={500}
          priority={false}
          className={[
            project.imageClassName,
            "block",
            "transition-transform duration-500 ease-out",
            "group-hover:scale-[1.015]",
          ].join(" ")}
        />
      </div>

      {/* ---------------------------------------------------
          CONTENT
      --------------------------------------------------- */}

      <div className="">
        <h3 className="text-[28px] font-medium text-[#000000] font-bricolage leading-[100%] tracking-[0%]">{project.title}</h3>
        <p
          className="
            max-w-[430px]
            !mt-[22px]
            font-inter
            text-[16px]
            font-[400]
            leading-[100%]
            tracking-[0%]
            text-[#797979]
            sm:text-[17px]
            lg:text-[17px]
            xl:text-[18px]
          "
        >
          {project.description}
        </p>

        <Link
          href={project.href}
          className="
            mt-[20px]
            !h-fit
            inline-flex
            items-center
            gap-[8px]
            text-[16px]
            font-[600]
            font-geist
            tracking-[0%]
            text-[#4D7EF0]
            
          "
          aria-label={`View ${project.title} project`}
        >
          <span className="!h-fit ">View Project</span>

          <span className="!h-fit ">
            <ArrowIcon />
          </span>
        </Link>
      </div>
    </article>
  );
}

/* =========================================================
   PROJECT GRID
========================================================= */

function ProjectsGrid() {
  return (
    <section
      aria-label="Our projects"
      className="
        w-full
        overflow-hidden
       
        px-4
        pb-[80px]
        pt-[12px]
        max-[768px]:px-6
        sm:pb-[100px]
       min-[768px]:px-[80px]
        md:pb-[120px]
        
        
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1728px]
          grid-cols-1
          gap-x-8
          sm:grid-cols-2
          sm:gap-x-8
          lg:grid-cols-3
          lg:gap-x-[64px]
          min-[768px]:gap-y-[75px]
          
        "
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   MAIN PROJECTS SECTION
========================================================= */

export default function Projects() {
  return (
    <>
      <section
        className="
          mx-auto
          grid
          w-full
          max-w-[1728px]
          grid-cols-1
          gap-y-10
          px-4
          pb-[72px]
          pt-[72px]
          sm:px-6
          sm:pb-[88px]
          sm:pt-[88px]
          md:gap-y-12
          md:px-8
          md:pb-[100px]
          md:pt-[100px]
          lg:grid-cols-[minmax(420px,540px)_minmax(0,1fr)]
          lg:gap-x-[72px]
          lg:px-10
          lg:pb-[112px]
          lg:pt-[108px]
          xl:grid-cols-[600px_minmax(0,1fr)]
          xl:gap-x-[120px]
          xl:px-12
          xl:pb-[118px]
          xl:pt-[118px]
          2xl:px-16
        "
      >
        {/* =================================================
            HEADING
        ================================================= */}

        <div className="flex items-start">
          <h2
            className="
              font-bricolage
              text-[58px]
              font-[600]
              leading-[0.9]
              tracking-[-0.075em]
              text-[#000000]
              sm:text-[76px]
              md:text-[90px]
              lg:text-[104px]
              xl:text-[120px]
            "
          >
            Our
            <br />
            Projects
          </h2>
        </div>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div
          className="
            min-w-0
            max-w-[690px]
            lg:pt-[8px]
          "
        >
          <p
            className="
              max-w-[635px]
              font-inter
              text-[20px]
              font-[600]
              leading-[1.12]
              tracking-[-0.03em]
              text-[#373737]
              sm:text-[23px]
              md:text-[25px]
              lg:text-[20px]
              xl:text-[20px]
            "
          >
            Built to perform, our ready-made digital products are designed to
            drive higher conversions, deeper engagement, and long-term
            retention for modern brands.
          </p>

          <p
            className="
              mt-[32px]
              max-w-[620px]
              font-inter
              text-[16px]
              font-[400]
              leading-[1.22]
              tracking-[-0.025em]
              text-[#373737]
              sm:mt-[36px]
              sm:text-[18px]
              lg:mt-[38px]
              lg:text-[18px]
              xl:text-[18px]
            "
          >
            Our ready-made products eliminate delays and rework—delivering
            high-quality solutions, fast. Built for growing businesses, they
            help you launch quicker, scale smarter, and drive real impact from
            day one.
          </p>

          {/* ===============================================
              CTA + NOTE
          =============================================== */}

          <div
            className="
              mt-[30px]
              flex
              flex-col
              items-start
              gap-[18px]
              sm:mt-[34px]
              sm:flex-row
              sm:items-center
              sm:gap-[30px]
            "
          >
            <LetsTalkButton />

            <BookingNote />
          </div>
        </div>
      </section>

      {/* ===================================================
          PROJECTS
      =================================================== */}

      <ProjectsGrid />
    </>
  );
}