import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const Header = ({ className, as: Component, size, ...props }) => {
  const classes = cn(`h${size}`, className);
  return <Component className={classes} {...props} />;
};

Header.propTypes = {
  as: PropTypes.node,
  size: PropTypes.number
};

Header.defaultProps = {
  as: "div",
  size: 1
};

export default Header;
