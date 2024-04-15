"use client";
import React, { useContext, useRef, useEffect } from "react";
import { ScrollContext } from "@/hooks/use-scroll-observer";

type Props = {};

const opacityForBlock = (sectionProgress: number, blockNumber: number) => {
  const blockProgress = sectionProgress - blockNumber;
  if (blockProgress >= 0 && blockProgress < 1) return 1;
  return 0.2;
};

const TextScroll: React.FC<Props> = () => {
  const { scrollY } = useContext(ScrollContext);

  const refContainer = useRef<HTMLDivElement>(null);

  const noOfParagraphs = 4;
  let sectionProgress = 0;

  // Make sure refContainer.current is defined before accessing it
  if (refContainer.current) {
    const { clientHeight, offsetTop } = refContainer.current;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop + halfH)
      ) / clientHeight;
    sectionProgress = Math.min(
      noOfParagraphs - 0.5,
      Math.max(0.5, percentY * noOfParagraphs)
    );
  }

  return (
    <div className="bg-black font-montserratB text-white">
      <div
        ref={refContainer}
        className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 md:py-28 lg:py-36 flex flex-col justify-center items-center text-5xl md:text-6xl lg:text-7xl tracking-tight font-semibold"
      >
        <div className="leading-[1.15]">
          <div
            className="skillsText"
            style={{
              opacity: opacityForBlock(sectionProgress, 0),
            }}
          >
            May
          </div>
          <div
            className="skillsText"
            style={{
              opacity: opacityForBlock(sectionProgress, 1),
            }}
          >
            The Source
          </div>
          <div
            className="skillsText"
            style={{
              opacity: opacityForBlock(sectionProgress, 2),
            }}
          >
            Be
          </div>
          <div
            className="skillsText"
            style={{
              opacity: opacityForBlock(sectionProgress, 3),
            }}
          >
            With You
          </div>
          {/* <span
            className="skillsText inline-block after:contents-['']"
            style={{
              opacity: opacityForBlock(sectionProgress, 1),
            }}
          >
            The Source
          </span>
          <span
            className="skillsText inline-block"
            style={{
              opacity: opacityForBlock(sectionProgress, 2),
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            temporibus?
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default TextScroll;
