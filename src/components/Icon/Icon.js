import React from "react";
import PropTypes from "prop-types";

const Icon = ({ name, className, ...rest }) => (
  <i className={`fe fe-${name} ${className}`} />
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};

Icon.defaultProps = {
  className: ""
};

export default Icon;
