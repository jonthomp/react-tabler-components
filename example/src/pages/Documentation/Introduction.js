import React, { Component } from "react";

import { Page, Text, Header } from "react-tabler-components";

import DocsWrapper from "./DocsWrapper";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

class Documentation extends Component {
  render() {
    return (
      <DocsWrapper>
        <Header.H2>Introduction</Header.H2>
        <p>A set of React components for Tabler</p>
        <SyntaxHighlighter language="bash" style={prism}>
          {`npm install react-tabler-components --save

or

yarn add react-tabler-components`}
        </SyntaxHighlighter>
      </DocsWrapper>
    );
  }
}
export default Documentation;
