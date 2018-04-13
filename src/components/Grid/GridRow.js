import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const GridRow = ({ className, cards, gutters, ...props }) => {
  const classes = cn(
    `row`,
    { row: true, "row-cards": cards, [`gutters-${gutters}`]: gutters },
    className
  );
  return <div className={classes} {...props} />;
};

GridRow.propTypes = {
  cards: PropTypes.bool,
  gutters: PropTypes.oneOf(["xs", "sm", "md", "lg"])
};

GridRow.defaultProps = {
  cards: false,
  gutters: null
};

export default GridRow;
