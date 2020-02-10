import React from 'react';

function SliderStyles() {
  return (
    <style jsx>{`
      .sliderContainer {
        margin-top: 40px;
        width: 300px;
        float: right;
      }
      .slider {
        -webkit-appearance: none;
        width: 300px;
        height: 10px;
        border-radius: 5px;
        background: #d3d3d3;
        outline: none;
      }

      .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #47aab5;
        cursor: pointer;
      }

      .slider::-moz-range-thumb {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #47aab5;
        cursor: pointer;
      }
    `}</style>
  );
}
function Slider(props) {
  let position = {
    order: 0,
    process: 25,
    ship: 75,
    deliver: 100
  };
  return (
    <React.Fragment>
      <SliderStyles></SliderStyles>
      <div className="sliderContainer">
        <input
          type="range"
          min="1"
          max="100"
          value={position[props.orderStatus]}
          className="slider"
          id="myRange"
        ></input>
      </div>
    </React.Fragment>
  );
}

export default Slider;
