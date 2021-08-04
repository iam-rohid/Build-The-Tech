import React from "react";
import MenuItem from "./MenuItem";
import { menu } from "../../data/navigation";

interface iProps {
  currentRoute: string;
}

const Menu: React.FC<iProps> = ({ currentRoute }) => {
  const getIsActive = (path: string) => {
    if (!currentRoute) return false;

    const paths: string[] = path.split("/");
    const p = paths[paths.length - 1];
    const curPaths: string[] = currentRoute.split("/");
    const cp = curPaths[1];
    return p === cp;
  };

  return (
    <ul className="flex flex-row items-center space-x-4">
      {menu.map((item, i) => (
        <MenuItem key={i} data={item} isActive={getIsActive(item.path)} />
      ))}
    </ul>
  );
};

export default Menu;
