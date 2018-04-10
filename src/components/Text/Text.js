import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const Text = ({ className, as: Component, color, size, ...props }) => {
  const classes = cn(
    {
      [`text-${color}`]: !!color,
      [`${size}`]: !!size
    },
    className
  );
  return <Component className={classes} {...props} />;
};

Text.propTypes = {
  as: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.string
};

Text.defaultProps = {
  as: "div",
  color: null,
  size: null
};
export default Text;
