import React from "react";
import { Container } from "../";

const SiteHeader = ({ children, ...rest }) => (
  <div className="header" {...rest}>
    <Container>{children}</Container>
  </div>
);

export default SiteHeader;
