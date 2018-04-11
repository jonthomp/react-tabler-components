import React from "react";

const PageHeader = ({ value, children, ...rest }) => (
  <div className="page-header" {...rest}>
    <h1 className="page-title">{value || children || null}</h1>
  </div>
);

export default PageHeader;
