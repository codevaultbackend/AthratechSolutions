import { privacyPolicyData } from "./privacy-policy-data";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-[1140px] px-5 md:px-8 py-16 md:py-24">
        {/* ================= HEADER ================= */}
        <div className="max-w-[1150px]">
          <h1 className="font-bricolage text-[34px] md:text-[52px] font-semibold uppercase tracking-tight text-black">
            {privacyPolicyData.title}
          </h1>

          <div className="mt-8 ">
            {privacyPolicyData.intro.map((paragraph, index) => (
              <p
                key={index}
                className="text-[15px] md:text-[16px] leading-[190%] text-[#5C5C5C]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* ================= SECTIONS ================= */}
        <div className="mt-20 space-y-20">
          {privacyPolicyData.sections.map((section, sectionIndex) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24"
            >
              {/* Section Heading */}
              <div className="mb-10">
                <h2 className="font-bricolage text-[48px] md:text-[34px] font-semibold uppercase leading-[120%] tracking-tight text-[#000000]">
                  {section.title}
                </h2>

                {"subdes" in section && section.subdes && (
                  <p className="mt-4 text-[16px] leading-[174%] text-[#000000]">
                    {section.subdes}
                  </p>
                )}
              </div>

              {/* Content */}
              <div className="space-y-2">
                {section.content.map((block, index) => {
                  switch (block.type) {
                    case "text":
                      return (
                        <p
                          key={index}
                          className="text-[16px] leading-[174%] text-[#000000] tracking-[0%] mt-[40px]"
                        >
                          {block.value}
                        </p>
                      );

                    case "subTitle":
                      return (
                        <div key={index}>
                          <h3 className="font-bricolage text-[18px] md:text-[22px] font-semibold uppercase text-black mt-[40px]">
                            {block.value}
                          </h3>
                        </div>
                      );

                    case "bullet":
                      return (
                        <ul
                          key={index}
                          className=" pl-6"
                        >
                          {block.items.map((item, i) => (
                            <li
                              key={i}
                              className="list-disc text-[15px] md:text-[16px] leading-[180%] text-[#5C5C5C] mt-0"
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
                          <p className="text-[15px] md:text-[16px] leading-[180%] text-[#374151]">
                            <span className="font-semibold text-black">
                              Important:
                            </span>{" "}
                            {block.value.replace(/^Important:\s*/i, "")}
                          </p>
                        </div>
                      );

                    case "group":
                      return (
                        <div
                          key={index}
                          className="space-y-5"
                        >
                          <h3 className="font-bricolage text-[18px] md:text-[22px] font-semibold uppercase text-black">
                            {block.title}
                          </h3>

                          <ul className="pl-6">
                            {block.items.map((item, i) => (
                              <li
                                key={i}
                                className="list-disc text-[15px] md:text-[16px] leading-[180%] text-[#5C5C5C]"
                              >
                                {item.replace(/^•\s*/, "")}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );

                    case "table":
                      return (
                        <div
                          key={index}
                          className="overflow-hidden rounded-2xl border border-[#D9E1EA]"
                        >
                          <div className="overflow-x-auto">
                            <table className="w-full min-w-[750px] border-collapse">
                              <thead>
                                <tr className="bg-[#0B2E4F] text-white">
                                  {block.headers.map((header) => (
                                    <th
                                      key={header}
                                      className="border border-[#D9E1EA] px-5 py-4 text-left text-sm font-semibold uppercase tracking-wide"
                                    >
                                      {header}
                                    </th>
                                  ))}
                                </tr>
                              </thead>

                              <tbody>
                                {block.rows.map((row, rowIndex) => (
                                  <tr
                                    key={rowIndex}
                                    className="odd:bg-white even:bg-[#F8FAFC]"
                                  >
                                    {row.map((cell, cellIndex) => (
                                      <td
                                        key={cellIndex}
                                        className="border border-[#D9E1EA] px-5 py-4 text-[14px] leading-[170%] text-[#4A4A4A]"
                                      >
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
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
    </main>
  );
}