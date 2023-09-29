"use client";
import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp } from "./animation";
import Rounded from "../../common/RoundedButton";
export default function index() {
  const phrase =
    "SOSC is a conglomeration of clubs and individuals who contribute to the community by helping us conduct events and activities. there are numerous clubs and experts who help shape the community to be pro-active. Mozilla Campus Clubs, Developer Students clubs, and the GitHub Campus Expert are to name a few.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div className="h-full flex justify-center">
      <div ref={description} className={styles.description}>
        <div
          className={`flex md:flex-row flex-col md:px-14 lg:px-20 px-7 ${styles.body}`}
        >
          <div className="flex flex-col justify-center">
            <h1 className="font-montserratB text-5xl mb-5">About</h1>
            <p className="font-montserratR text-2xl">
              {phrase.split(" ").map((word, index) => {
                return (
                  <span key={index} className={styles.mask}>
                    <motion.span
                      variants={slideUp}
                      custom={index}
                      animate={isInView ? "open" : "closed"}
                      key={index}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </p>
          </div>
          <div data-scroll data-scroll-speed={0.1}>
            <Rounded className={`py-10 md:py-0 w-72 ${styles.button}`}>
              <img src="/assets/home/rocket.png" />
            </Rounded>
          </div>
        </div>
      </div>
    </div>
  );
}
