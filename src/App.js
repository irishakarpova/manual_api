import React from "react";
import MainPage from "./MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/manual/:parent?/:id?"
          render={(props) => <MainPage match={props.match} />}
        ></Route>
      </Switch>
    </Router>
  );
}
