import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const Screen = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-screen h-screen flex flex-col items-center justify-center bg-white"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100 }}
      >
        <Image
          src="/svg/icon.svg"
          alt="Build The Tech icon"
          objectFit="contain"
          width="80px"
          height="80px"
        />
      </motion.div>
    </motion.div>
  );
};

export default Screen;
