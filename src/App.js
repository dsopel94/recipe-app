import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Recipe Creator</h1>
        </div>
        <p className="intro">
          Find out what you can create with the food in your fridge! Just type in ingredient names below 
          and recipe suggestions will pop up below
        </p>
        <div className="input-box">
        <input className="ingredient-name" id="ingredient-name" />
        </div>
      </div>
    );
  }
}

export default App;
