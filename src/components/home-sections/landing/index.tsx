import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PrimaryButton } from "../../buttons";

const easing = [0.6, -0.5, 0.01, 0.99];

export const animateIn = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stragger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const LandingSection = () => {
  return (
    <motion.section
      className="landing-section"
      initial="initial"
      animate="animate"
    >
      <motion.div variants={stragger} className="landing-wrapper">
        <div className="left-wrapper">
          <div className="md:mb-10 mb-4">
            <motion.h1 variants={animateIn} className="title">
              Let’s build some
            </motion.h1>
            <motion.h1 variants={animateIn} className="title">
              Amazing Products
            </motion.h1>
            <motion.h1 variants={animateIn} className="title">
              Together!
            </motion.h1>
          </div>
          <motion.p variants={animateIn} className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since
          </motion.p>
          <motion.div variants={animateIn}>
            <PrimaryButton>
              <p>Recent Work&apos;s</p>
            </PrimaryButton>
          </motion.div>
        </div>
        <motion.div
          variants={{
            initial: { x: 200, opacity: 0 },
            animate: {
              x: 0,
              opacity: 1,
              transition: {
                duration: 1,
                ease: easing,
              },
            },
          }}
          className="right-wrapper"
        >
          <Image
            src="/svg/LandingArt.svg"
            alt="Landing Image"
            layout="responsive"
            width="500px"
            height="500px"
            className="z-10 w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default LandingSection;
