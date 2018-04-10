import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const GridRow = ({ className, cards, ...props }) => {
  const classes = cn(`row`, { "row-cards": cards }, className);
  return <div className={classes} {...props} />;
};

GridRow.propTypes = {
  cards: PropTypes.bool
};

GridRow.defaultProps = {
  cards: false
};

export default GridRow;
