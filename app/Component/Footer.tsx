"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden   ">

      <div className="relative overflow-hidden rounded-tl-[28px] rounded-tr-[28px]  z-[9]">

        {/* ===== Background vignette (ENHANCED) ===== */}
        <div className="absolute inset-0 z-[0] 
        lg:bg-[radial-gradient(ellipse_at_center,_#7a7a7a_0%,_#5f5f5f_35%,_#2a2a2a_65%,_#111111_100%)] max-[768px]:!bg-[#0F0F0F] min-[750px]:max-[980px]:hidden"  />

        {/* ===== DARK EDGE OVERLAY (to match corners) ===== */}
        <div className="absolute inset-0 z-[0] 
        bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(0,0,0,0.65)_100%)] min-[750px]:max-[980px]:bg-black" />

        {/* ===== BOTTOM LIGHT FADE (important for watermark blend) ===== */}
        <div className="absolute bottom-0 left-0 w-full h-[220px] z-[1]
        bg-gradient-to-t from-[#9a9a9a]/40 via-[#9a9a9a]/20 to-transparent min-[750px]:max-[980px]:hidden" />

        {/* ===== Watermark (PIXEL PERFECT FADE) ===== */}
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 
        max-[768px]:!bottom-0 lg:bottom-[-90px] z-[1] w-full flex justify-center overflow-hidden">

          <div
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
          </div>
        </div>

        {/* ===== Main Content ===== */}
        <div className="relative z-10 px-5 sm:px-10 lg:px-20 pt-14 sm:pt-20 pb-10 sm:pb-12 text-white">

          {/* Logo */}
          <div className="flex justify-center mb-6 sm:mb-8">

            <Image
              src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1775279365/AthraWhiteLogo_n1xlnv.png"
              alt="logo"
              width={146}
              height={42}
              priority

              unoptimized
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
            <Link href="/contact-us">
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
                <li className="!mb-4">
                  <Link
                    href="/services/ui-ux-design"
                    className="block"
                  >
                    UI/UX
                  </Link>
                </li>

                <li className="!mb-4">
                  <Link
                    href="/services/frontend-backend-development"
                    className="block"
                  >
                    Development
                  </Link>
                </li>

                <li className="!mb-4">
                  <Link
                    href="/services/marketing"
                    className="block"
                  >
                    Marketing
                  </Link>
                </li>
              </ul>


            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-[14px] sm:text-[16px] opacity-70 mb-4 sm:mb-6">
                Navigation
              </h4>

              <ul className="space-y-3 sm:space-y-4 text-[16px] sm:text-[20px]">
                <li className="!mb-4">
                  <a href="/" className="block">
                    Home
                  </a>
                </li>

                <li className="!mb-4">
                  <a href="/#steps" className="block">
                    Process
                  </a>
                </li>

                <li className="!mb-4">
                  <a href="/projects" className="block">
                    Projects
                  </a>
                </li>

                <li className="!mb-4">
                  <a href="/#testimonial" className="block">
                    Testimonials
                  </a>
                </li>

                <li className="!mb-4">
                  <a href="/#Faq" className="block">
                    FAQ
                  </a>
                </li>
              </ul>

            </div>

            {/* Links */}
            <div>
              <h4 className="text-[14px] sm:text-[16px] opacity-70 mb-4 sm:mb-6">
                Success Stories
              </h4>

              <ul className="space-y-3 sm:space-y-4 text-[16px] sm:text-[20px]">
                <li className="!mb-4">
                  <a
                    href="https://sankalpsetufoundation.org/"
                    className="block"
                  >
                    Sankalp Setu
                  </a>
                </li>

                <li className="!mb-4">
                  <a
                    href="https://fiscoriseconsultants.com/"
                    className="block"
                  >
                    Fiscorise
                  </a>
                </li>

                <li className="!mb-4">
                  <a
                    href="https://www.chugenhatcheries.com/"
                    className="block"
                  >
                    Chugen
                  </a>
                </li>

                <li className="!mb-4">
                  <a
                    href="https://manpowersolution.org.in/"
                    className="block"
                  >
                    Manpower Solution
                  </a>
                </li>
              </ul>

            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[14px] sm:text-[16px] opacity-70 mb-4 sm:mb-6">
                Contact
              </h4>

              <ul className="space-y-3 sm:space-y-4 !text-[16px] font-[500] sm:text-[24px] leading-[150%]">
                <li className="!mb-4">
                  <a href="tel:+919266688954" className="block">
                    +91 92666 88954
                  </a>
                </li>

                <li className="!mb-4">
                  <a
                    href="mailto:office.athratech@gmail.com"
                    className="block"
                  >
                    office.athratech@gmail.com
                  </a>
                </li>

                <li className="!mb-4">
                  Address : Office - Tower B2, Unit 244A, Spaze ITech Park, Sector 49, Gurugram, Haryana - 122018
                </li>
              </ul>


            </div>
          </div>

          {/* ===== Social Links ===== */}
          <div className="social-icons flex gap-3.5 mb-4 justify-end">
            {/* Instagram */}
            <Link
              href="https://www.instagram.com/athratech_official/"
              aria-label="Athratech on Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fa-brands fa-instagram text-[22px]"
                aria-hidden="true"
              />
            </Link>

            {/* Facebook */}
            <Link
              href="https://www.facebook.com/profile.php?id=61584218076871"
              aria-label="Athratech on Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fa-brands fa-facebook text-[22px]"
                aria-hidden="true"
              />
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/company/athratech-private-limited/"
              aria-label="Athratech on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fa-brands fa-linkedin text-[22px]"
                aria-hidden="true"
              />
            </Link>

            {/* X / Twitter */}
            <Link
              href="https://x.com/Athratech_IT"
              aria-label="Athratech on X"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fa-brands fa-x-twitter text-[22px]"
                aria-hidden="true"
              />
            </Link>
          </div>


          {/* ===== Bottom Bar ===== */}
          <div className="border-t border-white/30 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[13px] sm:text-[14px] opacity-70 text-center sm:text-left">
              Copyright 2026 © Athratech Pvt. Ltd.
            </p>

            <div className="flex gap-3">
              <Link href='/privacy-policy' className="text-[16px] font-[400] leading-[150%] text-[#FFFFFF] tracking-[-2%]">
                <p>Privacy Policy</p></Link>
              <Link href='/terms-conditions' className="text-[16px] font-[400] leading-[150%] text-[#FFFFFF] tracking-[-2%]">
                <p>Terms Of Use</p></Link>

            </div>


          </div>

        </div>
      </div>
    </footer>
  );
}