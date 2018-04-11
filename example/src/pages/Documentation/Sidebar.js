import React from "react";
import { Button, List } from "react-tabler-components";
import { NavLink } from "react-router-dom";

class Sidebar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Button
          href="https://github.com/jonthomp/react-tabler-components"
          className="mb-6"
          block
          as="a"
          primary
        >
          <i className="fe fe-github mr-2" /> Browse source code
        </Button>

        <List.Group transparent>
          <List.GroupItem as={NavLink} to={"/docs/intro"} icon="flag">
            Introduction
          </List.GroupItem>
        </List.Group>

        <List.Group transparent>
          <List.GroupItem
            as={NavLink}
            to={"/docs/alerts"}
            icon="alert-triangle"
          >
            Alerts
          </List.GroupItem>
          <List.GroupItem as={NavLink} to={"/docs/avatars"} icon="user">
            Avatars
          </List.GroupItem>
          <List.GroupItem as={NavLink} to={"/docs/buttons"} icon="plus-square">
            Buttons
          </List.GroupItem>
          <List.GroupItem as={NavLink} to={"/docs/colors"} icon="feather">
            Colors
          </List.GroupItem>
          <List.GroupItem as={NavLink} to={"/docs/cards"} icon="image">
            Cards
          </List.GroupItem>
          <List.GroupItem as={NavLink} to={"/docs/charts"} icon="pie-chart">
            Charts
          </List.GroupItem>
          <List.GroupItem
            as={NavLink}
            to={"/docs/form-components"}
            icon="check-square"
          >
            Form components
          </List.GroupItem>
          <List.GroupItem as={NavLink} to={"/docs/tags"} icon="tag">
            Tags
          </List.GroupItem>
          <List.GroupItem as={NavLink} to={"/docs/typography"} icon="type">
            Typography
          </List.GroupItem>
        </List.Group>
      </React.Fragment>
    );
  }
}

export default Sidebar;
