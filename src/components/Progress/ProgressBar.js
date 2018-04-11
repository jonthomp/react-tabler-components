import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const ProgressBar = ({ className, color, width, ...props }) => {
  const classes = cn(`progress-bar`, { [`bg-${color}`]: !!color }, className);
  return <div className={classes} style={{ width: `${width}%` }} {...props} />;
};

ProgressBar.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number
};

ProgressBar.defaultProps = {
  className: "",
  color: null,
  width: 0
};

export default ProgressBar;
