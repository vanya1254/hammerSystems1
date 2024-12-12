import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Addresses from "./addresses";
import Geozones from "./geozones";

const OfflinePoints = ({ match }) => {
  return (
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/addresses`} />
      <Route path={`${match.url}/addresses`} component={Addresses} />
      <Route path={`${match.url}/geozones`} component={Geozones} />
    </Switch>
  );
};

export default OfflinePoints;
