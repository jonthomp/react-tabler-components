import React from "react";
import PropTypes from "prop-types";
import { Icon } from "../";

const DropdownLabel = ({ className, icon, value, children, ...rest }) => (
  <a
    className={`nav-link ${icon ? "icon" : ""} ${className}`}
    data-toggle="dropdown"
    href="#"
    {...rest}
  >
    {icon && <Icon name={icon} />}
    {value && value}
    {children && children}
  </a>
);

DropdownLabel.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string
};

DropdownLabel.defaultProps = {
  className: "",
  icon: "",
  value: ""
};

export default DropdownLabel;
