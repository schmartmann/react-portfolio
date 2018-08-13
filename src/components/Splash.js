import React, { Component } from 'react';
import { Link } from 'react-router'
import '../stylesheets/Splash.css';


export default class Splash extends Component {
  render() {
    return(
      <div>
        <div id="home">
          <div id="splash">
            <p>stefan:</p>
            <p>developer.</p>
            <p>writer.</p>
          </div>
        </div>
      </div>
    )
  }
}
