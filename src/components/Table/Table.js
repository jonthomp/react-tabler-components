import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const Table = ({ className, cards, striped, ...props }) => {
  const classes = cn(
    "table",
    { "card-table": !!cards, "table-striped": !!striped },
    className
  );
  return <table className={classes} {...props} />;
};

Table.propTypes = {
  cards: PropTypes.bool,
  striped: PropTypes.bool
};

Table.defaultProps = {
  cards: false,
  striped: false
};

export default Table;
