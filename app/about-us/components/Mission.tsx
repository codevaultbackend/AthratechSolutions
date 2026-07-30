"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Lightbulb,
  ShieldCheck,
  Users,
  Sparkles,
  Target,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: "/innovation.png",
    title: "Innovation",
    description:
      "Pioneering AI and Gen AI solutions for next-level healthcare service",
  },
  {
    icon: "/integrity.png",
    title: "Integrity",
    description:
      "Built with compliance-first architecture and enterprise-grade safeguards",
  },
  {
    icon: "/collabration.png",
    title: "Collaboration",
    description:
      "Built with compliance-first architecture and enterprise-grade safeguards",
  },
  {
    icon: "/execelance.png",
    title: "Excellence",
    description:
      "Pioneering AI and Gen AI solutions for next-level healthcare service",
  },
  {
    icon: "/costomersucess.png",
    title: "Customer Success",
    description:
      "Built with compliance-first architecture and enterprise-grade safeguards",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export default function Mission() {
  return (
    <section className="relative bg-white py-[137px] max-[768px]:py-[50px] overflow-hidden">
      <div className="mx-auto max-w-7xl max-[768px]:px-4 pl-6 lg:pl-8">

        {/* =========================
            Mission
        ========================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="mb-5 text-[24px] font-[400] leading-[100%] font-calligraffitti tracking-wide text-[#818181]">
            Our Mission
          </p>

          <h2 className="text-[48px] font-[500] max-[768px]:text-[28px] leading-[100%] text-[#494949] tracking-[0%] font-inter">
            To empower businesses with scalable,
            <br />
            innovative and reliable digital
            <br />
            solutions 
            <span className="text-[#B5B5B5]">
              {" "}
             that drive growth and long-term success.
            </span>
          </h2>
        </motion.div>

        {/* Spacer */}

        <div className="h-32" />

        {/* =========================
            Vision
        ========================== */}

        <div className="grid items-center gap-16 lg:grid-cols-[30%_65%]">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <p className="mb-8 font-calligraffitti text-[24px]  text-[#818181]">
              Our Vision
            </p>

            <h2 className="text-5xl font-[400] leading-[100%] text-[#262626] font-bricolage">
              Shaping the
              <br />
              Future Through
              <br />
              Innovation
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="rounded-[32px] min-h-[248px] flex  items-center border border-neutral-200 bg-white p-8 shadow-sm max-[768px]:px-4"
          >
            <div className="flex flex-col items-center gap-[77px] max-[768px]:gap-[12px] max-[768px]:text-center md:flex-row">

              <div className="relative h-[198] w-[198]  overflow-hidden rounded-full">
                <Image
                  src="/about-circle.png"
                  alt="Vision"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <p className="text-[16px] font-[400] leading-[120%] text-[#494949]">
                  To become a globally trusted technology partner by delivering
                  meaningful digital experiences and future-ready software
                  solutions that empower businesses to innovate, scale, and
                  succeed.
                </p>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Spacer */}

        <div className="h-36" />

        {/* =========================
            Technological Ecosystem
        ========================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
          className="mb-16 text-center"
        >
          <h2 className="text-[56px] font-[400] leading-[110%] tracking-[-3%] font-bricolage text-neutral-900">
            Technological Ecosystem
          </h2>

        </motion.div>

        {/* Values Grid Begins */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {values.map((value, index) => {
       
          return (
            <motion.div
              key={value.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{
                y: -8,
                transition: { duration: 0.25 },
              }}
              className="group rounded-[20px] border-0 bg-[#F8F8F8] p-8 transition-all duration-300 hover:border-neutral-300 hover:bg-white hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl  transition-transform duration-300 group-hover:rotate-6">
                <Image src={value.icon} alt={value.title} height={56} width={56} className="h-14 w-14" /> 
              </div>

              <h3 className="mb-3 mt-[31px] text-[23px] font-[500] text-[#0F0F0F] leading-[31px] font-geist">
                {value.title}
              </h3>

              <p className=" leading-7 text-neutral-600">
                {value.description}
              </p>
            </motion.div>
          );
        })}
        </div>

        {/* Decorative Background */}

        <div className="pointer-events-none absolute left-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-neutral-100 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[450px] w-[450px] rounded-full bg-neutral-100 blur-[140px]" />
      </div>
    </section>
  );
}