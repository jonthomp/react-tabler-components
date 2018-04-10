import React from "react";
import PropTypes from "prop-types";

const Icon = ({ name, className, link, ...rest }) =>
  !link ? (
    <i className={`fe fe-${name} ${className}`} />
  ) : (
    <a className={`icon ${className}`} {...rest}>
      <i className={`fe fe-${name}`} />
    </a>
  );

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  link: PropTypes.bool
};

Icon.defaultProps = {
  className: "",
  link: false
};

export default Icon;
