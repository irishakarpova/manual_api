import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Switch from "@material-ui/core/Switch";
const drawerWidth = 300;
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  }
}));
export default function (props) {
  const classes = useStyles();
  let id = props.id ? props.id : props.match.params.id;
  return /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React.createElement(AppBar, {
    elevation: 0,
    position: "fixed",
    className: classes.appBar
  }, /*#__PURE__*/React.createElement(Toolbar, null, /*#__PURE__*/React.createElement(IconButton, {
    color: "inherit",
    "aria-label": "open drawer",
    edge: "start",
    onClick: props.handleDrawerToggle,
    className: classes.menuButton
  }, /*#__PURE__*/React.createElement(MenuIcon, null)), /*#__PURE__*/React.createElement(Typography, {
    variant: "h6",
    noWrap: true,
    className: classes.title
  }, id ? "USER MANUAL" : null), /*#__PURE__*/React.createElement(Switch, {
    checked: props.checked,
    onChange: props.changeTheme,
    inputProps: {
      "aria-label": "checkbox"
    }
  }))));
}