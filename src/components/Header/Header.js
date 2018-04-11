import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import withComponentFromAsProp from "../withComponentFromAsProp";

const Component = withComponentFromAsProp("div");

const Header = ({ className, size, ...props }) => {
  const classes = cn(`h${size}`, className);
  return <Component className={classes} {...props} />;
};

Header.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

Header.defaultProps = {
  className: "",
  size: 1
};

export default Header;
