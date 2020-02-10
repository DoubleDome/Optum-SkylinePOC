import React from 'react';

function HeaderStyles() {
  return (
    <style jsx>{`
      .header {
        text-align: center;
        display: block;
        margin: 50px 0;
      }
    `}</style>
  );
}

function Header(props) {
  return (
    <React.Fragment>
      <HeaderStyles></HeaderStyles>
      <section className="header">
        <h1>
          {props.labels.salutation} {props.data.name}
        </h1>
        <h2>{props.labels.subtitle}</h2>
      </section>
    </React.Fragment>
  );
}

export default Header;
