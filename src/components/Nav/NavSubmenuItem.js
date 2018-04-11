import React from "react";
import PropTypes from "prop-types";
import { Nav, Icon } from "../";

const NavSubmenuItem = ({
  className,
  icon,
  children,
  active = false,
  as: Component = "a",
  ...rest
}) => (
  <Component
    className={`nav-item ${active ? `active` : ``} ${className}`}
    {...rest}
  >
    {icon && (
      <React.Fragment>
        <Icon name={icon} />{" "}
      </React.Fragment>
    )}
    {children && children}
  </Component>
);

export default NavSubmenuItem;
