import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const ListGroup = ({ className, transparent, ...props }) => {
  const classes = cn(
    "list-group",
    "mb-0",
    {
      "list-group-transparent": transparent
    },
    className
  );
  return <div className={classes} {...props} />;
};

ListGroup.propTypes = {
  transparent: PropTypes.bool
};

ListGroup.defaultProps = {
  transparent: false
};
export default ListGroup;
