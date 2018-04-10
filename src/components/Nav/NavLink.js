import React from "react";
import { Icon } from "../";

const NavLink = ({
  to,
  className,
  icon,
  children,
  value,
  active = false,
  ...rest
}) => (
  <a href={to} className={`nav-link ${active ? `active` : ``} ${className}`}>
    {icon && (
      <React.Fragment>
        <Icon name={icon} />{" "}
      </React.Fragment>
    )}
    {value && value}
    {children && children}
  </a>
);

export default NavLink;
