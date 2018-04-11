import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const AvatarList = ({ className, stacked, ...props }) => {
  const classes = cn(
    {
      "avatar-list": true,
      "avatar-list-stacked": stacked
    },
    className
  );
  return <div className={classes} {...props} />;
};

AvatarList.propTypes = {
  stacked: PropTypes.bool
};

AvatarList.defaultProps = {
  stacked: false
};

export default AvatarList;
