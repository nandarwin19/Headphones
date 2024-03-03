import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Products from "./Products";
import Navbar from "./Navbar";
import Contact from "./Contact";
import About from "./More";

import Team from "./Team";
import Client from "./Client";
import { GoArrowDownRight } from "react-icons/go";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const imageTextRef = useRef(null);

  // background color and color change when it comes to team component with GSAP
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const teamAnimation = gsap.fromTo(
      ".team-section",
      {
        backgroundColor: "#E8E8E8",
        color: "black",
      },
      {
        backgroundColor: "#0f0f0f",
        color: "white",
        scrollTrigger: {
          trigger: ".team-section",
          start: "top center",
          end: "bottom center",
          duration: 2,
          toggleActions: "play none none reverse",

          // cursor colors changed when it comes to team component
          onEnter: () => {
            cursorRef.current.style.backgroundColor = "#ebebeb";
            followerRef.current.style.backgroundColor = "#dcdcdc62";
          },
          onLeaveBack: () => {
            cursorRef.current.style.backgroundColor = "#000000";
            followerRef.current.style.backgroundColor = "#2928281a";
          },
          onLeave: () => {
            cursorRef.current.style.backgroundColor = "#000000";
            followerRef.current.style.backgroundColor = "#2928281a";
          },
        },
      }
    );

    return () => {
      teamAnimation.kill();
    };
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    let posX = 0,
      posY = 0,
      mouseX = 0,
      mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.pageX;
      mouseY = e.pageY;
    };

    const updateCursor = () => {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;

      follower.style.left = `${posX - 20}px`;
      follower.style.top = `${posY - 20}px`;

      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animationLoop = () => {
      updateCursor();
      requestAnimationFrame(animationLoop);
    };

    animationLoop();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleImageMouseEnter = () => {
    cursorRef.current.classList.add("active");
    followerRef.current.classList.add("active");
    imageTextRef.current.style.display = "block";
  };

  const handleImageMouseLeave = () => {
    cursorRef.current.classList.remove("active");
    followerRef.current.classList.remove("active");
    imageTextRef.current.style.display = "none";
  };

  return (
    <div className="smooth-scroll">
      <div ref={cursorRef} className="relative cursor">
        <div ref={imageTextRef} className="cursor-text">
          <GoArrowDownRight />
        </div>
      </div>
      <div ref={followerRef} className="cursor-follower"></div>
      <Header />
      <Hero />
      <Products
        mouseLeave={handleImageMouseLeave}
        mouseEnter={handleImageMouseEnter}
      />
      <About />
      <div className="team-section">
        <Team />
      </div>
      <Client />
      <Navbar />
      <Contact />
    </div>
  );
};

export default App;
