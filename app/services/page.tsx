import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { services } from "@/app/context/services";
import CardGrid from "../Component/services/CardGrid";
import WhatWeExcelAtSection from "../Home/Component/Whatweexcel";
import LetsTeamUp from "../blog/Component/LetsTeamUp";

export const metadata = {
  title: "Services | Athratech",
  description: "Explore Athratech services.",
};

export default function ServicesPage() {
  return (
    <main className="w-full bg-white ">
      <WhatWeExcelAtSection />
      <LetsTeamUp />
    </main>
  );
}