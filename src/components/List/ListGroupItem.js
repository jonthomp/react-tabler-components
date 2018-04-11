import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import withComponentFromAsProp from "../withComponentFromAsProp";

const Component = withComponentFromAsProp("a");

const ListGroupItem = ({ className, children, active, icon, ...props }) => {
  const classes = cn(
    "list-group-item",
    "list-group-item-action",
    {
      active: active
    },
    className
  );
  return (
    <Component className={classes} {...props}>
      {icon && (
        <span className="icon mr-3">
          <i className={`fe fe-${icon}`} />{" "}
        </span>
      )}
      {children}
    </Component>
  );
};

ListGroupItem.propTypes = {
  active: PropTypes.bool,
  icon: PropTypes.string
};

ListGroupItem.defaultProps = {
  active: false,
  icon: null
};

export default ListGroupItem;
