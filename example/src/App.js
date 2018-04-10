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
  Header,
  Table,
  Alert,
  Progress
} from "react-tabler-components";

class App extends Component {
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
          <Page.Content>
            <Page.Header>Dashboard</Page.Header>
            <Grid.Row cards={true}>
              <Grid.Col width={6} sm={4} lg={2}>
                <Card>
                  <Card.Body className="p-3 text-center">
                    <Text color="green" className="text-right">
                      6%
                      <Icon name="chevron-up" />
                    </Text>
                    <Header className="m-0">43</Header>
                    <Text color="muted" className=" mb-4">
                      New Tickets
                    </Text>
                  </Card.Body>
                </Card>
              </Grid.Col>
              <Grid.Col width={6} sm={4} lg={2}>
                <Card>
                  <Card.Body className="p-3 text-center">
                    <Text color="red" className="text-right">
                      -3%
                      <Icon name="chevron-down" />
                    </Text>
                    <Header className="m-0">17</Header>
                    <Text color="muted" className="mb-4">
                      Closed Today
                    </Text>
                  </Card.Body>
                </Card>
              </Grid.Col>
              <Grid.Col width={6} sm={4} lg={2}>
                <Card>
                  <Card.Body className=" p-3 text-center">
                    <Text color="green" className="text-right">
                      9%
                      <Icon name="chevron-up" />
                    </Text>
                    <Header className="m-0">7</Header>
                    <Text color="muted" className=" mb-4">
                      New Replies
                    </Text>
                  </Card.Body>
                </Card>
              </Grid.Col>
              <Grid.Col width={6} sm={4} lg={2}>
                <Card>
                  <Card.Body className="p-3 text-center">
                    <Text color="green" className="text-right">
                      3%
                      <Icon name="chevron-up" />
                    </Text>
                    <Header className="m-0">27.3K</Header>
                    <Text color="muted" className="mb-4">
                      Followers
                    </Text>
                  </Card.Body>
                </Card>
              </Grid.Col>
              <Grid.Col width={6} sm={4} lg={2}>
                <Card>
                  <Card.Body className="p-3 text-center">
                    <Text color="red" className="text-right ">
                      -2%
                      <Icon name="chevron-down" />
                    </Text>
                    <Header className="m-0">$95</Header>
                    <Text color="muted" className="mb-4">
                      Daily Earnings
                    </Text>
                  </Card.Body>
                </Card>
              </Grid.Col>
              <Grid.Col width={6} sm={4} lg={2}>
                <Card>
                  <Card.Body className=" p-3 text-center">
                    <Text color="red" className="text-right ">
                      -1%
                      <Icon name="chevron-down" />
                    </Text>
                    <Header className="m-0">621</Header>
                    <Text color="muted" className="mb-4">
                      Products
                    </Text>
                  </Card.Body>
                </Card>
              </Grid.Col>
              <Grid.Col lg={6}>
                <Card>
                  <Card.Header>
                    <Card.Title>Development Activity</Card.Title>
                  </Card.Header>
                  <div
                    id="chart-development-activity"
                    style={{ height: "10rem" }}
                  />
                  <Table
                    cards={true}
                    striped={true}
                    responsive={true}
                    className="table-vcenter"
                  >
                    <Table.Header>
                      <Table.Row>
                        <Table.ColHeader colspan="2">User</Table.ColHeader>
                        <Table.ColHeader>Commit</Table.ColHeader>
                        <Table.ColHeader>Date</Table.ColHeader>
                        <Table.ColHeader />
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      <Table.Row>
                        <Table.Col className="w-1">
                          <Avatar src="./demo/faces/male/9.jpg" />
                        </Table.Col>
                        <Table.Col>Ronald Bradley</Table.Col>
                        <Table.Col>Initial commit</Table.Col>
                        <Table.Col className="text-nowrap">
                          May 6, 2018
                        </Table.Col>
                        <Table.Col className="w-1">
                          <Icon link={true} href="#" name="trash" />
                        </Table.Col>
                      </Table.Row>
                      <Table.Row>
                        <Table.Col>
                          <Avatar>BM</Avatar>
                        </Table.Col>
                        <Table.Col>Russell Gibson</Table.Col>
                        <Table.Col>Main structure</Table.Col>
                        <Table.Col className="text-nowrap">
                          April 22, 2018
                        </Table.Col>
                        <Table.Col>
                          <Icon link={true} href="#" name="trash" />
                        </Table.Col>
                      </Table.Row>
                      <Table.Row>
                        <Table.Col>
                          <Avatar src="./demo/faces/female/1.jpg" />
                        </Table.Col>
                        <Table.Col>Beverly Armstrong</Table.Col>
                        <Table.Col>Left sidebar adjustments</Table.Col>
                        <Table.Col className="text-nowrap">
                          April 15, 2018
                        </Table.Col>
                        <Table.Col>
                          <Icon link={true} href="#" name="trash" />
                        </Table.Col>
                      </Table.Row>
                      <Table.Row>
                        <Table.Col>
                          <Avatar src="./demo/faces/male/4.jpg" />
                        </Table.Col>
                        <Table.Col>Bobby Knight</Table.Col>
                        <Table.Col>Topbar dropdown style</Table.Col>
                        <Table.Col className="text-nowrap">
                          April 8, 2018
                        </Table.Col>
                        <Table.Col>
                          <Icon link={true} href="#" name="trash" />
                        </Table.Col>
                      </Table.Row>
                      <Table.Row>
                        <Table.Col>
                          <Avatar src="./demo/faces/female/11.jpg" />
                        </Table.Col>
                        <Table.Col>Sharon Wells</Table.Col>
                        <Table.Col>Fixes #625</Table.Col>
                        <Table.Col className="text-nowrap">
                          April 9, 2018
                        </Table.Col>
                        <Table.Col>
                          <Icon link={true} href="#" name="trash" />
                        </Table.Col>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Card>
              </Grid.Col>

              <Grid.Col md={6}>
                <Alert primary={true}>
                  Are you in trouble?{" "}
                  <Alert.Link href="./docs/index.html">
                    Read our documentation
                  </Alert.Link>{" "}
                  with code samples.
                </Alert>
                <Grid.Row>
                  <Grid.Col sm={6}>
                    <Card>
                      <Card.Header>
                        <Card.Title>Chart title</Card.Title>
                      </Card.Header>
                      <Card.Body>
                        <div id="chart-donut" style={{ height: "12rem" }} />
                      </Card.Body>
                    </Card>
                  </Grid.Col>
                  <Grid.Col sm={6}>
                    <Card>
                      <Card.Header>
                        <Card.Title>Chart title</Card.Title>
                      </Card.Header>
                      <Card.Body>
                        <div id="chart-pie" style={{ height: "12rem" }} />
                      </Card.Body>
                    </Card>
                  </Grid.Col>
                  <Grid.Col sm={4}>
                    <Card>
                      <Card.Body className="text-center">
                        <Header size={5}>New feedback</Header>
                        <div className="display-4 font-weight-bold mb-4">
                          62
                        </div>
                        <Progress size="sm">
                          <Progress.Bar color="red" width={28} />
                        </Progress>
                      </Card.Body>
                    </Card>
                  </Grid.Col>
                  <Grid.Col sm={4}>
                    <Card>
                      <Card.Body className="text-center">
                        <Header size={5}>Today profit</Header>
                        <div className="display-4 font-weight-bold mb-4">
                          $652
                        </div>
                        <Progress size="sm">
                          <Progress.Bar color="green" width={84} />
                        </Progress>
                      </Card.Body>
                    </Card>
                  </Grid.Col>
                  <Grid.Col sm={4}>
                    <Card>
                      <Card.Body className="text-center">
                        <Header size={5}>Users online</Header>
                        <div className="display-4 font-weight-bold mb-4">
                          76
                        </div>
                        <Progress size="sm">
                          <Progress.Bar color="yellow" width={34} />
                        </Progress>
                      </Card.Body>
                    </Card>
                  </Grid.Col>
                </Grid.Row>
              </Grid.Col>
              <Grid.Col sm={6} lg={3}>
                <Card className="p-3">
                  <div className="d-flex align-items-center">
                    <span className="stamp stamp-md bg-blue mr-3">
                      <Icon name="dollar-sign" />
                    </span>
                    <div>
                      <h4 className="m-0">
                        <a href="javascript:void(0)">
                          132
                          <small>Sales</small>
                        </a>
                      </h4>
                      <small className="text-muted">12 waiting payments</small>
                    </div>
                  </div>
                </Card>
              </Grid.Col>
              <Grid.Col sm={6} lg={3}>
                <Card className="p-3">
                  <div className="d-flex align-items-center">
                    <span className="stamp stamp-md bg-green mr-3">
                      <Icon name="shopping-cart" />
                    </span>
                    <div>
                      <h4 className="m-0">
                        <a href="javascript:void(0)">
                          78
                          <small>Orders</small>
                        </a>
                      </h4>
                      <small className="text-muted">32 shipped</small>
                    </div>
                  </div>
                </Card>
              </Grid.Col>
              <Grid.Col sm={6} lg={3}>
                <Card className="p-3">
                  <div className="d-flex align-items-center">
                    <span className="stamp stamp-md bg-red mr-3">
                      <Icon name="users" />
                    </span>
                    <div>
                      <h4 className="m-0">
                        <a href="javascript:void(0)">
                          1,352
                          <small>Members</small>
                        </a>
                      </h4>
                      <small className="text-muted">163 registered today</small>
                    </div>
                  </div>
                </Card>
              </Grid.Col>
              <Grid.Col sm={6} lg={3}>
                <Card className="p-3">
                  <div className="d-flex align-items-center">
                    <span className="stamp stamp-md bg-yellow mr-3">
                      <i className="fe fe-message-square" />
                    </span>
                    <div>
                      <h4 className="m-0">
                        <a href="javascript:void(0)">
                          132
                          <small>Comments</small>
                        </a>
                      </h4>
                      <small className="text-muted">16 waiting</small>
                    </div>
                  </div>
                </Card>
              </Grid.Col>
            </Grid.Row>
          </Page.Content>
        </Page.Main>
      </Page>
    );
  }
}

export default App;
