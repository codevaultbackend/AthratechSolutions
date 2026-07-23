"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroAnimationProps {
  sectionRef: React.RefObject<HTMLElement>;
  navbarRef: React.RefObject<HTMLDivElement>;
  headingRef: React.RefObject<HTMLHeadingElement>;
  paragraphRef: React.RefObject<HTMLParagraphElement>;
  primaryBtnRef: React.RefObject<HTMLButtonElement>;
  secondaryBtnRef: React.RefObject<HTMLButtonElement>;
  imageWrapperRef: React.RefObject<HTMLDivElement>;
  imageRef: React.RefObject<HTMLImageElement>;
}

export function useHeroAnimation({
  sectionRef,
  navbarRef,
  headingRef,
  paragraphRef,
  primaryBtnRef,
  secondaryBtnRef,
  imageWrapperRef,
  imageRef,
}: HeroAnimationProps) {
  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // -----------------------------
      // Initial States
      // -----------------------------

      gsap.set(navbarRef.current, {
        y: -80,
        opacity: 0,
      });

      gsap.set(headingRef.current, {
        y: 120,
        opacity: 0,
      });

      gsap.set(paragraphRef.current, {
        y: 50,
        opacity: 0,
      });

      gsap.set(
        [primaryBtnRef.current, secondaryBtnRef.current],
        {
          y: 40,
          opacity: 0,
        }
      );

      gsap.set(imageWrapperRef.current, {
        opacity: 0,
        scale: 0.82,
        rotate: 4,
      });

      gsap.set(imageRef.current, {
        scale: 1.18,
      });

      // -----------------------------
      // Intro Timeline
      // -----------------------------

      const intro = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      intro
        .to(navbarRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
        })

        .to(
          headingRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 1,
          },
          "-=0.45"
        )

        .to(
          paragraphRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          "-=0.7"
        )

        .to(
          [primaryBtnRef.current, secondaryBtnRef.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
          },
          "-=0.55"
        )

        .to(
          imageWrapperRef.current,
          {
            opacity: 1,
            rotate: 0,
            scale: 1,
            duration: 1.3,
          },
          "-=1"
        )

        .to(
          imageRef.current,
          {
            scale: 1,
            duration: 1.5,
          },
          "<"
        );

      // -----------------------------------------
      // Floating Image Loop
      // -----------------------------------------

      gsap.to(imageWrapperRef.current, {
        y: -14,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // -----------------------------------------
      // Hero Scroll Timeline
      // -----------------------------------------

      const heroScroll = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,

          start: "top top",

          end: "+=1400",

          scrub: 1.4,

          pin: true,

          anticipatePin: 1,

          invalidateOnRefresh: true,
        },
      });

      heroScroll
        .to(
          navbarRef.current,
          {
            scale: 0.94,
            y: -25,
            opacity: 0.95,
            ease: "none",
          },
          0
        )

        .to(
          headingRef.current,
          {
            y: -180,
            opacity: 0,
            scale: 0.95,
            ease: "none",
          },
          0
        )

        .to(
          paragraphRef.current,
          {
            y: -120,
            opacity: 0,
            ease: "none",
          },
          0
        )

        .to(
          [primaryBtnRef.current, secondaryBtnRef.current],
          {
            y: -90,
            opacity: 0,
            ease: "none",
          },
          0
        )

        .to(
          imageWrapperRef.current,
          {
            scale: 1.22,
            y: -70,
            ease: "none",
          },
          0
        )

        .to(
          imageRef.current,
          {
            scale: 1.1,
            ease: "none",
          },
          0
        );
      // -----------------------------------------
      // Background Glow Animation
      // -----------------------------------------

      const glow = imageWrapperRef.current?.querySelector(
        ".hero-glow"
      ) as HTMLDivElement | null;

      if (glow) {
        heroScroll.to(
          glow,
          {
            scale: 1.35,
            opacity: 0.9,
            filter: "blur(160px)",
            ease: "none",
          },
          0
        );
      }

      // -----------------------------------------
      // Decorative Layers
      // -----------------------------------------

      const layers = gsap.utils.toArray<HTMLElement>(".hero-layer");

      layers.forEach((layer, index) => {
        heroScroll.to(
          layer,
          {
            y: -(index + 1) * 45,
            x: index % 2 === 0 ? 20 : -20,
            rotate: index % 2 === 0 ? 6 : -6,
            ease: "none",
          },
          0
        );
      });

      // -----------------------------------------
      // Subtle Image Rotation
      // -----------------------------------------

      heroScroll.to(
        imageWrapperRef.current,
        {
          rotate: -2,
          transformOrigin: "center center",
          ease: "none",
        },
        0
      );

      // -----------------------------------------
      // Image Depth
      // -----------------------------------------

      heroScroll.to(
        imageRef.current,
        {
          filter:
            "drop-shadow(0px 50px 120px rgba(0,0,0,.22))",
          ease: "none",
        },
        0
      );

      // -----------------------------------------
      // Mouse Parallax
      // -----------------------------------------

      const imageContainer = imageWrapperRef.current;

      let mouseX = 0;
      let mouseY = 0;

      let currentX = 0;
      let currentY = 0;

      const strength = 18;

      const move = (e: MouseEvent) => {
        mouseX =
          (e.clientX / window.innerWidth - 0.5) * strength;

        mouseY =
          (e.clientY / window.innerHeight - 0.5) * strength;
      };

      window.addEventListener("mousemove", move);

      gsap.ticker.add(() => {
        currentX += (mouseX - currentX) * 0.08;
        currentY += (mouseY - currentY) * 0.08;

        gsap.set(imageContainer, {
          x: currentX,
          y: currentY,
          force3D: true,
        });
      });

      // -----------------------------------------
      // Performance
      // -----------------------------------------

      gsap.set(
        [
          navbarRef.current,
          headingRef.current,
          paragraphRef.current,
          primaryBtnRef.current,
          secondaryBtnRef.current,
          imageWrapperRef.current,
          imageRef.current,
        ],
        {
          force3D: true,
          willChange: "transform, opacity",
        }
      );

      // -----------------------------------------
      // Responsive
      // -----------------------------------------

      const mm = gsap.matchMedia();

      mm.add("(max-width:1024px)", () => {
        ScrollTrigger.getAll().forEach((trigger) => {
          trigger.vars.pin = false;
        });

        gsap.set(imageWrapperRef.current, {
          clearProps: "transform",
        });
      });

      mm.add("(min-width:1025px)", () => {
        ScrollTrigger.refresh();
      });

      // -----------------------------------------
      // Refresh
      // -----------------------------------------

      ScrollTrigger.refresh();
      // -----------------------------------------
      // Mouse Cleanup References
      // -----------------------------------------

      const removeMouse = () => {
        window.removeEventListener("mousemove", move);
      };

      const removeTicker = () => {
        gsap.ticker.remove(tick);
      };

      function tick() {
        currentX += (mouseX - currentX) * 0.08;
        currentY += (mouseY - currentY) * 0.08;

        gsap.set(imageContainer, {
          x: currentX,
          y: currentY,
          force3D: true,
        });
      }

      gsap.ticker.add(tick);


      // -----------------------------------------
      // Responsive Animations
      // -----------------------------------------

      const media = gsap.matchMedia();


      media.add(
        "(max-width: 1024px)",
        () => {

          gsap.set(imageWrapperRef.current, {
            clearProps: "transform",
          });


          ScrollTrigger.getAll().forEach(
            (trigger) => {
              trigger.vars.pin = false;
            }
          );

        }
      );


      media.add(
        "(min-width:1025px)",
        () => {

          ScrollTrigger.refresh();

        }
      );


      // Force refresh after images/fonts load

      window.addEventListener(
        "load",
        () => {
          ScrollTrigger.refresh();
        }
      );


    }, sectionRef);


    return () => {

      ScrollTrigger.getAll().forEach(
        (trigger) => trigger.kill()
      );


      media?.revert();


      removeMouse();


      removeTicker();


      ctx.revert();

    };

  }, []);
}
