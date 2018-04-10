import React from "react";
import cn from "classnames";

const CardHeader = ({ className, ...props }) => {
  const classes = cn("card-header", className);
  return <div className={classes} {...props} />;
};

export default CardHeader;
