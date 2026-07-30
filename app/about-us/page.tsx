import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Vision from "./components/Vision";
import Ecosystem from "./components/Ecosystem";
import Leadership from "./components/Leadership";

export const metadata = {
  title: "About Us | Athratech",
  description:
    "Learn more about Athratech, our mission, vision, technological ecosystem, and leadership team.",
};

export default function AboutUsPage() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Hero />
      <Mission />
      <Leadership />
    </main>
  );
}