import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import { Link as RouterLink } from 'react-router-dom';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
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

const drawerWidth = 300;
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

  const [currentId, setCurrentId] = React.useState(null)
  const [expanded, setExpanded] = React.useState([props.match.params.parent]);
  const [selected, setSelected] = React.useState([props.match.params.id]);
  const { loading, error, data } = useQuery(GET_LIST);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const handleClick = (id) => {
    setCurrentId(id);
  }
  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };
  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };


  const drawer = (
    <React.Fragment>
      <div className={classes.toolbar} />
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          expanded={expanded}
          selected={selected}
          onNodeToggle={handleToggle}
          onNodeSelect={handleSelect}
        >
          {
            data.getList.map( item => {
              return item.parentId === '0' &&
                <TreeItem key={item.id} 
                          nodeId={item.id} 
                          label={item.title}>   
                    {
                      data.getList.map((subItem, subIndex)=>{
                        return subItem.parentId === item.id &&
                        <Router key={subItem.id}>
                          <RouterLink style={{ textDecoration: 'none' }}
                                      to={`/manual/manager/${item.id}/${subItem.id}`}>
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
          }
        </TreeView>

    </React.Fragment>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return(
    <React.Fragment>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={props.mobileOpen}
            onClose={props.handleDrawerToggle}
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
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <ResponsiveContent match={props.match} id={currentId}/>        
    </React.Fragment>
  );
}


export default ResponsiveDrawer;
