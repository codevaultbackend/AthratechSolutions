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
            className="text-[#0B63CE] hover:underline"
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
            className="text-[#0B63CE] hover:underline"
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
            className="text-[#0B63CE] hover:underline"
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
    <main className="bg-white">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8 py-12 lg:py-20">
        {/* HEADER */}
        <header className="mb-14">
          <h1 className="text-[56px] font-bricolage font-semibold uppercase tracking-[-0.02em] text-black">
            {termsConditionData.title}
          </h1>

          <div className="mt-5 space-y-4">
            {termsConditionData.intro.map((paragraph, i) => (
              <p
                key={i}
                className="text-[14px] leading-[1.9] text-neutral-700"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </header>

        {/* CONTENT */}
        <div className="space-y-14">
          {termsConditionData.sections.map((section) => (
            <section key={section.id}>
              <h2 className="text-[44px] font-bricolage  font-semibold uppercase tracking-[-0.02em] text-[#000000] mb-5">
                {section.title}
              </h2>

              {section.subdes && (
                <p className="mb-6 text-[14px] leading-[1.9] text-neutral-700">
                  {section.subdes}
                </p>
              )}

              <div className="space-y-5">
                {section.content.map((block: any, index: number) => {
                  switch (block.type) {
                    case "text":
                      return (
                        <p
                          key={index}
                          className="text-[14px] leading-[1.9] text-neutral-700"
                        >
                          {block.value}
                        </p>
                      );

                    case "subTitle":
                      return (
                        <h3
                          key={index}
                          className="text-[16px] font-semibold uppercase text-black mt-8"
                        >
                          {block.value}
                        </h3>
                      );

                    case "bullet":
                      return (
                        <ul
                          key={index}
                          className="pl-6 space-y-2"
                        >
                          {block.items.map(
                            (item: string, i: number) => (
                              <li
                                key={i}
                                className="list-disc text-[14px] leading-[1.9] text-neutral-700"
                              >
                                {item.replace(/^•\s*/, "")}
                              </li>
                            )
                          )}
                        </ul>
                      );

                    case "important":
                      return (
                        <div
                          key={index}
                          className="border-l-4 border-black pl-4"
                        >
                          <p className="text-[14px] leading-[1.9] text-neutral-700">
                            <strong>Important:</strong>{" "}
                            {block.value.replace(
                              /^Important:\s*/i,
                              ""
                            )}
                          </p>
                        </div>
                      );

                    case "group":
                      const isContactSection =
                        block.title
                          ?.toUpperCase()
                          .includes("CONTACT");

                      return (
                        <div
                          key={index}
                          className="space-y-3"
                        >
                          {block.title && (
                            <h3 className="text-[16px] font-semibold uppercase text-black">
                              {block.title}
                            </h3>
                          )}

                          {isContactSection ? (
                            <div className="space-y-2">
                              {block.items.map(
                                (
                                  item: string,
                                  i: number
                                ) => (
                                  <div
                                    key={i}
                                    className="text-[14px] leading-[1.9] text-neutral-700"
                                  >
                                    {renderContactItem(
                                      item
                                    )}
                                  </div>
                                )
                              )}
                            </div>
                          ) : (
                            <ul className="pl-6 space-y-2">
                              {block.items.map(
                                (
                                  item: string,
                                  i: number
                                ) => (
                                  <li
                                    key={i}
                                    className="list-disc text-[14px] leading-[1.9] text-neutral-700"
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

                    case "table":
                      return (
                        <div
                          key={index}
                          className="overflow-x-auto"
                        >
                          <table className="w-full border border-neutral-300">
                            <thead>
                              <tr className="bg-[#0B3D67]">
                                {block.headers.map(
                                  (
                                    header: string,
                                    i: number
                                  ) => (
                                    <th
                                      key={i}
                                      className="border border-neutral-300 px-4 py-3 text-left text-white text-sm"
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
                                  <tr key={rIndex}>
                                    {row.map(
                                      (
                                        cell: string,
                                        cIndex: number
                                      ) => (
                                        <td
                                          key={cIndex}
                                          className="border border-neutral-300 px-4 py-3 text-sm"
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
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}