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
    user(id: String): User
    orders(id: String): [Order]
  }
  type User {
    id: String,
    type: String,
    name: String,
    managingUsers: [User],
    orders: [Order]
  }
  type Order {
    id: String,
    type: String,
    medication: String,
    estimatedDeliveryDate: String,
    orderStatus: String,
    status: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  user: getUser,
  orders: getOrders
};

async function callAPI(relativeURL) {
  return fetch(`${baseURL}${relativeURL}`).then(res => res.json());
}

function getUser(params) {
  return callAPI(`/user/${params.id}`);
}
function getOrders(params) {
  return callAPI(`/orders/${params.id}`);
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
