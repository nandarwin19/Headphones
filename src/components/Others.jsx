import React from "react";
import { challenges } from "./constants/constant";
import { FiArrowDownRight } from "react-icons/fi";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

const Others = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const texts = document.querySelectorAll("div.other-animate p");

    texts.forEach((text) => {
      // const img = text.nextElementSibling;
      const img = text.closest(".other-animate").querySelector("img");
      const icon = text.closest(".other-animate").querySelector(".icon");
      const line = text.closest(".other-animate").querySelector(".enhanceLine");

      const splitType = new SplitType(text);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          end: "bottom center",
          // markers: true,
          toggleActions: "play play none reverse",
        },
      });

      tl
        .from(splitType.chars, {
          duration: 1,
          y: 50,
          opacity: 0,
          stagger: 0.005,
          ease: "power2.out",
        })
        .fromTo(
          img,
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "<"
        )
        .fromTo(
          icon,
          {
            duration: 1,
            y: 50,
            opacity: 0,
            stagger: 0.005,
            ease: "power2.out",
          },
          {
            opacity: 1,
            y: 0,
          },
          "<"
        )
        .fromTo(
          line,
          {
            scaleX: 0,
            opacity: 0,
            // ease: "power1.out",
          },
          {
            opacity: 1,
            scaleX: 1,
            duration: 0.8,
            delay: -0.5,
          }
        ),
        "-=2";
    });

    return () => {};
  }, []);

  useEffect(() => {
    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".movingTextDiv",
        start: "top 30%",
        end: "bottom center",
        scrub: true,
        // markers: true,
      },
    });

    textTl.fromTo(
      ".movingText",
      {
        x: 1400,
        yPercent: 0,
        // duration: 2,
        scrub: true,
      },
      {
        x: 0,
      }
    );

    return () => {};
  }, []);

  return (
    <div className="h-full w-full">
      <div className="max-container">
        {challenges.map((data) => (
          <div key={data.id} className="other-animate my-12">
            <div className="flex items-center justify-center">
              <div className="enhanceLine w-[100%] h-[1px] bg-gray-400 mb-10"></div>
            </div>

            <div className="mb-8 flex items-center justify-start gap-4">
              <FiArrowDownRight className="icon" />

              <p className="">{data.title}</p>
            </div>
            <div className="flex flex-col tablet:flex-row items-start gap-3 justify-between">
              <div className="other-img w-full h-[200px] tablet:w-[500px] tablet:h-[300px]">
                <img
                  src={data.img}
                  alt="Others"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="tablet:w-[800px] w-full relative">
                <p>
                  <span className="text-2xl tablet:leading-10 tablet:text-[40px]">
                    &nbsp; &nbsp; {data.text}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="movingTextDiv relative flex items-center justify-center min-h-[300px] tablet:min-h-[600px] tablet:h-[70vh]">
          <p className="movingText text-[3rem] tablet:text-[10rem] absolute whitespace-nowrap">
            Discover Headphones
          </p>
        </div>
      </div>
      <div className="h-screen w-full">
        <video
          className="w-full h-full object-cover"
          src="/public/other.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
    </div>
  );
};

export default Others;
