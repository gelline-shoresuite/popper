import React, { Component } from 'react';
import './App.css';
import Poppers from './Popper'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Poppers popperKey="1" popupText="Hello"/> 
      </div>
    );
  }
}

export default App;
