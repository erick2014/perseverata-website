import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import MyApp from "./components/MyApp";
import MyHome from "./components/MyHome";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={MyApp}>
      <IndexRoute component={MyHome}/>
    </Route>
  </Router>
);

// export
export { router };
