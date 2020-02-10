import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Head from 'next/head';

function GlobalStyles() {
  return (
    <style jsx>{`
      body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
      }
      .contentContainer {
        width: 900px;
        margin-right: auto;
        margin-left: auto;
      }
      button.solid {
        background-color: #47aab5;
        color: #fff;
        padding: 5px 15px;
        border: 1px solid #47aab5;
      }
      button.knockout {
        background-color: #fff;
        color: #47aab5;
        padding: 5px 15px;
        border: 1px solid #47aab5;
      }
    `}</style>
  );
}

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>
        </Head>
        <GlobalStyles></GlobalStyles>
        <Navigation></Navigation>
        <section className="contentContainer">{this.props.children}</section>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default Layout;
