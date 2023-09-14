// import React from "react";

// const Hero = () => {
//   return (
//     <div className="min-h-screen flex items-center p-20 bg-black">
//       <div className="absolute w-4/5 font-montserratB md:left-[3.5rem] left-[1.69rem] text-white ">
//         <div className="lg:text-7xl md:text-6xl text-5xl md:leading-[4rem] lg:leading-[4.96rem]">
//           Sahyadri Open Source{" "}
//           <span className="text-chartreuse-200">Community</span>
//         </div>
//         <p className="font-montserratR lg:w-[50rem] pt-5">
//           A community driven by tech enthusiasts and open-source contributors,
//           to help young students to be part of the open-source ecosystem by
//           providing training and skill development.
//         </p>
//         <div className="flex mt-7 text-sm justify-center rounded-full items-center bg-chartreuse-200 text-black w-[7.25rem] h-[2.125rem]">
//           Learn More
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

import HeroSection from "./HeroSection";
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin);

export default function Home() {
  let tl = useRef();
  const heroRef = useRef();
  const sectionCardsRef = useRef();
  const heroSelector = gsap.utils.selector(heroRef);
  const sectionSelector = gsap.utils.selector(sectionCardsRef);

  useLayoutEffect(() => {
    const flagPoles = CSSRulePlugin.getRule(".card:before");
    console.log(flagPoles);
    tl.current = gsap
      .timeline({
        defaults: { duration: 2, ease: "power4.inOut" },
      })
      .to(heroSelector(".heading"), {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        opacity: 1,
        y: 0,
        duration: 2.2,
      })
      .to(
        heroSelector(".form"),
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          opacity: 1,
          y: 0,
        },
        "-=2"
      )
      .to(sectionSelector(".card"), { scaleY: 1, stagger: 0.2 }, "-=2")
      .to(
        flagPoles,
        {
          opacity: 1,
          stagger: 1,
          transform: "translateY(0px) translateX(-.5rem)",
        },
        "-=2"
      )
      .to(
        [sectionSelector(".card-title"), sectionSelector(".card-description")],
        { opacity: 1, stagger: 0.1, duration: 1.2 },
        "-=2"
      );
  }, []);

  return (
    <>
      <HeroSection ref={heroRef} />
    </>
  );
}
