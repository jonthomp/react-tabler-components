import React from "react";
import cn from "classnames";

const Form = ({ className, ...props }) => {
  const classes = cn(className);
  return <form className={classes} {...props} />;
};

export default Form;
