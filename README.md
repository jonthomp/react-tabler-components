# react-tabler-components

> A WIP collection of React components for Tabler

[![NPM](https://img.shields.io/npm/v/react-tabler-components.svg)](https://www.npmjs.com/package/react-tabler-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

https://jonthomp.github.io/react-tabler-components/

## Install

```bash
npm install --save react-tabler-components

or

yarn add react-tabler-components
```

## Usage

At the moment this is a set of components only, it does not come with the Tabler CSS or Javascript packaged along side so you should add them into your project in the way that suites you best. In the example we're just using a local copy of the Tabler files and Bootstrap/Google CDNs for Fonts.

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,500,500i,600,600i,700,700i&amp;subset=latin-ext">
<script src="./assets/js/require.min.js"></script>
<script>
  requirejs.config({
    baseUrl: '.'
  });
</script>
<!-- Dashboard Core -->
<link href="./assets/css/dashboard.css" rel="stylesheet" />
<script src="./assets/js/dashboard.js"></script>
<!-- c3.js Charts Plugin -->
<link href="./assets/plugins/charts-c3/plugin.css" rel="stylesheet" />
<script src="./assets/plugins/charts-c3/plugin.js"></script>
<!-- Google Maps Plugin -->
<link href="./assets/plugins/maps-google/plugin.css" rel="stylesheet" />
<script src="./assets/plugins/maps-google/plugin.js"></script>
<!-- Input Mask Plugin -->
<script src="./assets/plugins/input-mask/plugin.js"></script>
```

Then you just import react-tabler-components and get building...

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
