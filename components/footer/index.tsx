import Link from "next/link";
import Image from "next/image";
import React from "react";
import { copyright } from "../../data/app-data";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="flex flex-col justify-between items-center">
        <div className="container p-4 border-t-2 border-gray-100 w-full">
          <div className="flex-1 flex flex-row items-center justify-start space-x-4">
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
            <p className="text-gray-900 text-opacity-50 font-medium">
              {copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
