import React from 'react';

function ButtonList(props) {
  const buttons = [];
  props.buttons.map((button, index) => {
    buttons.push(<Button label={button.label} type={button.type} key={index}></Button>);
  });
  return <div>{buttons}</div>;
}

function Button(props) {
  return (
    <button className={props.type}>
      {props.label}
    </button>
  );
}

export default ButtonList;
