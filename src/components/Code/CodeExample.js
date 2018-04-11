import React from "react";
import cn from "classnames";

const CodeExample = ({ className, ...props }) => {
  const classes = cn(`example`, className);
  return <div className={classes} {...props} />;
};

export default CodeExample;
