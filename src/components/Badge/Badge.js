import React from "react";
import PropTypes from "prop-types";

const Badge = ({ className = "", children, value }) => (
  <span
    className={`badge badge-primary ${className}`}
    children={value || children || null}
  />
);

Badge.propTypes = {
  value: PropTypes.string,
  children: PropTypes.node
};

Badge.defaultProps = {
  value: "",
  children: null
};
export default Badge;
