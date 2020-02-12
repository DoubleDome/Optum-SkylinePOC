import React from 'react';

function Navigation(props) {
  return (
    <React.Fragment>
      <NavigationStyles></NavigationStyles>
      <nav className="topNavigation">
        <ul>
          <li>
            <img src={require('../assets/images/menu-icon.png')}></img>
          </li>
          <li>
            <img className="logo" src={require('../assets/images/logo.png')}></img>
          </li>
          <li>
            <img src={require('../assets/images/search-icon.png')}></img>
            <img src={require('../assets/images/cart-icon.png')}></img>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

function NavigationStyles() {
  return (
    <style jsx>{`
      .topNavigation {
        top: 0;
        left: 0;
        height: 40px;
        margin-top: 10px;
        margin-bottom: 10px;
        position: relative;
      }
      .topNavigation img {
        height: 35px;
        margin: 0 10px;
      }

      .topNavigation ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
      .topNavigation ul li {
        float: left;
        margin: 0 auto 0 auto 0;
        width: calc(100% / 3);
      }
      .topNavigation ul li:nth-child(2) {
        text-align: center;
      }
      .topNavigation ul li:last-child {
        text-align: right;
      }
    `}</style>
  );
}

export default Navigation;
