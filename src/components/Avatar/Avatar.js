import React from "react";
import PropTypes from "prop-types";
import { Icon } from "../";

const Avatar = ({ className, image, style, ...rest }) => (
  <span
    className={`avatar ${className}`}
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
  />
);

Avatar.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  style: PropTypes.object
};

Avatar.defaultProps = {
  className: "",
  image: null,
  style: {}
};

export default Avatar;
