import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ResponsiveContent from './item'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { gql, useQuery } from '@apollo/client';

const GET_LIST = gql`
  query GetList {
    getList {
      id
      title
      parentId
    }
  }
`;

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


function ResponsiveDrawer(props) {

  const { window} = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [currentId, setCurrentId] = React.useState(null)
  const [expanded, setExpanded] = React.useState([props.match.params.parent]);
  const [selected, setSelected] = React.useState([props.match.params.id]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const { loading, error, data } = useQuery(GET_LIST);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const handleClick = (id) => {
    setCurrentId(id);
  }

  const titles = data.getList.map( item => {
    return item.parentId === '0' &&
      <TreeItem key={item.id} 
                nodeId={item.id} 
                label={item.title} 
                >
          {
            data.getList.map((subItem, subIndex)=>{
              return subItem.parentId === item.id &&
              <Router key={subItem.id}>
                <RouterLink to={`/manual/manager/${item.id}/${subItem.id}`}>
                  <TreeItem key={subIndex}
                            nodeId={subItem.id} 
                            label={subItem.title} 
                            onClick={() => {handleClick(subItem.id)}}
                            />   
                </RouterLink>  
              </Router>    
            })
          }
      </TreeItem>
})

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />

        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          expanded={expanded}
          selected={selected}
          onNodeToggle={handleToggle}
        >
          {titles}
        </TreeView>

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
    
          <Typography variant="h6"  noWrap className={classes.title}>
            User Manual
          </Typography>

        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, 
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{ paper: classes.drawerPaper }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      <ResponsiveContent match={props.match} id={currentId}/>        

    </div>

  );
}


export default ResponsiveDrawer;
