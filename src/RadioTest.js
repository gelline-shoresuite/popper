import React, { Component } from 'react'

class RadioTest extends Component {
  constructor(props){
    super(props);

    this.state={
      radioValue: 'default',
    }
  }

  radioChange = (event) =>{
    this.setState({radioValue: event.target.value})
    
  }


  render() {
    return (
    <div>
        <input type="radio" name="Test" value="Yes" onClick={this.radioChange}/> {this.props.yes}
        <input type="radio" name="Test" value="No" onClick={this.radioChange}/> {this.props.no}
    </div>  
    )
  }
}

export default RadioTest
