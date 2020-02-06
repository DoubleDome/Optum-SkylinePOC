import fetch from 'isomorphic-unfetch';
import React from 'react';
import Layout from '../layouts/Layout';
import Header from '../components/Header';
import ActionTiles from '../components/ActionTiles';
import OrderList from '../components/OrderList';

class Index extends React.Component {
  static async getInitialProps() {
    const result = {};
    result.user = await this.callAPI('http://localhost:3001/user/patient');
    result.content = await this.callAPI(`http://localhost:3001/content/${result.user.type}`);
    return result;
  }

  static async callAPI(URL) {
    const response = await fetch(URL);
    return await response.json();
  }


  generateComponent(name, props) {
    let component;
    switch (name) {
      case 'header':
        component = <Header labels={props.labels} data={props.data}></Header>;
        break;
      case 'orderList':
        component = <OrderList labels={props.labels} data={props.data}></OrderList>;
        break;
      case 'actionTiles':
        component = <ActionTiles data={props.data}></ActionTiles>;
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
