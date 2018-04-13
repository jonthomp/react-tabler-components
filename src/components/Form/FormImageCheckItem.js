import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Grid } from "react-tabler-components";

const FormImageCheckItem = ({
  className,
  col: { width, sm, md, lg },
  image,
  value,
  ...props
}) => {
  return (
    <Grid.Col width={width} sm={sm} md={md} lg={lg}>
      <label className="imagecheck mb-4">
        <input
          name="imagecheck"
          type="checkbox"
          value={value}
          className="imagecheck-input"
        />
        <figure className="imagecheck-figure">
          <img src={image} alt="Select" className="imagecheck-image" />
        </figure>
      </label>
    </Grid.Col>
  );
};

FormImageCheckItem.propTypes = {
  image: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  col: PropTypes.shape({
    width: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number
  })
};

FormImageCheckItem.defaultProps = {
  col: {
    width: 6,
    sm: 4,
    md: null,
    lg: null
  }
};

export default FormImageCheckItem;
