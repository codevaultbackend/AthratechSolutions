import Overview from "../quick-cargo/compoents/Overview";

import LetsTeamUp from "@/app/blog/Component/LetsTeamUp";
import ProjectGrid from "../Component/ProjectGrid";
import ProblemSolution from "./compoents/ProblemSolution";
import Solution from "./compoents/Solution";
import CargoVisualShowcase from "./compoents/CargoVisualShowcase";

export default function ErpSystem() {
  return (
    <main className="min-h-screen  overflow-x-hidden bg-white  ">
      {/* Case Study Intro + ERP Ecosystem */}
      <div className=" max-[767px]:px-[16px] min-[768px]:px-[182px] mx-auto w-full">
      <Overview />
      <ProblemSolution />
      <Solution />
      <CargoVisualShowcase />  </div>
      {/* CTA */}
      <LetsTeamUp />

      {/* More Projects */}
      <ProjectGrid />
    </main>
  );
}