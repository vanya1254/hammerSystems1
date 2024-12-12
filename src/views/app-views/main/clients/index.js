import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import List from "./list";
import Groups from "./groups";

const Clients = ({ match }) => {
  return (
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/list`} />
      <Route path={`${match.url}/list`} component={List} />
      <Route path={`${match.url}/groups`} component={Groups} />
    </Switch>
  );
};

export default Clients;
