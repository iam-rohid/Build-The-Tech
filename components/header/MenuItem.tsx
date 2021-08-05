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
      className={`nav-menu-item relative ${isActive && "active"}`}
    >
      <Link href={data.path} passHref>
        <a
          className={`hover:text-primary-500 text-gray-700 px-4 py-2 transition duration-300 flex flex-row items-center justify-center space-x-2 ${
            isActive && "text-primary-500"
          }`}
        >
          <p>{data.name}</p>
          {data.subMenu && (
            <div className="mt-1">
              <svg
                width="10px"
                height="10px"
                viewBox="0 0 451.847 451.847"
                className={`fill-current ${
                  isActive ? "text-white" : "text-gray-900"
                }`}
              >
                <g>
                  <path
                    d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
                  />
                </g>
              </svg>
            </div>
          )}
        </a>
      </Link>
      {data.subMenu && (
        <ul className="nav-menu-item-drop-down absolute flex-col items-start justify-start space-y-2 px-2 py-3 rounded bg-white shadow-lg">
          {data.subMenu.map((item, i) => (
            <Link href={item.path} passHref key={i}>
              <li className="whitespace-nowrap cursor-pointer hover:bg-gray-100 px-4 w-full py-2 rounded">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </motion.li>
  );
};

export default MenuItem;
