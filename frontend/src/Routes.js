import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import helloWorld from "./containers/helloWorld";
import NotFound from "./containers/NotFound";

export default () =>
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route exact path="/queries/helloWorld" component={ helloWorld } />
    { /* Error 404 */ }
    <Route component={NotFound} />
  </Switch>;
