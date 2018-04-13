import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import CardHeader from "./CardHeader";
import CardTitle from "./CardTitle";
import CardBody from "./CardBody";

const Card = ({ className, as: Component, title, body, ...props }) => {
  const classes = cn("card", className);
  const card_header =
    title === "" ? null : (
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
    );
  const card_body = body === null ? null : <CardBody>{body}</CardBody>;

  if (card_header !== null || card_body !== null) {
    return (
      <Component className={classes} {...props}>
        {card_header}
        {card_body}
      </Component>
    );
  } else {
    return <Component className={classes} {...props} />;
  }
};

Card.propTypes = {
  body: PropTypes.node,
  title: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};

Card.defaultProps = {
  body: null,
  title: "",
  as: "div"
};

export default Card;
