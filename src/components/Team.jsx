import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { teams } from "./constants/constant";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuMinus, LuPlus } from "react-icons/lu";
import SplitType from "split-type";
import { randomType } from "./randomNumber/Random";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const textRef = useRef(null);
  const [aboutTexts, setAboutTexts] = useState(teams.map(() => false));

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
              { scaleY: 0, duration: 0.5, color: "gray", y: 30, skewX: 10 },
              {
                y: 0,
                scaleY: 1,
                skewX: 0,
                color: "white",
                duration: 0.2,
                stagger: 0.02,
                scrollTrigger: {
                  trigger: text,
                  start: "top 60%",
                  end: "5% -40%",
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
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const galleryTeam = gsap.utils.toArray("div.team-cards .team-img");

    galleryTeam.forEach((data) => {
      const img = data.closest(".team-card").querySelector(".team-img");
      const number = data.closest(".team-card").querySelector(".team-number");
      const role = data.closest(".team-card").querySelector(".team-role");
      const name = data.closest(".team-card").querySelector(".team-name");
      const border = data.closest(".team-card").querySelector(".team-border");
      const about = data.closest(".team-card").querySelector(".team-about");

      gsap.set(img, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      });
      gsap.set(border, {
        scaleX: 0,
      });
      gsap.set([role, number, name, about], {
        yPercent: 100,
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: data,
          start: "-70% top",
          end: "bottom top",
          // markers: true,
          toggleActions: "play none play reverse",
        },
        defaults: {
          ease: "power4.inOut",
        },
      });

      tl.fromTo(
        data,
        {
          y: -50,
        },
        {
          y: 0,
        }
      )

        .to(
          img,
          {
            clipPath: "polygon(0% 95%, 100% 49%, 100% 100%, 0 100%)",
            delay: 0.1,
          },
          "-=.05"
        )
        .to(
          img,
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            delay: 0.1,
          },
          "-=.052"
        )
        .to(
          border,
          {
            scaleX: 1,
          },
          "-=.053"
        )
        .to(
          [number, role, name, about],
          {
            opacity: 1,
            yPercent: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power1.out",
          },
          "-=.053"
        );

      galleryTeam.forEach((img) => {
        let p = img.closest(".team-card").querySelector(".team-role");
        let originalText = p.innerText;

        img.addEventListener("mouseenter", () => {
          gsap.to(img, {
            clipPath: "polygon(0 9%, 100% 0, 100% 91%, 0% 100%)",
          });
          randomType(p, "01", 650, true);
        });

        img.addEventListener("mouseleave", () => {
          gsap.to(img, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          });
          p.innerText = originalText;
        });
      });
    });

    return () => {};
  }, []);

  return (
    <div className="team" id="team">
      <div className="max-container">
        <p className="Aquatico text-sm my-16">/Team</p>
        <div ref={textRef}>
          <p className="tablet:text-[5rem] text-[3rem] w-full tablet:w-[80%] mb-28">
            Experience the world through sound with n.headphones – where every
            beat takes you on a journey.
          </p>
        </div>

        <div className="team-cards flex flex-col  my-12 flex-nowrap w-[100vw] h-auto">
          {teams.map((team, index) => (
            <div
              key={team.id}
              className={`team-card relative w-[370px] tablet:w-[400px] h-full ${
                team.id === 1 ? "mt-0 m-10" : "my-20"
              }  ${team.id % 2 === 0 ? `laptop:ml-[500px]` : `ml-0`}`}
            >
              <div className="w-full h-full ">
                <div className="w-full h-[400px] tablet:h-[480px]">
                  <img
                    src={team.img}
                    alt="team"
                    className="team-img w-full h-full object-cover"
                  />
                </div>
                <div className="team-border"></div>
                <div className="flex items-center justify-between">
                  <p className="team-number -mt-1 text-xl font-bold">
                    0{team.id}
                  </p>
                  <p className="team-role text-[14px] mb-3 uppercase">
                    {team.role}
                  </p>
                </div>
              </div>
              <div className="team-name text-[2rem] flex flex-col items-center justify-center absolute z-1 top-1/3 -right-12">
                <p className="Roslindale">{team.name}</p>
                <div
                  onClick={() =>
                    setAboutTexts((prevAboutTexts) => {
                      const newAboutTexts = [...prevAboutTexts];
                      newAboutTexts[index] = !newAboutTexts[index];
                      return newAboutTexts;
                    })
                  }
                  className={`cursor-pointer hiddenAboutText w-16 h-16 mt-4 flex items-center justify-center border border-white/40 rounded-full ${
                    aboutTexts[index] ? "animate-pulse" : "hover:animate-ping"
                  } `}
                >
                  {aboutTexts[index] ? <LuMinus /> : <LuPlus />}
                </div>
              </div>
              <div
                className={`absolute top-10 right-0 ${
                  aboutTexts[index] ? "p-4 " : null
                } rounded-md team-about  bg-black2 tablet:top-2/3 tablet:-right-80 w-72`}
              >
                {aboutTexts[index] && (
                  <p className="">&nbsp; &nbsp; &nbsp;{team.about}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
