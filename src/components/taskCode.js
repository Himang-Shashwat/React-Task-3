import React, { useState } from 'react';
import ColorCard from './colorCard.js';
import './taskCSS.css';

const colorOptions = [
  'red', '#08fc04', 'blue', 'yellow', '#ff04fc', 'cyan', '#ffa404', 'purple',
  'pink', 'green', '#ff6444', '#08ccd4', 'brown', '#ff9004', 'grey', '#ffd404'
];

function Code() {
  const [changedColor, setChangedColor] = useState('wheat');

  const handleChange = (color) => {
    setChangedColor(color);
  };

  const holderStyle = {
    backgroundColor: changedColor
  };

  return (
    <div className="card cardHolder d-flex rounded-3 shadow p-3 mb-5 rounded h-100" style={holderStyle}>
      <div className="row justify-content-between w-100">
        {colorOptions.map((color, index) => (
          <div className="col" key={index}>
            <ColorCard color={color} onClick={() => handleChange(color)} />
          </div>
        ))}
      </div>
      <p className="pTask">Pick a Color</p>
    </div>
  );
}

export default Code;
