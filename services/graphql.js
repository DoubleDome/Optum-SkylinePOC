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

async function getUser(root, args, context) {
  let result = await fetchAsJSON(`/user/${root.id}`);
  result.orders = await fetchAsJSON(`/orders/${root.id}`);
  result.managingUsers = await fetchAsJSON(`/user/managedBy/${root.id}`);
  result.activeMedications = await fetchAsJSON(`/medications/${root.id}/active`);
  result.retailMedications = await fetchAsJSON(`/medications/${root.id}/retail`);

  return result;
}

async function getTemplate(root, args, context) {
  let result = await fetchAsJSON(`/content/template/${root.id}`);
  return result;
}

async function getManagedUsers(root, args, context) {
  let result = await fetchAsJSON(`/user/managedBy/${root.id}`);
  return result;
}

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    user(id: String): User,
    template(id: String): Template,
    managedUsers(id: String): [User]
  }
  type User {
    id: String,
    type: String,
    name: String,
    address: String,
    city: String,
    state: String,
    zipcode: String,
    orders: [Order],
    managingUsers: [User],
    activeMedications: [Medication],
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
    name: String,
    dosage: String,
    price: String,
    savingsAmount: Float,
    supplyAmount: Int,
    refillDate: String,
    autoRefill: String,
    refillCount: String
  }

  type Template {
    header:Header
    activeMedications:ActiveMedications
  }

  
  type Header implements ContentBlock {
    componentName:String,
    componentOrder:Int,
    morningSalutation:String,
    subtitle:String
  }
  type ActiveMedications implements ContentBlock {
    componentName:String,
    componentOrder:Int,
    sectionTitle:String,
    fillAllMedicationsLabel:String,
    homeDeliverySavingsLabel:String,
    readyForRefillLabel:String,
    archiveLabel:String,
    autoRefillLabel:String,
    refillsRemainingLabel:String,
    supplyLabel:String
  }

  interface ContentBlock {
    componentName:String,
    componentOrder:Int
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  user: getUser,
  template: getTemplate,
  managedUsers: getManagedUsers
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
