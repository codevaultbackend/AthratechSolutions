import Image from "next/image";
import Link from "next/link";
import CardGrid from "../Component/services/CardGrid";
import { getServiceBySlug } from "../context/services";

type ServiceShowcaseSectionProps = {
  slug: string;
  sectionId?: string;
  buttonText?: string;
  buttonHref?: string;
  avatars?: string[];
  className?: string;
};

const defaultAvatars = [
  "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero2_eKVVHgfGm.jpg",
  "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero1_CpKdYK8kd.jpg",
  "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero_NaRzEsvqk.jpg",
  "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero2_eKVVHgfGm.jpg",
];

function ContactPillButton({
  text = "Let’s Talk",
  href = "/ContactForm",
  avatars = defaultAvatars,
}: {
  text?: string;
  href?: string;
  avatars?: string[];
}) {
  return (
    <Link
      href={href}
      aria-label={text}
      className="inline-block w-full sm:w-fit"
    >
      <div className="flex w-full items-center justify-start pb-[16px] sm:justify-center sm:pb-0">
        <div className="relative w-full rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.35),_rgba(180,180,180,0.25),_rgba(120,120,120,0.15),_transparent_70%)] shadow-[0px_4px_14.6px_0_#959595] sm:w-auto">
          <div className="rounded-full bg-[linear-gradient(175deg,#F5F5F5,#BDBDBD,#8F8F8F,#666666)] p-[6px] shadow-[0_0_40px_rgba(180,180,180,0.5)]">
            <div className="flex h-[52px] w-full items-center justify-center gap-3 rounded-full border-[0.5px] border-white bg-black px-4 py-1.5 shadow-inner sm:h-auto sm:w-auto sm:gap-4 sm:px-4 sm:py-2">
              <h3 className="whitespace-nowrap text-[13px] font-medium tracking-tight text-white sm:text-[16px]">
                {text}
              </h3>

              <div className="flex shrink-0 -space-x-2.5 sm:-space-x-3">
                {avatars.map((src, index) => (
                  <div
                    key={`${src}-${index}`}
                    className="relative h-[20px] w-[20px] overflow-hidden rounded-full bg-neutral-200 sm:h-[26px] sm:w-[26px]"
                  >
                    <Image
                      src={src}
                      alt=""
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ServiceShowcaseSection({
  slug,
  sectionId,
  buttonText = "Let’s Talk",
  buttonHref = "/ContactForm",
  avatars = defaultAvatars,
  className = "",
}: ServiceShowcaseSectionProps) {
  const service = getServiceBySlug(slug);

  if (!service) {
    return null;
  }

  return (
    <section
      id={sectionId ?? slug}
      className={`relative overflow-hidden bg-[#F7F7F7] py-[72px] sm:py-[92px] lg:py-[112px] ${className}`}
    >
      <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-6 lg:px-8 xl:px-0">
        <div className="mb-[34px] flex flex-col gap-7 sm:mb-[42px] sm:flex-row sm:items-start sm:justify-between lg:mb-[52px]">
          <div className="max-w-[565px]">
            <h2 className="text-[34px] font-semibold leading-[0.98] tracking-[-0.065em] text-black sm:text-[44px] lg:text-[50px]">
              {service.detailPage.heroTitle}
            </h2>

            <p className="mt-5 max-w-[520px] text-[13px] leading-[1.75] tracking-[-0.025em] text-black/50 sm:text-[14px] lg:text-[15px]">
              {service.detailPage.heroDescription}
            </p>
          </div>

          <ContactPillButton
            text={buttonText}
            href={buttonHref}
            avatars={avatars}
          />
        </div>

        <CardGrid service={service} />
      </div>
    </section>
  );
}