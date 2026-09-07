"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  ShieldCheck,
  Handshake,
  Award,
  Users,
} from "lucide-react";

interface EcosystemItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ecosystemItems: EcosystemItem[] = [
  {
    id: 1,
    title: "Innovation",
    description:
      "Pioneering AI and Gen AI solutions for next-level healthcare service.",
    icon: <Lightbulb className="h-8 w-8" />,
  },
  {
    id: 2,
    title: "Integrity",
    description:
      "Built with compliance-first architecture and enterprise-grade safeguards.",
    icon: <ShieldCheck className="h-8 w-8" />,
  },
  {
    id: 3,
    title: "Collaboration",
    description:
      "Built with compliance-first architecture and enterprise-grade safeguards.",
    icon: <Handshake className="h-8 w-8" />,
  },
  {
    id: 4,
    title: "Excellence",
    description:
      "Pioneering AI and Gen AI solutions for next-level healthcare service.",
    icon: <Award className="h-8 w-8" />,
  },
  {
    id: 5,
    title: "Customer Success",
    description:
      "Built with compliance-first architecture and enterprise-grade safeguards.",
    icon: <Users className="h-8 w-8" />,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Ecosystem() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div
          
          className="mb-16 text-center"
        >
          <h2 className="text-[56px] font-[400] leading-[48px] tracking-[-3%] font-bricolage text-[#0F0F0F] ">
            Technological Ecosystem
          </h2>
        </div>

        <div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >

          {ecosystemItems.map((card) => (
            <div
              key={card.id}
             
              className="group relative overflow-hidden rounded-[28px] border border-neutral-200 bg-neutral-50 p-8 transition-all duration-500 hover:border-black/10 hover:bg-white hover:shadow-2xl"
            >

              {/* Background Glow */}

              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-neutral-100 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

              {/* Icon */}

              <div className="relative mb-8 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-black text-white shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110">

                {card.icon}

              </div>

              {/* Title */}

              <h3 className="relative mb-4 text-2xl font-semibold text-neutral-900">
                {card.title}
              </h3>

              {/* Description */}

              <p className="relative leading-7 text-neutral-500">
                {card.description}
              </p>
                          </div>
          ))}

        </div>
      </div>

      {/* Decorative Background Blur */}

      <div className="pointer-events-none absolute left-0 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-100 blur-[140px]" />

      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 translate-x-1/3 rounded-full bg-neutral-100 blur-[180px]" />

    </section>
  );
}