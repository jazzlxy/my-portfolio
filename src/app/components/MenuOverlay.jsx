// {
//   /* This is for switching of menu on the mobile version */
// }

import React from "react";
import Navlink from "./Navlink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="menu-overlay">
      {links.map((navItem, indexPosition) => (
        <li key={indexPosition}>
          <Navlink href={navItem.path} title={navItem.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
