import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/home.jsx";
import Detail from "./pages/detail.jsx";
import Component3 from "./pages/component-3.jsx";
import Component4 from "./pages/component-4.jsx";
import Attr from "./pages/attr.jsx";
import Theme from "./pages/theme.jsx";

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/component3" component={Component3} />
        <Route exact path="/component4" component={Component4} />
        <Route exact path="/attr" component={Attr} />
        <Route exact path="/theme" component={Theme} />
        <Redirect to="/" exact />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
