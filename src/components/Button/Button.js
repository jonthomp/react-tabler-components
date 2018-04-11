import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const Button = ({
  as: Component,
  size,
  outline,
  primary,
  className,
  ...rest
}) => {
  const classes = cn(
    {
      btn: true,
      [`btn-${size}`]: !!size,
      [`btn-outline-primary`]: outline && primary,
      [`btn-primary`]: primary,
      [`btn-block`]: primary && !outline
    },
    className
  );
  return <Component className={classes} {...rest} />;
};

Button.propTypes = {
  as: PropTypes.node,
  size: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool
};

Button.defaultProps = {
  as: "a",
  size: null,
  primary: true,
  outline: false
};

export default Button;
