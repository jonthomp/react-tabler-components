import React from "react";
import PropTypes from "prop-types";

const Nav = ({ tabbed, ...rest }) => (
  <ul className={`nav ${tabbed ? `nav-tabs` : ``}`} {...rest} />
);

Nav.propTypes = {
  tabbed: PropTypes.bool
};

Nav.defaultProps = {
  tabbed: true
};
export default Nav;
