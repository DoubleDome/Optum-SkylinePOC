import React from 'react';

function ButtonListStyles() {
  return (
    <style jsx>{`
      .buttonList {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .buttonList button {
        margin-right: 10px;
        border-radius: 5px;
        width: 100%;
        padding: 10px;
      }
      .buttonList button:last-child {
        margin-right: 0;
      }
    `}</style>
  );
}

function ButtonList(props) {
  const buttons = [];
  props.buttons.map((button, index) => {
    buttons.push(<Button label={button.label} type={button.type} key={index}></Button>);
  });
  return (
    <React.Fragment>
      <ButtonListStyles></ButtonListStyles>
      <div className="buttonList">{buttons}</div>
    </React.Fragment>
  );
}

function Button(props) {
  return <button className={props.type}>{props.label}</button>;
}

export default ButtonList;
