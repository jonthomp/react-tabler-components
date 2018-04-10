import React from "react";
import { Container } from "../";

const PageContent = ({ children, ...rest }) => (
  <div class="page-content">
    <Container>{children}</Container>
  </div>
);

export default PageContent;
