import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const ButtonList = ({ className, align, ...props }) => {
  const classes = cn(
    { "btn-list": true, [`text-${align}`]: !!align },
    className
  );
  return <div className={classes} {...props} />;
};

ButtonList.propTypes = {
  align: PropTypes.oneOf(["left", "center", "right"])
};

ButtonList.defaultProps = {
  align: null
};

export default ButtonList;
