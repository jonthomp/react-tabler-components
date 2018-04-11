import React, { Component } from "react";

import { Page } from "react-tabler-components";

import SiteWrapper from "../../SiteWrapper";

class Register extends Component {
  render() {
    return (
      <SiteWrapper>
        <Page.Content>
          <Page.Header>Register</Page.Header>
        </Page.Content>
      </SiteWrapper>
    );
  }
}
export default Register;
