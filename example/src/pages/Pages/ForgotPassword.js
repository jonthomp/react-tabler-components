import React, { Component } from "react";

import { Page } from "react-tabler-components";

import SiteWrapper from "../../SiteWrapper";

class ForgotPassword extends Component {
  render() {
    return (
      <SiteWrapper>
        <Page.Content>
          <Page.Header>Forgot Password</Page.Header>
        </Page.Content>
      </SiteWrapper>
    );
  }
}
export default ForgotPassword;
