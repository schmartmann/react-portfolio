import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Home extends Component {
  render() {
    return(
      <div>
        <ul id="nav">
          <div>
            <Link to="/writing">
              <li>Writing</li>
            </Link>
          </div>
          <div>
            <Link to="/code">
              <li>Code</li>
            </Link>
          </div>
          <div>
            <Link to="/about">
              <li>About</li>
            </Link>
          </div>
          <div>
            <Link to="/resume">
              <li>Resume</li>
            </Link>
          </div>
          <div>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
          </div>
        </ul>
      </div>
    )
  }
}
