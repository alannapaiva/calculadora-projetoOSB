import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora</h1>
        <div className='App-input'> 
          <input type="number" id="value01" name="value01"/>
          <input type="number" id="value02" name="value02"/>
        </div>
        <div>
          <button>+</button>
        </div>
      </header>

    </div>
   
  );
}

export default App;
