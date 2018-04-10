import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({ className, desktopOnly, ...rest }) => (
  <div
    className={`dropdown ${desktopOnly ? "d-none d-md-flex" : ""} ${className}`}
    {...rest}
  />
);

Dropdown.propTypes = {
  className: PropTypes.string,
  desktopOnly: PropTypes.bool
};

Dropdown.defaultProps = {
  className: "",
  desktopOnly: false
};

export default Dropdown;
