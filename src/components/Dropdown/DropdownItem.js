import React from "react";
import PropTypes from "prop-types";
import { Icon, Badge } from "../";

const DropdownItem = ({ className, icon, value, children, badge, ...rest }) => (
  <a className={`dropdown-item ${className}`} href="#" {...rest}>
    {badge && (
      <span className="float-right">
        <Badge>{badge}</Badge>
      </span>
    )}
    {icon && (
      <React.Fragment>
        <Icon name={icon} className="dropdown-icon" />{" "}
      </React.Fragment>
    )}
    {value && value}
    {children && children}
  </a>
);

DropdownItem.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string,
  badge: PropTypes.string
};

DropdownItem.defaultProps = {
  className: "",
  icon: "",
  value: "",
  badge: ""
};

export default DropdownItem;
