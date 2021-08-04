import React, { useState } from "react";
import { iMenuItem } from "../../data/navigation";
import Link from "next/link";
import SideBarMenu from "./SideBarMenu";

interface iProp {
  data: iMenuItem;
  isActive: boolean;
  currentRoute: string;
  subLevel: number;
  onClose: () => void;
}

const SidebarMenuItem: React.FC<iProp> = ({
  data,
  isActive,
  currentRoute,
  subLevel,
  onClose,
}) => {
  const [dropDownOpened, setDropDownOpened] = useState(false);
  return (
    <div className="flex w-full h-auto flex-col items-end">
      <li
        className={`flex w-full rounded h-10 cursor-pointer ${
          isActive ? "bg-primary-500 text-white" : "hover:bg-gray-100"
        }`}
      >
        <div className="flex flex-row w-full h-full justify-center">
          <Link href={data.path} passHref>
            <div
              onClick={onClose}
              className="flex-1 h-full w-full items-center justify-start px-4 flex"
            >
              {data.name}
            </div>
          </Link>

          {data.subMenu && (
            <div
              className="h-full flex items-center justify-center px-4"
              onClick={() => {
                setDropDownOpened(!dropDownOpened);
              }}
            >
              <svg
                version="1.1"
                id="Capa_1"
                width="12px"
                height="12px"
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
        </div>
      </li>
      {dropDownOpened && data.subMenu && (
        <div style={{ width: "90%" }} className="py-4">
          <SideBarMenu
            menu={data.subMenu}
            currentRoute={currentRoute}
            subLevel={subLevel + 1}
            onClose={onClose}
          />
        </div>
      )}
    </div>
  );
};

export default SidebarMenuItem;
