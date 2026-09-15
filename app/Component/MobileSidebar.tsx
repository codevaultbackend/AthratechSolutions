"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileSidebar({ open, onClose }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavigation = (slug: string) => {
    onClose();

    // HASH LINKS
    if (slug.startsWith("#")) {
      const id = slug.replace("#", "");

      // If already on homepage
      if (pathname === "/") {
        setTimeout(() => {
          const element = document.getElementById(id);

          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 300);

        return;
      }

      // Navigate to homepage with hash
      router.push(`/#${id}`);
      return;
    }

    // NORMAL ROUTES
    router.push(slug);
  };

  const navigationItems = [
    { label: "Home", slug: "/" },
    { label: "About US", slug: "/about-us" },
    { label: "Services", slug: "/services" },
    { label: "Testimonials", slug: "/#testimonial" },
    { label: "Blogs", slug: "/blog" },
    { label: "Projects", slug: "/projects" },
    { label: "FAQ", slug: "/#faq" },
  ];

  return (
    <>
      {/* =========================================================
          BACKDROP
      ========================================================= */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`
          fixed inset-0 z-[99998]
          bg-black/50
          transition-opacity duration-500
          ${open ? "visible opacity-100" : "invisible opacity-0"}
        `}
      />

      {/* =========================================================
          SIDEBAR
      ========================================================= */}
      <aside
        aria-hidden={!open}
        className={`
          fixed right-0 top-0 z-[99999]

          flex
          h-screen
          h-[100dvh]
          w-full
          max-w-[420px]
          flex-col

          overflow-hidden

          rounded-l-[32px]

          bg-[#262626]
          text-white

          transition-transform
          duration-500
          ease-[cubic-bezier(0.4,0,0.2,1)]

          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* =======================================================
            CLOSE BUTTON
        ======================================================== */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close sidebar"
          className="
            absolute
            right-6
            top-6
            z-20

            flex
            h-[48px]
            w-[48px]
            shrink-0

            items-center
            justify-center

            rounded-full
            bg-white

            transition-transform
            duration-300

            hover:scale-[1.03]

            max-[380px]:right-4
            max-[380px]:top-4
            max-[380px]:h-[44px]
            max-[380px]:w-[44px]
          "
        >
          <span
            className="
              text-[28px]
              leading-none
              text-black

              max-[380px]:text-[25px]
            "
          >
            ×
          </span>
        </button>

        {/* =======================================================
            SCROLLABLE CONTENT

            This prevents the CTA/navigation from being cut off
            on short mobile screens.
        ======================================================== */}
        <div
          className="
            flex
            min-h-0
            flex-1
            flex-col

            overflow-y-auto
            overflow-x-hidden

            overscroll-contain

            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {/* =====================================================
              NAVIGATION
          ====================================================== */}
          <nav
            className="
              flex
              min-h-0
              flex-1
              flex-col

              items-center
              justify-center

              gap-[36px]

              px-6
              py-[100px]

              max-[500px]:gap-[30px]
              max-[500px]:px-5

              max-[380px]:gap-[24px]
              max-[380px]:px-4
              max-[380px]:py-[90px]
            "
          >
            {navigationItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavigation(item.slug)}
                className="
                  shrink-0

                  text-[24px]
                  font-[400]
                  leading-[100%]
                  text-[#BEBEBE]

                  transition-colors
                  duration-300

                  hover:text-white

                  max-[500px]:text-[22px]

                  max-[380px]:text-[20px]
                "
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* =====================================================
              CTA
          ====================================================== */}
          <div
            className="
              flex
              shrink-0
              flex-col
              items-center
              gap-6

              px-6
              pb-[48px]

              max-[768px]:mb-0

              max-[500px]:gap-5
              max-[500px]:px-5
              max-[500px]:pb-[36px]

              max-[380px]:gap-4
              max-[380px]:px-4
              max-[380px]:pb-[28px]
            "
          >
            {/* Project text */}
            <p
              className="
                font-bricolage
                text-[16px]
                font-[400]
                text-white

                max-[380px]:text-[15px]
              "
            >
              Have a project for us?
            </p>

            {/* ===================================================
                BOOK A CALL
            ==================================================== */}
            <a
              href="tel:+919266688954"
              className="block w-auto max-w-full"
            >
              <div
                className="
                  mt-2

                  flex
                  h-[48px]
                  items-center
                  justify-center

                  rounded-full

                  bg-white

                  px-8

                  text-[15px]
                  font-medium
                  text-black

                  whitespace-nowrap

                  transition-all
                  duration-700
                  ease-[cubic-bezier(.22,1,.36,1)]

                  hover:scale-[1.03]

                  max-[500px]:px-7

                  max-[380px]:h-[46px]
                  max-[380px]:px-6
                  max-[380px]:text-[14px]
                "
              >
                Book A Call
              </div>
            </a>

            {/* ===================================================
                LET'S TALK
            ==================================================== */}
            <Link
              href="/contact-us"
              onClick={onClose}
              className="block max-w-full"
            >
              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-3

                  rounded-full
                  bg-white

                  px-[36px]
                  py-[14px]

                  text-[18px]
                  font-[500]
                  text-black

                  whitespace-nowrap

                  transition-transform
                  duration-300

                  hover:scale-[1.03]

                  max-[500px]:px-[32px]

                  max-[380px]:px-[28px]
                  max-[380px]:py-[13px]
                  max-[380px]:text-[17px]
                "
              >
                Let’s Talk

                <span
                  className="
                    text-[20px]

                    max-[380px]:text-[18px]
                  "
                >
                  →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}