import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const Table = ({ className, cards, striped, responsive, ...props }) => {
  const classes = cn(
    "table",
    { "card-table": !!cards, "table-striped": !!striped },
    className
  );
  return !responsive ? (
    <table className={classes} {...props} />
  ) : (
    <div className="table-responsive">
      <table className={classes} {...props} />
    </div>
  );
};

Table.propTypes = {
  cards: PropTypes.bool,
  striped: PropTypes.bool,
  responsive: PropTypes.bool
};

Table.defaultProps = {
  cards: false,
  striped: false,
  responsive: false
};

export default Table;
