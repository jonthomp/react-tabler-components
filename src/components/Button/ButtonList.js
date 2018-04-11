import React from "react";
import cn from "classnames";

const ButtonList = ({ className, ...props }) => {
  const classes = cn(`btn-list`, className);
  return <div className={classes} {...props} />;
};

export default ButtonList;
