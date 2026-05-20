import Image from "next/image";

const offeringCards = [
  {
    title: "Enterprise Resource Planning (ERP)",
    src: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255533/website-images/t7gquc8m56nler8bmmk4.png",
    description:
      "• Streamline your internal processes and gain full control over your business operations with an advanced ERP system",
    points: [
      "Integrated Business Processes",
      "Inventory Management",
      "Financial Management",
      "Reporting & Analytics",
      "Supply Chain Management",
      "Human Resource Management",
    ],
    theme: "navy",
  },
  {
    title: "Customer Relationship Management (CRM)",
    src: "https://res.cloudinary.com/dpo9e7wp5/image/upload/v1779255521/website-images/kryrdtuyydkoz8zmstpk.png",
    description:
      "• Where CRM and ERP come together to create a seamless business ecosystem.",
    points: [
      "Centralized Data Across Departments",
      "Real-Time Insights & Reporting",
      "Seamless Integration Between Systems",
      "Improved Collaboration & Productivity",
      "Scalable Cloud Infrastructure",
    ],
    theme: "purple",
  },
];

export default function SaasOfferings() {
  return (
    <section className="w-full bg-white py-[56px] sm:py-[80px] lg:py-[100px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-4 sm:px-6 lg:px-8">
        {offeringCards.map((card, index) => (
          <article
            key={card.title}
            className={`
              relative
              overflow-hidden
              rounded-[24px]
              px-5
              py-8
              text-white

              sm:rounded-[32px]
              sm:px-8
              sm:py-10

              lg:grid
              lg:grid-cols-[minmax(0,1fr)_520px]
              lg:items-center
              lg:gap-12
              lg:rounded-[40px]
              lg:px-16
              lg:py-[72px]

              xl:gap-16

              ${
                card.theme === "navy"
                  ? "bg-[#020220]"
                  : "bg-[#25122A]"
              }
            `}
          >
            {/* IMAGE SIDE */}
            <div
              className={`
                relative
                order-2
                mt-10
                flex
                items-center
                justify-center

                lg:order-1
                lg:mt-0
                ${
                  index % 2 !== 0
                    ? "lg:order-2"
                    : ""
                }
              `}
            >
              <div
                className="
                  relative
                  flex
                  w-full
                  items-center
                  justify-center
                "
              >
                <Image
                  src={card.src}
                  alt={card.title}
                  width={668}
                  height={470}
                  priority
                  className="
                    h-auto
                    w-full
                    max-w-[280px]
                    object-contain

                    sm:max-w-[420px]
                    md:max-w-[520px]

                    lg:max-w-[640px]
                    xl:max-w-[668px]
                  "
                />
              </div>
            </div>

            {/* CONTENT SIDE */}
            <div
              className={`
                order-1
                flex
                min-w-0
                flex-col
                justify-center

                ${
                  index % 2 !== 0
                    ? "lg:order-1"
                    : "lg:order-2"
                }

                lg:border-l
                lg:border-white/12
                lg:pl-12

                xl:pl-16
              `}
            >
              {/* TITLE */}
              <h2
                className="
                  max-w-[560px]

                  text-[28px]
                  font-[500]
                  leading-[108%]
                  tracking-[-0.045em]

                  sm:text-[38px]
                  md:text-[44px]

                  lg:text-[48px]
                "
              >
                {card.title}
              </h2>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-5
                  max-w-[560px]

                  text-[15px]
                  font-[400]
                  leading-[165%]
                  text-white/60

                  sm:text-[16px]

                  lg:text-[18px]
                  lg:leading-[155%]
                "
              >
                {card.description}
              </p>

              {/* FEATURES */}
              <div className="mt-8">
                <p
                  className="
                    text-[13px]
                    font-semibold
                    uppercase
                    tracking-[0.08em]
                    text-white

                    sm:text-[14px]
                  "
                >
                  Key Features
                </p>

                <ul
                  className="
                    mt-5
                    grid
                    gap-y-3

                    sm:grid-cols-2
                    sm:gap-x-6

                    lg:grid-cols-1
                  "
                >
                  {card.points.map((point) => (
                    <li
                      key={point}
                      className="
                        flex
                        items-start
                        gap-3

                        text-[14px]
                        leading-[155%]
                        text-white/65

                        sm:text-[15px]
                      "
                    >
                      <span
                        className="
                          mt-[8px]
                          h-[6px]
                          w-[6px]
                          shrink-0
                          rounded-full
                          bg-white
                        "
                      />

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}