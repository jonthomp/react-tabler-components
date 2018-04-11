import React, { Component } from "react";

import { Page } from "react-tabler-components";

import SiteWrapper from "../../SiteWrapper";

class Colors extends Component {
  render() {
    return (
      <SiteWrapper>
        <Page.Content>
          <Page.Header>Colors</Page.Header>
        </Page.Content>
      </SiteWrapper>
    );
  }
}
export default Colors;
