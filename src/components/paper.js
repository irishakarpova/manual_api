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
	
	const dataById = {};

	data.map(item => {
	  return dataById[item.id] = item;
	})

	return(
		<Grid container>
			<Grid item md={8}>
				{props.id ? (
					<main className={classes.content}>
						<div className={classes.toolbar} />				
							<Typography paragraph gutterBottom>							
								{ htmlToReactParser.parse(dataById[props.id].text) }
							</Typography>
					</main>
				): <Greeting currentTheme={props.currentTheme}/>}
			</Grid>
		</Grid>
	);
};
