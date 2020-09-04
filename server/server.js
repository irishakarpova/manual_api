const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const { buildSchema } = require('graphql');
const { readFileSync } = require('fs');


const schemaString = readFileSync('./schema.graphql', { encoding: 'utf8' });

const schema = buildSchema(schemaString);

const allItems= [
	{
		id: '0001',
		title: 'Awesome book1',
		parentId: '0',
		sort: 'Another',
		text: '123If you like to walk through this tutorial yourself, we recommend either running a new React project locally with Create React App or creating a new React sandbox on CodeSandbox.',
	},
	{
		id: '0002',
		title: 'Another awesome book2',
		parentId: "0",
		sort: 'Another',
		text: '123If you like to walk through this tutorial yourself, we recommend either running a new React project locally with Create React App or creating a new React sandbox on CodeSandbox.',
	},
	{
		id: '0003',
		title: 'Overriding Material-UI components',
		parentId: "0001",
		sort: 'Another',
		text: '<b>This works</b> great when the changes can be isolated to a new DOM element. For instance, you can change the margin this way.',
	},
	{
		id: '0004',
		title: 'Another awesome book4',
		parentId: "0001",
		sort: 'Another',
		text: '123If you like to walk through this tutorial yourself, we recommend either running a new React project locally with Create React App or creating a new React sandbox on CodeSandbox.',
	},
	{
		id: '0005',
		title: 'Another awesome book5',
		parentId: "0002",
		sort: 'Another',
		text: '123If you like to walk through this tutorial yourself, we recommend either running a new React project locally with Create React App or creating a new React sandbox on CodeSandbox.',
	},
	{
		id: '0006',
		title: 'Another awesome book6',
		parentId: "0002",
		sort: 'Another',
		text: '123If you like to walk through this tutorial yourself, we recommend either running a new React project locally with Create React App or creating a new React sandbox on CodeSandbox.',
	},

];

const root = {
	getList: () => {
		return allItems;
	},
	getItem: params => {
		return allItems.find(({ id }) => params.id === id);
	},
};

const app = express();

app.use(cors());

app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true
	})
);

app.listen(6006);

console.log('Running a GraphQL API server at http://localhost:6006/graphql');
