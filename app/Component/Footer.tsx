"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden  bg-[#EFEFEF] ">

      <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] z-[9]">

      {/* ===== Background vignette (ENHANCED) ===== */}
      <div className="absolute inset-0 z-[0] 
        lg:bg-[radial-gradient(ellipse_at_center,_#7a7a7a_0%,_#5f5f5f_35%,_#2a2a2a_65%,_#111111_100%)] max-[768px]:!bg-[#0F0F0F]"  />

      {/* ===== DARK EDGE OVERLAY (to match corners) ===== */}
      <div className="absolute inset-0 z-[0] 
        bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(0,0,0,0.65)_100%)]" />

      {/* ===== BOTTOM LIGHT FADE (important for watermark blend) ===== */}
      <div className="absolute bottom-0 left-0 w-full h-[220px] z-[1]
        bg-gradient-to-t from-[#9a9a9a]/40 via-[#9a9a9a]/20 to-transparent" />

      {/* ===== Watermark (PIXEL PERFECT FADE) ===== */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 
        max-[768px]:!bottom-0 lg:bottom-[-90px] z-[1] w-full flex justify-center overflow-hidden">

        <h1
          className="
            text-[90px] max-[768px]:text-[45
            px] lg:text-[210px]
            font-extrabold tracking-[8px]
            text-white/10
            whitespace-nowrap select-none
             max-[600px]:text-[50px]
             
          "
          style={{
            WebkitMaskImage:
              "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,1) 85%)",
            maskImage:
              "linear-gradient(to top, transparent 20%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.7) 90%, rgba(0,0,0,1) 95%)",
          }}
        >
          ATHRATECH
        </h1>
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

          <h2 className="text-[32px] sm:text-[48px] lg:text-[64px] font-semibold leading-tight mb-6 sm:mb-8">
            Let’s Connect
          </h2>

          {/* CTA Button */}
          <Link href="/ContactForm">
            <div className="flex justify-center">
              <div className="relative rounded-full 
                bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.35),_rgba(180,180,180,0.25),_rgba(120,120,120,0.15),_transparent_70%)] 
                shadow-[0px_4px_20px_0_rgba(255,255,255,0.25)]">

                <div className="rounded-full p-[5px] sm:p-[6px] 
                  bg-[linear-gradient(175deg,#F5F5F5,#BDBDBD,#8F8F8F,#666666)]">

                  <div className="flex items-center gap-3 sm:gap-6 px-6 py-3 rounded-full 
                    bg-black border border-white/80 text-[14px] sm:text-[16px]">
                    Contact Us
                    <span className="text-lg">→</span>
                  </div>

                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* ===== Footer Links ===== */}
        <div className="max-w-[942px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-14 mb-14">
          
          {/* Services */}
          <div>
            <h4 className="text-[14px] sm:text-[16px] opacity-70 mb-4 sm:mb-6">
              Services
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-[16px] sm:text-[20px]">
              <a href="/ContactForm"><li className="!mb-4">UI/UX</li></a>
              <a href="/ContactForm"><li className="!mb-4">Development</li></a>
              <a href="/ContactForm"><li className="!mb-4">Marketing</li></a>
              <a href="/ContactForm"><li className="!mb-4">Ad Campaigns</li></a>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[14px] sm:text-[16px] opacity-70 mb-4 sm:mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-[16px] sm:text-[20px]">
              <a href="/"><li className="!mb-4">Home</li></a>
              <a href="#OurOffering"><li className="!mb-4">Process</li></a>
              <a href="#projects"><li className="!mb-4">Projects</li></a>
              <a href="#testimonial"><li className="!mb-4">Testimonials</li></a>
              <a href="#Faq"><li className="!mb-4">FAQ</li></a>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[14px] sm:text-[16px] opacity-70 mb-4 sm:mb-6">
              Links
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-[16px] sm:text-[20px]">
              <a href="https://decovista.in/"><li className="!mb-4">Decovista</li></a>
              <a href="https://sankalpsetufoundation.org/"><li className="!mb-4">Sankalp Setu</li></a>
              <a href="https://fiscoriseconsultants.com/"><li className="!mb-4">Fiscorise</li></a>
              <a href="https://www.chugenhatcheries.com/"><li className="!mb-4">Chugen</li></a>
              <a href="https://manpowersolution.org.in/"><li className="!mb-4">Manpower Solution</li></a>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[14px] sm:text-[16px] opacity-70 mb-4 sm:mb-6">
              Contact
            </h4>
            <ul className="space-y-3 sm:space-y-4 !text-[16px] font-[500] sm:text-[24px] leading-[150%]">
              <a href="tel:+917303835369"><li className="!mb-4">+91 7303835369</li></a>
              <li className="!mb-4">
                Address : UNIT NO: 244-A, IT SPAZ Park, Sector 49, Gurugram, Haryana 122018, India
              </li>
            </ul>
          </div>
        </div>

        {/* ===== Bottom Bar ===== */}
        <div className="border-t border-white/30 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] sm:text-[14px] opacity-70 text-center sm:text-left">
            Copyright © Athratech Pvt. Ltd.
          </p>

          <div className="social-icons flex gap-3.5">
            <Link href='https://www.instagram.com/athratech_official/'><i className="fa-brands fa-instagram text-[22px]"></i></Link>
            <Link href='https://www.facebook.com/profile.php?id=61584218076871'><i className="fa-brands fa-facebook text-[22px]"></i></Link>
            <Link href='https://www.linkedin.com/company/athratech-private-limited/'><i className="fa-brands fa-linkedin text-[22px]"></i></Link>
            <Link href='https://x.com/AthraTech'><i className="fa-brands fa-x-twitter text-[22px]"></i></Link>
          </div>
        </div>

      </div>
      </div>
    </footer>
  );
}