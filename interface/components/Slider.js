import React from 'react';
import {Slider, withStyles} from '@material-ui/core';


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

function valueText(value){
  return value
}
function determineDefaultValue(orderStatus, marks = []){
 const mark = marks.find(mark => {
    return mark.label.toLowerCase() === orderStatus.toLowerCase();
  })

  return mark.value
}

function CustomSlider(props) {
  const {marks, orderStatus, status} = props;
  const defaultValue = determineDefaultValue(orderStatus, marks)

  const color = status !== 'ok' ? '#E0722D' : '#00828D';
  const PrettoSlider = withStyles({
    root: {
      color,
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      // backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus,&:hover,&$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);



  return (
    <React.Fragment>
      <SliderStyles></SliderStyles>
      <div className="sliderContainer">
      <PrettoSlider
        defaultValue={defaultValue}
        getAriaValueText={valueText}
        aria-labelledby="discrete-slider-custom"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
        {/* <input
          type="range"
          min="1"
          max="100"
          value={position[props.orderStatus]}
          className="slider"
          id="myRange" 
        ></input> */}
      </div>
    </React.Fragment>
  );
}

export default CustomSlider;
