import React, { Component } from 'react';

export default class Portrait extends Component {
  constructor() {
    super();
    this.state = {
      class: null
    }
  }
  startHover() {
    let direction = '';
    let rand = Math.floor(Math.random() * 100);
    if ( rand > 50) {
      direction = "left"
    } else {
      direction = "right"
    };
    this.setState({class: `spin-${direction}`})
  }
  stopHover() {
    let direction = this.state.class;
    this.setState({class: `${direction} pause`})
  }
  render() {
    return (
      <div id="portrait"
        onMouseOver={() => this.startHover()}
        onMouseLeave={() => this.stopHover()}
        className={this.state.class}/>
    )
  }
}
