import React, { Component } from "react";

import { Page } from "react-tabler-components";

import SiteWrapper from "../SiteWrapper";

class Gallery extends Component {
  render() {
    return (
      <SiteWrapper>
        <Page.Content>
          <Page.Header>Gallery</Page.Header>
        </Page.Content>
      </SiteWrapper>
    );
  }
}
export default Gallery;
