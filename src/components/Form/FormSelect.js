import React from "react";
import cn from "classnames";

const FormSelect = ({ className, ...props }) => {
  const classes = cn(
    { "form-control": true, "custom-select": true },
    className
  );
  return <select className={classes} {...props} />;
};

export default FormSelect;
