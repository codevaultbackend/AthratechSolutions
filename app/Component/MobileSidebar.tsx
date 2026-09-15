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

  /*
   * Prevent the page behind the sidebar from scrolling.
   */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /*
   * Handle navigation.
   */
  const handleNavigation = (slug: string) => {
    onClose();

    /*
     * HASH NAVIGATION
     */
    if (slug.startsWith("#")) {
      const id = slug.substring(1);

      /*
       * Already on homepage:
       * smoothly scroll to the section.
       */
      if (pathname === "/") {
        window.setTimeout(() => {
          const element = document.getElementById(id);

          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 250);

        return;
      }

      /*
       * Coming from another page:
       * navigate to homepage with hash.
       */
      router.push(`/#${id}`);

      return;
    }

    /*
     * NORMAL ROUTES
     */
    router.push(slug);
  };

  const navigationItems = [
    {
      label: "Home",
      slug: "/",
    },
    {
      label: "About US",
      slug: "/about-us",
    },
    {
      label: "Services",
      slug: "/services",
    },
    {
      label: "Testimonials",
      slug: "/#testimonial",
    },
    {
      label: "Blogs",
      slug: "/blog",
    },
    {
      label: "Projects",
      slug: "/projects",
    },
    {
      label: "FAQ",
      slug: "/#faq",
    },
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
          fixed
          inset-0
          z-[99998]

          bg-black/50

          transition-opacity
          duration-500

          ${
            open
              ? "visible opacity-100"
              : "pointer-events-none invisible opacity-0"
          }
        `}
      />

      {/* =========================================================
          MOBILE SIDEBAR
      ========================================================= */}
      <aside
        aria-hidden={!open}
        className={`
          fixed
          right-0
          top-0
          z-[99999]

          flex
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

          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
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
            z-30

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
            active:scale-[0.97]

            max-[500px]:right-5
            max-[500px]:top-5

            max-[380px]:right-4
            max-[380px]:top-4
            max-[380px]:h-[44px]
            max-[380px]:w-[44px]
          "
        >
          <span
            className="
              block
              -translate-y-[1px]

              text-[28px]
              font-[300]
              leading-none
              text-black

              max-[380px]:text-[25px]
            "
          >
            ×
          </span>
        </button>

        {/* =======================================================
            SCROLL CONTAINER

            IMPORTANT:
            The whole sidebar scrolls instead of allowing the
            navigation and CTA to fight for viewport height.
        ======================================================== */}
        <div
          className="
            min-h-0
            flex-1

            overflow-x-hidden
            overflow-y-auto

            overscroll-contain

            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {/* =====================================================
              NAVIGATION
          ====================================================== */}
          <nav
            aria-label="Mobile navigation"
            className="
              flex
              flex-col
              items-center

              px-6

              pt-[150px]
              pb-[56px]

              gap-[36px]

              max-[500px]:gap-[30px]
              max-[500px]:px-5
              max-[500px]:pt-[135px]
              max-[500px]:pb-[48px]

              max-[380px]:gap-[24px]
              max-[380px]:px-4
              max-[380px]:pt-[115px]
              max-[380px]:pb-[40px]
            "
          >
            {navigationItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavigation(item.slug)}
                className="
                  shrink-0

                  appearance-none
                  border-0
                  bg-transparent

                  text-center

                  text-[24px]
                  font-[400]
                  leading-[1.1]

                  text-[#BEBEBE]

                  transition-colors
                  duration-300

                  hover:text-white
                  focus:outline-none

                  max-[500px]:text-[22px]

                  max-[380px]:text-[20px]
                "
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* =====================================================
              CTA SECTION
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

              [padding-bottom:calc(48px+env(safe-area-inset-bottom))]

              max-[500px]:gap-5
              max-[500px]:px-5
              max-[500px]:pb-[36px]
              max-[500px]:[padding-bottom:calc(36px+env(safe-area-inset-bottom))]

              max-[380px]:gap-4
              max-[380px]:px-4
              max-[380px]:pb-[28px]
              max-[380px]:[padding-bottom:calc(28px+env(safe-area-inset-bottom))]
            "
          >
            {/* =================================================
                PROJECT TEXT
            ================================================== */}
            <p
              className="
                m-0

                text-center

                font-bricolage

                text-[16px]
                font-[400]
                leading-[1.2]

                text-white

                max-[380px]:text-[15px]
              "
            >
              Have a project for us?
            </p>

            {/* =================================================
                BOOK A CALL
            ================================================== */}
            <a
              href="/contact-us"
              className="
                block
                w-auto
                max-w-full

                no-underline
              "
            >
              <div
                className="
                  mt-1

                  flex
                  min-h-[48px]

                  items-center
                  justify-center

                  rounded-full

                  bg-white

                  px-8

                  text-[15px]
                  font-[500]
                  leading-none

                  whitespace-nowrap

                  text-black

                  transition-transform
                  duration-300

                  hover:scale-[1.03]
                  active:scale-[0.98]

                  max-[500px]:px-7

                  max-[380px]:min-h-[46px]
                  max-[380px]:px-6
                  max-[380px]:text-[14px]
                "
              >
                Book A Call
              </div>
            </a>

            {/* =================================================
                LET'S TALK
            ================================================== */}
            <Link
              href="tel:+919266688954"
              onClick={onClose}
              className="
                block
                max-w-full

                no-underline
              "
            >
              <div
                className="
                  flex
                  min-h-[50px]

                  items-center
                  justify-center
                  gap-3

                  rounded-full

                  bg-white

                  px-[36px]

                  text-[18px]
                  font-[500]
                  leading-none

                  whitespace-nowrap

                  text-black

                  transition-transform
                  duration-300

                  hover:scale-[1.03]
                  active:scale-[0.98]

                  max-[500px]:px-[32px]

                  max-[380px]:min-h-[48px]
                  max-[380px]:px-[28px]
                  max-[380px]:text-[17px]
                "
              >
                <span>Let’s Talk</span>

                <span
                  aria-hidden="true"
                  className="
                    text-[20px]
                    leading-none

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