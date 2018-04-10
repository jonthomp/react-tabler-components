import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const Alert = ({ className, primary, ...props }) => {
  const classes = cn(`alert`, { "alert-primary": !!primary }, className);
  return <div className={classes} {...props} />;
};

Alert.propTypes = {
  classname: PropTypes.string,
  primary: PropTypes.bool
};

Alert.defaultProps = {
  classname: "",
  primary: false
};

export default Alert;
