import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Home extends Component {
  componentDidMount(){
    var body = document.querySelector('body');
    body.className = '';
  }
  render() {
    return(
      <div>
        <ul id="nav">
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
        </ul>
      </div>
    )
  }
}
