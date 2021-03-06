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
    this.setState({active: !currentState})
  }

  render(){
    return(
      <div key={this.props.popperKey} className='popperContainer'>
        <div className={'poppers arrow-top ' + (this.state.active? 'active': '')}>{this.props.popupText}</div>
        <button onClick={this.toggleClass} className='theButton'>{this.props.buttonText}</button>
      </div>

    )
  }
}

export default Popper;