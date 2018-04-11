import React from "react";
import { Container, Header, Nav } from "../";
const SiteNav = props => (
  <div className="header-nav d-none d-lg-flex">
    <Container>{props.children}</Container>
  </div>
);
export default SiteNav;
