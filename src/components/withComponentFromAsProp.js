import { defaultProps, componentFromProp, compose } from "recompose";

const withComponentFromAs = defaultComponent =>
  defaultProps({ as: defaultComponent })(componentFromProp("as"));

export default withComponentFromAs;
