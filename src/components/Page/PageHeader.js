import React from "react";

const PageHeader = ({ value, children, ...rest }) => (
  <div class="page-header" {...rest}>
    <h1 class="page-title">{value || children || null}</h1>
  </div>
);

export default PageHeader;
