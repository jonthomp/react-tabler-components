import React from "react";
import cn from "classnames";

const AlertLink = ({ className, ...props }) => {
  const classes = cn(`alert-link`, className);
  return <a className={classes} {...props} />;
};

export default AlertLink;
