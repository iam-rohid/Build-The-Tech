import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

import { animateIn } from ".";
import { AnimatedButton } from "../../buttons";
import { iMenuItem } from "../../../data/navigation";

interface iProp {
  data: iMenuItem;
  isActive: boolean;
}
const MenuItem: React.FC<iProp> = ({ data, isActive }) => {
  return (
    <motion.li
      variants={animateIn}
      className={`nav-menu-item ${isActive && "active"}`}
    >
      <AnimatedButton>
        <Link href={data.path} passHref>
          <a
            className={`hover:text-gray-900 text-gray-700 px-4 py-2 ${
              isActive && "text-primary-500 hover:text-primary-500"
            }`}
          >
            {data.name}
          </a>
        </Link>
      </AnimatedButton>
    </motion.li>
  );
};

export default MenuItem;
