import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import withComponentFromAsProp from "../withComponentFromAsProp";

const Component = withComponentFromAsProp("button");

const Button = ({
  size,
  outline,
  primary,
  secondary,
  success,
  block,
  className,
  ...rest
}) => {
  const classes = cn(
    {
      btn: true,
      [`btn-${size}`]: !!size,
      [`btn-outline-primary`]: outline && primary,
      [`btn-primary`]: primary,
      [`btn-block`]: block,
      [`btn-secondary`]: secondary,
      [`btn-success`]: success
    },
    className
  );
  return <Component className={classes} {...rest} />;
};

Button.propTypes = {
  size: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  outline: PropTypes.bool,
  block: PropTypes.bool
};

Button.defaultProps = {
  size: null,
  primary: true,
  secondary: false,
  success: false,
  outline: false,
  block: false
};

export default Button;
