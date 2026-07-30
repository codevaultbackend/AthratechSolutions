"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Vision() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* ================= LEFT CONTENT ================= */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-lg"
          >
            <p className="mb-5 font-calligraffitti text-lg  text-[#818181]">
              Our Vision
            </p>

            <h2 className="text-5xl font-semibold leading-tight text-neutral-900 lg:text-6xl">
              Shaping the
              <br />
              Future Through
              <br />
              Innovation
            </h2>
          </motion.div>

          {/* ================= RIGHT CARD ================= */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="group flex min-h-[250px] items-center gap-8 rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-500 hover:border-neutral-300 hover:shadow-xl lg:p-10">

              {/* Circle Image */}

              <div className="relative h-36 w-36 flex-shrink-0 overflow-hidden rounded-full">

                <Image
                  src="/images/about/vision.jpg"
                  alt="Vision"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  priority
                />

              </div>

              {/* Right Content */}

              <div className="flex-1">

                <p className="text-lg leading-8 text-neutral-600">
                  To become a globally trusted technology partner by delivering
                  impactful digital experiences and future-ready technology
                  solutions that help businesses innovate, scale and lead in an
                  ever-evolving digital world.
                </p>

              </div>

            </div>
          </motion.div>

        </div>

      </div>
            {/* ================= Decorative Blur ================= */}

      <div className="absolute left-10 top-40 h-72 w-72 rounded-full bg-neutral-100 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-neutral-100 blur-[180px]" />
    </section>
  );
}