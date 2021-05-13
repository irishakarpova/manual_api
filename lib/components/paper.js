import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Parser } from "html-to-react";
import Greeting from "./greeting";
import { data } from "../data";
const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));
const htmlToReactParser = new Parser();
export default (props => {
  const classes = useStyles();
  let id = props.id ? props.id : props.match.params.id;
  const dataById = {};
  data.map(item => {
    return dataById[item.id] = item;
  });
  return /*#__PURE__*/React.createElement(Grid, {
    container: true
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    md: 8
  }, id ? /*#__PURE__*/React.createElement("main", {
    className: classes.content
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.toolbar
  }), /*#__PURE__*/React.createElement(Typography, {
    variant: "body1",
    color: "textSecondary",
    component: "div"
  }, htmlToReactParser.parse(dataById[id].text))) : /*#__PURE__*/React.createElement(Greeting, {
    currentTheme: props.currentTheme
  })));
});