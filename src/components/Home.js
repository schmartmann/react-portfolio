import React, { Component } from 'react';
import { Link } from 'react-router'
import Splash from './Splash';
import '../stylesheets/Home.css';
import setColorScheme from './colorScheme';

export default class Home extends Component {
  componentWillMount() {
    var path = this.props.location.pathname
    setColorScheme( path );
  }
  render() {
    return(
      <div>
        <Splash/>
        <div id="nav">
          <Link to="/writing">
            <div>
                <li>Writing</li>
            </div>
          </Link>
          <Link to="/code">
            <div>
                <li>Code</li>
            </div>
          </Link>
          <Link to="/about">
            <div>
                <li>About</li>
            </div>
          </Link>
          <Link to="/contact">
            <div>
                <li>Contact</li>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}
