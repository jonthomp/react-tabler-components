import React, { Component } from "react";

import { Page } from "react-tabler-components";

import SiteWrapper from "../../SiteWrapper";

class Blog extends Component {
  render() {
    return (
      <SiteWrapper>
        <Page.Content>
          <Page.Header>Blog</Page.Header>
        </Page.Content>
      </SiteWrapper>
    );
  }
}
export default Blog;
