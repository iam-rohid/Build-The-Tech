import React from "react";
import Link from "next/link";
import Image from "next/image";

import { PrimaryButton, AnimatedButton } from "../../buttons";
import { motion } from "framer-motion";
import Menu from "./Menu";

const easing = [0.6, -0.5, 0.01, 0.99];

export const animateIn = {
  initial: {
    y: -50,
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

const MainHeader = () => {
  return (
    <motion.nav className="nav-bar" initial="initial" animate="animate">
      <motion.div variants={stragger} className="nav-wrapper relative">
        <motion.div variants={animateIn}>
          <AnimatedButton>
            <Link href="/" passHref>
              <Image
                src="/svg/icon.svg"
                alt="Build The Tech icon"
                objectFit="contain"
                width="48px"
                height="48px"
              />
            </Link>
          </AnimatedButton>
        </motion.div>
        <Menu />
        <motion.div variants={animateIn}>
          <PrimaryButton>
            <p>Let&apos;s talk</p>
          </PrimaryButton>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default MainHeader;
