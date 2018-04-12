import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const GridCol = ({ className, width, sm, md, lg, auto, ...props }) => {
  const classes = cn(
    {
      [`col-${width}`]: width,
      [`col-sm-${sm}`]: sm,
      [`col-md-${md}`]: md,
      [`col-lg-${lg}`]: lg,
      "col-auto": auto
    },
    className
  );
  return <div className={classes} {...props} />;
};

GridCol.propTypes = {
  auto: PropTypes.bool,
  width: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number
};

GridCol.defaultProps = {
  auto: false,
  width: null,
  sm: null,
  md: null,
  lg: null
};

export default GridCol;
