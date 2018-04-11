import React, { Component } from "react";

import { Page, Text, Header, Code, Card, Icon } from "react-tabler-components";

import DocsWrapper from "./DocsWrapper";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

class Documentation extends Component {
  render() {
    return (
      <DocsWrapper>
        <Header.H2>Introduction</Header.H2>
        <p>A set of React components for Tabler.</p>
        <p>Add to your project with npm or yarn:</p>
        <SyntaxHighlighter language="bash" style={prism}>
          {`npm install react-tabler-components --save

or

yarn add react-tabler-components`}
        </SyntaxHighlighter>
        <br />
        <p>Import the components into your project and start building:</p>

        <Code.Example>
          <Card>
            <Card.Header>
              <Card.Title>Card Title</Card.Title>
            </Card.Header>
            <Card.Body>
              <Text color="red">
                Some Red text next to an icon
                <Icon name="user" />
              </Text>
            </Card.Body>
          </Card>
        </Code.Example>
        <Code.Highlight>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`import React, { Component } from "react";

import { Card, Text, Icon } from "react-tabler-components";

class MyCard extends Component {
  render() {
    return (
      <Card>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
        </Card.Header>
        <Card.Body>
          <Text color="red">
            Some Red text next to an icon
            <Icon name="user" />
          </Text>
        </Card.Body>
      </Card>
    );
  }
}`}
          </SyntaxHighlighter>
        </Code.Highlight>
      </DocsWrapper>
    );
  }
}
export default Documentation;
