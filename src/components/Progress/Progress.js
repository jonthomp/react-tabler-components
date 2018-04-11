import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const Progress = ({ className, size, ...props }) => {
  const classes = cn(`progress`, { [`progress-${size}`]: !!size }, className);
  return <div className={classes} {...props} />;
};

Progress.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string
};

Progress.defaultProps = {
  className: "",
  size: ""
};

export default Progress;
