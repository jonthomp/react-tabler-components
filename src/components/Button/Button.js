import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Icon } from "../";

const Button = ({
  size,
  outline,
  primary,
  secondary,
  success,
  info,
  warning,
  danger,
  link,
  block,
  className,
  children,
  disabled,
  color,
  square,
  pill,
  icon,
  social,
  loading,
  toggle,
  as: Component,
  ...rest
}) => {
  const classes = cn(
    {
      btn: true,
      [`btn-${size}`]: !!size,
      [`btn-block`]: block,
      [`btn-primary`]: primary && !outline,
      [`btn-secondary`]: secondary && !outline,
      [`btn-success`]: success && !outline,
      [`btn-info`]: info && !outline,
      [`btn-warning`]: warning && !outline,
      [`btn-danger`]: danger && !outline,
      [`btn-link`]: link,
      [`btn-outline-primary`]: outline && primary,
      [`btn-outline-secondary`]: outline && secondary,
      [`btn-outline-success`]: outline && success,
      [`btn-outline-info`]: outline && info,
      [`btn-outline-warning`]: outline && warning,
      [`btn-outline-danger`]: outline && danger,
      disabled: disabled,
      [`btn-${color}`]: !!color,
      [`btn-${social}`]: !!social,
      "btn-square": square,
      "btn-pill": pill,
      "btn-icon": !children,
      "btn-loading": loading,
      "dropdown-toggle": toggle
    },
    className
  );
  return Component === "input" ? (
    <Component className={classes} disabled={disabled} {...rest} />
  ) : (
    <Component className={classes} disabled={disabled} {...rest}>
      {social ? (
        <Icon name={social} prefix="fa" className={children ? "mr-2" : ""} />
      ) : icon ? (
        <Icon name={icon} className={children ? "mr-2" : ""} />
      ) : null}
      {children}
    </Component>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["sm", "lg"]),
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  link: PropTypes.bool,
  outline: PropTypes.bool,
  block: PropTypes.bool,
  as: PropTypes.node,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  square: PropTypes.bool,
  pill: PropTypes.bool,
  icon: PropTypes.string,
  social: PropTypes.string,
  loading: PropTypes.bool,
  toggle: PropTypes.bool
};

Button.defaultProps = {
  size: null,
  primary: false,
  secondary: false,
  success: false,
  info: false,
  warning: false,
  danger: false,
  link: false,
  outline: false,
  block: false,
  as: "button",
  disabled: false,
  color: null,
  square: false,
  pill: false,
  icon: null,
  social: null,
  loading: false,
  toggle: false
};

export default Button;
