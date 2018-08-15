import React, { Component } from 'react';
import '../stylesheets/Portrait.css';

export default class Portrait extends Component {
  constructor() {
    super();
    this.state = {
      class: "spin-left pause"
    }
  }
  randDir(){
    let randNum = Math.floor(Math.random() * 10);
    let str;
    if (randNum > 5){
      str = "spin-left";
    } else {
      str = "spin-right";
    }
    return str
  }
  startHover() {
    switch(this.state.class){
      case "spin-left pause" || "spin-left":
        this.setState({class: "spin-right"});
        break;
      case "spin-right pause"  || "spin-right":
        this.setState({class: "spin-left"});
        break;
      case null:
        this.setState({class: this.randDir()})
        break;
      default:
        this.setState({class: this.randDir()})
    }
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
        onTouchStart={() => this.startHover()}
        onTouchEnd={() => this.stopHover()}
        onTouchCancel={() => this.stopHover()}
        className={this.state.class}/>
    )
  }
}
