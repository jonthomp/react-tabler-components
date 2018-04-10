import React from "react";
import cn from "classnames";

const TableCol = ({ className, ...props }) => {
  const classes = cn(className);
  return <td className={classes} {...props} />;
};

export default TableCol;
