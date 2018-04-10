import React from "react";
import PropTypes from "prop-types";
import { Icon } from "../";

const Avatar = ({ className, src, style, ...rest }) => (
  <span
    className={`avatar ${className}`}
    style={Object.assign(
      {
        backgroundImage: `url(${src})`
      },
      style
    )}
    {...rest}
  />
);

Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  style: PropTypes.object
};

Avatar.defaultProps = {
  className: "",
  style: {}
};

export default Avatar;
