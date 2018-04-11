import React from "react";
import { Page, Grid } from "../";

const PageContentWithSidebar = ({ children, header, sidebar, ...rest }) => (
  <Page.Content>
    {header}
    <Grid.Row>
      <Grid.Col lg={3} className="order-lg-1 mb-4">
        {sidebar}
      </Grid.Col>
      <Grid.Col lg={9}>{children}</Grid.Col>
    </Grid.Row>
  </Page.Content>
);

export default PageContentWithSidebar;
