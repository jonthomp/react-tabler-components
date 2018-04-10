import React from "react";
import cn from "classnames";

const CardBody = ({ className, ...props }) => {
  const classes = cn("card-body", className);
  return <div className={classes} {...props} />;
};

export default CardBody;
