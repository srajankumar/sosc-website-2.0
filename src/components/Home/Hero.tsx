"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

import WaterDropGrid from "@/components/ui/water-drop-grid";
import { Button } from "@/components/ui/button";
const Hero = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref) as boolean;

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 0 },
    show: { opacity: 1, y: -10, transition: { type: "spring" } },
  };

  return (
    <motion.div
      initial="hidden"
      className="bg-black"
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <section className="w-full max-w-7xl mx-auto min-h-[100dvh] px-5 py-12 md:grid flex flex-col-reverse md:grid-cols-2 md:justify-between justify-center items-center gap-10">
        <div>
          <motion.div
            className="font-bold md:text-5xl text-4xl pb-5"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            Sahyadri Open Source{" "}
            <motion.span
              className="text-chartreuse-100"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              Community
            </motion.span>
          </motion.div>

          <motion.p
            className="text-sm md:text-base text-white/75 pt-1"
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            A community driven by tech enthusiasts and open-source contributors,
            to help young students to be part of the open-source ecosystem by
            providing training and skill development.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            <Button className="bg-chartreuse-100 font-bold rounded-full mt-5 tracking-wide hover:bg-chartreuse-100/75">
              Community Guidelines
            </Button>
          </motion.div>
        </div>
        <div className="w-80 md:w-auto md:flex hidden justify-center items-center overflow-hidden">
          <WaterDropGrid />
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;
