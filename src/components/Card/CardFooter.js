import React from 'react';
import cn from 'classnames';

const CardFooter = ({ className, ...props }) => {
    const classes = cn('card-footer', className);
    return <div className={classes} {...props} />;
};

export default CardFooter;
