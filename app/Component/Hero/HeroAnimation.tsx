"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroAnimation() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // =====================================================
      // Initial States
      // =====================================================

      gsap.set("#centerImage", {
        y: 0,
      });

      gsap.set("#hero-image", {
        scale: 1,
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero-section",

          start: "top top",

          end: () => "+=" + window.innerHeight * 1.8,

          scrub: 0.3,

          pin: "#hero-pin",

          pinSpacing: true,

          anticipatePin: 1,

          invalidateOnRefresh: true,
        },
      });

      // Phase 1
      tl.to(
        "#leftContent",
        {
          x: -250,
          opacity: 0,
        },
        0
      );

      tl.to(
        "#rightContent",
        {
          x: 250,
          opacity: 0,
        },
        0
      );

      // =====================================================
      // Phase 2
      // Bring image to center
      // =====================================================

      tl.to("#centerImage", {
        y: -80,
        duration: 0.5,
      });

      tl.to(
        "#hero-image",
        {
          scale: 0.85,
          duration: 0.5,
        },
        "<"
      );


      // =====================================================
      // Phase 3
      // Move image left and shrink
      // =====================================================

      gsap.set("#centerImage", {
        xPercent: -50,
        y: 0,
      });

      tl.to("#centerImage", {
        xPercent: -100,
        y: -80,
        duration: 1,
        ease: "power2.inOut",
      });

      tl.to(
        "#hero-image",
        {
          scale: 0.94,
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      );

      // Phase 4
      tl.fromTo(
        "#second-content",
        {
          x: 350,
          opacity: 0,
        },
        {
          x: -150,
          opacity: 1,
          duration: 1.3,
        },
        "-=1.5"
      );


    });

    return () => ctx.revert();
  }, []);

  return null;
}