import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

const HeroSection = () => {
  return (
    <motion.section
      className="hero-section"
      initial="initial"
      animate="animate"
    >
      <div className="hero-wrapper">
        <motion.div variants={stragger} className="left-wrapper">
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
            <button className="btn primary big cta-btn ">
              <p>Recent Work&apos;s</p>
              <div className="arrow">
                <svg
                  version="1.1"
                  id="Layer_1"
                  viewBox="0 0 492.004 492.004"
                  width="20px"
                  height="20px"
                  fill="white"
                >
                  <g>
                    <g>
                      <path
                        d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136
			c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002
			v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864
			c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872
			l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </button>
          </motion.div>
        </motion.div>
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
            src="/svg/hero-art.svg"
            alt="Landing Image"
            layout="responsive"
            width="720px"
            height="720px"
            quality={100}
            className="z-10 w-full h-full object-contain"
            about="Landing image for build the tech website"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
