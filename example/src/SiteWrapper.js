import React, { Component } from "react";

import {
  Page,
  Site,
  Container,
  Button,
  Nav,
  Dropdown,
  Avatar,
  Icon,
  Badge,
  Grid,
  Card,
  Text,
  Header
} from "react-tabler-components";

class SiteWrapper extends Component {
  render() {
    return (
      <Page>
        <Page.Main>
          <Site.Header>
            <div className="d-flex">
              <Site.Logo href={"#"} alt="ALT" src="#" />
              <div className="ml-auto d-flex order-lg-2">
                <Nav.Item as="div" className="d-none d-md-flex">
                  <Button
                    href="https://github.com/tabler/tabler"
                    target="_blank"
                  >
                    Source code
                  </Button>
                </Nav.Item>

                <Dropdown desktopOnly={true}>
                  <Dropdown.Label icon="message-square" />
                  <Dropdown.Menu position="right" arrow={true} className="px-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium architecto asperiores dolorem, est fugiat in
                    maxime natus officia velit voluptas! Ab asperiores delectus
                    dolore dolores maxime nesciunt qui quia totam.
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown desktopOnly={true}>
                  <Dropdown.Label icon="bell">
                    <span className="nav-unread" />
                  </Dropdown.Label>
                  <Dropdown.Menu position="right" arrow={true}>
                    <Dropdown.Item className="d-flex">
                      <Avatar
                        className="mr-3 align-self-center"
                        src="demo/faces/male/41.jpg"
                      />
                      <div>
                        <strong>Nathan</strong> pushed new commit: Fix page load
                        performance issue.
                        <Text color="muted" size="small">
                          10 minutes ago
                        </Text>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item className=" d-flex">
                      <Avatar
                        className="mr-3 align-self-center"
                        src={"demo/faces/female/1.jpg"}
                      />
                      <div>
                        <strong>Alice</strong> started new task: Tabler UI
                        design.
                        <Text color="muted" size="small">
                          1 hour ago
                        </Text>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item className="d-flex">
                      <Avatar
                        className="mr-3 align-self-center"
                        src={"demo/faces/female/18.jpg"}
                      />
                      <div>
                        <strong>Rose</strong> deployed new version of NodeJS
                        REST Api V3
                        <Text color="muted" size="small">
                          2 hours ago
                        </Text>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.ItemDivider />
                    <Dropdown.Item className="text-center text-muted-dark">
                      Mark all as read
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                  <Dropdown.Label className="pr-0">
                    <Avatar src={"./demo/faces/female/25.jpg"} />
                    <span className="ml-2 d-none d-lg-block">
                      <span className="text-default">Jane Pearson</span>
                      <small className="text-muted d-block mt-1">
                        Administrator
                      </small>
                    </span>
                  </Dropdown.Label>

                  <Dropdown.Menu position="right" arrow={true}>
                    <Dropdown.Item icon="user" value="Profile" />
                    <Dropdown.Item icon="settings" value="Settings" />
                    <Dropdown.Item icon="mail" badge="6" value="Inbox" />
                    <Dropdown.Item icon="send" value="Message" />
                    <Dropdown.ItemDivider />
                    <Dropdown.Item icon="help-circle" value="Need help?" />
                    <Dropdown.Item icon="log-out" value="Sign out" />
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </Site.Header>
          <Site.Navbar />
          {this.props.children}
        </Page.Main>
      </Page>
    );
  }
}

export default SiteWrapper;
