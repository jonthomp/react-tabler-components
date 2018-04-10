import React from "react";
import cn from "classnames";

const TableRow = ({ className, ...props }) => {
  const classes = cn(className);
  return <tr className={classes} {...props} />;
};

export default TableRow;
