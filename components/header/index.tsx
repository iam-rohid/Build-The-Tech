import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";

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

export const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const [currentRoute, setCurrentRoute] = useState<string | null>(null);
  const router = useRouter();
  const [compactNavbar, setCompactNavbar] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset <= 24 && compactNavbar) {
        setCompactNavbar(false);
      } else if (window.pageYOffset > 24 && !compactNavbar) {
        setCompactNavbar(true);
      }
    };
    const handleRouteChange = (url: string) => {
      const newRoute: string = url;
      if (newRoute !== null && currentRoute === newRoute) {
        if (scrollY == 0) {
          router.reload();
        }
      } else {
        setCurrentRoute(newRoute);
      }
    };

    if (currentRoute === null) {
      handleRouteChange(router.asPath);
    }

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [currentRoute, router, compactNavbar]);

  return (
    <motion.nav
      className={`nav-bar bg-white h-14 my-6 ${
        compactNavbar ? " shadow-sm" : ""
      }`}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={stragger} className="nav-wrapper relative">
        <motion.div variants={animateIn}>
          <Link href="/" passHref>
            <button>
              <Image
                src="/svg/icon.svg"
                alt="Build The Tech icon"
                objectFit="contain"
                width="38px"
                height="38px"
              />
            </button>
          </Link>
        </motion.div>
        <div className="hidden lg:block">
          <Menu currentRoute={currentRoute} />
        </div>
        <motion.div variants={animateIn} className="hidden lg:block">
          <button className="btn outline primary normal">
            <p>Let&apos;s talk</p>
          </button>
        </motion.div>

        <motion.div className="lg:hidden">
          <button
            onClick={() => {
              setSidebar(true);
              document.body.style.overflowY = "hidden";
            }}
          >
            Menu
          </button>
          <Sidebar
            currentRoute={currentRoute}
            visibale={sidebar}
            onClose={() => {
              setSidebar(false);
              document.body.style.overflowY = "auto";
            }}
          />
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Header;
