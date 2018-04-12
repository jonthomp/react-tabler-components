import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { Icon } from "../";

const DropdownMenu = ({ className, position, arrow, ...rest }) => {
  const classes = cn(
    {
      "dropdown-menu": true,
      [`dropdown-menu-${position}`]: position,
      [`dropdown-menu-arrow`]: arrow
    },
    className
  );
  return <div className={classes} {...rest} />;
};

DropdownMenu.propTypes = {
  className: PropTypes.string,
  position: PropTypes.string,
  arrow: PropTypes.bool
};

DropdownMenu.defaultProps = {
  className: "",
  position: null,
  arrow: false
};

export default DropdownMenu;
