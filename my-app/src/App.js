import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Card
              id="1"
              name="Sam"
              image="./img/Test.jpg"
              key="{card.id}"
              isPicked="false"
            />

<Card
              id="2"
              name="Brandon"
              image="./img/brandon.jpg"
              key="{card.id}"
              isPicked="false"
            />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
