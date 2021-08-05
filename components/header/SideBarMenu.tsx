import React from "react";
import { iMenuItem } from "../../data/navigation";
import SidebarMenuItem from "./SidebarMenuItem";

interface iProp {
  menu: iMenuItem[];
  currentRoute: string;
  subLevel: number;
  onClose: () => void;
}

const SideBarMenu: React.FC<iProp> = ({
  menu,
  currentRoute,
  subLevel,
  onClose,
}) => {
  const getIsActive = (path: string) => {
    if (!currentRoute) return false;

    const paths: string[] = path.split("/");
    const p = paths[paths.length - 1];
    const curPaths: string[] = currentRoute.split("/");
    const cp = curPaths[subLevel + 1];
    return p === cp;
  };

  return (
    <ul className="space-y-2">
      {menu.map((item, i) => (
        <SidebarMenuItem
          data={item}
          key={i}
          isActive={getIsActive(item.path)}
          currentRoute={currentRoute}
          subLevel={subLevel}
          onClose={onClose}
        />
      ))}
    </ul>
  );
};

export default SideBarMenu;
