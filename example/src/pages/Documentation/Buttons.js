import React, { Component } from "react";

import { Header, Button, Code, Dropdown } from "react-tabler-components";

import DocsWrapper from "./DocsWrapper";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

class Buttons extends Component {
  render() {
    return (
      <DocsWrapper title="Buttons">
        <Header.H2>Buttons</Header.H2>

        <Header.H3>Button Tag</Header.H3>
        <p>
          Outputs a {`<button>`} by default but can changed using the 'as' prop
        </p>
        <Code.Example>
          <Button.List>
            <Button primary>Button</Button>
            <Button primary as="a" href="#">
              Link
            </Button>
            <Button primary as="input" type="button" value="Input" />
          </Button.List>
        </Code.Example>
        <Code.Highlight>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Button.List>
  <Button primary>Button</Button>
  <Button primary as="a" href="#">Link</Button>
  <Button primary as="input" type="button" value="Input" />
</Button.List>`}
          </SyntaxHighlighter>
        </Code.Highlight>

        <Header.H3>Button Variations</Header.H3>

        <Code.Example>
          <Button.List>
            <Button primary>Primary</Button>
            <Button secondary>Secondary</Button>
            <Button success>Success</Button>
            <Button info>Info</Button>
            <Button warning>Warning</Button>
            <Button danger>Danger</Button>
            <Button link>Link</Button>
          </Button.List>
        </Code.Example>
        <Code.Highlight>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Button.List>
  <Button primary>Primary</Button>
  <Button secondary>Secondary</Button>
  <Button success>Success</Button>
  <Button info>Info</Button>
  <Button warning>Warning</Button>
  <Button danger>Danger</Button>
  <Button link>Link</Button>
</Button.List>`}
          </SyntaxHighlighter>
        </Code.Highlight>

        <Header.H3>Disabled Buttons</Header.H3>

        <Code.Example>
          <Button.List>
            <Button primary disabled>
              Button
            </Button>
            <Button success disabled as="a" href="#">
              Link
            </Button>
            <Button info disabled as="input" type="button" value="Input" />
          </Button.List>
        </Code.Example>
        <Code.Highlight>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Button.List>
  <Button primary disabled>Button</Button>
  <Button success disabled as="a" href="#">Link</Button>
  <Button info disabled as="input" type="button" value="Input" />
</Button.List>`}
          </SyntaxHighlighter>
        </Code.Highlight>

        <Header.H3>Button Colors</Header.H3>

        <Code.Example>
          <Button.List>
            <Button color="blue">Blue</Button>
            <Button color="azure">Azure</Button>
            <Button color="indigo">Indigo</Button>
            <Button color="purple">Purple</Button>
            <Button color="pink">Pink</Button>
            <Button color="red">Red</Button>
            <Button color="orange">Orange</Button>
            <Button color="yellow">Yellow</Button>
            <Button color="lime">Lime</Button>
            <Button color="green">Green</Button>
            <Button color="teal">Teal</Button>
            <Button color="cyan">Cyan</Button>
            <Button color="gray">Gray</Button>
            <Button color="gray-dark">Dark gray</Button>
          </Button.List>
        </Code.Example>
        <Code.Highlight>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Button.List>
  <Button color="blue">Blue</Button>
  <Button color="azure">Azure</Button>
  <Button color="indigo">Indigo</Button>
  <Button color="purple">Purple</Button>
  <Button color="pink">Pink</Button>
  <Button color="red">Red</Button>
  <Button color="orange">Orange</Button>
  <Button color="yellow">Yellow</Button>
  <Button color="lime">Lime</Button>
  <Button color="green">Green</Button>
  <Button color="teal">Teal</Button>
  <Button color="cyan">Cyan</Button>
  <Button color="gray">Gray</Button>
  <Button color="gray-dark">Dark gray</Button>
</Button.List>`}
          </SyntaxHighlighter>
        </Code.Highlight>

        <Header.H3>Square Buttons</Header.H3>

        <Code.Example>
          <Button.List>
            <Button square primary>
              Primary
            </Button>
            <Button square secondary>
              Secondary
            </Button>
            <Button square success>
              Success
            </Button>
            <Button square info>
              Info
            </Button>
            <Button square warning>
              Warning
            </Button>
            <Button square danger>
              Danger
            </Button>
          </Button.List>
        </Code.Example>
        <Code.Highlight>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Button.List>
<Button square primary>Primary</Button>
<Button square secondary>Secondary</Button>
<Button square success>Success</Button>
<Button square info>Info</Button>
<Button square warning>Warning</Button>
<Button square danger>Danger</Button>
</Button.List>`}
          </SyntaxHighlighter>
        </Code.Highlight>

        <Header.H3>Pill Buttons</Header.H3>

        <Code.Example>
          <Button.List>
            <Button pill primary>
              Primary
            </Button>
            <Button pill secondary>
              Secondary
            </Button>
            <Button pill success>
              Success
            </Button>
            <Button pill info>
              Info
            </Button>
            <Button pill warning>
              Warning
            </Button>
            <Button pill danger>
              Danger
            </Button>
          </Button.List>
        </Code.Example>
        <Code.Highlight>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Button.List>
<Button pill primary>Primary</Button>
<Button pill secondary>Secondary</Button>
<Button pill success>Success</Button>
<Button pill info>Info</Button>
<Button pill warning>Warning</Button>
<Button pill danger>Danger</Button>
</Button.List>`}
          </SyntaxHighlighter>
        </Code.Highlight>

        <Header.H3>Outline Buttons</Header.H3>

        <Code.Example>
          <Button.List>
            <Button outline primary>
              Primary
            </Button>
            <Button outline secondary>
              Secondary
            </Button>
            <Button outline success>
              Success
            </Button>
            <Button outline info>
              Info
            </Button>
            <Button outline warning>
              Warning
            </Button>
            <Button outline danger>
              Danger
            </Button>
          </Button.List>
        </Code.Example>
        <Code.Highlight>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Button.List>
  <Button outline primary>Primary</Button>
  <Button outline secondary>Secondary</Button>
  <Button outline success>Success</Button>
  <Button outline info>Info</Button>
  <Button outline warning>Warning</Button>
  <Button outline danger>Danger</Button>
</Button.List>`}
          </SyntaxHighlighter>
        </Code.Highlight>

        <Header.H3>Button Size</Header.H3>

        <Code.Example>
          <Button.List>
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Button</Button>
          </Button.List>
        </Code.Example>
        <Code.Highlight>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Button.List>
  <Button size='sm'>Small</Button>
  <Button>Default</Button>
  <Button size='lg'>Large</Button>
</Button.List>`}
          </SyntaxHighlighter>
        </Code.Highlight>

        <Header.H3>Block Level button</Header.H3>

        <Code.Example>
          <Button.List>
            <Button block primary>
              Block level button
            </Button>
            <Button block secondary>
              Block level button
            </Button>
          </Button.List>
        </Code.Example>
        <Code.Highlight>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Button.List>
  <Button block primary>Block level button</Button>
  <Button block secondary>Block level button</Button>
</Button.List>`}
          </SyntaxHighlighter>
        </Code.Highlight>

        <Header.H3>Button with icon</Header.H3>

        <Code.Example>
          <Button.List>
            <Button color="dark" icon="upload">
              Upload
            </Button>
            <Button icon="heart" warning>
              I Like
            </Button>
            <Button icon="check" success>
              I agree
            </Button>
            <Button icon="plus" primary outline>
              More
            </Button>
            <Button icon="link" danger>
              Link
            </Button>
            <Button icon="message-circle" info>
              Comment
            </Button>
          </Button.List>
        </Code.Example>
        <Code.Highlight>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Button.List>
  <Button color="dark" icon="upload">
    Upload
  </Button>
  <Button icon="heart" warning>
    I Like
  </Button>
  <Button icon="check" success>
    I agree
  </Button>
  <Button icon="plus" primary outline>
    More
  </Button>
  <Button icon="link" danger>
    Link
  </Button>
  <Button icon="message-circle" info>
    Comment
  </Button>
</Button.List>`}
          </SyntaxHighlighter>
        </Code.Highlight>

        <Header.H3>Social Buttons</Header.H3>

        <Code.Example>
          <Button.List>
            <Button social="facebook">Facebook</Button>
            <Button social="twitter">Twitter</Button>
            <Button social="google">Google</Button>
            <Button social="youtube">Youtube</Button>
            <Button social="vimeo">Vimeo</Button>
            <Button social="dribbble">Dribbble</Button>
            <Button social="github">Github</Button>
            <Button social="instagram">Instagram</Button>
            <Button social="pinterest">Pinterest</Button>
            <Button social="vk">VKontakte</Button>
            <Button social="rss">RSS</Button>
            <Button social="flickr">Flickr</Button>
            <Button social="bitbucket">Bitbucket</Button>
          </Button.List>
        </Code.Example>
        <Code.Highlight>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Button.List>
  <Button social="facebook">Facebook</Button>
  <Button social="twitter">Twitter</Button>
  <Button social="google">Google</Button>
  <Button social="youtube">Youtube</Button>
  <Button social="vimeo">Vimeo</Button>
  <Button social="dribbble">Dribbble</Button>
  <Button social="github">Github</Button>
  <Button social="instagram">Instagram</Button>
  <Button social="pinterest">Pinterest</Button>
  <Button social="vk">VKontakte</Button>
  <Button social="rss">RSS</Button>
  <Button social="flickr">Flickr</Button>
  <Button social="bitbucket">Bitbucket</Button>
</Button.List>`}
          </SyntaxHighlighter>
        </Code.Highlight>

        <Header.H3>Icon Buttons</Header.H3>

        <Code.Example>
          <Button.List>
            <Button social="facebook" />
            <Button social="github" />
            <Button primary icon="activity" />
            <Button success icon="bell" />
            <Button warning icon="star" />
            <Button danger icon="trash" />
            <Button color="purple" icon="bar-chart" />
            <Button secondary icon="git-merge" />
          </Button.List>
        </Code.Example>
        <Code.Highlight>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Button.List>
  <Button social="facebook" />
  <Button social="github" />
  <Button primary icon="activity" />
  <Button success icon="bell" />
  <Button warning icon="star" />
  <Button danger icon="trash" />
  <Button color="purple" icon="bar-chart" />
  <Button srcondary icon="git-merge" />
</Button.List>`}
          </SyntaxHighlighter>
        </Code.Highlight>

        <Header.H3>Button Dropdown</Header.H3>

        <Code.Example>
          <Button.List>
            <Dropdown>
              <Dropdown.Trigger toggle secondary icon="calendar" />
              <Dropdown.Menu>
                <Dropdown.Item>Dropdown Link</Dropdown.Item>
                <Dropdown.Item>Dropdown Link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Trigger secondary icon="calendar">
                Show Calendar
              </Dropdown.Trigger>
              <Dropdown.Menu>
                <Dropdown.Item>Dropdown Link</Dropdown.Item>
                <Dropdown.Item>Dropdown Link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Trigger primary toggle>
                Show Calendar
              </Dropdown.Trigger>
              <Dropdown.Menu>
                <Dropdown.Item>Dropdown Link</Dropdown.Item>
                <Dropdown.Item>Dropdown Link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Button.List>
        </Code.Example>
        <Code.Highlight>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Button.List>
  <Dropdown>
    <Dropdown.Trigger toggle secondary icon="calendar" />
    <Dropdown.Menu>
      <Dropdown.Item>Dropdown Link</Dropdown.Item>
      <Dropdown.Item>Dropdown Link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  <Dropdown>
    <Dropdown.Trigger secondary icon="calendar">
      Show Calendar
    </Dropdown.Trigger>
    <Dropdown.Menu>
      <Dropdown.Item>Dropdown Link</Dropdown.Item>
      <Dropdown.Item>Dropdown Link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  <Dropdown>
    <Dropdown.Trigger primary toggle>
      Show Calendar
    </Dropdown.Trigger>
    <Dropdown.Menu>
      <Dropdown.Item>Dropdown Link</Dropdown.Item>
      <Dropdown.Item>Dropdown Link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</Button.List>`}
          </SyntaxHighlighter>
        </Code.Highlight>
      </DocsWrapper>
    );
  }
}
export default Buttons;
