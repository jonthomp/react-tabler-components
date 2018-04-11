import React, { Component } from "react";

import { Page } from "react-tabler-components";

import SiteWrapper from "../../SiteWrapper";

class EmptyPage extends Component {
  render() {
    return (
      <SiteWrapper>
        <Page.Content>
          <Page.Header>Empty Page</Page.Header>
        </Page.Content>
      </SiteWrapper>
    );
  }
}
export default EmptyPage;
