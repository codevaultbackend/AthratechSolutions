"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[#6f6f6f] z-[9]">
      {/* ===== Background vignette ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#7a7a7a_0%,_#5f5f5f_45%,_#1a1a1a_100%)]" />

      {/* ===== Watermark ===== */}
      <div className="
        pointer-events-none absolute left-1/2 -translate-x-1/2
        bottom-4  lg:bottom-10
        text-[80px] sm:text-[140px] lg:text-[220px]
        font-extrabold text-white/5 tracking-wider
        select-none whitespace-nowrap max-[780px]:rotate-90 max-[600px]:translate-x-1
      ">
        ATHRATECH
      </div>

      {/* ===== Main Content ===== */}
      <div className="relative z-10 px-5 sm:px-10 lg:px-20 pt-14 sm:pt-20 pb-10 sm:pb-12 text-white">

        {/* Logo */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <Image
            src="/AthraWhiteLogo.png"
            alt="logo"
            width={146}
            height={42}
            priority
          />
        </div>

        {/* ===== CTA ===== */}
        <div className="text-center mb-14 sm:mb-20">
          <p className="text-[14px] sm:text-[18px] opacity-80 mb-2">
            Need help with a project ?
          </p>

          <h2 className="
            text-[32px] sm:text-[48px] lg:text-[64px]
            font-semibold leading-tight
            mb-6 sm:mb-8
          ">
            Let’s Connect
          </h2>

          {/* CTA Button */}
          <Link href="/contact">
            <div className="flex justify-center">
              <div className="relative rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.35),_rgba(180,180,180,0.25),_rgba(120,120,120,0.15),_transparent_70%)] shadow-[0px_4px_14.6px_0_#959595]">
                <div className="rounded-full p-[5px] sm:p-[6px] bg-[linear-gradient(175deg,#F5F5F5,#BDBDBD,#8F8F8F,#666666)]">
                  <div className="
                    flex items-center gap-3 sm:gap-6
                    px-6 py-3
                    rounded-full bg-black
                    border border-white/80
                    text-[14px] sm:text-[16px]
                  ">
                    Contact Us
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* ===== Footer Links ===== */}
        <div className="
          max-w-[942px] mx-auto
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-y-10 gap-x-14
          mb-14
        ">
          {/* Services */}
          <div>
            <h4 className="text-[14px] sm:text-[16px] opacity-70 mb-4 sm:mb-6">
              Services
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-[16px] sm:text-[20px]">
              <li>UI/UX</li>
              <li>Development</li>
              <li>Marketing</li>
              <li>Ad Campaigns</li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[14px] sm:text-[16px] opacity-70 mb-4 sm:mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-[16px] sm:text-[20px]">
              <li>Home</li>
              <li>Process</li>
              <li>Projects</li>
              <li>Testimonials</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[14px] sm:text-[16px] opacity-70 mb-4 sm:mb-6">
              Links
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-[16px] sm:text-[20px]">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[14px] sm:text-[16px] opacity-70 mb-4 sm:mb-6">
              Contact
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-[16px] sm:text-[20px]">
              <li>+91 9999999999</li>
              <li>Address</li>
            </ul>
          </div>
        </div>

        {/* ===== Bottom Bar ===== */}
        <div className="
          border-t border-white/30 pt-5
          flex flex-col sm:flex-row
          items-center justify-between
          gap-3
        ">
          <p className="text-[13px] sm:text-[14px] opacity-70 text-center sm:text-left">
            Copyright © Athratech Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
