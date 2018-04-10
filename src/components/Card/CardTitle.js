import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const CardTitle = ({ className, as: Component, ...props }) => {
  const classes = cn("card-title", className);
  return <Component className={classes} {...props} />;
};

CardTitle.propTypes = {
  as: PropTypes.node
};

CardTitle.defaultProps = {
  as: "h3"
};

export default CardTitle;
