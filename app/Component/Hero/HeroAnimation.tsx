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

      const centerImage = document.querySelector("#centerImage") as HTMLElement;

      const imageRect = centerImage.getBoundingClientRect();

      const imageCenter = imageRect.top + imageRect.height / 2;

      const viewportCenter = vh / 2;

      const topGap = 90; 

      const riseDistance = imageCenter - viewportCenter - topGap;

      const moveLeft = Math.min(vw * 0.18, 430);

      const textExit = Math.min(vw * 0.16, 320);

      const secondContentEnter = Math.min(vw * 0.28, 520);

      let initialScale = 2.85;
      let centerScale = 1.5;

      if (vw >= 2560) {
        initialScale = 1.35;
        centerScale = 1;
      } else if (vw >= 1920) {
        initialScale = 1.35;
        centerScale = 0.9;
      } else if (vw >= 1536) {
        initialScale = 1.35;
        centerScale = 0.9;
      } else {
        initialScale = 1.35;
        centerScale = 0.9;
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
        scale: initialScale,
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

          end: () => "+=" + window.innerHeight * 0.8,

          pin: "#hero-pin",

          scrub: 0.1,

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
          duration: 0.5,
        },
        0
      );

      tl.to(
        "#rightContent",
        {
          x: textExit,
          opacity: 0,
          duration: 0.5,
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
          duration: 0.7,
          ease: "power3.out",
        },
        0
      );

      tl.to(
        "#hero-image",
        {
          scale: centerScale,

          duration: 0.7,

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
          duration: 0.6,
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
          duration: 0.8,
          ease: "power2.inOut",
        }
      );

      tl.to(
        "#hero-image",
        {
          scale: centerScale + 0.05,
          duration: 0.8,
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
          duration: 0.8,
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