import React from "react";
import Header from "../header";
import Footer from "../footer";

interface iProp {
  children: JSX.Element;
}
const Layout: React.FC<iProp> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
