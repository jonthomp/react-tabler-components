import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import FormLabel from "./FormLabel";

const FormGroup = ({ className, children, label, ...props }) => {
  const classes = cn("form-group", className);
  return (
    <div className={classes} {...props}>
      {!label ? null : typeof label === "string" ? (
        <FormLabel>{label}</FormLabel>
      ) : (
        label
      )}
      {children}
    </div>
  );
};

FormGroup.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

FormGroup.defaultProps = {
  label: null
};

export default FormGroup;
