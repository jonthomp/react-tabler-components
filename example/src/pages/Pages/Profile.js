import React, { Component } from "react";

import { Page } from "react-tabler-components";

import SiteWrapper from "../../SiteWrapper";

class Profile extends Component {
  render() {
    return (
      <SiteWrapper>
        <Page.Content>
          <Page.Header>Profile</Page.Header>
        </Page.Content>
      </SiteWrapper>
    );
  }
}
export default Profile;
