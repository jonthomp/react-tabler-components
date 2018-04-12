import React from "react";
import PropTypes from "prop-types";

import { Grid, Card, Container } from "../";

const PageCard = ({
  children,
  title,
  header,
  footer,
  as: Component,
  ...rest
}) => (
  <div className="my-3 my-md-5">
    <Container>
      <Grid.Row>
        <Grid.Col width={12}>
          <Card as={Component}>
            {title && (
              <Card.Header>
                <Card.Title>{title}</Card.Title>
              </Card.Header>
            )}
            {header && header}
            <Card.Body>{children}</Card.Body>
            {footer && footer}
          </Card>
        </Grid.Col>
      </Grid.Row>
    </Container>
  </div>
);

PageCard.propTypes = {
  title: PropTypes.string,
  header: PropTypes.node,
  footer: PropTypes.node,
  as: PropTypes.node
};

PageCard.defaultProps = {
  title: null,
  header: null,
  footer: null,
  as: Card
};

export default PageCard;
