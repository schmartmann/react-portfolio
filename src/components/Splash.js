import React, { Component } from 'react';
import Home from './Home';
import '../stylesheets/Splash.css';


export default class Splash extends Component {
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
