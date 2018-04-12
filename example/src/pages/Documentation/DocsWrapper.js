import React, { Component } from "react";

import { Page, Card, Text } from "react-tabler-components";

import SiteWrapper from "../../SiteWrapper";
import Sidebar from "./Sidebar";

class DocsWrapper extends Component {
  render() {
    const { children } = this.props;
    return (
      <SiteWrapper>
        <Page.ContentWithSidebar
          header={<Page.Header>Documentation</Page.Header>}
          sidebar={<Sidebar />}
        >
          <Card>
            <Card.Body>
              <Text wrap>{children}</Text>
            </Card.Body>
          </Card>
        </Page.ContentWithSidebar>
      </SiteWrapper>
    );
  }
}
export default DocsWrapper;
