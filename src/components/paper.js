import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Parser } from 'html-to-react';
import Greeting from './greeting'
import { data } from '../data'


const useStyles = makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	content: {
	  flexGrow: 1,
	  padding: theme.spacing(3),
	},
  }));

const htmlToReactParser = new Parser();  
  
export default (props) => {	
	const classes = useStyles();

	let id = props.id ? props.id : props.match.params.id;

	const dataById = {};

	data.map(item => {
	  return dataById[item.id] = item ;
	})
	
	return(
		<Grid container>
			<Grid item md={8}>
				{id ? (
					<main className={classes.content}>
						<div className={classes.toolbar} />				
							<Typography variant="body1" color="textSecondary" component="div">							
								{ htmlToReactParser.parse(dataById[id].text) }
							</Typography>
					</main>
				): <Greeting currentTheme={props.currentTheme}/>}
			</Grid>
		</Grid>
	);
};
