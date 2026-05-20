import type { ReactNode } from "react";

type OfferingItem = {
  title: string;
  description: string;
  icon?: ReactNode;
};

type OfferingSectionProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  items: OfferingItem[];
  variant?: "frontend" | "backend" | "dark" | "purple";
  className?: string;
};

const variantClasses = {
  frontend: {
    section: "bg-[#02021E] text-white",
    muted: "text-white/58",
    icon: "text-white",
    border: "border-[#808080]",
  },
  backend: {
    section: "bg-[#1B0B25] text-white",
    muted: "text-white/58",
    icon: "text-white",
    border: "border-[#808080]",
  },
  dark: {
    section: "bg-black text-white",
    muted: "text-white/58",
    icon: "text-white",
    border: "border-[#808080]",
  },
  purple: {
    section: "bg-[#190923] text-white",
    muted: "text-white/58",
    icon: "text-white",
    border: "border-[#808080]",
  },
};

export default function OfferingSection({
  eyebrow,
  title,
  description,
  items,
  variant = "frontend",
  className = "",
}: OfferingSectionProps) {
  const theme = variantClasses[variant];

  return (
    <section
      className={`
        w-full
        bg-white
        ${className}
      `}
    >
      {/* OUTER BORDER */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          rounded-[24px]
          bg-[linear-gradient(90deg,#23232B_0%,#808080_50%,#020220_100%)]
          p-px
          sm:rounded-[32px]
          lg:rounded-[40px]
        "
      >
        {/* INNER */}
        <div
          className={`
            overflow-hidden
            rounded-[23px]
            px-5
            py-10

            sm:rounded-[31px]
            sm:px-8
            sm:py-14

            lg:rounded-[39px]
            lg:px-[74px]
            lg:py-[74px]

            ${theme.section}
          `}
        >
          {/* CONTENT WRAPPER */}
          <div className="mx-auto w-full max-w-[1120px]">
            {/* HEADING */}
            <div className="mx-auto max-w-[700px] text-center">
              {eyebrow && (
                <p
                  className="
                    mb-3
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-white/55
                    sm:text-[12px]
                  "
                >
                  {eyebrow}
                </p>
              )}

              <h2
                className="
                  text-[34px]
                  font-[600]
                  leading-[100%]
                  tracking-[-0.04em]
                  text-white

                  sm:text-[44px]

                  lg:text-[56px]
                "
              >
                {title}
              </h2>

              {description && (
                <p
                  className={`
                    mx-auto
                    mt-4
                    max-w-[620px]

                    text-[14px]
                    font-[400]
                    leading-[150%]
                    tracking-[-0.02em]

                    sm:text-[15px]
                    lg:text-[16px]

                    ${theme.muted}
                  `}
                >
                  {description}
                </p>
              )}
            </div>

            {/* DESKTOP GRID */}
            <div
              className="
                mt-14
                hidden
                lg:grid
                lg:grid-cols-3
              "
            >
              {items.map((item, index) => {
                const totalItems = items.length;

                const totalRows = Math.ceil(totalItems / 3);

                const currentRow = Math.floor(index / 3);

                const isLastRow = currentRow === totalRows - 1;

                const isMiddle = index % 3 === 1;

                const isLastColumn = index % 3 === 2;

                return (
                  <article
                    key={index}
                    className={`
                      relative
                      min-h-[260px]
                      px-[34px]
                      py-[42px]

                      transition-all
                      duration-300

                      ${
                        !isLastColumn
                          ? `border-r ${theme.border}`
                          : ""
                      }

                      ${
                        !isLastRow
                          ? `border-b ${theme.border}`
                          : ""
                      }
                    `}
                  >
                    {/* ICON */}
                    <div
                      className="
                        mb-6
                        flex
                        h-[48px]
                        w-[48px]
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        shrink-0
                      "
                    >
                      {item.icon}
                    </div>

                    {/* TITLE */}
                    <h3
                      className="
                        max-w-[240px]

                        text-[24px]
                        font-[500]
                        leading-[100%]
                        tracking-[-0.04em]

                        text-white
                      "
                    >
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className={`
                        mt-4
                        max-w-[250px]

                        text-[14px]
                        font-[400]
                        leading-[150%]
                        tracking-[-0.02em]

                        ${theme.muted}
                      `}
                    >
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>

            {/* TABLET GRID */}
            <div
              className="
                mt-12
                hidden
                sm:grid
                lg:hidden

                grid-cols-2
              "
            >
              {items.map((item, index) => {
                const totalItems = items.length;

                const totalRows = Math.ceil(totalItems / 2);

                const currentRow = Math.floor(index / 2);

                const isLastRow = currentRow === totalRows - 1;

                const isLastColumn = index % 2 === 1;

                return (
                  <article
                    key={index}
                    className={`
                      min-h-[240px]
                      p-8

                      ${
                        !isLastColumn
                          ? `border-r ${theme.border}`
                          : ""
                      }

                      ${
                        !isLastRow
                          ? `border-b ${theme.border}`
                          : ""
                      }
                    `}
                  >
                    {/* ICON */}
                    <div
                      className="
                        mb-5
                        flex
                        h-[46px]
                        w-[46px]
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        shrink-0
                      "
                    >
                      {item.icon}
                    </div>

                    {/* TITLE */}
                    <h3
                      className="
                        max-w-[220px]

                        text-[22px]
                        font-[500]
                        leading-[110%]
                        tracking-[-0.04em]

                        text-white
                      "
                    >
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className={`
                        mt-4
                        max-w-[240px]

                        text-[14px]
                        leading-[150%]

                        ${theme.muted}
                      `}
                    >
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>

            {/* MOBILE STACK */}
            <div className="mt-10 flex flex-col sm:hidden">
              {items.map((item, index) => {
                const isLast = index === items.length - 1;

                return (
                  <article
                    key={index}
                    className={`
                      min-h-[220px]
                      py-8

                      ${
                        !isLast
                          ? `border-b ${theme.border}`
                          : ""
                      }
                    `}
                  >
                    {/* ICON */}
                    <div
                      className="
                        mb-5
                        flex
                        h-[44px]
                        w-[44px]
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        shrink-0
                      "
                    >
                      {item.icon}
                    </div>

                    {/* TITLE */}
                    <h3
                      className="
                        max-w-[240px]

                        text-[22px]
                        font-[500]
                        leading-[110%]
                        tracking-[-0.04em]

                        text-white
                      "
                    >
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className={`
                        mt-4
                        max-w-[260px]

                        text-[14px]
                        leading-[155%]

                        ${theme.muted}
                      `}
                    >
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}