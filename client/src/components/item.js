
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { gql, useLazyQuery } from '@apollo/client';

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

	let id = props.id ? props.id : props.match.params.id;

	const [ loadData, {called, loading, error, data}  ] = useLazyQuery(GETITEM, {
		variables: {id: id}
	});



	if (called && loading) return <p>Loading1...</p>
	if (error) return `Error! ${error}`;
	if(id && !data && !loading){
		loadData();
	}
	if (!called) {
    return <h1>Load greeting</h1>
  }


	return(
        <>
			<Typography variant="h4" component="h3" gutterBottom>
				{data.getItem.title}
			</Typography>
			<Typography paragraph gutterBottom>
				{data.getItem.text}
			</Typography>
        </>
	);
};
