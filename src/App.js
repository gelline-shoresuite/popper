import React, { Component } from 'react';
import Poppers from './Popper'

import RadioTest from './RadioTest'

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      radioInput: '',
    }
  }

  testEvent = (event) =>{
    this.setState({radioInput: event.target.value}, ()=>
    {
      console.log(this.state.radioInput);
    });
  }

  render() {
    return (
      <div className="App">
        <Poppers popperKey="1" popupText={<RadioTest yes="yes" no="no" onClick={this.testEvent}/>} buttonText="Hello World"/> 
        <div>
          <input type="radio" name="radioSample" value="Yes"/> Sample
        </div>
        <Poppers popperKey="2" popupText="GoodBye GoodBye GoodBye GoodBye  " buttonText="Click Me!"/>
      </div>
    );
  }
}

export default App;
