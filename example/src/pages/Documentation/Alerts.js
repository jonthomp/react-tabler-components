import React, { Component } from "react";

import { Page, Header, Alert, Code, Button } from "react-tabler-components";

import DocsWrapper from "./DocsWrapper";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

class Alerts extends Component {
  render() {
    return (
      <DocsWrapper>
        <Header.H2>Alerts</Header.H2>
        <p>
          Provide contextual feedback messages for typical user actions with the
          handful of available and flexible alert messages.
        </p>
        <Alert primary extraSpace>
          <strong>Work in progress!</strong> More detailed documentation is
          coming soon.
        </Alert>

        <Header.H3>Default Alerts</Header.H3>
        <p>Add color contextual class.</p>

        <Code.Example>
          <Alert primary>
            This is a <strong>primary</strong> alert—check it out!
          </Alert>
          <Alert secondary>
            This is a <strong>secondary</strong> alert—check it out!
          </Alert>
          <Alert success>
            This is a <strong>success</strong> alert—check it out!
          </Alert>
          <Alert info>
            This is a <strong>info</strong> alert—check it out!
          </Alert>
          <Alert warning>
            This is a <strong>warning</strong> alert—check it out!
          </Alert>
          <Alert danger>
            This is a <strong>danger</strong> alert—check it out!
          </Alert>
        </Code.Example>
        <Code.Highlight>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Alert primary>
  This is a <strong>primary</strong> alert—check it out!
</Alert>
        
<Alert secondary>
  This is a <strong>secondary</strong> alert—check it out!
</Alert>

<Alert success>
  This is a <strong>success</strong> alert—check it out!
</Alert>

<Alert info>
  This is a <strong>info</strong> alert—check it out!
</Alert>

<Alert warning>
  This is a <strong>warning</strong> alert—check it out!
</Alert>

<Alert danger>
  This is a <strong>danger</strong> alert—check it out!
</Alert>`}
          </SyntaxHighlighter>
        </Code.Highlight>

        <Header.H3>Alert With Icon</Header.H3>
        <p>Add your icon name into the icon prop.</p>

        <Code.Example>
          <Alert primary icon="bell">
            You have done 5 actions.
          </Alert>
          <Alert success icon="check">
            The page has been added.
          </Alert>
          <Alert danger icon="alert-triangle">
            The daily report has failed. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.
          </Alert>
        </Code.Example>
        <Code.Highlight>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Alert primary icon='bell'>
  You have done 5 actions.
</Alert>

<Alert success icon='check'>
  The page has been added.
</Alert>

<Alert danger icon='alert-triangle'>
  The daily report has failed. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</Alert>`}
          </SyntaxHighlighter>
        </Code.Highlight>

        <Header.H3>Alert dismissible</Header.H3>
        <p>Add a dismissible prop.</p>

        <Code.Example>
          <Alert warning dismissible>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Alert>
        </Code.Example>
        <Code.Highlight>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Alert warning dismissible>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</Alert>`}
          </SyntaxHighlighter>
        </Code.Highlight>

        <Header.H3>Alert with avatar</Header.H3>

        <Code.Example>
          <Alert primary avatar="./demo/faces/male/4.jpg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </Alert>
        </Code.Example>
        <Code.Highlight>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Alert primary avatar="./demo/faces/male/4.jpg">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
dolor sit amet, consectetur adipisicing elit.
</Alert>`}
          </SyntaxHighlighter>
        </Code.Highlight>

        <Header.H3>Alert with buttons</Header.H3>

        <Code.Example>
          <Alert primary dismissible>
            <Header.H4>Some Message</Header.H4>
            <p>
              Lorem ipsum Minim ad pariatur eiusmod ea ut nulla aliqua est quis
              id dolore minim voluptate.
            </p>
            <Button.List>
              <Button success as="button">
                Okay
              </Button>
              <Button secondary as="button">
                No, thanks
              </Button>
            </Button.List>
          </Alert>
        </Code.Example>
        <Code.Highlight>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Alert primary dismissible>
<Header.H4>Some Message</Header.H4>
<p>
  Lorem ipsum Minim ad pariatur eiusmod ea ut nulla aliqua est quis
  id dolore minim voluptate.
</p>
<Button.List>
  <Button success as="button">
    Okay
  </Button>
  <Button secondary as="button">
    No, thanks
  </Button>
</Button.List>
</Alert>`}
          </SyntaxHighlighter>
        </Code.Highlight>
      </DocsWrapper>
    );
  }
}
export default Alerts;
