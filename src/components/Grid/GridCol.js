import React from "react";
import PropTypes from "prop-types";

const GridCol = ({ className, width, sm, md, lg, ...props }) => (
  <div
    className={`${width ? `col-${width}` : ""} ${sm ? `col-sm-${sm}` : ""} ${
      md ? `col-md-${md}` : ""
    } ${lg ? `col-lg-${lg}` : ""} ${className}`}
    {...props}
  />
);

GridCol.propTypes = {
  width: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number
};

GridCol.defaultProps = {
  width: "",
  sm: null,
  md: null,
  lg: null
};

export default GridCol;
