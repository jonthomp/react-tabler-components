import React from "react";
import PropTypes from "prop-types";
import { Nav, Icon } from "../";

const NavItem = ({
  as: Component,
  className,
  icon,
  value,
  children,
  link,
  ...rest
}) => (
  <Component className={`nav-item ${className}`} {...rest}>
    {link ? (
      <Nav.Link icon={icon} value={value} children={children} {...rest} />
    ) : (
      <React.Fragment>
        {icon && (
          <React.Fragment>
            <Icon name={icon} />{" "}
          </React.Fragment>
        )}
        {value && value}
        {children && children}
      </React.Fragment>
    )}
  </Component>
);

NavItem.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string
};

NavItem.defaultProps = {
  as: "li",
  className: ""
};

export default NavItem;
