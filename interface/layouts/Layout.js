import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Head from 'next/head';
import morningSVG from '../assets/svgs/morning-landscape.svg';

function GlobalStyles() {
  return (
    <style jsx global> {`
      @font-face {
          font-family: 'Frutiger-Bold';
          src: url("../fonts/FrutigerLTPro-Bold.otf") format("otf")
      }
      
      @font-face {
          font-family: 'Frutiger-Light';
          src: url("../fonts/FrutigerLTPro-Light.otf") format("otf"),
      }
      
      @font-face {
          font-family: 'Frutiger-Roman';
          src: url("../fonts/FrutigerLTPro-Roman.otf") format("otf"),
      }
      h1,
h2,
h3,
h4,
h5 {
    margin: 0;
    margin-bottom: 25px;
    font-weight: 600;
    font-family: 'Frutiger-Bold';
}
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
    `} </style>
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
