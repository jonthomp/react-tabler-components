import React from "react";
import PropTypes from "prop-types";
import { Nav, Icon } from "../";

const NavItem = ({ children, value, ...rest }) => (
  <li className={`nav-item`}>
    <React.Fragment>
      <Nav.Link children={value} {...rest} />
      {children && children}
    </React.Fragment>
  </li>
);

NavItem.propTypes = {
  className: PropTypes.string
};

NavItem.defaultProps = {
  className: ""
};

export default NavItem;
