import React from "react";
import cn from "classnames";

const CodeHighlight = ({ className, ...props }) => {
  const classes = cn(`highlight`, className);
  return <div className={classes} {...props} />;
};

export default CodeHighlight;
