import { motion } from "framer-motion";
import React from "react";
import MainHeader from "../header/main-header";
import MainFooter from "../main-footer";

interface iProp {
  children: JSX.Element;
}
const Layout: React.FC<iProp> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-x-hidden"
    >
      <MainHeader />
      <main>{children}</main>
      {/* <MainFooter /> */}
    </motion.div>
  );
};

export default Layout;
