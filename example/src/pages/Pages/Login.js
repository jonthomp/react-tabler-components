import React, { Component } from "react";

import { Page } from "react-tabler-components";

import SiteWrapper from "../../SiteWrapper";

class Login extends Component {
  render() {
    return (
      <SiteWrapper>
        <Page.Content>
          <Page.Header>Login</Page.Header>
        </Page.Content>
      </SiteWrapper>
    );
  }
}
export default Login;
