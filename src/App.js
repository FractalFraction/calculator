import React from 'react'
import './App.css';
import Calculator from './components/Calculator/Calculator.js'

function App() {
  return (
    <div className="App">
      <h1 data-testid="header">Calculator</h1>
      <Calculator/>
    </div>
  );
}

export default App;
