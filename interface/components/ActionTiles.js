import React, {useState} from 'react';
import ButtonList from './ButtonList';

function ActionTiles(props) {
  const tiles = [];
  // const [tileImages, setTileImages] = useState([])

  // const createTiles = () => {
  //   props.data.map( async (tile, index) => {
  //     tile.url = await import(tile.svgPath);
  //   });
  // }

  props.data.map((tile, index) => {
    tiles.push(
      <ActionTile
        key={index}
        title={tile.title}
        subtitle={tile.subtitle}
        body={tile.body}
        buttons={tile.buttons}
        color={tile.color}
        svgPath={tile.svgPath}
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
  const {title, subtitle, body, buttons, color, svgPath} = props;
  const url = require(`../assets/svgs/${svgPath}.svg`);
  const style =  {
    "background-color": color
  }

  return (
    <li className="actionTile card">
     <div className={`card-header`} style={style}>
        <p className="card-title">{title}</p>
        <img src={url} alt=""/>
     </div>
      <div className="card-body">
        <p className="card-headline">{subtitle}</p>
        <p className="card-body-text">{body}</p>

        <div className="button-list-wrapper">
          <ButtonList buttons={buttons}></ButtonList>
        </div>
      </div>
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
        justify-content: center;
      }
      .actionTile {
        width: 290px;
        margin: 0 10px 0 0;
        position:relative;
        display: flex;
      }
      .actionTile:last-child {
        margin: 0 0 0 0;
      }
      .card-header, .card-body {
        padding: 10px;
        box-sizing: border-box;
      }
      .card-header {
        height: 115px;
        width: 100%;
        display: flex;
        justify-content: space-between;

      }
      .card-header > img {
        margin-bottom: 0;
        margin-top: auto;
        margin-right: 10px;
        height: calc(100% + 50px);
      }
      .card-body {
        background-color: white;
        display: flex;
        flex-direction: column;
        flex: 1;
        padding-bottom: 25px;
      }
      .card-title{
        font-family: Helvetica;
        font-size: 14px;
        font-weight: 700;
        color: #FFFFFF;
        line-height: 1;
        margin: 0;
      }
      .card-headline {
        font-family: 'Open Sans', sans-serif;
        font-size: 18px;
        font-weight: 400;
        color: #444444;
        line-height: 1.4;
      }
      .card-body-text {
        font-family: 'Open Sans', sans-serif;
        color: #444444;
        line-height: 1.4;
        margin-bottom: 25px;
      }
      .button-list-wrapper {
          margin: auto 0 0 0;
      }
    `}</style>
  );
}

export default ActionTiles;
