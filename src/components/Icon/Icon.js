import React from "react";
import PropTypes from "prop-types";

const Icon = ({ prefix, name, className, link, ...rest }) =>
  !link ? (
    <i className={`${prefix} ${prefix}-${name} ${className}`} />
  ) : (
    <a className={`icon ${className}`} {...rest}>
      <i className={`${prefix} ${prefix}-${name}`} />
    </a>
  );

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  link: PropTypes.bool,
  prefix: PropTypes.oneOf(["fa", "fe"])
};

Icon.defaultProps = {
  className: "",
  link: false,
  prefix: "fe"
};

export default Icon;
