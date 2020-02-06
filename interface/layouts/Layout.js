import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function GlobalStyles() {
  return (
    <style jsx>{`
      body {
        margin: 0;
        padding: 0;
      }
      .contentContainer {
        width: 900px;
        margin-right:auto;
        margin-left:auto;
      }
    `}</style>
  );
}

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyles></GlobalStyles>
        <Navigation></Navigation>
        <section className="contentContainer">{this.props.children}</section>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default Layout;
