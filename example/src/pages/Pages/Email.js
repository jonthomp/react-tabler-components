import React, { Component } from "react";

import { Page } from "react-tabler-components";

import SiteWrapper from "../../SiteWrapper";

class Email extends Component {
  render() {
    return (
      <SiteWrapper>
        <Page.Content>
          <Page.Header>Email</Page.Header>
        </Page.Content>
      </SiteWrapper>
    );
  }
}
export default Email;
