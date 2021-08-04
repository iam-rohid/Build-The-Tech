import React from "react";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <ul className="flex flex-row items-center space-x-4">
      <MenuItem key={1} name="Services" isActive={false} />
      <MenuItem key={23} name="Home" isActive={true} />
      <MenuItem key={3} name="Blog" isActive={false} />
      <MenuItem key={4} name="About" isActive={false} />
      <MenuItem key={5} name="Contact Us" isActive={false} />
    </ul>
  );
};

export default Menu;
