import React from "react";
import cn from "classnames";

const Card = ({ className, ...props }) => {
  const classes = cn("card", className);
  return <div className={classes} {...props} />;
};

export default Card;
