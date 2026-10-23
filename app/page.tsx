import HomeContent from "./Home/Page";
import type { Metadata } from "next";
import { seoPages, getPageMetadata } from "./lib/seo";
import homepageSchema from "./homepage-schema";

export const metadata: Metadata = getPageMetadata(seoPages.home);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <HomeContent />
    </>
  );
}
