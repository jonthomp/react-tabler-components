import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Home,
  Gallery,
  Forms,
  Documentation,
  Email,
  EmptyPage,
  Error400,
  Error401,
  Error403,
  Error404,
  Error500,
  Error503,
  ForgotPassword,
  Login,
  Profile,
  Register,
  Cards,
  Charts,
  PricingCards,
  Blog,
  Icons,
  Maps,
  Store
} from "./pages";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/form-elements" component={Forms} />
          <Route exact path="/docs/index" component={Documentation} />
          <Route exact path="/email" component={Email} />
          <Route exact path="/empty" component={EmptyPage} />
          <Route exact path="/400" component={Error400} />
          <Route exact path="/401" component={Error401} />
          <Route exact path="/403" component={Error403} />
          <Route exact path="/404" component={Error404} />
          <Route exact path="/500" component={Error500} />
          <Route exact path="/503" component={Error503} />
          <Route exact path="/forgot-Password" component={ForgotPassword} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cards" component={Cards} />
          <Route exact path="/charts" component={Charts} />
          <Route exact path="/pricing-cards" component={PricingCards} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/icons" component={Icons} />
          <Route exact path="/maps" component={Maps} />
          <Route exact path="/store" component={Store} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
