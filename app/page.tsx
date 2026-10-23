import HomeContent from "./Home/Page";
import type { Metadata } from "next";
import { seoPages, getPageMetadata } from "./lib/seo"

export const metadata: Metadata = getPageMetadata(seoPages.home);

export default function Home() {
  return (
    <>
      <HomeContent />
    </>
  );
}
