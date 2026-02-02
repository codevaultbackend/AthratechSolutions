"use client";

import Addcamp from "@/app/svgIcons/Addcamp";
import BrandIdentity from "@/app/svgIcons/BrandIdentity";
import DesignSystem from "@/app/svgIcons/DesignSystem";
import Developement from "@/app/svgIcons/Developement";
import Marketing from "@/app/svgIcons/Marketing";
import SaasProducts from "@/app/svgIcons/SaasProducts";
import Seo from "@/app/svgIcons/Seo";
import SocialMedia from "@/app/svgIcons/SocialMedia";
import UIUX from "@/app/svgIcons/UIUX";

export default function HeroSection() {
  return (
    <section
      className="
        relative w-full
        min-h-[89vh]
        max-md:min-h-[100vh]
        bg-[url('/OurOfferingbg.jpg')]
        bg-cover bg-center bg-no-repeat
        flex flex-col items-center
        px-4
      "
    >
      {/* ===== Heading ===== */}
      <p
        className="
          font-calligraffitti text-[#7A7A7A]
          flex items-center gap-4 justify-center
          text-[24px] font-[400]
          mt-[113px] mb-6

          max-md:mt-[88px]
          max-md:text-[18px]
        "
      >
        <span className="w-[124px] h-[1px] bg-[linear-gradient(231deg,#9C9C9C_42%,#DFDFDF)] max-md:w-[56px]" />
        Our offerings ?
        <span className="w-[124px] h-[1px] bg-[linear-gradient(152deg,#9C9C9C_42%,#DFDFDF)] max-md:w-[56px]" />
      </p>

      <h1
        className="
          text-center font-[400] text-gray-800
          text-[46px] leading-[56px]
          max-w-[720px]
          max-[760px]:!text-[24px]

          max-md:text-[32px]
          max-md:leading-[40px]
          max-md:max-w-[340px]
          !font-Bricolage_Grotesque
        "
      >
        We help <span className="text-[23px] text-[400] text-[#8A8888] mr-[10px]">startups and enterprises craft digital products</span> 
        <br className="hidden md:block" />
        that <span className="text-black">truly connect</span> with their customers.
      </h1>

      {/* ===== FLOATING LABELS ===== */}
      <div className="absolute inset-0 pointer-events-none">

        {/* LEFT COLUMN */}
        <Label className="top-[30%] left-[6%] max-md:top-[56%] max-md:left-[4%]">
          <Marketing className="w-6 h-6 bg-pink-400 rounded-full p-1" />
          Marketing
        </Label>

        <Label className="top-[46%] left-[8%] rotate-[-2.6deg] max-md:top-[67%]">
          <Icon bg="bg-black text-white">
            <UIUX />
          </Icon>
          UI/UX
        </Label>

        <Label className="top-[62%] left-[14%] rotate-[5.11deg] max-md:top-[79%] max-md:left-[8%]">
          <Icon bg="bg-green-500">
            <SocialMedia />
          </Icon>
          Social Media
        </Label>

        {/* RIGHT COLUMN */}
        <Label className="top-[30%] right-[6%] max-md:top-[56%] max-md:right-[4%]">
          <Icon bg="bg-orange-500">
            <DesignSystem />
          </Icon>
          Design System
        </Label>

        <Label className="top-[46%] right-[8%] max-md:top-[67%]">
          <Icon bg="bg-green-200">
            <Addcamp />
          </Icon>
          Ad Campaign
        </Label>

        <Label className="top-[62%] right-[14%] rotate-[6deg] max-md:top-[78%] max-md:right-[8%]">
          <Icon bg="bg-blue-400">
            <Seo />
          </Icon>
          SEO
        </Label>

        {/* BOTTOM ROW */}
        <Label className="bottom-[22%] left-[20%] rotate-[-8deg] max-md:bottom-[2%] max-md:left-[6%]">
          <Icon bg="bg-yellow-400">
            <Developement />
          </Icon>
          Development
        </Label>

        <Label className="bottom-[18%] left-1/2 -translate-x-1/2 rotate-[5deg] max-md:!bottom-[2%] max-md:hidden">
          <Icon bg="bg-red-500">
            <SaasProducts />
          </Icon>
          SAAS Products
        </Label>

        <Label className="bottom-[22%] right-[20%] rotate-[-9deg] max-md:bottom-[2%] max-md:right-[6%]">
          <Icon bg="bg-sky-400">
            <BrandIdentity />
          </Icon>
          Brand Identity
        </Label>

      </div>
    </section>
  );
}

/* ===== COMPONENTS ===== */

function Label({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        absolute
        bg-[#EFEFEF7A]
        px-2 py-1
        rounded-full
        shadow-md
        border-2 border-white
        ${className}
      `}
    >
      <span
        className="
          flex items-center gap-2
          bg-white
          px-[10px] py-[6px]
          rounded-full
          text-[14px] font-[500]
          max-md:text-[13px]
        "
      >
        {children}
      </span>
    </div>
  );
}

function Icon({
  children,
  bg,
}: {
  children: React.ReactNode;
  bg: string;
}) {
  return (
    <span
      className={`w-6 h-6 ${bg} rounded-full flex items-center justify-center`}
    >
      {children}
    </span>
  );
}
