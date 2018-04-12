import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const FormLabel = ({ className, aside, children, ...props }) => {
  const classes = cn("form-label", className);
  return (
    <label className={classes} {...props}>
      {aside && <span className="form-label-small">{aside}</span>}
      {children}
    </label>
  );
};

FormLabel.propTypes = {
  aside: PropTypes.string
};
FormLabel.defaultProps = {
  aside: null
};

export default FormLabel;
