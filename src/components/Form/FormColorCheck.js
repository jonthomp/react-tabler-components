import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Grid } from "react-tabler-components";

const FormColorCheck = ({ className, ...props }) => {
  const classes = cn("gutters-xs", className);
  return <Grid.Row className={classes} {...props} />;
};

export default FormColorCheck;
