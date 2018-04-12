import React from "react";
import cn from "classnames";

const FormInput = ({ className, ...props }) => {
  const classes = cn("form-control", className);
  return <input className={classes} {...props} />;
};

export default FormInput;
