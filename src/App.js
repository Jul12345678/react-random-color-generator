import './App.css';
import { waitForElementToBeRemoved } from '@testing-library/react';
import React, { useState } from 'react';

const App = () => {
  const [hex, setHex] = useState('#ffffff');
  const randomizedHex = () => {
    // "#"gives final hex code /this line prints all whole numbers between 0 and 16777215 / toString gives letters for hex code
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    setHex(randomColor);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: `${hex}`,
        minHeight: '33.34vh',
        overflow: 'hidden',
        zoom: 3,
      }}
    >
      <h1>{hex}</h1>
      <button onClick={randomizedHex}>Randomize</button>
      <button onClick={() => navigator.clipboard.writeText(hex)}>
        CopyColor
      </button>
    </div>
  );
};

export default App;
