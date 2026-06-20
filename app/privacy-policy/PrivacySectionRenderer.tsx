import { PrivacySection } from "./privacy-policy-data";

interface Props {
  section: PrivacySection;
}

export default function PrivacySectionRenderer({
  section,
}: Props) {
  return (
    <section
      id={section.id}
      className="space-y-6"
    >
      <h2 className="font-bricolage text-[32px] md:text-[48px] font-semibold uppercase text-black">
        {section.title}
      </h2>

      <div className="space-y-5">
        {section.content.map((block, index) => {
          switch (block.type) {
            case "text":
              return (
                <p
                  key={index}
                  className="text-[15px] leading-[28px] text-[#4A4A4A]"
                >
                  {block.value}
                </p>
              );

            case "subTitle":
              return (
                <h3
                  key={index}
                  className="pt-4 text-[18px] font-semibold uppercase"
                >
                  {block.value}
                </h3>
              );

            case "bullet":
              return (
                <ul
                  key={index}
                  className="space-y-3 pl-5"
                >
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="list-disc text-[15px] leading-[28px] text-[#4A4A4A]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              );

            case "important":
              return (
                <div
                  key={index}
                  className="rounded-xl border border-black/10 bg-zinc-50 p-5"
                >
                  <strong>Important:</strong> {block.value}
                </div>
              );

            case "group":
              return (
                <div
                  key={index}
                  className="space-y-3"
                >
                  <h3 className="text-[18px] font-semibold uppercase">
                    {block.title}
                  </h3>

                  <ul className="space-y-2 pl-5">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="list-disc text-[15px] leading-[28px]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );

            case "table":
              return (
                <div
                  key={index}
                  className="overflow-x-auto"
                >
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#0E2C4D] text-white">
                        {block.headers.map((header) => (
                          <th
                            key={header}
                            className="border px-4 py-3 text-left"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {block.rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell) => (
                            <td
                              key={cell}
                              className="border px-4 py-3"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
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
  );
}