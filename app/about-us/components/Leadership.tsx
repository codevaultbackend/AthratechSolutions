"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Leader {
  id: number;
  name: string;
  role: string;
  image: string;
}

const leaders: Leader[] = [
  {
    id: 1,
    name: "Vishal Gupta",
    role: "Co-founder & Operations Head",
    image: "/vishal.jpeg",
  },
  {
    id: 2,
    name: "Shivanshi Gupta",
    role: "Management & Business Head",
    image: "/shivanshi.jpeg",
  },
  {
    id: 3,
    name: "Ankit Das",
    role: "Co-founder & Project Manager",
    image: "/ankit.jpeg",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

export default function Leadership() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32 max-[768px]:py-8">
      <div className="mx-auto max-w-7xl px-6 max-[768px]:p-4 lg:px-8 overflow-hidden">

        {/* ================= Header ================= */}

        <div className="mb-20 grid gap-10 lg:grid-cols-2 max-[768px]:mb-9 lg:items-end">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="mb-4 font-inter text-[16px] font-[400] italic text-neutral-400">
              Our Leadership
            </p>

            <h2 className="max-w-lg text-[40px] font-[500] tracking-[-3%] text-[#0F0F0F] leading-[48px]">
              Meet the Leaders Behind Athratech
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-xl lg:ml-auto"
          >
            <p className="text-[19px] font-[400] leading-[25px] text-[#0F0F0F] tracking-[-2%]">
              Real impact comes from working together with purpose.
              Through leadership, service, and a culture of compassion,
              we create opportunities that transform lives and build
              stronger communities.
            </p>
          </motion.div>

        </div>

        {/* ================= Team Cards ================= */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:gap-[133px] max-[1118px]:gap-[44px] sm:grid-cols-2 lg:grid-cols-3 w-fit mx-auto mt-[98px]"
        >
                      {leaders.map((leader) => (
            <motion.div
              key={leader.id}
              variants={fadeUp}
              whileHover={{
                y: -10,
                transition: {
                  duration: 0.3,
                },
              }}
              className="group !w-fit "
            >
              {/* Card */}

              <div className="overflow-hidden  bg-white w-fit">

                {/* Image */}

                <div className="relative aspect-[4/5] overflow-hidden  bg-neutral-100 rounded-[14px] min-h-[350px] max-h-[350px] min-w-[319px]">

                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover  transition-transform duration-700 group-hover:scale-110 "
                  />

                </div>

                {/* Content */}

                <div className="pt-2">

                  <h3 className="text-[23px] font-[500] leading-[31px] font-geist text-[#2B2B2B]  duration-300 group-hover:text-black">
                    {leader.name}
                  </h3>

                  <p className="mt-1 max-w-[260px] font-geist text-[15px] leading-[24px] tracking-[-2%] text-neutral-500">
                    {leader.role}
                  </p>

                </div>

              </div>
            </motion.div>
          ))}

        </motion.div>

      </div>

      {/* Decorative Blur */}

      <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-neutral-100 blur-[140px]" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-neutral-100 blur-[160px]" />

    </section>
  );
}