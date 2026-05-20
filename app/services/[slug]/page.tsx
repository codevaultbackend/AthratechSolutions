import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getServiceBySlug, services } from "@/app/context/services";
import LetsTeamUp from "@/app/Blog/Component/LetsTeamUp";
import CardGrid from "@/app/Component/services/CardGrid";



type PageProps = {
  params:
  | {
    slug: string;
  }
  | Promise<{
    slug: string;
  }>;
};

const resolveParams = async (params: PageProps["params"]) => {
  return await Promise.resolve(params);
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await resolveParams(params);
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Athratech",
      description: "The requested service page could not be found.",
    };
  }

  return {
    title: `${service.detailPage.heroTitle} | Athratech`,
    description: service.detailPage.heroDescription,
  };
}



export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await resolveParams(params);
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="w-full overflow-hidden bg-white text-black">
      {/* HERO */}
      <section className="px-5 pt-[132px] sm:px-6 md:px-8 lg:px-10 lg:pt-[166px]">
        <div className="mx-auto flex w-full max-w-[900px] flex-col items-center text-center">
          <h1 className="max-w-[830px] font-bricolage text-[46px] font-semibold leading-[1.04] tracking-[-0.066em] text-black max-[768px]:text-[34px] md:text-[74px] lg:text-[80px]">
            {service.detailPage.heroTitle}
          </h1>

          <p className="mt-[20px] max-w-[650px] font-inter text-[13px] font-[500] leading-[1.1] tracking-[-0.035em] text-[#6D6D6D] sm:text-[15px] md:text-[17px]">
            {service.detailPage.heroDescription}
          </p>

          <div className="mt-[38px] flex justify-center max-[768px]:max-w-[100%] max-[768px]:w-[100%]">
            <Link href="/ContactForm" className="inline-block w-full max-w-full max-md:w-full">
              <div className="flex items-center justify-center pb-[34px] max-md:pb-[16px]">
                <div
                  className="relative rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.35),_rgba(180,180,180,0.25),_rgba(120,120,120,0.15),_transparent_70%)] shadow-[0px_4px_14.6px_0_#959595]
                         max-md:w-full"
                >
                  <div className="rounded-full bg-[linear-gradient(175deg,#F5F5F5,#BDBDBD,#8F8F8F,#666666)] p-[6px] shadow-[0_0_40px_rgba(180,180,180,0.5)]">
                    <div
                      className="flex items-center justify-center gap-4 rounded-full border-[0.5px] border-[#fff] bg-black px-4 py-2 shadow-inner
                             max-md:h-[56px] max-md:w-full max-md:gap-3 max-md:px-4 max-md:py-1.5
                             max-sm:h-[52px] max-sm:px-3"
                    >
                      <h3 className="text-[16px] font-[500] tracking-tight text-white max-md:text-[14px] max-[768px]:!text-[18px]">
                        Contact Us
                      </h3>


                      <div className="flex shrink-0 -space-x-3 max-sm:-space-x-2.5">
                        {["https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero2_eKVVHgfGm.jpg", "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero1_CpKdYK8kd.jpg", "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero_NaRzEsvqk.jpg", "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero2_eKVVHgfGm.jpg"].map(
                          (src, i) => (
                            <div
                              key={i}
                              className="h-[26px] w-[26px] overflow-hidden rounded-full
                                     max-md:h-[22px] max-md:w-[22px]
                                     max-[768px]:!h-[25px] max-[768px]:!w-[25px]"
                            >
                              <Image
                                src={src}
                                alt={`avatar-${i + 1}`}
                                width={56}
                                height={56}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <CardGrid service={service} />
      

      <LetsTeamUp />
    </main>
  );
}