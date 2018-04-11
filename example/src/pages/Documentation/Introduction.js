import React, { Component } from "react";

import { Page } from "react-tabler-components";

import DocsWrapper from "./DocsWrapper";

class Documentation extends Component {
  render() {
    return <DocsWrapper title="Documentation">{"content"}</DocsWrapper>;
  }
}
export default Documentation;
