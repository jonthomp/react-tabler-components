import React, { Component } from "react";

import { Page, Grid } from "react-tabler-components";

import SiteWrapper from "../SiteWrapper";

class Forms extends Component {
  render() {
    return (
      <SiteWrapper>
        <Page.Card title="Forms">
          <Grid.Row>
            <Grid.Col md={6} lg={4}>
              1
            </Grid.Col>
            <Grid.Col md={6} lg={4}>
              2
            </Grid.Col>
            <Grid.Col md={6} lg={4}>
              3
            </Grid.Col>
          </Grid.Row>
        </Page.Card>
      </SiteWrapper>
    );
  }
}
export default Forms;
