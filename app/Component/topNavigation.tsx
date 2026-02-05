"use client";

import { useState } from "react";
import Link from "next/link";
import NavigationLabel from "../svgIcons/NavigationLabel";
import Hamburgure from "../svgIcons/Hamburgure";
import MobileSidebar from "./MobileSidebar";

export default function TopNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white relative">
        <img
          src="/Upper.png"
          alt="upper-dots"
          className="absolute top-0 left-0 w-full z-[9] object-cover opacity-[40%] max-[768px]:h-[400px] "
        />

        {/* dotted background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e6e6e6_1px,transparent_1px)] bg-[size:18px_18px]" />

        {/* availability pill */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 max-[600px]:translate-y-32 z-20 max-w-[215px] w-full">
          <div className="relative flex items-center justify-center gap-2 px-2 py-[11px] text-white text-[12px] font-[400] rounded-full max-[600px]:bg-black max-[780px]:py-[6px]">
            <NavigationLabel className="absolute max-[600px]:hidden inset-0 w-full h-full text-[#252525] -z-10" />
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Available for New Projects
          </div>
        </div>

        {/* navbar */}
        <div className="relative z-10 mx-auto flex h-[96px] max-w-[1400px] items-center justify-between px-8">
          {/* logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/AthraLogo.png"
              alt="Athratech"
              className="h-[55px] w-[189px] object-contain max-[768px]:hidden"
            />
             <img
              src="/AthraMobileLogo.png"
              alt="Athratech"
              className="h-[48px] w-[58px] object-contain min-[768px]:hidden"
            />
          </Link>

          {/* actions */}
          <div className="flex items-center gap-4 max-[768px]:gap-0 relative z-10">
            {/* Book a Call (unchanged) */}
            <a href="tel:+917303835369" className="max-[600px]:hidden mr-[32px] max-[768px]:!mr-[0px]  ">
              <div className="flex justify-center items-center">
                <div className="relative rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.35),_rgba(180,180,180,0.25),_rgba(120,120,120,0.15),_transparent_70%)] shadow-[0px_4px_14.6px_0_#959595]">
                  <div className="rounded-full p-[6px] bg-[linear-gradient(175deg,#F5F5F5,#BDBDBD,#8F8F8F,#666666)]">
                    <div className="flex items-center px-4 py-2 rounded-full h-[48px] bg-black border-[0.5px] border-white">
                      <h3 className="text-white !text-[16px] font-[500]">
                        Book a Call
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Hamburger (ONLY behavior changed) */}
            <div className="w-[62px] h-[62px] max-[768px]:w-[40px] max-[768px]:h-[40px]"></div>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className=" w-[62px] h-[62px] max-[768px]:!w-[40px] max-[768px]:!h-[40px] flex justify-center items-center fixed top-[20px] right-[80px] max-[768px]:right-[20px] !z-[99999999] "
            >
              <div className="relative rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.35),_rgba(180,180,180,0.25),_rgba(120,120,120,0.15),_transparent_70%)] shadow-[0px_4px_14.6px_0_#959595] ">
                <div className="rounded-full p-[6px] bg-[linear-gradient(175deg,#F5F5F5,#BDBDBD,#8F8F8F,#666666)]">
                  <div className="flex items-center  p-2 rounded-full bg-black border-[0.5px] border-white">
                    <Hamburgure className="w-[24px] h-[24px] max-[768px]:w-[14px] max-[768px]:h-[14px]" />
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <MobileSidebar open={open} onClose={() => setOpen(false)} />
    </>
  );
}
