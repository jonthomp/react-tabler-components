import React from "react";
import PropTypes from "prop-types";
import { Icon } from "../";
import cn from "classnames";

const FormInput = ({
  className,
  icon,
  position,
  valid,
  tick,
  invalid,
  cross,
  feedback,
  ...props
}) => {
  const classes = cn(
    "form-control",
    {
      "is-valid": valid,
      "state-valid": tick,
      "is-invalid": invalid,
      "state-invalid": cross
    },
    className
  );
  return !icon ? (
    <React.Fragment>
      <input className={classes} {...props} />
      {feedback &&
        (invalid || cross) && (
          <span className="invalid-feedback">{feedback}</span>
        )}
    </React.Fragment>
  ) : (
    <div className="input-icon">
      {position === "prepend" && (
        <span className="input-icon-addon">
          <Icon name={icon} />
        </span>
      )}
      <input className={classes} {...props} />
      {position === "append" && (
        <span className="input-icon-addon">
          <Icon name={icon} />
        </span>
      )}
    </div>
  );
};

FormInput.propTypes = {
  icon: PropTypes.string,
  position: PropTypes.oneOf(["prepend", "append"]),
  valid: PropTypes.bool,
  tick: PropTypes.bool,
  invalid: PropTypes.bool,
  cross: PropTypes.bool,
  feedback: PropTypes.string
};

FormInput.defaultProps = {
  icon: null,
  position: "prepend",
  valid: false,
  tick: false,
  invalid: false,
  cross: false,
  feedback: null
};

export default FormInput;
