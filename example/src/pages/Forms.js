import React, { Component } from "react";

import { Page, Grid, Form, Button, Dropdown } from "react-tabler-components";

import SiteWrapper from "../SiteWrapper";

class Forms extends Component {
  render() {
    return (
      <SiteWrapper>
        <Page.Card title="Forms" as={Form}>
          <Grid.Row>
            <Grid.Col md={6} lg={4}>
              <Form.Group label="Static">
                <Form.StaticText name="example-static-text">
                  Username
                </Form.StaticText>
              </Form.Group>

              <Form.Group label="Text">
                <Form.Input name="example-text-input" placeholder="Text..." />
              </Form.Group>

              <Form.Group label="Disabled">
                <Form.Input
                  disabled
                  name="example-disabled-text-input"
                  value="Well, she turned me into a newt."
                />
              </Form.Group>

              <Form.Group label="Read Only">
                <Form.Input
                  readOnly
                  name="example-readonly-text-input"
                  value="Well, howd you become king, then?"
                />
              </Form.Group>

              <Form.Group
                label={<Form.Label aside="56/100" children="Textarea" />}
              >
                <Form.Textarea
                  name="example-textarea"
                  rows={6}
                  placeholder="Content.."
                  defaultValue=" Oh! Come and see the violence inherent in the system! Help,
                  help, I'm being repressed! We shall say 'Ni' again to you, if
                  you do not appease us. I'm not a witch. I'm not a witch.
                  Camelot!"
                />
              </Form.Group>

              <Form.Group label="Image Check">
                <Form.ImageCheck>
                  <Form.ImageCheckItem
                    value={1}
                    image="/demo/photos/nathan-anderson-316188-500.jpg"
                  />
                  <Form.ImageCheckItem
                    value={2}
                    image="/demo/photos/nathan-dumlao-287713-500.jpg"
                  />
                  <Form.ImageCheckItem
                    value={3}
                    image="./demo/photos/nicolas-picard-208276-500.jpg"
                  />

                  <Form.ImageCheckItem
                    value={4}
                    image="./demo/photos/oskar-vertetics-53043-500.jpg"
                  />
                  <Form.ImageCheckItem
                    value={5}
                    image="./demo/photos/priscilla-du-preez-181896-500.jpg"
                  />
                  <Form.ImageCheckItem
                    value={6}
                    image="./demo/photos/ricardo-gomez-angel-262359-500.jpg"
                  />

                  <Form.ImageCheckItem
                    value={7}
                    image="./demo/photos/sam-ferrara-136526-500.jpg"
                  />
                  <Form.ImageCheckItem
                    value={8}
                    image="./demo/photos/sean-afnan-244576-500.jpg"
                  />
                  <Form.ImageCheckItem
                    value={9}
                    image="./demo/photos/sophie-higginbottom-133982-500.jpg"
                  />
                </Form.ImageCheck>
              </Form.Group>

              <Form.Group label="Color Check">
                <Form.ColorCheck>
                  <Form.ColorCheckItem color="azure" />
                  <Form.ColorCheckItem color="indigo" />
                  <Form.ColorCheckItem color="purple" />

                  <Form.ColorCheckItem color="pink" />
                  <Form.ColorCheckItem color="red" />
                  <Form.ColorCheckItem color="orange" />

                  <Form.ColorCheckItem color="lime" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="teal" />
                </Form.ColorCheck>
              </Form.Group>

              <Form.Group label="Input Group">
                <Form.InputGroup>
                  <Form.Input placeholder="Search for..." />
                  <Form.InputGroup append>
                    <Button primary>Go!</Button>
                  </Form.InputGroup>
                </Form.InputGroup>
              </Form.Group>

              <Form.Group label="Input Group Buttons">
                <Form.InputGroup>
                  <Form.Input />
                  <Form.InputGroup append>
                    <Button primary>Actions</Button>
                    <Button primary toggle data-toggle="dropdown" />
                    <Dropdown.Menu position="right">
                      <Dropdown.Item>News</Dropdown.Item>
                      <Dropdown.Item>Messages</Dropdown.Item>
                      <Dropdown.ItemDivider />
                      <Dropdown.Item>Edit Profile</Dropdown.Item>
                    </Dropdown.Menu>
                  </Form.InputGroup>
                </Form.InputGroup>
              </Form.Group>

              <Form.Group label="Input Icon" />
            </Grid.Col>
            <Grid.Col md={6} lg={4}>
              2
            </Grid.Col>
            <Grid.Col md={6} lg={4}>
              3
            </Grid.Col>
          </Grid.Row>
        </Page.Card>
      </SiteWrapper>
    );
  }
}
export default Forms;
