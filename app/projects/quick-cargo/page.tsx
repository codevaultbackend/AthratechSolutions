import Overview from "../quick-cargo/compoents/Overview";

import LetsTeamUp from "@/app/blog/Component/LetsTeamUp";
import ProjectGrid from "../Component/ProjectGrid";

export default function ErpSystem() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* Case Study Intro + ERP Ecosystem */}
      <Overview />
      {/* CTA */}
      <LetsTeamUp />

      {/* More Projects */}
      <ProjectGrid />
    </main>
  );
}