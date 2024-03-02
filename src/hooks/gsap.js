import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

export const useGsapHeroImgReveal = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        y: "-100vh",
      },
      {
        y: 0,
        duration: 2,
        delay,
        ease: "power4.out",
      }
    );
  }, [el, delay]);
};
