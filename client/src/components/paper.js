import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { gql, useLazyQuery } from '@apollo/client';
import {Parser} from 'html-to-react';


const useStyles = makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	content: {
	  flexGrow: 1,
	  padding: theme.spacing(3),
	},
  }));

const htmlToReactParser = new Parser();  
  
const GETITEM = gql`
	query GetItem($id: ID!) {
		getItem(id: $id){
			id
			title
			text
			sort
		}
	}
`;

export default (props) => {

	const classes = useStyles();

	let id = props.id ? props.id : props.match.params.id;

	const [ loadData, { loading, error, data }  ] = useLazyQuery(GETITEM, {
		variables: { id: id }
	});

	if ( id && !data && !loading ){
		loadData();
	}
	

	return(
		<Grid container>
			<Grid item md={8}>
				<main className={classes.content}>
					<div className={classes.toolbar} />
					{error &&(
						<Alert severity="error">
							<AlertTitle>Error</AlertTitle>
							`${error}`
						</Alert> 
					)}
					{id ? (
						<React.Fragment>
							<Typography variant="h4" gutterBottom >
								{data && !loading  ? 
										 data.getItem.title : <Skeleton width={250}  />} 
							</Typography>
							<Typography paragraph gutterBottom>								
								{data && !loading  ? 
								         htmlToReactParser.parse(data.getItem.text) : <Skeleton width={250} />}
							</Typography>
						</React.Fragment> 
					): <Typography variant="h4" gutterBottom >Welcome</Typography>} 
				</main>
			</Grid>
		</Grid>

	);
};
