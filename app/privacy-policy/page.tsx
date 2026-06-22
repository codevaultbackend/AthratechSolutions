import { privacyPolicyData } from "./privacy-policy-data";

export default function PrivacyPolicyPage() {
  const renderContactItem = (item: string) => {
    if (item.startsWith("Email:")) {
      const email = item.replace("Email:", "").trim();

      return (
        <>
          <span className="font-medium text-black">Email:</span>{" "}
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
          <span className="font-medium text-black">Phone:</span>{" "}
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
          <span className="font-medium text-black">Website:</span>{" "}
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
          <span className="font-medium text-black">
            {label}:
          </span>{" "}
          {rest.join(":").trim()}
        </>
      );
    }

    return item.replace(/^•\s*/, "");

  };

  return (<main className="bg-white"> <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8 py-12 md:py-20"> <div className="max-w-[1140px]">
    {/* Header */} <header> <h1 className="font-bricolage text-[34px] sm:text-[42px] md:text-[52px] font-semibold uppercase tracking-[-0.02em] leading-[110%] text-black">
      {privacyPolicyData.title} </h1>

      <div className="mt-8 space-y-6">
        {privacyPolicyData.intro.map((paragraph, index) => (
          <p
            key={index}
            className="text-[16px] leading-[190%] text-[#404040]"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </header>

    {/* Sections */}
    <div className="mt-16 md:mt-20 space-y-16 md:space-y-20">
      {privacyPolicyData.sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-24"
        >
          <div className="mb-8">
            <h2 className="font-bricolage text-[26px] sm:text-[30px] md:text-[36px] font-semibold uppercase tracking-[-0.02em] leading-[115%] text-black">
              {section.title}
            </h2>

            {section.subdes && (
              <p className="mt-4 text-[16px] leading-[180%] text-[#404040]">
                {section.subdes}
              </p>
            )}
          </div>

          <div className="space-y-7">
            {section.content.map((block, index) => {
              switch (block.type) {
                case "text":
                  return (
                    <p
                      key={index}
                      className="text-[16px] leading-[190%] text-[#404040]"
                    >
                      {block.value}
                    </p>
                  );

                case "subTitle":
                  return (
                    <h3
                      key={index}
                      className="font-bricolage text-[22px] md:text-[28px] font-semibold uppercase leading-[130%] text-black pt-2"
                    >
                      {block.value}
                    </h3>
                  );

                case "bullet":
                  return (
                    <ul
                      key={index}
                      className="pl-6 space-y-3"
                    >
                      {block.items.map((item, i) => (
                        <li
                          key={i}
                          className="list-disc text-[16px] leading-[185%] text-[#404040]"
                        >
                          {item.replace(/^•\s*/, "")}
                        </li>
                      ))}
                    </ul>
                  );

                case "important":
                  return (
                    <div
                      key={index}
                      className=""
                    >
                      <p className="text-[16px] leading-[180%] text-[#374151]">
                        <span className="font-semibold text-black">
                          Important:
                        </span>{" "}
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
                      .toUpperCase()
                      .includes("CONTACT");

                  return (
                    <div
                      key={index}
                      className="space-y-4"
                    >
                      <h3 className="font-bricolage text-[22px] md:text-[28px] font-semibold uppercase leading-[130%] text-black">
                        {block.title}
                      </h3>

                      {isContactSection ? (
                        <div className="space-y-3">
                          {block.items.map(
                            (item, i) => (
                              <div
                                key={i}
                                className="text-[16px] leading-[180%] text-[#404040]"
                              >
                                {renderContactItem(
                                  item
                                )}
                              </div>
                            )
                          )}
                        </div>
                      ) : (
                        <ul className="pl-6 space-y-3">
                          {block.items.map(
                            (item, i) => (
                              <li
                                key={i}
                                className="list-disc text-[16px] leading-[185%] text-[#404040]"
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
                      className="overflow-hidden rounded-2xl border border-[#E5E7EB]"
                    >
                      <div className="overflow-x-auto">
                        <table className="w-full min-w-[700px] border-collapse">
                          <thead>
                            <tr className="bg-[#F3F4F6]">
                              {block.headers.map(
                                (header) => (
                                  <th
                                    key={header}
                                    className="border border-[#E5E7EB] px-4 py-4 text-left text-sm font-semibold uppercase text-black"
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
                                row,
                                rowIndex
                              ) => (
                                <tr
                                  key={rowIndex}
                                  className="odd:bg-white even:bg-[#FAFAFA]"
                                >
                                  {row.map(
                                    (
                                      cell,
                                      cellIndex
                                    ) => (
                                      <td
                                        key={
                                          cellIndex
                                        }
                                        className="border border-[#E5E7EB] px-4 py-4 text-sm leading-[170%] text-[#404040]"
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
  </div>
  </main>


  );
}
