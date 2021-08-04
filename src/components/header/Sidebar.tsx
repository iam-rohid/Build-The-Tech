import { motion } from "framer-motion";
import React from "react";
import { menu } from "../../data/navigation";
import SideBarMenu from "./SideBarMenu";

interface iProp {
  visibale: boolean;
  onClose: () => void;
  currentRoute: string;
}
const Sidebar: React.FC<iProp> = ({ visibale, onClose, currentRoute }) => {
  const closeSideBar = () => {
    onClose();
  };

  if (!visibale) return null;

  return (
    <div className={`side-bar w-screen h-screen fixed top-0 right-0`}>
      <div
        className="w-full h-full absolute top-0 left-0 bg-black opacity-60 cursor-pointer"
        onClick={onClose}
      ></div>
      <div className="w-full sm:w-80 h-full absolute right-0 top-0 bg-transparent p-4">
        <div className="w-full h-full p-4 rounded-lg bg-white">
          <SideBarMenu
            menu={menu}
            currentRoute={currentRoute}
            subLevel={0}
            onClose={closeSideBar}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
