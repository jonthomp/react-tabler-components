import React from "react";
import cn from "classnames";

const FormStaticText = ({ className, ...props }) => {
  const classes = cn("form-control-plaintext", className);
  return <div className={classes} {...props} />;
};

export default FormStaticText;
