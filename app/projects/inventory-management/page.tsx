import Hero from "./components/Hero";
import Overview from "./components/Overview";
import RoleSection from "./components/RoleSection";
import Gallery from "./components/Gallery";
import Behance from "./components/Behance";

import LetsTeamUp from "@/app/blog/Component/LetsTeamUp";
import ProjectGrid from "../Component/ProjectGrid";

export default function InventoryManagementPage() {
  return (
    <main className=" w-full overflow-hidden bg-white">
      <div className="max-w-[1071px] mx-auto">
        <Hero
        heroDescription="A role-based inventory platform built for modern businesses, managing procurement, stock, sales, and accounts across teams with real-time visibility, structured access control, and complete transaction-level traceability."
        heroImage="/caseHero.png"
        heroImageAlt="IMS Dashboard"
        meta={[
          {
            label: "Deliverables",
            value: "UI/UX, Strategy, Development",
          },
          {
            label: "Platform",
            value: "Admin Tool",
          },
        ]}
      />

      <Overview
        title="Built to become the most trusted inventory platform for businesses that mean business."
        description="A fast, reliable platform that gives every business one real-time inventory system—from procurement to sales—making stock management, order tracking, and financial visibility seamless and traceable."
        image="/caseHero2.png"
        imageAlt="Overview Dashboard"
      />

      <RoleSection
        roleTitle="Super Sales Manager"
        roleImageleft="/sideImage.png"
        roleDescription="The role that keeps revenue moving. From customer orders to daily sales records—complete visibility into every transaction, zero missed opportunities."
        roleImage="/2image1.png"
        roleImageAlt="Sales Manager"
        dashboardImage="/2image2 (2).png"
        dashboardImageAlt="Sales Dashboard"
        
      />

      <Gallery
        showcaseImage="/2image1.png"
        showcaseImageAlt="Inventory Dashboard"
        behanceUrl="https://www.behance.net/"
      />
      </div>

      <LetsTeamUp />

      <ProjectGrid />
    </main>
  );
}