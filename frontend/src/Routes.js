import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import Home from "./containers/Home";
import helloWorld from "./containers/helloWorld";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";

export default () =>
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route exact path="/queries/helloWorld" component={ helloWorld } />
    { /* Error 404 */ }
    <Route component={NotFound} />
  </Switch>;
