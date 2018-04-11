import React, { Component } from "react";

import { Page } from "react-tabler-components";

import SiteWrapper from "../../SiteWrapper";

class Documentation extends Component {
  render() {
    return (
      <SiteWrapper>
        <Page.Content>
          <Page.Header>Documentation</Page.Header>
        </Page.Content>
      </SiteWrapper>
    );
  }
}
export default Documentation;
