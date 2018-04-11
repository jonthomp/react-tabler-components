import React, { Component } from "react";

import { Page } from "react-tabler-components";

import SiteWrapper from "../../SiteWrapper";

class Cards extends Component {
  render() {
    return (
      <SiteWrapper>
        <Page.Content>
          <Page.Header>Cards</Page.Header>
        </Page.Content>
      </SiteWrapper>
    );
  }
}
export default Cards;
