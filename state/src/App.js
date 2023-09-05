import './App.css';
import React, { Component } from 'react'
import NewComp from './Components/NewComp';

export class App extends Component {
  style = {
    fontStyle: "bold",
    color: "teal"
  }
  render() {
    return (
      <div className="App">
        <h1 style={this.style}>Welcome</h1>
        <NewComp />
      </div>
    )
  }
}

export default App;