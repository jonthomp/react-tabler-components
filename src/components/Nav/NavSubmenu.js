import React from "react";

const NavSubmenu = ({ children, ...props }) => (
  <div className="nav-submenu nav" {...props}>
    {children}
  </div>
);

export default NavSubmenu;
