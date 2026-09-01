

import StoryIntro from "./components/StoryIntro";
import ERPOverview from "./components/ERPOverview";
import StoryGoal from "./components/StoryGoal";
import FeatureShowcase from "./components/FeatureShowcase";
import TraceabilityShowcase from "./components/TraceabilityShowcase";
import MobileProductShowcase from "./components/MobileProductShowcase";
import LetsTeamUp from "@/app/blog/Component/LetsTeamUp";
import ProjectGrid from "../Component/ProjectGrid";


export default function ErpSystem() {
  return (
    <main className="   bg-white text-[#111111] mt-[150px]">
      <div className="max-w-[1072px] w-full mx-auto overflow-x-clip">
        <StoryIntro />

      <ERPOverview />

      <StoryGoal />

      <FeatureShowcase />

      <TraceabilityShowcase />
      </div>
      
      
      <LetsTeamUp />

      <ProjectGrid />

    </main>
  );
}