import React from "react";
import cn from "classnames";

const TableBody = ({ className, ...props }) => {
  const classes = cn(className);
  return <tbody className={classes} {...props} />;
};

export default TableBody;
