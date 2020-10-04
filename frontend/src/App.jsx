import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './Components/List.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Martin's tools</h1>
        <List listElements={["hei","du","der"]} />
      </header>
    </div>
  );
}

export default App;
