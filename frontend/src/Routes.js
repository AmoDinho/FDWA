import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import Home from "./containers/Home";
import helloWorld from "./containers/helloWorld";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={ Home } props={ childProps } />
    <AppliedRoute path="/Login" exact component={ Login } props={ childProps } />
    <AppliedRoute path="/queries/helloWorld" exact component={ helloWorld } props={ childProps } />
    { /* Error 404 */ }
    <Route component={ NotFound } />
  </Switch>;
