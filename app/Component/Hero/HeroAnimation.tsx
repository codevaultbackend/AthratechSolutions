"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroAnimation() {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width:1280px)", () => {
      // --------------------------------------------------
      // Viewport
      // --------------------------------------------------

      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // --------------------------------------------------
      // Responsive Values
      // --------------------------------------------------

      const riseDistance = vh * 0.34;

      const moveLeft = Math.min(vw * 0.18, 430);

      const textExit = Math.min(vw * 0.16, 320);

      const secondContentEnter = Math.min(vw * 0.28, 520);

      let centerScale = 0.92;

      if (vw >= 2560) {
        centerScale = 0.78;
      } else if (vw >= 1920) {
        centerScale = 0.84;
      } else if (vw >= 1536) {
        centerScale = 0.88;
      }

      // --------------------------------------------------
      // Initial States
      // --------------------------------------------------

      gsap.set("#centerImage", {
        xPercent: -50,
        x: 0,
        y: 0,
        force3D: true,
      });

      gsap.set("#hero-image", {
        scale: 1,
        transformOrigin: "center center",
        force3D: true,
      });

      gsap.set("#leftContent", {
        opacity: 1,
        x: 0,
      });

      gsap.set("#rightContent", {
        opacity: 1,
        x: 0,
      });

      gsap.set("#second-content", {
        opacity: 0,
        x: secondContentEnter,
      });

      // --------------------------------------------------
      // Timeline
      // --------------------------------------------------

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },

        scrollTrigger: {
          trigger: "#hero-section",

          start: "top top",

          end: () => "+=" + window.innerHeight * 2.5,

          pin: "#hero-pin",

          scrub: 0.45,

          anticipatePin: 1,

          invalidateOnRefresh: true,
        },
      });

      // ==================================================
      // PHASE 1
      // Fade Left & Right Content
      // ==================================================

      tl.to(
        "#leftContent",
        {
          x: -textExit,
          opacity: 0,
          duration: 1,
        },
        0
      );

      tl.to(
        "#rightContent",
        {
          x: textExit,
          opacity: 0,
          duration: 1,
        },
        0
      );

      // ==================================================
      // PHASE 2
      // Image rises from bottom
      // ==================================================

      tl.to(
        "#centerImage",
        {
          y: -riseDistance,

          duration: 1.6,

          ease: "power3.out",
        },
        0
      );

      tl.to(
        "#hero-image",
        {
          scale: centerScale,

          duration: 1.6,

          ease: "power2.out",
        },
        "<"
      );

            // ==================================================
      // PHASE 3
      // Pause briefly after image reaches center
      // ==================================================

      tl.to(
        {},
        {
          duration: 0.25,
        }
      );

      // ==================================================
      // PHASE 4
      // Move image left
      // ==================================================

      tl.to(
        "#centerImage",
        {
          x: -moveLeft,
          duration: 1.2,
          ease: "power2.inOut",
        }
      );

      tl.to(
        "#hero-image",
        {
          scale: centerScale + 0.05,
          duration: 1.2,
          ease: "power2.inOut",
        },
        "<"
      );

      // ==================================================
      // PHASE 5
      // Reveal Second Content
      // ==================================================

      tl.to(
        "#second-content",
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.7"
      );

      // --------------------------------------------------
      // Refresh ScrollTrigger
      // --------------------------------------------------

      ScrollTrigger.refresh();

      // --------------------------------------------------
      // Cleanup for this media query
      // --------------------------------------------------

      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    });

    // --------------------------------------------------
    // Cleanup
    // --------------------------------------------------

    return () => {
      mm.revert();
    };
  }, []);

  return null;
}