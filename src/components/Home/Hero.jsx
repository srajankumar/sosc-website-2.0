"use client";
import React, { useEffect } from "react";

import Rotate from "react-reveal/Rotate";

const MyComponent = () => {
  useEffect(() => {
    anime.timeline().add({
      targets: ".title .letter",
      translateY: [200, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000,
      delay: (el, i) => 4800 + 40 * i,
    });
    TweenMax.to(".box", 2.4, {
      y: "-100%",
      ease: Expo.easeInOut,
      delay: 1,
    });

    TweenMax.from("img", 4, {
      scale: "2",
      ease: Expo.easeInOut,
      delay: 0,
    });

    TweenMax.to(".wrapper-img", 2.4, {
      width: "470",
      height: "350",
      padding: "0 350 0 0",
      ease: Expo.easeInOut,
      delay: 3.6,
    });

    if (window.innerWidth < 1024) {
      TweenMax.to(".wrapper-img", 2.4, {
        width: "390",
        height: "270",
        padding: "0 300 0 0",
        ease: Expo.easeInOut,
        delay: 3.6,
      });
    }

    if (window.innerWidth < 751) {
      TweenMax.to(".wrapper-img", 2.4, {
        width: "310",
        height: "270",
        padding: "0 190 0 0",
        ease: Expo.easeInOut,
        delay: 3.6,
      });
    }

    if (window.innerWidth < 645) {
      TweenMax.to(".wrapper-img", 2.4, {
        width: "335",
        height: "270",
        padding: "0 225 0 0",
        ease: Expo.easeInOut,
        delay: 3.6,
      });
    }

    TweenMax.from(".img", 0.4, {
      opacity: 0,
      ease: Expo.easeInOut,
      delay: 3.4,
    });

    TweenMax.to(".left", 2, {
      x: "-400",
      rotation: -10,
      ease: Expo.easeInOut,
      delay: 3.8,
    });

    TweenMax.to(".right", 2, {
      x: "100",
      rotation: 10,
      ease: Expo.easeInOut,
      delay: 3.8,
    });

    TweenMax.staggerFrom(
      ".menu > div, .hero-container > div",
      2,
      {
        opacity: 0,
        y: 30,
        ease: Expo.easeInOut,
        delay: 4.2,
      },
      0.1
    );
  }, []);

  return (
    <div className="container">
      <div className="hero-image absolute h-screen w-full top-0 flex items-center justify-center">
        <div className="wrapper-img w-full my-0 mx-auto relative overflow-hidden bg-black">
          <div className="box bg-black"></div>
          <div className="bg-black">
            <img className="image" src="/logo-white.png" alt="Hero" />
          </div>
        </div>
      </div>
      <div className="header">
        <div className="absolute font-Poppins w-full sm:w-auto sm:px-0 px-10 -translate-x-1/2 -translate-y-1/2 top-[50%] text-white left-[50%] lg:text-7xl md:text-6xl text-5xl">
          <div className="text-white">
            <Rotate bottom left delay={5000}>
              <span>S</span>
            </Rotate>
            <Rotate bottom left delay={5100}>
              <span>a</span>
            </Rotate>
            <Rotate bottom left delay={5200}>
              <span>h</span>
            </Rotate>
            <Rotate bottom left delay={5300}>
              <span>y</span>
            </Rotate>
            <Rotate bottom left delay={5400}>
              <span>a</span>
            </Rotate>
            <Rotate bottom left delay={5500}>
              <span>d</span>
            </Rotate>
            <Rotate bottom left delay={5600}>
              <span>r</span>
            </Rotate>
            <Rotate bottom left delay={5700}>
              <span>i</span>
            </Rotate>
          </div>

          <div className="text-white">
            <Rotate bottom left delay={5800}>
              <span>O</span>
            </Rotate>
            <Rotate bottom left delay={5900}>
              <span>p</span>
            </Rotate>
            <Rotate bottom left delay={6000}>
              <span>e</span>
            </Rotate>
            <Rotate bottom left delay={6100}>
              <span>n</span>
            </Rotate>{" "}
            <Rotate bottom left delay={6200}>
              <span>S</span>
            </Rotate>
            <Rotate bottom left delay={6300}>
              <span>o</span>
            </Rotate>
            <Rotate bottom left delay={6400}>
              <span>u</span>
            </Rotate>
            <Rotate bottom left delay={6500}>
              <span>r</span>
            </Rotate>
            <Rotate bottom left delay={6600}>
              <span>c</span>
            </Rotate>
            <Rotate bottom left delay={6700}>
              <span>e</span>
            </Rotate>
          </div>

          <div className="text-chartreuse-100">
            <Rotate bottom left delay={6800}>
              <span>C</span>
            </Rotate>
            <Rotate bottom left delay={6900}>
              <span>o</span>
            </Rotate>
            <Rotate bottom left delay={7000}>
              <span>m</span>
            </Rotate>
            <Rotate bottom left delay={7100}>
              <span>m</span>
            </Rotate>
            <Rotate bottom left delay={7200}>
              <span>u</span>
            </Rotate>
            <Rotate bottom left delay={7300}>
              <span>n</span>
            </Rotate>
            <Rotate bottom left delay={7400}>
              <span>i</span>
            </Rotate>
            <Rotate bottom left delay={7500}>
              <span>t</span>
            </Rotate>
            <Rotate bottom left delay={7600}>
              <span>y</span>
            </Rotate>
          </div>
        </div>
      </div>{" "}
      <div className="text-white flex justify-center w-full absolute bottom-10">
        <Rotate bottom left delay={7800}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
          >
            <g
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path
                fill="currentColor"
                d="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5"
              >
                <animate
                  attributeName="d"
                  calcMode="linear"
                  dur="1.5s"
                  keyTimes="0;0.7;1"
                  repeatCount="indefinite"
                  values="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5;M12 4 h2 v3 h2.5 L12 11.5M12 4 h-2 v3 h-2.5 L12 11.5;M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5"
                />
              </path>
            </g>
          </svg>
        </Rotate>
      </div>
    </div>
  );
};

export default MyComponent;
