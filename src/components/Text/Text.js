import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const Text = ({ className, as: Component, color, size, wrap, ...props }) => {
  const classes = cn(
    {
      [`text-wrap p-lg-6`]: wrap,
      [`text-${color}`]: color,
      [`${size}`]: size
    },
    className
  );
  return <Component className={classes} {...props} />;
};

Text.propTypes = {
  as: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.string,
  wrap: PropTypes.bool
};

Text.defaultProps = {
  as: "div",
  color: null,
  size: null,
  wrap: false
};
export default Text;
