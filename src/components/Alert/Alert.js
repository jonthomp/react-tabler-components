import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Icon } from "../";

const Alert = ({
  className,
  children,
  primary,
  secondary,
  success,
  info,
  warning,
  danger,
  icon,
  ...props
}) => {
  const classes = cn(
    `alert`,
    {
      "alert-primary": !!primary,
      "alert-secondary": !!secondary,
      "alert-success": !!success,
      "alert-info": !!info,
      "alert-warning": !!warning,
      "alert-danger": !!danger,
      "alert-icon": !!icon
    },
    className
  );
  return (
    <div className={classes} role="alert" {...props}>
      {icon && <Icon name={icon} className="mr-2" aria-hidden="true" />}
      {children}
    </div>
  );
};

Alert.propTypes = {
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  icon: PropTypes.string
};

Alert.defaultProps = {
  className: "",
  primary: false,
  secondary: false,
  success: false,
  info: false,
  warning: false,
  danger: false,
  icon: null
};

export default Alert;
