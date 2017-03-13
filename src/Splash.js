import React, { Component } from 'react';
import Home from './Home';

export default class Splash extends Component {
  componentDidMount(){
    var body = document.querySelector('body');
    body.className = '';
  }
  render() {
    return(
      <div>
        <div id="home">
          <Home/>
        </div>
      </div>
    )
  }
}
