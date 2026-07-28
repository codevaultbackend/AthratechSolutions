export type CaseStudyMeta = {
  label: string;
  value: string;
};

export type ImageCard = {
  image: string;
  alt: string;
};

export type ProjectCaseStudy = {
  /* ============================
     Hero
  ============================ */

  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  meta: CaseStudyMeta[];

  /* ============================
     Overview Section
  ============================ */

  sectionOneTitle: string;
  sectionOneDescription: string;
  sectionOneShowcaseImage: string;
  sectionOneShowcaseAlt: string;

  /* ============================
     Role Section
  ============================ */

  roleTitle: string;
  roleDescription: string;

  roleImage: string;
  roleImageAlt: string;

  dashboardImage: string;
  dashboardImageAlt: string;

  clientTitle: string;
  clientDescription: string;

  /* ============================
     Final Gallery
  ============================ */

  galleryImage: string;
  galleryImageAlt: string;

  /* ============================
     Behance
  ============================ */

  behanceUrl: string;
};

export type HeroProps = {
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  meta: CaseStudyMeta[];
};

export type OverviewProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type RoleSectionProps = {
  roleTitle: string;
  roleDescription: string;

  roleImage: string;
  roleImageAlt: string;

  dashboardImage: string;
  dashboardImageAlt: string;

  clientTitle: string;
  clientDescription: string;
};

export type GalleryProps = {
  showcaseImage: string;
  showcaseImageAlt: string;

  behanceUrl?: string;
};

export type BehanceProps = {
  behanceUrl: string;
};