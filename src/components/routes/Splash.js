import React, { Component } from 'react';
import { Link } from 'react-router'
import '../../stylesheets/Splash.css';
import setColorScheme from '../colorScheme';

export default class Splash extends Component {
  componentWillMount() {
    var path = this.props.location.pathname
    setColorScheme( path );
  }
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
