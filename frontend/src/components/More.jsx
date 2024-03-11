import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useEffect, useRef } from "react";
import Others from "./Others";

const More = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const text = textRef.current;

    if (!text) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const mySplitText = new SplitType(text, {
              type: "chars",
            });
            const chars = mySplitText.chars;

            gsap.fromTo(
              chars,
              {
                scaleY: 0,
                duration: 0.5,
                color: "gray",
                y: 30,
                skewX: 10,
              },
              {
                y: 0,
                scaleY: 1,
                skewX: 0,
                color: "black",
                duration: 0.2,
                stagger: 0.02,
                scrollTrigger: {
                  trigger: text,
                  start: "top 50%",
                  end: "5% -70%",
                  scrub: true,
                  // markers: true,
                  toggleActions: "play none none reverse",
                },
              }
            );

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(text);

    return () => {
      observer.disconnect();
    };
    // }
  }, []);

  return (
    <div className="bg-[#E8E8E8]" id="moreus">
      <div className="min-h-screen py-24 w-full max-container">
        <p className="Aquatico text-sm my-16">/More ABOUT US</p>

        <div ref={textRef}>
          <p className="text-[3rem] tablet:text-[7rem]">
            Integrating, Collaborating, and Innovating: Empowering Digital
            Visionaries for Impactful Solutions that Transform Industries and
            Ignite Progress
          </p>
        </div>
      </div>
      <Others />
    </div>
  );
};

export default More;
