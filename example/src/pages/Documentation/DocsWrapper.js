import React, { Component } from "react";

import { Page } from "react-tabler-components";

import SiteWrapper from "../../SiteWrapper";
import Sidebar from "./Sidebar";

class DocsWrapper extends Component {
  render() {
    const { children, title } = this.props;
    return (
      <SiteWrapper>
        <Page.ContentWithSidebar
          header={<Page.Header>{title}</Page.Header>}
          sidebar={<Sidebar />}
        >
          {children}
        </Page.ContentWithSidebar>
      </SiteWrapper>
    );
  }
}
export default DocsWrapper;
