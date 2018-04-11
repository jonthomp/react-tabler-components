import React, { Component } from "react";

import { Page } from "react-tabler-components";

import SiteWrapper from "../../SiteWrapper";

class Error401 extends Component {
  render() {
    return (
      <SiteWrapper>
        <Page.Content>
          <Page.Header>Error 401</Page.Header>
        </Page.Content>
      </SiteWrapper>
    );
  }
}
export default Error401;
