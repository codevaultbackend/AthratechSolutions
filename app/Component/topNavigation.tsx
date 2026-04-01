"use client";

import { useState } from "react";
import Link from "next/link";
import NavigationLabel from "../svgIcons/NavigationLabel";
import Hamburgure from "../svgIcons/Hamburgure";
import MobileSidebar from "./MobileSidebar";
import { usePathname } from "next/navigation";

export default function TopNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      <header className="relative w-full bg-white">
        {isHomePage && (
          <img
            src="/Upper.png"
            alt="upper-dots"
            className="absolute left-0 top-0 z-[9] w-full object-cover opacity-[40%] max-[768px]:h-[400px]"
          />
        )}

        {isHomePage && (
          <div className="absolute inset-0 bg-[radial-gradient(#e6e6e6_1px,transparent_1px)] bg-[size:18px_18px]" />
        )}

        {/* availability pill */}
        <div className="absolute left-1/2 top-0 z-20 w-full max-w-[215px] -translate-x-1/2 max-[600px]:translate-y-32">
          <div className="relative flex items-center justify-center gap-2 rounded-full px-2 py-[11px] text-[12px] font-[400] text-white max-[780px]:py-[6px] max-[600px]:bg-black max-[768px]:top-[-32px]">
            <NavigationLabel className="absolute inset-0 -z-10 h-full w-full text-[#252525] max-[600px]:hidden" />
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Available for New Projects
          </div>
        </div>

        {/* navbar */}
        <div className="relative z-10 mx-auto flex h-[96px] max-w-[1400px] items-center justify-between px-8 pr-[180px] max-[900px]:pr-[170px] max-[768px]:pr-8">
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
          <div className="flex items-center gap-4">
            {/* Book a Call */}
            <a
              href="tel:+917303835369"
              className="fixed right-[96px] top-6 z-[99996] max-[600px]:hidden"
            >
              <div className="flex items-center justify-center">
                <div className="relative rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.35),_rgba(180,180,180,0.25),_rgba(120,120,120,0.15),_transparent_70%)] shadow-[0px_4px_14.6px_0_#959595] top-[-7px]">
                  <div className="rounded-full bg-[linear-gradient(175deg,#F5F5F5,#BDBDBD,#8F8F8F,#666666)] p-[6px]">
                    <div className="flex h-[48px] items-center rounded-full border-[0.5px] border-white bg-black px-4">
                      <h3 className="!text-[16px] font-[500] text-white">
                        Book a Call
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </header>

      {/* globally sticky / fixed hamburger */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed right-8 top-6 z-[99997] flex h-[48px] w-[48px] items-center justify-center max-[768px]:right-4 max-[768px]:top-5"
      >
        <div className="relative rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.35),_rgba(180,180,180,0.25),_rgba(120,120,120,0.15),_transparent_70%)] shadow-[0px_4px_14.6px_0_#959595]">
          <div className="rounded-full bg-[linear-gradient(175deg,#F5F5F5,#BDBDBD,#8F8F8F,#666666)] p-[6px]">
            <div className="flex items-center rounded-full border-[0.5px] border-white bg-black p-2">
              <Hamburgure className="h-[18px] w-[18px]" />
            </div>
          </div>
        </div>
      </button>

      <MobileSidebar open={open} onClose={() => setOpen(false)} />
    </>
  );
}