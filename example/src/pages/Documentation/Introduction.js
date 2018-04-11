import React, { Component } from "react";

import { Page, Text, Header } from "react-tabler-components";

import DocsWrapper from "./DocsWrapper";

class Documentation extends Component {
  render() {
    return (
      <DocsWrapper title="Documentation">
        <Header.H2>Introduction</Header.H2>
        <p>A set of React components for Tabler</p>
      </DocsWrapper>
    );
  }
}
export default Documentation;
