"use client";

import { useEffect } from "react";

export function RevealEffects() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const showAll = () => {
      observer?.disconnect();
      items.forEach((item) => {
        item.classList.remove("reveal-pending");
        item.classList.add("is-visible");
      });
    };

    if (!("IntersectionObserver" in window) || motion.matches) {
      showAll();
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      items.forEach((item) => {
        // Keep content already on screen visible while hydration completes.
        if (item.getBoundingClientRect().top >= window.innerHeight) {
          item.classList.add("reveal-pending");
          observer?.observe(item);
        }
      });
    }
    const onMotionChange = () => {
      if (motion.matches) showAll();
    };
    motion.addEventListener("change", onMotionChange);
    return () => {
      observer?.disconnect();
      motion.removeEventListener("change", onMotionChange);
      items.forEach((item) => item.classList.remove("reveal-pending"));
    };
  }, []);

  return null;
}
