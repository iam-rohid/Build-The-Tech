import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

import { animateIn } from ".";
import { iMenuItem } from "../../data/navigation";

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
      <Link href={data.path} passHref>
        <a
          className={`hover:text-primary-500 text-gray-700 px-4 py-2 transition duration-300 ${
            isActive && "text-primary-500"
          }`}
        >
          {data.name}
        </a>
      </Link>
    </motion.li>
  );
};

export default MenuItem;
