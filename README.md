# react-tabler-components

> A collection of React components for Tabler

[![NPM](https://img.shields.io/npm/v/react-tabler-components.svg)](https://www.npmjs.com/package/react-tabler-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

https://jonthomp.github.io/react-tabler-components/

## Install

```bash
npm install --save react-tabler-components
```

## Usage

```jsx
import React, { Component } from "react";

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
}
```

## License

MIT © [jonthomp](https://github.com/jonthomp)
