"use client";

import Link from "next/link";
import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileSidebar({ open, onClose }: Props) {
  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-full max-w-[420px]
        bg-[#262626] text-white
        transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${open ? "translate-x-0" : "translate-x-full"}
        rounded-l-[32px]
        flex flex-col`}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center"
        >
          <span className="text-black text-[28px] leading-none">×</span>
        </button>

        {/* Menu */}
        <nav className="flex-1 flex flex-col items-center justify-center gap-[36px]">
          {[
            "Home",
            "Services",
            "Process",
            "Projects",
            "Testimonials",
            "FAQ",
          ].map((item) => (
            <Link
              key={item}
              href="/"
              onClick={onClose}
              className="text-[24px] font-[400] leading-[100%] text-[#BEBEBE] hover:text-white transition"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="pb-[48px] flex flex-col items-center gap-6">
          <p className="text-[16px] font-[400] text-[#FFFFFF] font-bricolage">
            Have a project for us?
          </p>

          <Link href="/contact" onClick={onClose}>
            <div className="px-[36px] py-[14px] rounded-full bg-white text-black text-[18px] font-[500] flex items-center gap-3">
              Let’s Talk
              <span className="text-[20px]">→</span>
            </div>
          </Link>
        </div>
      </aside>
    </>
  );
}
