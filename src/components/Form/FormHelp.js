import React from "react";
import cn from "classnames";

const FormHelp = ({ className, ...props }) => {
  const classes = cn("form-help", className);
  return (
    <span className={classes} {...props}>
      ?
    </span>
  );
};

export default FormHelp;
