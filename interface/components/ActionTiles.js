import React from 'react';
import ButtonList from './ButtonList';

function ActionTiles(props) {
  const tiles = [];
  props.data.map((tile, index) => {
    tiles.push(
      <ActionTile
        key={index}
        title={tile.title}
        subtitle={tile.subtitle}
        body={tile.body}
        buttons={tile.buttons}
      ></ActionTile>
    );
  });
  return (
    <React.Fragment>
      <ActionTileStyles></ActionTileStyles>
      <ul className="actionTiles">{tiles}</ul>
    </React.Fragment>
  );
}
function ActionTile(props) {
  return (
    <li className="actionTile">
      <p>{props.title}</p>
      <p>{props.subtitle}</p>
      <p>{props.body}</p>
      <ButtonList buttons={props.buttons}></ButtonList>
    </li>
  );
}

function ActionTileStyles() {
  return (
    <style jsx>{`
      .actionTiles {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
      .actionTile {
        float: left;
        width: 270px;
        margin: 0 10px 0 0;
        padding: 10px;
        border: 1px solid #ebebeb;
        height: 250px;
        position:relative;
      }
      .actionTile:last-child {
        margin: 0 0 0 0;
      }
    `}</style>
  );
}

export default ActionTiles;
