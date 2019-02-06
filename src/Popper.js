import React, { Component } from 'react';

import './Popper.css'

class Popper extends Component{
  constructor(props){
    super(props);
  
    this.state={
      active: false
    }

  }

  toggleClass = () =>{
    const currentState = this.state.active;
    this.setState({active: !currentState});

    console.log(currentState)
  }

  render(){
    return(
      <div key={this.props.popperKey}>
        <div className={(this.state.active? 'active': null) + ' poppers'}>{this.props.popupText}</div>
        <button onClick={this.toggleClass} className='theButton'>CLICK CLICK Me</button>
      </div>

    )
  }
}

export default Popper;