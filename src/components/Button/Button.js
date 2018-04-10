import React from "react";
import PropTypes from "prop-types";

const Button = ({ as: Component, size, ...rest }) => (
  <Component className={`btn btn-${size} btn-outline-primary`} {...rest} />
);

Button.propTypes = {
  as: PropTypes.node,
  size: PropTypes.string
};

Button.defaultProps = {
  as: "a",
  size: "sm"
};

export default Button;
