"use client";

import Link from "next/link";

type BehanceProps = {
  behanceUrl: string;
};

export default function Behance({
  behanceUrl,
}: BehanceProps) {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-full
          px-5
          sm:px-6
          md:px-0
          py-16
          md:py-28
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[760px]
            text-center
          "
        >
          <p
            className="
              font-sp
              text-[#111111]
              font-[400]
              tracking-[-0.04em]
              leading-[1.25]

              text-[28px]
              max-[768px]:text-[32px]
              md:text-[35px]
              lg:text-[40px]
            "
          >
            And that's not all.
          </p>

          <p
            className="
              mt-5
              md:mt-6

              text-[#8E8E8E]

              text-[15px]
              sm:text-[16px]
              md:text-[20px]

              leading-7
              md:leading-[1.8]
            "
          >
            There are many more dashboards, workflows, reports and user
            experiences designed for this inventory platform. Explore the
            complete case study on{" "}
            <Link
              href={behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-semibold
                text-[#111111]
                underline
                underline-offset-4
                transition-opacity
                duration-300
                hover:opacity-70
              "
            >
              Behance
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}