const express = require('express');
const graphqlHTTP = require('express-graphql');
const fetch = require('isomorphic-unfetch');
const { buildSchema } = require('graphql');
const baseURL = 'http://localhost:3001';
const port = 3002;
const app = express();

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType
} = require('graphql');

function fetchAsPromise(relativeURL) {
  return fetch(`${baseURL}${relativeURL}`);
}

function fetchAsJSON(relativeURL) {
  return fetch(`${baseURL}${relativeURL}`).then(res => res.json());
}

function getUser(params) {
  return fetchAsJSON(`/root/${params.id}`);
}

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    user(id: String): User
  }
  type User {
    id: String,
    type: String,
    name: String,
    orders: [Order]
    managingUsers: [User]
    activeMedications: [Medication]
    retailMedications: [Medication]
  }
  type Order {
    id: String,
    type: String,
    medication: String,
    estimatedDeliveryDate: String,
    orderStatus: String,
    status: String
  }
  type Medication {
    medication: String,
    dosage: String,
    price: String,
    savingsAmount: String,
    supplyAmount: String,
    refillDate: String,
    autoRefill: String,
    refillCount: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  user: getUser
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(port, () => console.log(`GraphQL service listening on port ${port}!`));
