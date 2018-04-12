import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Grid } from "react-tabler-components";

const FormColorCheckItem = ({ className, color, ...props }) => {
  const classes = cn(className);
  return (
    <Grid.Col auto className={classes} {...props}>
      <label class="colorinput">
        <input
          name="color"
          type="checkbox"
          value={color}
          className="colorinput-input"
        />
        <span className={`colorinput-color bg-${color}`} />
      </label>
    </Grid.Col>
  );
};

FormColorCheckItem.propTypes = {
  color: PropTypes.string.isRequired
};

FormColorCheckItem.defaultProps = {};

export default FormColorCheckItem;
