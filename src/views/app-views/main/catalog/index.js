import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Products from "./products";
import Categories from "./categories";
import Collections from "./collections";
import Combo from "./combo";

const Catalog = ({ match }) => {
  return (
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/products`} />
      <Route path={`${match.url}/products`} component={Products} />
      <Route path={`${match.url}/categories`} component={Categories} />
      <Route path={`${match.url}/Collections`} component={Collections} />
      <Route path={`${match.url}/combo`} component={Combo} />
    </Switch>
  );
};

export default Catalog;
