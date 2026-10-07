"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import MobileSidebar from "./MobileSidebar";
import Hamburgure from "../svgIcons/Hamburgure";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/#testimonial" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
];

export default function TopNavigation() {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const [compactHero, setCompactHero] = useState(true);

  // Track current URL hash
  const [currentHash, setCurrentHash] = useState("");

  /*
   * ============================================
   * HEADER SCROLL STATE
   * ============================================
   */
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

  /*
   * ============================================
   * HASH STATE
   * ============================================
   */
  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash);
    };

    // Initial hash
    updateHash();

    // Browser back/forward/hash changes
    window.addEventListener("hashchange", updateHash);
    window.addEventListener("popstate", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("popstate", updateHash);
    };
  }, []);

  /*
   * ============================================
   * HASH ROUTING / SCROLL
   *
   * Handles:
   * /#faq
   * /#testimonial
   *
   * Especially when coming from another page.
   * ============================================
   */
  useEffect(() => {
    if (pathname !== "/") return;

    const hash = window.location.hash;

    if (!hash) return;

    const targetId = hash.substring(1);

    if (!targetId) return;

    let attempts = 0;
    const maxAttempts = 30;

    const scrollToTarget = () => {
      const element = document.getElementById(targetId);

      if (element) {
        const headerOffset = 110;

        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: Math.max(0, elementPosition - headerOffset),
          behavior: "smooth",
        });

        return;
      }

      attempts++;

      if (attempts < maxAttempts) {
        requestAnimationFrame(scrollToTarget);
      }
    };

    requestAnimationFrame(scrollToTarget);
  }, [pathname]);

  /*
   * ============================================
   * NAVIGATION HANDLER
   * ============================================
   */
  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Normal navigation
    if (!href.includes("#")) {
      return;
    }

    e.preventDefault();

    const [path, hash] = href.split("#");

    if (!hash) return;

    /*
     * ==========================================
     * ALREADY ON HOME PAGE
     * ==========================================
     */
    if (pathname === path || (path === "/" && pathname === "/")) {
      const element = document.getElementById(hash);

      // Update active navigation immediately
      setCurrentHash(`#${hash}`);

      if (element) {
        const headerOffset = 110;

        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;

        window.history.pushState(
          null,
          "",
          `/#${hash}`
        );

        window.scrollTo({
          top: Math.max(0, elementPosition - headerOffset),
          behavior: "smooth",
        });

        return;
      }

      /*
       * Target doesn't exist yet.
       * Keep hash in URL.
       */
      window.history.pushState(
        null,
        "",
        `/#${hash}`
      );

      return;
    }

    /*
     * ==========================================
     * COMING FROM ANOTHER PAGE
     * ==========================================
     */
    router.push(`${path}#${hash}`);
  };

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
          max-[768px]:px-[16px]
          ease-[cubic-bezier(.22,1,.36,1)]
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
                  ? "justify-start px-4 pl-5"
                  : "justify-between px-4 pl-6"
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

                ${compactHero ? "" : "relative"}
              `}
            >
              <Image
                src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1775279365/AthraWhiteLogo_n1xlnv.png"
                height={229}
                width={129}
                alt="Athratech"
                className="
                  hidden
                  h-[38px]
                  w-auto
                  object-contain
                  md:block
                "
              />

              <Image
                src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1775279365/AthraWhiteLogo_n1xlnv.png"
                alt="Athratech"
                height={229}
                width={129}
                preload
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
                const isHashLink = item.href.includes("#");

                let active = false;

                if (isHashLink) {
                  /*
                   * Testimonials / FAQ
                   *
                   * Only active when their exact hash
                   * is currently selected.
                   */
                  const hash = item.href.split("#")[1];

                  active =
                    pathname === "/" &&
                    currentHash === `#${hash}`;
                } else if (item.href === "/") {
                  /*
                   * Home is active only when:
                   * - We are on /
                   * - There is NO active hash
                   */
                  active =
                    pathname === "/" &&
                    currentHash === "";
                } else {
                  /*
                   * Normal pages
                   */
                  active = pathname.startsWith(item.href);
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) =>
                      handleNavigation(e, item.href)
                    }
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
                href="/contact-us"
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