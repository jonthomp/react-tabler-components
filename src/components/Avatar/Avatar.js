import React from "react";
import PropTypes from "prop-types";
import { Icon } from "../";
import cn from "classnames";

const Avatar = ({
  className,
  children,
  image,
  style,
  size,
  status,
  placeholder,
  icon,
  color,
  ...rest
}) => {
  const classes = cn(
    {
      avatar: true,
      [`avatar-${size}`]: !!size,
      "avatar-placeholder": placeholder,
      [`avatar-${color}`]: !!color
    },
    className
  );
  return (
    <span
      className={classes}
      style={
        image
          ? Object.assign(
              {
                backgroundImage: `url(${image})`
              },
              style
            )
          : style
      }
      {...rest}
    >
      {icon && <Icon name={icon} />}
      {status && <span className={`avatar-status bg-${status}`} />}
      {children}
    </span>
  );
};

Avatar.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"]),
  status: PropTypes.oneOf(["grey", "red", "yellow", "green"]),
  placeholder: PropTypes.bool,
  icon: PropTypes.string,
  color: PropTypes.string
};

Avatar.defaultProps = {
  className: "",
  image: null,
  style: {},
  size: null,
  status: null,
  placeholder: false,
  icon: null,
  color: null
};

export default Avatar;
