import React, {useState} from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0)


  const sum = () =>{
    setResult(num1+num2);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora</h1>
        <div className='App-input'> 
          <input onChange={(e)=> setNum1(Number(e.target.value))} type="number" id="value01" name="value01"/>
          <input onChange={(e)=> setNum2(Number(e.target.value))} type="number" id="value02" name="value02"/>
        </div>
        <button onClick={()=> sum() }>+</button>
        <h3 className='App-result'> {result}</h3>
      </header>
    </div>
   
  );
}

export default App;
