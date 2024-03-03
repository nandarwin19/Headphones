<<<<<<< HEAD
const Headphones = () => {
  return <div>
    
  </div>;
};
=======
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import _ from "lodash";
// import "./style.css";

function Headphones() {
  // const lenisRef = useRef();

  useEffect(() => {
    // lenisRef.current = new Lenis({
    //   duration: 1.2,
    //   infinite: true,
    // });

    // function raf(time) {
    //   lenisRef.current.raf(time);
    //   requestAnimationFrame(raf);
    // }

    // requestAnimationFrame(raf);

    // lenisRef.current.on("scroll", ScrollTrigger.update);

    // gsap.ticker.add((time) => {
    //   lenisRef.current.raf(time * 1000);
    // });

    // Create animation
    function scrollTrig() {
      gsap.registerPlugin(ScrollTrigger);

      let gsapAnim = gsap.utils.toArray(".gsap__anim");
      gsapAnim.forEach((section) => {
        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            start: "bottom bottom",
            end: "bottom top",
            scrub: true,
            snap: true,
          },
          yPercent: 100,
          ease: "none",
        });
      });

      let parallaxWrapp = gsap.utils.toArray(".parallax__wrapp");
      parallaxWrapp.forEach((parallax) => {
        gsap.to(parallax, {
          scrollTrigger: {
            trigger: parallax,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
          yPercent: -20,
          ease: "none",
        });
      });

      gsap.to(".title-p", {
        scrollTrigger: {
          trigger: "header.header",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        yPercent: 100,
      });

      gsap.to(".title__img img", {
        scrollTrigger: {
          trigger: ".serv",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        rotate: 360,
        ease: "none",
      });

      gsap.to(".title__t", {
        scrollTrigger: {
          trigger: ".serv",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        xPercent: -10,
        ease: "none",
      });

      gsap.to(".serv .stroke", {
        scrollTrigger: {
          trigger: ".serv",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        xPercent: 100,
        ease: "none",
      });

      gsap.to(".serv__item:nth-child(1)", {
        scrollTrigger: {
          trigger: ".serv",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        xPercent: -10,
        ease: "none",
      });

      gsap.to(".serv__item:nth-child(3)", {
        scrollTrigger: {
          trigger: ".serv",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        xPercent: 10,
        ease: "none",
      });

      gsap.to(".portfolio__item-img img", {
        scrollTrigger: {
          trigger: ".portfolio",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        scale: 1.3,
        ease: "none",
      });

      gsap.to(".approve__star", {
        scrollTrigger: {
          trigger: ".approve",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        rotate: 360,
        ease: "none",
      });
    }
    scrollTrig();

    // resize window
    const debouncedResize = _.debounce(onWindowResize, 500);
    function onWindowResize() {
      console.log("Window resized!");
      window.location.reload();
    }
    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  return (
    <div className="wrapp">
      <header className="header gsap__anim">
        <div className="parallax__wrapp">
          <div className="header__bg">
            <img src="img/shop.jpg" alt="" />
            <img src="img/shop.jpg" alt="" />
          </div>
          <div className="content">
            <h1 className="title title-p">
              WE ARE THE BEST <span className="stroke">HEADPHONES </span>SHOP
            </h1>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="section gsap__anim serv">
          <div className="parallax__wrapp">
            <div className="content">
              <div className="serv__wrapp">
                <h2 className="title">
                  <span className="title__wrapp">
                    <span className="title__img">
                      <img src="img/star.svg" alt="" />
                    </span>
                    <div className="title__txt">
                      <span className="title__t">the</span>
                      <span className="stroke">services</span>
                    </div>
                  </span>
                </h2>
                <ul className="serv__list">
                  <li className="serv__item">
                    Creative direction
                    <span className="serv__item-img">
                      <img src="img/pirat2.png" alt="" />
                    </span>
                  </li>
                  <li className="serv__item">
                    Brand and identity
                    <span className="serv__item-img">
                      <img src="img/pirat3.png" alt="" />
                    </span>
                  </li>
                  <li className="serv__item">
                    Visual content
                    <span className="serv__item-img">
                      <img src="img/pirat4.png" alt="" />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section gsap__anim portfolio">
          <div className="parallax__wrapp">
            <div className="content">
              <div className="portfolio__wrapp">
                <ul className="portfolio__list">
                  <li className="portfolio__item">
                    <div className="portfolio__item-img">
                      <img src="img/pirat5.png" alt="" />
                    </div>
                  </li>
                  <li className="portfolio__item">
                    <div className="portfolio__item-img">
                      <img src="img/pirat6.png" alt="" />
                    </div>
                  </li>
                  <li className="portfolio__item">
                    <div className="portfolio__item-img">
                      <img src="img/pirat7.png" alt="" />
                    </div>
                  </li>
                  <li className="portfolio__item">
                    <div className="portfolio__item-img">
                      <img src="img/pirat8.png" alt="" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section gsap__anim approve">
          <div className="parallax__wrapp">
            <div className="content">
              <div className="approve__wrapp">
                <span className="approve__txt">
                  <span className="approve__star">
                    <img src="img/star.svg" alt="" />
                  </span>
                  <span className="approve__ix">approvecode</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="header gsap__anim">
          <div className="parallax__wrapp">
            <div className="header__bg">
              <img src="img/pirat1.png" alt="" />
              <img src="img/pirat1.png" alt="" />
            </div>
            <div className="content">
              <h2 className="title">
                Infinite<span className="stroke">Scroll</span>
              </h2>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
>>>>>>> 233a68ff6cf8491e937154f2ce724fff03cee2a1

export default Headphones;
