import Image from "next/image";
import { notFound } from "next/navigation";
import { projectsData } from "@/app/context/projects";
import LetsTallk from "@/app/svgIcons/LetsTallk";
import ProjectGrid from "../Component/ProjectGrid";
import LetsTeamUp from "@/app/Blog/Component/LetsTeamUp";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

type CaseStudyMeta = {
    label: string;
    value: string;
};

type CaseStudyImageCard = {
    image: string;
    alt: string;
    className?: string;
    imageClassName?: string;
};

type ProjectCaseStudy = {
    layoutVariant?: "markday" | "fastresponse" | "default";
    heroDescription: string;
    heroHighlight?: string;
    heroImage: string;
    heroImageAlt: string;
    meta: CaseStudyMeta[];

    sectionOneTitle: string;
    sectionOneDescription: string;
    sectionOneImages?: [CaseStudyImageCard, CaseStudyImageCard];
    sectionOneStackImages?: [
        CaseStudyImageCard,
        CaseStudyImageCard,
        CaseStudyImageCard
    ];
    sectionOneMarkDayStackImages?: [
        CaseStudyImageCard,
        CaseStudyImageCard,
        CaseStudyImageCard
    ];

    sectionTwoTitle: string;
    sectionTwoDescription: string;
    sectionTwoTopImages?: [CaseStudyImageCard, CaseStudyImageCard];
    sectionTwoBottomImage: CaseStudyImageCard;
};

function cn(...classes: Array<string | undefined | false | null>) {
    return classes.filter(Boolean).join(" ");
}

function splitHighlightedText(text: string, highlight?: string) {
    if (!highlight || !text.includes(highlight)) return text;

    const parts = text.split(highlight);

    return (
        <>
            {parts[0]}
            <span className="font-semibold text-black">{highlight}</span>
            {parts[1]}
        </>
    );
}

/* -------------------------------------------------------------------------- */
/*                                  SHARED UI                                 */
/* -------------------------------------------------------------------------- */

function SectionContainer({
    children,
    className,
    narrow = false,
}: {
    children: React.ReactNode;
    className?: string;
    narrow?: boolean;
}) {
    return (
        <section className={className}>
            <div
                className={cn(
                    "mx-auto w-full px-4 sm:px-6 lg:px-8",
                    narrow ? "max-w-[1220px]" : "max-w-[1280px]"
                )}
            >
                {children}
            </div>
        </section>
    );
}

function CaseStudyImage({
    card,
    sizes,
    wrapperClassName,
    roundedClassName = "rounded-[16px] md:rounded-[22px] lg:rounded-[24px]",
    bgClassName = "bg-[#EFEFEF]",
    fit = "cover",
}: {
    card: CaseStudyImageCard;
    sizes: string;
    wrapperClassName: string;
    roundedClassName?: string;
    bgClassName?: string;
    fit?: "cover" | "contain";
}) {
    return (
        <div
            className={cn(
                "relative overflow-hidden",
                roundedClassName,
                bgClassName,
                wrapperClassName,
                card.className
            )}
        >
            <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes={sizes}
                className={
                    card.imageClassName ||
                    (fit === "contain"
                        ? "object-contain object-center"
                        : "object-cover object-center")
                }
            />
        </div>
    );
}


function FastResponseSectionHeader({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="max-w-[775px] mx-auto lg:mt-[33px] lg:mb-[102px]">
            <h2 className="text-[28px] lg:mb-[29px]  font-semibold leading-[100%] tracking-[-0.045em] text-[#111111] sm:text-[34px] lg:text-[48px]">
                {title}
            </h2>

            <p className="mt-2 max-w-[710px] text-[11px] font-normal leading-[1.6] tracking-[-0.01em] text-[#7A7A7A] sm:mt-3 sm:text-[12px] lg:text-[14px]">
                {description}
            </p>
        </div>
    );
}

function FastResponseHero({
    title,
    caseStudy,
}: {
    title: string;
    caseStudy: ProjectCaseStudy;
}) {
    return (
        <SectionContainer narrow className="pt-[28px] pb-[14px] sm:pt-[40px] lg:pt-[54px] lg:pb-[18px]">
            <div className="max-w-[870px]">
                <p className="max-w-[880px] text-[20px] font-normal leading-[110%] tracking-[-0.005em] text-[#0E0E0E] sm:text-[32px] lg:text-[42px]">
                    {splitHighlightedText(
                        caseStudy.heroDescription,
                        caseStudy.heroHighlight
                    )}
                </p>
            </div>

            <div className="mt-[18px] max-w-[1004px] mx-auto  lg:!my-[98px]  lg:pb-[15px]">
                <div className="grid grid-cols-1 gap-y-5 md:grid-cols-[1fr_auto] md:items-end md:gap-x-12">
                    <h1 className="text-[33px] font-bricolage font-semibold leading-none tracking-[-0.055em] text-[#000000] sm:text-[40px] lg:text-[54px]">
                        {title}
                    </h1>

                    <div className="grid grid-cols-2 gap-x-7 gap-y-3 sm:gap-x-10 lg:gap-x-14">
                        {caseStudy.meta.slice(0, 2).map((item, index) => (
                            <div key={index}>
                                <p className="text-[8px] uppercase leading-none tracking-[0.18em] text-[#8A8A8A] lg:text-[9px]">
                                    {item.label}
                                </p>
                                <p className="mt-[5px] text-[11px] font-medium leading-[1.2] text-[#111111] lg:text-[12px]">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-[18px] overflow-hidden rounded-[18px] bg-black md:mt-[26px] lg:mt-[32px] lg:rounded-[24px]">
                <div className="relative aspect-[1.15/1] w-full sm:aspect-[1.45/1] lg:aspect-[16/9.2]">
                    <Image
                        src={caseStudy.heroImage}
                        alt={caseStudy.heroImageAlt}
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 92vw, 1232px"
                    />
                </div>
            </div>
        </SectionContainer>
    );
}

function FastResponseSectionOne({
    sectionOneTitle,
    sectionOneDescription,
    sectionOneStackImages,
}: {
    sectionOneTitle: string;
    sectionOneDescription: string;
    sectionOneStackImages?: [
        CaseStudyImageCard,
        CaseStudyImageCard,
        CaseStudyImageCard
    ];
}) {
    const leftPhone = sectionOneStackImages?.[0];
    const rightPhoto = sectionOneStackImages?.[1];
    const rightBottomGraphic = sectionOneStackImages?.[2];

    if (!leftPhone || !rightPhoto || !rightBottomGraphic) return null;

    return (
        <SectionContainer narrow className="pt-[14px] pb-[32px] md:pt-[18px] lg:pt-[24px] lg:pb-[48px]">
            <FastResponseSectionHeader
                title={sectionOneTitle}
                description={sectionOneDescription}
            />

            <div className="mt-[16px] grid grid-cols-1 gap-4 sm:mt-[20px] lg:mt-[24px] lg:grid-cols-[1.02fr_0.58fr] lg:gap-[18px]">
                <CaseStudyImage
                    card={leftPhone}
                    fit="contain"
                    sizes="(max-width: 1023px) 100vw, 760px"
                    wrapperClassName="aspect-[1.03/0.9] min-h-[260px] sm:min-h-[360px] lg:min-h-[610px]"
                    bgClassName="bg-[#F1F1F1]"
                />

                <div className="grid grid-rows-[1fr_auto] gap-4 lg:gap-[18px]">
                    <CaseStudyImage
                        card={rightPhoto}
                        fit="cover"
                        sizes="(max-width: 1023px) 100vw, 445px"
                        wrapperClassName="aspect-[0.86/1] min-h-[250px] sm:min-h-[330px] lg:min-h-[485px]"
                        bgClassName="bg-[#F1F1F1]"
                    />

                    <CaseStudyImage
                        card={rightBottomGraphic}
                        fit="contain"
                        sizes="(max-width: 1023px) 100vw, 445px"
                        wrapperClassName="aspect-[1.16/0.52] min-h-[110px] sm:min-h-[128px] lg:min-h-[150px]"
                        bgClassName="bg-transparent"
                    />
                </div>
            </div>
        </SectionContainer>
    );
}

function FastResponseSectionTwo({
    sectionTwoTitle,
    sectionTwoDescription,
    sectionTwoTopImages,
    sectionTwoBottomImage,
}: {
    sectionTwoTitle: string;
    sectionTwoDescription: string;
    sectionTwoTopImages?: [CaseStudyImageCard, CaseStudyImageCard];
    sectionTwoBottomImage: CaseStudyImageCard;
}) {
    const topLeft = sectionTwoTopImages?.[0];
    const topRight = sectionTwoTopImages?.[1];

    if (!topLeft || !topRight || !sectionTwoBottomImage) return null;

    return (
        <SectionContainer narrow className="pt-[2px]  mx-auto pb-[42px] md:pt-[6px] lg:pt-[10px] lg:pb-[92px]">
            <FastResponseSectionHeader
                title={sectionTwoTitle}
                description={sectionTwoDescription}
            />

            <div className="mt-[16px]  grid grid-cols-1 !justify-between !gap-4 sm:mt-[20px] sm:grid-cols-2 lg:mt-[24px] lg:!gap-[28px]">
                <CaseStudyImage
                    card={topLeft}
                    fit="contain"
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 610px"
                    wrapperClassName=" !max-w-[709px] w-full aspect-[1.18/0.76] min-h-[180px] sm:min-h-[220px] lg:min-h-[380px] "
                    bgClassName="bg-[#F1F1F1]"
                />

                <CaseStudyImage
                    card={topRight}
                    fit="contain"
                    sizes="(max-width: 539px) 100vw, (max-width: 1023px) 50vw, 510px"
                    wrapperClassName=" max-w-[423px] w-full min-h-[180px] sm:min-h-[220px] lg:min-h-[380px]"
                    bgClassName="bg-[#F1F1F1]"
                />
            </div>

            <div className="mt-4 lg:mt-[18px]">
                <CaseStudyImage
                    card={sectionTwoBottomImage}
                    fit="contain"
                    sizes="(max-width: 1023px) 100vw, 1200px"
                    wrapperClassName=" max-w-[423px] w-full max-w-[1200px] aspect-[1.63/0.87] min-h-[210px] sm:min-h-[300px] lg:min-h-[520px]"
                    bgClassName="bg-[#F1F1F1]"
                />
            </div>
        </SectionContainer>
    );
}

/* -------------------------------------------------------------------------- */
/*                                 MARK DAY UI                                */
/* -------------------------------------------------------------------------- */

function MarkDayHero({
    title,
    caseStudy,
}: {
    title: string;
    caseStudy: ProjectCaseStudy;
}) {
    const deliverables = caseStudy.meta?.[0];
    const platform = caseStudy.meta?.[1];

    return (
        <SectionContainer className="pt-[20px] pb-[12px] sm:pt-[30px] lg:pt-[46px] lg:pb-[18px]">
            {/* top description */}
            <div className="max-w-[920px]">
                <p className="max-w-[880px] text-[20px] font-normal leading-[110%] tracking-[-0.005em] text-[#0E0E0E] sm:text-[32px] lg:text-[42px]">
                    {splitHighlightedText(
                        caseStudy.heroDescription,
                        caseStudy.heroHighlight
                    )}
                </p>
            </div>

            {/* title + meta row */}
            <div className="mt-[18px] max-w-[1004px] mx-auto  lg:!my-[98px]  lg:pb-[15px]">
                <div className="grid grid-cols-1 gap-y-5 md:grid-cols-[minmax(0,1fr)_max-content_max-content] md:items-end md:gap-x-[72px] lg:gap-x-[96px]">
                    <h1 className="text-[33px] font-bricolage font-semibold leading-none tracking-[-0.055em] text-[#000000] sm:text-[40px] lg:text-[54px]">
                        {title}
                    </h1>

                    {deliverables && (
                        <div className="min-w-[250px] lg:min-w-[360px]">
                            <p className="text-[8px] font-medium uppercase leading-none tracking-[0.18em] text-[#525252] lg:text-[9px]">
                                {deliverables.label}
                            </p>
                            <p className="mt-[7px] text-[11px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#191919] lg:text-[12px]">
                                {deliverables.value}
                            </p>
                        </div>
                    )}

                    {platform && (
                        <div className="min-w-[120px] lg:min-w-[170px]">
                            <p className="text-[8px] font-medium uppercase leading-none tracking-[0.18em] text-[#8B8B8B] lg:text-[9px]">
                                {platform.label}
                            </p>
                            <p className="mt-[7px] text-[11px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#111111] lg:text-[12px]">
                                {platform.value}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* hero image */}
            <div className="mt-[18px] overflow-hidden rounded-[18px] bg-black shadow-[0_10px_30px_rgba(0,0,0,0.06)] md:mt-[24px] lg:mt-[30px] lg:rounded-[24px]">
                <div className="relative aspect-[1.06/0.84] w-full sm:aspect-[1.35/0.84] lg:aspect-[16/8.7]">
                    <Image
                        src={caseStudy.heroImage}
                        alt={caseStudy.heroImageAlt}
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 92vw, 1280px"
                    />
                </div>
            </div>
        </SectionContainer>
    );
}

function MarkDaySectionHeader({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="max-w-[734px] mx-auto lg:my-[137px]">
            <h2 className="text-[28px] lg:mb-[29px]  font-semibold leading-[100%] tracking-[-0.045em] text-[#111111] sm:text-[34px] lg:text-[48px]">
                {title}
            </h2>

            <p className="mt-2 max-w-[710px] text-[11px] font-normal leading-[1.6] tracking-[-0.01em] text-[#7A7A7A] sm:mt-3 sm:text-[12px] lg:text-[14px]">
                {description}
            </p>
        </div>
    );
}

function MarkDaySectionOne({
    sectionOneTitle,
    sectionOneDescription,
    sectionOneMarkDayStackImages,
}: {
    sectionOneTitle: string;
    sectionOneDescription: string;
    sectionOneMarkDayStackImages?: [
        CaseStudyImageCard,
        CaseStudyImageCard,
        CaseStudyImageCard
    ];
}) {
    const leftTop = sectionOneMarkDayStackImages?.[0];
    const leftBottom = sectionOneMarkDayStackImages?.[1];
    const rightTall = sectionOneMarkDayStackImages?.[2];

    if (!leftTop || !leftBottom || !rightTall) return null;

    return (
        <SectionContainer className="pt-[16px] pb-[28px] md:pt-[18px] lg:pt-[24px] lg:pb-[44px]">
            <MarkDaySectionHeader
                title={sectionOneTitle}
                description={sectionOneDescription}
            />

            <div className="mt-[16px] grid grid-cols-1 gap-4 sm:mt-[20px] lg:mt-[24px]">
                {/* top two cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-[18px]">
                    <CaseStudyImage
                        card={leftTop}
                        fit="contain"
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 360px"
                        wrapperClassName="aspect-[1.18/0.92] min-h-[170px] sm:min-h-[220px] lg:min-h-[245px]"
                        roundedClassName="rounded-[14px] md:rounded-[18px] lg:rounded-[20px]"
                        bgClassName="bg-[#F1F1F1]"
                    />

                    <CaseStudyImage
                        card={leftBottom}
                        fit="cover"
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 360px"
                        wrapperClassName="aspect-[1.18/0.92] min-h-[170px] sm:min-h-[220px] lg:min-h-[245px]"
                        roundedClassName="rounded-[14px] md:rounded-[18px] lg:rounded-[20px]"
                        bgClassName="bg-black"
                    />
                </div>

                {/* bottom full width image */}
                <CaseStudyImage
                    card={rightTall}
                    fit="cover"
                    sizes="(max-width: 1023px) 100vw, 760px"
                    wrapperClassName="aspect-[2.05/1] min-h-[220px] sm:min-h-[320px] lg:min-h-[430px]"
                    roundedClassName="rounded-[14px] md:rounded-[18px] lg:rounded-[20px]"
                    bgClassName="bg-[#F5F5F5]"
                />
            </div>
        </SectionContainer>
    );
}

function MarkDaySectionTwo({
    sectionTwoTitle,
    sectionTwoDescription,
    sectionTwoBottomImage,
}: {
    sectionTwoTitle: string;
    sectionTwoDescription: string;
    sectionTwoBottomImage: CaseStudyImageCard;
}) {
    if (!sectionTwoBottomImage) return null;

    return (
        <SectionContainer className="pt-[4px] pb-[54px] md:pt-[8px] lg:pt-[12px] lg:pb-[96px]">
            <MarkDaySectionHeader
                title={sectionTwoTitle}
                description={sectionTwoDescription}
            />

            <div className="mt-[16px] sm:mt-[20px] lg:mt-[24px]">
                <CaseStudyImage
                    card={sectionTwoBottomImage}
                    fit="cover"
                    sizes="(max-width: 1023px) 100vw, 1280px"
                    wrapperClassName="aspect-[1.1/1] sm:aspect-[1.4/0.95] lg:aspect-[16/8.8] min-h-[260px] sm:min-h-[360px] lg:min-h-[560px]"
                    roundedClassName="rounded-[18px] md:rounded-[22px] lg:rounded-[24px]"
                    bgClassName="bg-black"
                />
            </div>
        </SectionContainer>
    );
}



function HeroBlock({
    title,
    caseStudy,
}: {
    title: string;
    caseStudy: ProjectCaseStudy;
}) {
    if (caseStudy.layoutVariant === "fastresponse") {
        return <FastResponseHero title={title} caseStudy={caseStudy} />;
    }

    if (caseStudy.layoutVariant === "markday") {
        return <MarkDayHero title={title} caseStudy={caseStudy} />;
    }

    return null;
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const normalizedSlug = decodeURIComponent(slug).trim().toLowerCase();

    const project = projectsData.find(
        (item) =>
            item.slug?.trim().toLowerCase() === normalizedSlug && item.hasCaseStudy
    );

    if (!project) {
        notFound();
    }

    const caseStudy = project.caseStudy as ProjectCaseStudy | undefined;

    if (!caseStudy) {
        notFound();
    }

    return (
        <>
            <main className="min-h-screen bg-white max-[768px]:mt-[40px]">
                <HeroBlock title={project.title} caseStudy={caseStudy} />

                {caseStudy.layoutVariant === "markday" ? (
                    <>
                        <MarkDaySectionOne
                            sectionOneTitle={caseStudy.sectionOneTitle}
                            sectionOneDescription={caseStudy.sectionOneDescription}
                            sectionOneMarkDayStackImages={caseStudy.sectionOneMarkDayStackImages}
                        />
                        <MarkDaySectionTwo
                            sectionTwoTitle={caseStudy.sectionTwoTitle}
                            sectionTwoDescription={caseStudy.sectionTwoDescription}
                            sectionTwoBottomImage={caseStudy.sectionTwoBottomImage}
                        />
                    </>
                ) : caseStudy.layoutVariant === "fastresponse" ? (
                    <>
                        <FastResponseSectionOne
                            sectionOneTitle={caseStudy.sectionOneTitle}
                            sectionOneDescription={caseStudy.sectionOneDescription}
                            sectionOneStackImages={caseStudy.sectionOneStackImages}
                        />
                        <FastResponseSectionTwo
                            sectionTwoTitle={caseStudy.sectionTwoTitle}
                            sectionTwoDescription={caseStudy.sectionTwoDescription}
                            sectionTwoTopImages={caseStudy.sectionTwoTopImages}
                            sectionTwoBottomImage={caseStudy.sectionTwoBottomImage}
                        />
                    </>
                ) : null}
            </main>
            <LetsTeamUp />
            <ProjectGrid />
        </>
    );
}