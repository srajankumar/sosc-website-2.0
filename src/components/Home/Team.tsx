"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

import WaterDropGrid from "@/components/ui/water-drop-grid";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const Team = () => {
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
      className="bg-white text-black"
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
      <section className="w-full max-w-7xl mx-auto min-h-[100dvh] px-5 py-12 md:grid flex flex-col md:grid-cols-2 md:justify-between justify-center items-center gap-10">
        <div>
          <motion.div
            className="font-bold md:text-4xl text-3xl pb-5"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            Get Connected!
          </motion.div>
          <motion.p
            className="text-lg md:text-xl pt-1 text-justify"
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            Meet people with similar interest to work together on projects and
            host events to build a better collaborative environment. We are more
            than 100 members with interests on various fields of technology here
            to know each other and get connected. Meet our members to know more
            about us and build something cool!
          </motion.p>
        </div>
        <div className="w-80 md:w-auto flex justify-center items-center overflow-hidden">
          <Image
            src="/assets/home/team.png"
            alt="team"
            width={500}
            height={500}
          />
        </div>
      </section>
    </motion.div>
  );
};

export default Team;
