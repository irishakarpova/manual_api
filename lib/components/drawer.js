import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { data } from '../data';
const drawerWidth = 300;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function ResponsiveDrawer(props) {
  const {
    window
  } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState([props.match.params.parent]);
  const [selected, setSelected] = React.useState([props.match.params.id]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  const drawer = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: classes.toolbar
  }), /*#__PURE__*/React.createElement(TreeView, {
    defaultCollapseIcon: /*#__PURE__*/React.createElement(ExpandMoreIcon, null),
    defaultExpandIcon: /*#__PURE__*/React.createElement(ChevronRightIcon, null),
    expanded: expanded,
    selected: selected,
    onNodeToggle: handleToggle,
    onNodeSelect: handleSelect
  }, data.map(item => {
    return item.parentId === '0' && /*#__PURE__*/React.createElement(TreeItem, {
      key: item.id,
      nodeId: item.id,
      label: item.title
    }, data.map((subItem, subIndex) => {
      return subItem.parentId === item.id && /*#__PURE__*/React.createElement(Router, {
        key: subItem.id
      }, /*#__PURE__*/React.createElement(RouterLink, {
        style: {
          textDecoration: 'none'
        },
        to: `/manual/${item.id}/${subItem.id}`
      }, /*#__PURE__*/React.createElement(TreeItem, {
        key: subIndex,
        nodeId: subItem.id,
        label: subItem.title,
        onClick: () => {
          props.handleClick(subItem.id);
        }
      })));
    }));
  })));
  const container = window !== undefined ? () => window().document.body : undefined;
  return /*#__PURE__*/React.createElement("nav", {
    className: classes.drawer,
    "aria-label": "mailbox folders"
  }, /*#__PURE__*/React.createElement(Hidden, {
    smUp: true,
    implementation: "css"
  }, /*#__PURE__*/React.createElement(Drawer, {
    container: container,
    variant: "temporary",
    anchor: theme.direction === 'rtl' ? 'right' : 'left',
    open: props.mobileOpen,
    onClose: props.handleDrawerToggle,
    classes: {
      paper: classes.drawerPaper
    },
    ModalProps: {
      keepMounted: true
    }
  }, drawer)), /*#__PURE__*/React.createElement(Hidden, {
    xsDown: true,
    implementation: "css"
  }, /*#__PURE__*/React.createElement(Drawer, {
    classes: {
      paper: classes.drawerPaper
    },
    variant: "permanent",
    open: true
  }, drawer)));
}

export default ResponsiveDrawer;