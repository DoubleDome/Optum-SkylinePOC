import fetch from 'isomorphic-unfetch';
import React from 'react';
import Layout from '../layouts/Layout';
import Header from '../components/Header';
import ActionTiles from '../components/ActionTiles';
import OrderList from '../components/OrderList';
import RetailMedicationList from '../components/RetailMedicationList';
import ActiveMedicationList from '../components/ActiveMedicationList';

async function callAPI(URL) {
  const response = await fetch(URL);
  return await response.json();
}
class Index extends React.Component {
  static async getInitialProps() {
    const result = {};
    result.user = await callAPI('http://localhost:3001/user/047017a4-1e89-46e6-8bea-aff3a94c6010');
    result.content = await callAPI(`http://localhost:3001/content/${result.user.type}`);
    return result;
  }

  generateComponent(name, props) {
    let component;
    switch (name) {
      case 'header':
        component = <Header labels={props.labels} data={props.data}></Header>;
        break;
      case 'actionTiles':
        component = <ActionTiles labels={props.labels} data={props.data}></ActionTiles>;
        break;
      case 'orderList':
        component = <OrderList labels={props.labels} data={props.data}></OrderList>;
        break;
      case 'activeMedications':
        component = <ActiveMedicationList labels={props.labels} data={props.data}></ActiveMedicationList>;
        break;
      case 'retailMedications':
        component = <RetailMedicationList labels={props.labels} data={props.data}></RetailMedicationList>;
        break;
    }
    return component;
  }

  fetchComponents(content) {
    const result = [];
    content.layout.forEach(component => {
      result.push(this.generateComponent(component.type, component));
    });
    return result;
  }

  render() {
    return <Layout>{this.fetchComponents(this.props.content).map(component => component)}</Layout>;
  }
}

export default Index;
