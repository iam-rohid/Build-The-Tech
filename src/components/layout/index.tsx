import { motion } from "framer-motion";
import React from "react";
import Header from "../header";
import Footer from "../footer";

interface iProp {
  children: JSX.Element;
}
const Layout: React.FC<iProp> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-x-hidden relative h-screen overflow-y-scroll"
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </motion.div>
  );
};

export default Layout;
