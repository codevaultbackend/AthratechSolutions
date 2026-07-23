"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import MobileSidebar from "./MobileSidebar";
import Hamburgure from "../svgIcons/Hamburgure";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/#testimonial" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
];

export default function TopNavigation() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const [compactHero, setCompactHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setCompactHero(window.scrollY < 120);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed
          inset-x-0
          z-[9999]
          flex
          justify-center

          transition-all
          duration-700
          ease-[cubic-bezier(.22,1,.36,1)]
          px-[20px]
          

          ${compactHero ? "top-10" : "top-6"}
        `}
      >
        <nav
          className={`
            relative

            overflow-hidden

            rounded-full

            border

            border-white/10

            bg-black/90

            backdrop-blur-xl

            shadow-[0_18px_60px_rgba(0,0,0,.30)]

            transition-all
            duration-700
            ease-[cubic-bezier(.22,1,.36,1)]
            

            ${
              compactHero
                ? "h-[74px] !w-[410px] w-full"
                : "h-[72px] w-full max-w-[1296px]"
            }
          `}
        >
          <div
            className={`
              relative
              flex
              h-full
              items-center

              transition-all
              duration-700

              ${
                compactHero
                  ? "justify-start px-7"
                  : "justify-between px-8"
              }
            `}
          >
            {/* ================================= */}
            {/* LOGO */}
            {/* ================================= */}

            <Link
              href="/"
              className={`
                flex
                items-center

                transition-all
                duration-700

                ${
                  compactHero
                    ? ""
                    : "relative"
                }
              `}
            >
              <img
                src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1775279365/AthraWhiteLogo_n1xlnv.png"
                alt="Athratech"
                className="
                  hidden
                  h-[38px]
                  w-auto
                  object-contain
                  md:block
                "
              />

              <img
                src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1775279365/AthraWhiteLogo_n1xlnv.png"
                alt="Athratech"
                className="
                  h-8
                  w-[114px]
                  object-contain
                  md:hidden
                "
              />
            </Link>
                        {/* ================================= */}
            {/* DESKTOP NAVIGATION */}
            {/* ================================= */}

            <div
              className={`
                hidden
                md:flex
                items-center
                gap-10

                absolute
                left-1/2
                -translate-x-1/2

                transition-all
                duration-500

                ${
                  compactHero
                    ? "opacity-0 scale-95 pointer-events-none"
                    : "opacity-100 scale-100 delay-150"
                }
              `}
            >
              {navItems.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="
                      group
                      relative

                      text-[14px]
                      font-medium

                      text-white/75

                      transition-all
                      duration-300

                      hover:text-white
                    "
                  >
                    {item.label}

                    <span
                      className={`
                        absolute
                        left-0
                        -bottom-[6px]

                        h-[2px]

                        rounded-full

                        bg-white

                        transition-all
                        duration-300

                        ${
                          active
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }
                      `}
                    />
                  </Link>
                );
              })}
            </div>

            {/* ================================= */}
            {/* RIGHT SIDE */}
            {/* ================================= */}

            <div
              className={`
                flex
                items-center

                transition-all
                duration-700

                ${
                  compactHero
                    ? `
                      absolute
                      right-5
                    `
                    : `
                      relative
                    `
                }
              `}
            >
              {/* BOOK CALL */}

              <a
                href="tel:+919266688954"
                className="hidden md:block"
              >
                <div
                  className={`
                    flex
                    items-center
                    justify-center

                    rounded-full

                    bg-white

                    font-medium

                    text-black

                    transition-all
                    duration-700
                    ease-[cubic-bezier(.22,1,.36,1)]

                    hover:scale-[1.03]

                    ${
                      compactHero
                        ? `
                          h-[58px]
                          px-10
                          text-[18px]
                        `
                        : `
                          h-[48px]
                          px-8
                          text-[15px]
                        `
                    }
                  `}
                >
                  Book A Call
                </div>
              </a>

              {/* MOBILE MENU */}

              <button
                onClick={() => setOpen(true)}
                className={`
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/10

                  bg-white

                  backdrop-blur-xl

                  transition-all
                  duration-300

                  hover:bg-white/20

                  md:hidden

                  ${
                    compactHero
                      ? "ml-auto"
                      : ""
                  }
                `}
              >
                <Hamburgure className="h-5 w-5 !text-[#000000]" />
              </button>
            </div>
                      </div>
        </nav>
      </header>

      <MobileSidebar
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}