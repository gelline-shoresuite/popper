import React, { Component } from 'react';
import Poppers from './Popper'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Poppers popperKey="1" popupText="Hello" buttonText="Hello World"/> 
        <Poppers popperKey="2" popupText="GoodBye GoodBye GoodBye GoodBye  " buttonText="Click Me!"/>
      </div>
    );
  }
}

export default App;
