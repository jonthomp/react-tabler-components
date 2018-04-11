import React, { Component } from "react";

import { Header, Code, Avatar } from "react-tabler-components";

import DocsWrapper from "./DocsWrapper";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

class Avatars extends Component {
  render() {
    return (
      <DocsWrapper title="Avatars">
        <Header.H2>Avatars</Header.H2>

        <Header.H3>Simple Avatar</Header.H3>

        <Code.Example>
          <Avatar image="./demo/faces/male/21.jpg" />
        </Code.Example>
        <Code.Highlight>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Avatar image='./demo/faces/male/21.jpg' />`}
          </SyntaxHighlighter>
        </Code.Highlight>

        <Header.H3>Avatar Icon</Header.H3>

        <Code.Example>
          <Avatar icon="users" />
        </Code.Example>
        <Code.Highlight>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Avatar icon='users' />`}
          </SyntaxHighlighter>
        </Code.Highlight>

        <Header.H3>Avatars List</Header.H3>

        <Code.Example>
          <Avatar.List>
            <Avatar image="/demo/faces/male/9.jpg" />
            <Avatar image="/demo/faces/female/8.jpg" />
            <Avatar image="/demo/faces/male/4.jpg" />
          </Avatar.List>
        </Code.Example>
        <Code.Highlight>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Avatar.List>
  <Avatar image="/demo/faces/male/9.jpg" />
  <Avatar image="/demo/faces/female/8.jpg" />
  <Avatar image="/demo/faces/male/4.jpg" />
</Avatar.List>`}
          </SyntaxHighlighter>
        </Code.Highlight>

        <Header.H4>Stacked List</Header.H4>

        <Code.Example>
          <Avatar.List stacked>
            <Avatar image="/demo/faces/male/9.jpg" />
            <Avatar image="/demo/faces/female/8.jpg" />
            <Avatar image="/demo/faces/male/4.jpg" />
            <Avatar>+8</Avatar>
          </Avatar.List>
        </Code.Example>
        <Code.Highlight>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Avatar.List stacked>
  <Avatar image="/demo/faces/male/9.jpg" />
  <Avatar image="/demo/faces/female/8.jpg" />
  <Avatar image="/demo/faces/male/4.jpg" />
  <Avatar>+8</Avatar>
</Avatar.List>`}
          </SyntaxHighlighter>
        </Code.Highlight>

        <Header.H3>Avatar Size</Header.H3>

        <Code.Example>
          <Avatar.List>
            <Avatar size="sm" image="/demo/faces/male/9.jpg" />
            <Avatar image="/demo/faces/female/8.jpg" />
            <Avatar size="md" image="/demo/faces/male/4.jpg" />
            <Avatar size="lg" image="/demo/faces/male/35.jpg" />
            <Avatar size="xl" image="/demo/faces/female/29.jpg" />
            <Avatar size="xxl" image="/demo/faces/male/2.jpg" />
          </Avatar.List>
        </Code.Example>
        <Code.Highlight>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Avatar.List>
  <Avatar size='sm' image="/demo/faces/male/9.jpg" />
  <Avatar image="/demo/faces/female/8.jpg" />
  <Avatar size='md' image="/demo/faces/male/4.jpg" />
  <Avatar size='lg' image="/demo/faces/male/35.jpg" />
  <Avatar size='xl' image="/demo/faces/female/29.jpg" />
  <Avatar size='xxl' image="/demo/faces/male/2.jpg" />
</Avatar.List>`}
          </SyntaxHighlighter>
        </Code.Highlight>

        <Header.H3>Avatar Status</Header.H3>

        <Code.Example>
          <Avatar.List>
            <Avatar image="/demo/faces/male/9.jpg" />
            <Avatar status="grey" image="/demo/faces/female/8.jpg" />
            <Avatar status="red" image="/demo/faces/male/4.jpg" />
            <Avatar status="yellow" image="/demo/faces/male/35.jpg" />
            <Avatar status="green" image="/demo/faces/female/29.jpg" />
          </Avatar.List>
        </Code.Example>
        <Code.Highlight>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Avatar.List>
  <Avatar  image="/demo/faces/male/9.jpg" />
  <Avatar status='grey' image="/demo/faces/female/8.jpg" />
  <Avatar status='red' image="/demo/faces/male/4.jpg" />
  <Avatar status='yellow' image="/demo/faces/male/35.jpg" />
  <Avatar status='green' image="/demo/faces/female/29.jpg" />
</Avatar.List>`}
          </SyntaxHighlighter>
        </Code.Highlight>

        <Header.H3>Avatar Placeholder</Header.H3>

        <Code.Example>
          <Avatar.List>
            <Avatar>RB</Avatar>
            <Avatar>KH</Avatar>
            <Avatar>BK</Avatar>
            <Avatar placeholder />
          </Avatar.List>
        </Code.Example>
        <Code.Highlight>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Avatar.List>
  <Avatar>RB</Avatar>
  <Avatar>KH</Avatar>
  <Avatar>BK</Avatar>
  <Avatar placeholder />
</Avatar.List>`}
          </SyntaxHighlighter>
        </Code.Highlight>

        <Header.H4>Placeholder Color</Header.H4>

        <Code.Example>
          <Avatar.List>
            <Avatar color="blue">NG</Avatar>
            <Avatar color="azure">AM</Avatar>
            <Avatar color="indigo">RB</Avatar>
            <Avatar color="purple">PR</Avatar>
            <Avatar color="pink">WH</Avatar>
            <Avatar color="red">MR</Avatar>
            <Avatar color="orange">DB</Avatar>
            <Avatar color="yellow">PP</Avatar>
            <Avatar color="lime">JR</Avatar>
            <Avatar color="green">RB</Avatar>
            <Avatar color="teal">KH</Avatar>
            <Avatar color="cyan">BK</Avatar>
            <Avatar color="gray">CA</Avatar>
            <Avatar color="gray-dark">CW</Avatar>
          </Avatar.List>
        </Code.Example>
        <Code.Highlight>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Avatar.List>
  <Avatar color="blue">NG</Avatar>
  <Avatar color="azure">AM</Avatar>
  <Avatar color="indigo">RB</Avatar>
  <Avatar color="purple">PR</Avatar>
  <Avatar color="pink">WH</Avatar>
  <Avatar color="red">MR</Avatar>
  <Avatar color="orange">DB</Avatar>
  <Avatar color="yellow">PP</Avatar>
  <Avatar color="lime">JR</Avatar>
  <Avatar color="green">RB</Avatar>
  <Avatar color="teal">KH</Avatar>
  <Avatar color="cyan">BK</Avatar>
  <Avatar color="gray">CA</Avatar>
  <Avatar color="gray-dark">CW</Avatar>
</Avatar.List>`}
          </SyntaxHighlighter>
        </Code.Highlight>
      </DocsWrapper>
    );
  }
}
export default Avatars;
