import React, { useState, useEffect } from 'react';


import './App.css';

function App() {
  return (
    <div className="App">
      <div className="weatherContainer">
        <div className='weatherLeft'>
          <h3>New York, NY</h3>
          <h4>Thursday 17 August 2023</h4>
          <h1>80 degrees</h1>
          <h4>Feels like 83 degrees</h4>
          <h3>Overcast Clouds</h3>
        </div>
        <div className='weatherRight'>
          <h3>(Cloud Image)</h3>
        </div>
      </div>
    </div>
  );
}

export default App;