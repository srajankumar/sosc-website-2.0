"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HorizontailScroll() {
  const scroller = useRef<HTMLDivElement>(null);
  const scroll = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scrollLevel = gsap.utils.toArray(".scroll-part");

    let to = gsap.to(scrollLevel, {
      xPercent: () => -100 * (scrollLevel.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (scrollLevel.length - 1),

        end: () => "+=" + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden flex">
      <div className="overflow-hidden ">
        <div
          id="scroll"
          ref={scroller}
          className=" flex overflow-x-hidden text-white w-[400vw] m-0 bg-black  relative h-screen"
        >
          <section
            ref={scroll}
            className="scroll-part  px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="1st image"
              className="max-w-[70vw] max-h-[60vh] m-auto object-contain"
            />
          </section>
          <section
            ref={scroll}
            className="scroll-part px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="2ndimage"
              className="max-w-[70vw] max-h-[60vh] m-auto object-contain"
            />
          </section>
          <section
            ref={scroll}
            className="scroll-part  px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="2ndimage"
              className="max-w-[70vw] max-h-[60vh] m-auto object-contain"
            />
          </section>
          <section
            ref={scroll}
            className="scroll-part  px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="2ndimage"
              className="max-w-[70vw] max-h-[60vh] m-auto object-contain"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default HorizontailScroll;
