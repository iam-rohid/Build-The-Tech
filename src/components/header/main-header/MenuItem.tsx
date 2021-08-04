import { motion } from "framer-motion";
import React from "react";
import { animateIn } from ".";
import { AnimatedButton } from "../../buttons";

interface iProp {
  name: string;
  isActive: boolean;
}
const MenuItem: React.FC<iProp> = ({ name, isActive }) => {
  return (
    <motion.li
      variants={animateIn}
      className={`nav-menu-item ${isActive && "active"}`}
    >
      <AnimatedButton>
        <p className="hover:text-gray-900 text-gray-700 px-4 py-2">{name}</p>
      </AnimatedButton>
    </motion.li>
  );
};

export default MenuItem;
