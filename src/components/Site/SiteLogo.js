import React from "react";
import PropTypes from "prop-types";

const SiteLogo = props => (
  <a className="navbar-brand" href={props.href}>
    <img src={props.src} className="navbar-brand-img" alt={props.alt} />
  </a>
);

SiteLogo.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default SiteLogo;
