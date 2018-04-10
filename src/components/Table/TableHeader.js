import React from "react";
import cn from "classnames";

const TableHeader = ({ className, ...props }) => {
  const classes = cn(className);
  return <thead className={classes} {...props} />;
};

export default TableHeader;
