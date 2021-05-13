import React from "react";
import MainPage from "./MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  return /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
    path: "/manual/:parent?/:id?",
    render: props => /*#__PURE__*/React.createElement(MainPage, {
      match: props.match
    })
  })));
}