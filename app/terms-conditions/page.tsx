import { termsConditionData } from "./terms-and-condition-data";

export default function TermsAndConditions() {
  const renderContactItem = (item: string) => {
    if (item.startsWith("Email:")) {
      const email = item.replace("Email:", "").trim();

      return (
        <>
          <strong>Email:</strong>{" "}
          <a
            href={`mailto:${email}`}
            className="text-[#0B63CE] hover:underline break-words"
          >
            {email}
          </a>
        </>
      );
    }

    if (item.startsWith("Phone:")) {
      const phone = item.replace("Phone:", "").trim();

      return (
        <>
          <strong>Phone:</strong>{" "}
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="text-[#0B63CE] hover:underline break-words"
          >
            {phone}
          </a>
        </>
      );
    }

    if (item.startsWith("Website:")) {
      const website = item.replace("Website:", "").trim();

      return (
        <>
          <strong>Website:</strong>{" "}
          <a
            href={
              website.startsWith("http")
                ? website
                : `https://${website}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0B63CE] hover:underline break-all"
          >
            {website}
          </a>
        </>
      );
    }

    if (item.includes(":")) {
      const [label, ...rest] = item.split(":");

      return (
        <>
          <strong>{label}:</strong>{" "}
          {rest.join(":").trim()}
        </>
      );
    }

    return item.replace(/^•\s*/, "");
  };

  return (
    <div className="w-full bg-white overflow-x-hidden">
      <div
        className="
          w-full
          max-w-full
          mx-auto
          px-4
          sm:px-5
          lg:px-8
          py-8
          sm:py-10
          lg:py-20
        "
      >
        {/* HEADER */}
        <header className="mb-10 sm:mb-12 lg:mb-14">
          <h1
            className="
              font-bricolage
              font-semibold
              uppercase
              tracking-[-0.02em]
              text-black
              text-[32px]
              leading-[1.08]
              sm:text-[42px]
              sm:leading-[1.1]
              lg:text-[56px]
            "
          >
            {termsConditionData.title}
          </h1>

          <div className="mt-4 sm:mt-5 space-y-4">
            {termsConditionData.intro.map((paragraph, i) => (
              <p
                key={i}
                className="
                  max-w-full
                  break-words
                  text-[14px]
                  leading-[1.8]
                  sm:leading-[1.9]
                  text-neutral-700
                "
              >
                {paragraph}
              </p>
            ))}
          </div>
        </header>

        {/* CONTENT */}
        <div className="space-y-10 sm:space-y-12 lg:space-y-14">
          {termsConditionData.sections.map((section) => (
            <section
              key={section.id}
              className="w-full min-w-0"
            >
              {/* SECTION TITLE */}
              <h2
                className="
                  max-w-full
                  font-bricolage
                  font-semibold
                  uppercase
                  tracking-[-0.02em]
                  text-[#000000]
                  break-words
                  text-[28px]
                  leading-[1.15]
                  sm:text-[34px]
                  sm:leading-[1.15]
                  lg:text-[44px]
                  lg:leading-[1.1]
                  mb-4
                  sm:mb-5
                "
              >
                {section.title}
              </h2>

              {/* SECTION DESCRIPTION */}
              {(section as any).des && (
                <p
                  className="
                    max-w-full
                    mb-5
                    sm:mb-6
                    break-words
                    text-[14px]
                    leading-[1.8]
                    sm:leading-[1.9]
                    text-neutral-700
                  "
                >
                  {(section as any).des}
                </p>
              )}

              {(section as any).subdes && (
                <p
                  className="
                    max-w-full
                    mb-5
                    sm:mb-6
                    break-words
                    text-[14px]
                    leading-[1.8]
                    sm:leading-[1.9]
                    text-neutral-700
                  "
                >
                  {(section as any).subdes}
                </p>
              )}

              <div className="space-y-5 sm:space-y-6">
                {section.content.map(
                  (block: any, index: number) => {
                    switch (block.type) {
                      case "text":
                        return (
                          <p
                            key={index}
                            className="
                              max-w-full
                              break-words
                              text-[14px]
                              leading-[1.8]
                              sm:leading-[1.9]
                              text-neutral-700
                            "
                          >
                            {block.value}
                          </p>
                        );

                      case "subTitle":
                        return (
                          <h3
                            key={index}
                            className="
                              max-w-full
                              font-semibold
                              uppercase
                              break-words
                              text-[15px]
                              leading-[1.4]
                              sm:text-[16px]
                              text-black
                              mt-6
                              sm:mt-8
                            "
                          >
                            {block.value}
                          </h3>
                        );

                      case "bullet":
                        return (
                          <ul
                            key={index}
                            className="
                              pl-5
                              sm:pl-6
                              space-y-2
                              w-full
                              min-w-0
                            "
                          >
                            {block.items.map(
                              (
                                item: string,
                                i: number
                              ) => (
                                <li
                                  key={i}
                                  className="
                                    list-disc
                                    pl-1
                                    break-words
                                    text-[14px]
                                    leading-[1.8]
                                    sm:leading-[1.9]
                                    text-neutral-700
                                  "
                                >
                                  {item.replace(
                                    /^•\s*/,
                                    ""
                                  )}
                                </li>
                              )
                            )}
                          </ul>
                        );

                      case "important":
                        return (
                          <div
                            key={index}
                            className="
                              w-full
                              border-l-4
                              border-black
                              pl-3
                              sm:pl-4
                              overflow-hidden
                            "
                          >
                            <p
                              className="
                                break-words
                                text-[14px]
                                leading-[1.8]
                                sm:leading-[1.9]
                                text-neutral-700
                              "
                            >
                              <strong>
                                Important:
                              </strong>{" "}
                              {block.value.replace(
                                /^Important:\s*/i,
                                ""
                              )}
                            </p>
                          </div>
                        );

                      case "group": {
                        /*
                         * Contact information is identified
                         * by the section ID rather than the
                         * group title.
                         */
                        const isContactSection =
                          section.id ===
                          "contact-information";

                        return (
                          <div
                            key={index}
                            className="
                              w-full
                              min-w-0
                              space-y-3
                            "
                          >
                            {block.title && (
                              <h3
                                className="
                                  max-w-full
                                  font-semibold
                                  uppercase
                                  break-words
                                  text-[15px]
                                  leading-[1.4]
                                  sm:text-[16px]
                                  text-black
                                "
                              >
                                {block.title}
                              </h3>
                            )}

                            {isContactSection ? (
                              <div className="w-full space-y-2">
                                {block.items.map(
                                  (
                                    item: string,
                                    i: number
                                  ) => (
                                    <div
                                      key={i}
                                      className="
                                        max-w-full
                                        break-words
                                        text-[14px]
                                        leading-[1.8]
                                        sm:leading-[1.9]
                                        text-neutral-700
                                      "
                                    >
                                      {renderContactItem(
                                        item
                                      )}
                                    </div>
                                  )
                                )}
                              </div>
                            ) : (
                              <ul
                                className="
                                  pl-5
                                  sm:pl-6
                                  space-y-2
                                  w-full
                                  min-w-0
                                "
                              >
                                {block.items.map(
                                  (
                                    item: string,
                                    i: number
                                  ) => (
                                    <li
                                      key={i}
                                      className="
                                        list-disc
                                        pl-1
                                        break-words
                                        text-[14px]
                                        leading-[1.8]
                                        sm:leading-[1.9]
                                        text-neutral-700
                                      "
                                    >
                                      {item.replace(
                                        /^•\s*/,
                                        ""
                                      )}
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                          </div>
                        );
                      }

                      case "table":
                        return (
                          <div
                            key={index}
                            className="
                              w-full
                              max-w-full
                              overflow-x-auto
                              overscroll-x-contain
                              rounded-none
                              [-webkit-overflow-scrolling:touch]
                            "
                          >
                            <table
                              className="
                                w-full
                                min-w-[600px]
                                border
                                border-neutral-300
                                border-collapse
                              "
                            >
                              <thead>
                                <tr className="bg-[#0B3D67]">
                                  {block.headers.map(
                                    (
                                      header: string,
                                      i: number
                                    ) => (
                                      <th
                                        key={i}
                                        className="
                                          border
                                          border-neutral-300
                                          px-3
                                          sm:px-4
                                          py-2.5
                                          sm:py-3
                                          text-left
                                          text-white
                                          text-xs
                                          sm:text-sm
                                          font-semibold
                                        "
                                      >
                                        {header}
                                      </th>
                                    )
                                  )}
                                </tr>
                              </thead>

                              <tbody>
                                {block.rows.map(
                                  (
                                    row: string[],
                                    rIndex: number
                                  ) => (
                                    <tr
                                      key={rIndex}
                                    >
                                      {row.map(
                                        (
                                          cell: string,
                                          cIndex: number
                                        ) => (
                                          <td
                                            key={
                                              cIndex
                                            }
                                            className="
                                              border
                                              border-neutral-300
                                              px-3
                                              sm:px-4
                                              py-2.5
                                              sm:py-3
                                              text-xs
                                              sm:text-sm
                                              text-neutral-700
                                              break-words
                                            "
                                          >
                                            {cell}
                                          </td>
                                        )
                                      )}
                                    </tr>
                                  )
                                )}
                              </tbody>
                            </table>
                          </div>
                        );

                      default:
                        return null;
                    }
                  }
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}