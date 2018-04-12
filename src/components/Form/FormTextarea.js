import React from "react";
import cn from "classnames";

const FormTextarea = ({ className, ...props }) => {
  const classes = cn("form-control", className);
  return <textarea className={classes} {...props} />;
};

export default FormTextarea;
