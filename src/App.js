import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {CalculatorComponent} from "./components/calculator.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <CalculatorComponent />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
