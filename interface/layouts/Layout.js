import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Head from 'next/head';
import morningSVG from '../assets/svgs/morning-landscape.svg';

function GlobalStyles() {
  return (
    <style jsx>{`
      .contentContainer {
        width: 900px;
        margin-right: auto;
        margin-left: auto;
      }
      .contentContainer > section {
        position: relative;
      }
      .morning-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
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
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap" rel="stylesheet"></link>
        </Head>
        <GlobalStyles></GlobalStyles>
        <img src={morningSVG} className="morning-bg"/>
        <Navigation></Navigation>
        <section className="contentContainer">{this.props.children}</section>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default Layout;
