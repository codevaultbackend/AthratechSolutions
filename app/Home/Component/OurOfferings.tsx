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
      id="OurOffering"
      className="
      relative
      w-full
      min-h-[650px]
      max-md:min-h-[840px]
      bg-[url('/OurOfferingbg.jpg')]
      bg-cover bg-center
      flex flex-col items-center
      px-4
      overflow-hidden
    "
    >

      {/* HEADING */}

      <p
        className="
        font-calligraffitti
        text-[#7A7A7A]
        flex items-center gap-4 justify-center
        text-[24px]
        mt-[180px]
        mb-[60px]

        max-md:mt-[90px]
        max-md:text-[18px]
      "
      >
        <span className="w-[124px] h-[1px] bg-gradient-to-r from-[#9C9C9C] to-[#DFDFDF] max-md:w-[56px]" />
        Our offerings ?
        <span className="w-[124px] h-[1px] bg-gradient-to-r from-[#9C9C9C] to-[#DFDFDF] max-md:w-[56px]" />
      </p>

      <h1
        className="
        text-center
        text-gray-800
        text-[38px]
        leading-[56px]
        max-w-[720px]
        font-bricolage

        max-md:text-[30px]
        max-md:leading-[40px]
        max-md:max-w-[340px]
      "
      >
        We help{" "}
        <span className="text-[#8A8888]">
          startups and enterprises craft digital products
        </span>
        <br className="hidden md:block" />
        that <span className="text-black">truly connect</span> with their
        customers.
      </h1>

      {/* DESKTOP FLOATING PILLS */}

      <div className="absolute inset-0 pointer-events-none max-md:hidden">

        <Label className="top-[38%] left-[7%]">
          <Marketing className="w-6 h-6 bg-pink-400 rounded-full p-1" />
          Marketing
        </Label>

        <Label className="top-[50%] left-[9%] -rotate-3">
          <Icon bg="bg-black text-white">
            <UIUX />
          </Icon>
          UI/UX
        </Label>

        <Label className="top-[64%] left-[12%] rotate-6">
          <Icon bg="bg-green-500">
            <SocialMedia />
          </Icon>
          Social Media
        </Label>

        <Label className="top-[38%] right-[7%]">
          <Icon bg="bg-orange-500">
            <DesignSystem />
          </Icon>
          Design System
        </Label>

        <Label className="top-[50%] right-[9%]">
          <Icon bg="bg-green-200">
            <Addcamp />
          </Icon>
          Ad Campaign
        </Label>

        <Label className="top-[64%] right-[12%] rotate-6">
          <Icon bg="bg-blue-400">
            <Seo />
          </Icon>
          SEO
        </Label>

        <Label className="bottom-[16%] left-[24%] -rotate-6">
          <Icon bg="bg-yellow-400">
            <Developement />
          </Icon>
          Development
        </Label>

        <Label className="bottom-[16%] left-1/2 -translate-x-1/2 rotate-6">
          <Icon bg="bg-red-500">
            <SaasProducts />
          </Icon>
          SAAS Products
        </Label>

        <Label className="bottom-[16%] right-[24%] -rotate-6">
          <Icon bg="bg-sky-400">
            <BrandIdentity />
          </Icon>
          Brand Identity
        </Label>
      </div>

      {/* MOBILE LAYOUT */}

      <div
        className="
        hidden
        max-md:grid
        grid-cols-2
        gap-x-6
        gap-y-5
        mt-10
        w-full
        max-w-[320px]
        justify-items-center
      "
      >

        <LabelMobile rotate="-rotate-6">
          <Icon bg="bg-sky-400">
            <BrandIdentity />
          </Icon>
          Brand Identity
        </LabelMobile>

        <LabelMobile rotate="rotate-6">
          <Icon bg="bg-orange-500">
            <DesignSystem />
          </Icon>
          Design System
        </LabelMobile>

        <LabelMobile rotate="-rotate-3">
          <Icon bg="bg-yellow-400">
            <Developement />
          </Icon>
          Development
        </LabelMobile>

        <LabelMobile rotate="rotate-3">
          <Icon bg="bg-green-500">
            <SocialMedia />
          </Icon>
          Social Media
        </LabelMobile>

        <LabelMobile rotate="-rotate-3">
          <Icon bg="bg-green-200">
            <Addcamp />
          </Icon>
          Ad Campaign
        </LabelMobile>

        <LabelMobile rotate="rotate-3">
          <Marketing className="w-6 h-6 bg-pink-400 rounded-full p-1" />
          Marketing
        </LabelMobile>

        <LabelMobile rotate="-rotate-6">
          <Icon bg="bg-black text-white">
            <UIUX />
          </Icon>
          UI/UX
        </LabelMobile>

        <LabelMobile rotate="rotate-6">
          <Icon bg="bg-blue-400">
            <Seo />
          </Icon>
          SEO
        </LabelMobile>

      </div>
    </section>
  );
}


/* DESKTOP LABEL */

function Label({ children, className = "" }) {
  return (
    <div
      className={`
      absolute
      bg-[#EFEFEF7A]
      px-2 py-1
      rounded-full
      border-2 border-white
      shadow-md
      backdrop-blur
      ${className}
    `}
    >
      <span className="flex items-center gap-2 bg-white px-[10px] py-[6px] rounded-full text-[14px] font-medium whitespace-nowrap">
        {children}
      </span>
    </div>
  );
}


/* MOBILE LABEL */

function LabelMobile({ children, rotate }) {
  return (
    <div
      className={`
      bg-[#EFEFEF7A]
      px-2 py-1
      rounded-full
      border-2 border-white
      shadow-md
      ${rotate}
    `}
    >
      <span className="flex items-center gap-2 bg-white px-[10px] py-[6px] rounded-full text-[13px] font-medium whitespace-nowrap">
        {children}
      </span>
    </div>
  );
}


/* ICON */

function Icon({ children, bg }) {
  return (
    <span className={`w-6 h-6 ${bg} rounded-full flex items-center justify-center`}>
      {children}
    </span>
  );
}