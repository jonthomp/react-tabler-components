import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import CardHeader from "./CardHeader";
import CardTitle from "./CardTitle";
import CardBody from "./CardBody";

const Card = ({className, title, body, ...props}) => {
    const classes = cn("card", className);
    const card_header = title === '' ? null : <CardHeader><CardTitle>{title}</CardTitle></CardHeader>;
    const card_body = body === null ? null : <CardBody>{body}</CardBody>;

    if (card_header !== null || card_body !== null) {
        return (
            <div className={classes} {...props} >
                {card_header}
                {card_body}
            </div>
        )
    } else {
        return (
            <div className={classes} {...props} />
        )
    }
};

Card.propTypes = {
  as: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};

Card.defaultProps = {
  as: "div"
};

export default Card;

Card.propTypes = {
    body: PropTypes.node,
    title: PropTypes.string,
};

Card.defaultProps = {
    body: null,
    title: ''
};
