import React from 'react';
import './App.css';
import Calculator from './Calculator'

function App() {
  return (
    <div className="layout">
      <div className='card'>
        <div>
          <Calculator />
        </div>
      </div>
      <h3 className='footer'>A partner you can trust</h3>
    </div>
  );
}

export default App;
