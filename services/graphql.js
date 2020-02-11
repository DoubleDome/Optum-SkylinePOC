const express = require('express');
const graphqlHTTP = require('express-graphql');
const fetch = require('isomorphic-unfetch');
const { buildSchema } = require('graphql');
const baseURL = 'http://localhost:3001';
const port = 3002;

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType
} = require('graphql');

const app = express();

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    user: User
  }
  type User {
    id: Int,
    type: String,
    name: String,
    managingUsers: [User]
  }

`);

// The root provides a resolver function for each API endpoint
const root = {
  user: getUser
};

async function callAPI(relativeURL) {
  return fetch(`${baseURL}${relativeURL}`).then(res => res.json());
}

function getUser() {
  return callAPI('/user/100000');
}

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(port, () => console.log(`GraphQL service listening on port ${port}!`));
