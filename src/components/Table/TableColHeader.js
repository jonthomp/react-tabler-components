import React from "react";
import cn from "classnames";

const TableColHeader = ({ className, ...props }) => {
  const classes = cn(className);
  return <th className={classes} {...props} />;
};

export default TableColHeader;
