import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Home extends Component {
  render() {
    return(
      <div>
        <ul role="nav">
          <li><Link to="/writing">Writing</Link></li>
          <li><Link to="/code">Code</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    )
  }
}
