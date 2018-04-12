import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const Card = ({ className, as: Component, ...props }) => {
  const classes = cn("card", className);
  return <Component className={classes} {...props} />;
};

Card.propTypes = {
  as: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};

Card.defaultProps = {
  as: "div"
};

export default Card;
