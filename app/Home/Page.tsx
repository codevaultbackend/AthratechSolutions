import Image from "next/image";
import TopNavigation from "../Component/topNavigation";
import HeroSection from "./Component/HeroSection";

export default function Home() {
    return (
        <div className=" min-h-[100vh]">
           <HeroSection />
        </div>
    );
}
