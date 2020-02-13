import fetch from 'isomorphic-unfetch';
import React from 'react';
import Layout from '../layouts/Layout';
import Header from '../components/Header';
import ActionTiles from '../components/ActionTiles';
import OrderList from '../components/OrderList';
import RetailMedicationList from '../components/RetailMedicationList';
import ActiveMedicationList from '../components/ActiveMedicationList';
import UserList from '../components/UserList';


async function callAPI(URL) {
  const response = await fetch(URL);
  return await response.json();
}
class Index extends React.Component {
  static async getInitialProps({query}) {
    return await callAPI(`http://localhost:3001/user/${query.id || '047017a4-1e89-46e6-8bea-aff3a94c6010'}`);
  }

  generateComponent(name, props, idx) {
    let component;

    switch (name) {
      case 'header':
        component = <Header key={idx} labels={props.labels} data={props.data}></Header>;
        break;
      case 'actionTiles':
        component = <ActionTiles key={idx} labels={props.labels} data={props.data}></ActionTiles>;
        break;
      case 'orderList':
        component = <OrderList key={idx} labels={props.labels} data={props.data}></OrderList>;
        break;
      case 'userList':
        component = <UserList key={idx} labels={props.labels} data={props.data}></UserList>;
        break;
      case 'activeMedications':
        component = <ActiveMedicationList key={idx} labels={props.labels} data={props.data}></ActiveMedicationList>;
        break;
      case 'retailMedications':
        component = <RetailMedicationList key={idx} labels={props.labels} data={props.data}></RetailMedicationList>;
        break;
    }
    return component;
  }

  fetchComponents(content) {
    const result = [];

    content.layout.forEach((component, idx) => {
      result.push(this.generateComponent(component.type, component, idx));
    });
    return result;
  }

  render() {
    return <Layout>{this.fetchComponents(this.props).map(component => component)}</Layout>;
  }
}

export default Index;
