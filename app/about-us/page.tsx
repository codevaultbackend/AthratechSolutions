import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Leadership from "./components/Leadership";
import ContactCTA from "../Home/Component/ContactCTA";

export const metadata = {
  title: "About Us | Athratech",
  description:
    "Learn more about Athratech, our mission, vision, technological ecosystem, and leadership team.",
};

export default function AboutUsPage() {
  return (
    <div className="overflow-x-hidden bg-white">
      <Hero />
      <Mission />
      <Leadership />
      <ContactCTA image="/weraplymoch.png" />
    </div>
  );
}