import React from "react";
import Link from "next/link";
import Image from "next/image";

import { OutlineButton } from "../buttons";
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

const Header = () => {
  return (
    <motion.nav className="nav-bar" initial="initial" animate="animate">
      <motion.div variants={stragger} className="nav-wrapper relative">
        <motion.div variants={animateIn}>
          <Link href="/" passHref>
            <a>
              <Image
                src="/svg/icon.svg"
                alt="Build The Tech icon"
                objectFit="contain"
                width="48px"
                height="48px"
              />
            </a>
          </Link>
        </motion.div>
        <Menu />
        <motion.div variants={animateIn}>
          <button className="btn outline primary normal">
            <p>Let&apos;s talk</p>
          </button>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Header;
