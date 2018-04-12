import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const FormInputGroup = ({ className, append, as: Component, ...props }) => {
  const classes = cn(
    { "input-group": !append, "input-group-append": append },
    className
  );
  return <Component className={classes} {...props} />;
};

FormInputGroup.propTypes = {
  as: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  append: PropTypes.bool
};

FormInputGroup.defaultProps = {
  as: "div",
  append: false
};
export default FormInputGroup;
