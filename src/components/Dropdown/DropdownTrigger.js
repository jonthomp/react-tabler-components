import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Icon, Button } from "../";

const DropdownTrigger = ({ className, toggle, value, children, ...rest }) => {
  const classes = cn({ "dropdown-toggle": toggle }, className);
  return (
    <Button className={classes} data-toggle="dropdown" {...rest}>
      {value && value}
      {children && children}
    </Button>
  );
};

DropdownTrigger.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  toggle: PropTypes.bool
};

DropdownTrigger.defaultProps = {
  className: "",
  value: null,
  toggle: false
};

export default DropdownTrigger;
