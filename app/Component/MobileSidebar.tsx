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

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-[99998]
          bg-black/50
          transition-opacity duration-500
          ${open ? "visible opacity-100" : "invisible opacity-0"}
        `}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 right-0 z-[99999]
          flex h-screen w-full max-w-[420px] flex-col
          rounded-l-[32px]
          bg-[#262626] text-white
          transition-transform duration-500
          ease-[cubic-bezier(0.4,0,0.2,1)]
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close sidebar"
          className="
            absolute right-6 top-6
            flex h-[48px] w-[48px]
            items-center justify-center
            rounded-full bg-white
          "
        >
          <span className="text-[28px] leading-none text-black">×</span>
        </button>

        {/* Navigation */}
        <nav
          className="
            flex flex-1 flex-col
            items-center justify-center
            gap-[36px]
            px-6
          "
        >
          {[
            { label: "Home", slug: "/" },
            { label: "Services", slug: "/services" },
            { label: "Testimonials", slug: "#testimonial" },
            { label: "Blogs", slug: "/Blog" },
            { label: "Projects", slug: "/Projects" },
            { label: "FAQ", slug: "#Faq" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(item.slug)}
              className="
                text-[24px]
                font-[400]
                leading-[100%]
                text-[#BEBEBE]
                transition-colors duration-300
                hover:text-white
              "
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div
          className="
            mb-[70px]
            flex flex-col items-center gap-6
            pb-[48px]
            md:mb-0
          "
        >
          <p className="font-bricolage text-[16px] font-[400] text-white">
            Have a project for us?
          </p>

          <Link href="/ContactForm" onClick={onClose}>
            <div
              className="
                flex items-center gap-3
                rounded-full bg-white
                px-[36px] py-[14px]
                text-[18px] font-[500] text-black
                transition-transform duration-300
                hover:scale-[1.03]
              "
            >
              Let’s Talk
              <span className="text-[20px]">→</span>
            </div>
          </Link>
        </div>
      </aside>
    </>
  );
}