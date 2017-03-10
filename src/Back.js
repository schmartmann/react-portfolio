import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Back extends Component {
  render(){
    return(
      <div className="back">
        <ul>
          <li><Link to="/">Back.</Link></li>
        </ul>
      </div>
    )
  }
}
