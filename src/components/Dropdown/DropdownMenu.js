import React from "react";
import PropTypes from "prop-types";
import { Icon } from "../";

const DropdownMenu = ({ className, position, arrow, ...rest }) => (
  <div
    className={`dropdown-menu ${position ? `dropdown-menu-${position}` : ""} ${
      arrow ? `dropdown-menu-arrow` : ""
    } ${className}`}
    {...rest}
  />
);

DropdownMenu.propTypes = {
  className: PropTypes.string,
  position: PropTypes.string,
  arrow: PropTypes.bool
};

DropdownMenu.defaultProps = {
  className: "",
  position: "",
  arrow: false
};

export default DropdownMenu;
