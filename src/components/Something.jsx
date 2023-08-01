"use client";
import React, { useEffect } from "react";
// import "./MyComponent.css"; // Make sure to import your CSS file

const MyComponent = () => {
  useEffect(() => {
    // var textWrapper = document.querySelector(".title");
    // textWrapper.innerHTML = textWrapper.textContent.replace(
    //   /\S/g,
    //   "<span class='letter'>$&</span>"
    // );

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
      width: "550",
      height: "400",
      padding: "0 400 0 0",
      ease: Expo.easeInOut,
      delay: 3.6,
    });

    if (window.innerWidth < 768) {
      TweenMax.to(".wrapper-img", 2.4, {
        width: "320",
        height: "350",
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
    <div className="bg-black container">
      <div className="hero-image bg-cyan-400">
        <div className="wrapper-img bg-orange-600">
          <div className="box bg-yellow-700"></div>
          <div className="bg-gray-600">
            <img className="image" src="/logo-white.png" alt="Hero" />
          </div>
        </div>
      </div>
      <div className="header">
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-[50%] text-white left-[50%] md:text-7xl text-6xl font-bold">
          <div className="text-white py-1">Sahyadri</div>
          <div className="text-white py-1">Open Source</div>
          <div className="text-chartreuse-100 py-1">Community</div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
