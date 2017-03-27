import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Back extends Component {
  render(){
    return(
      <div className="back">
        <Link to="/">Back.</Link>
      </div>
    )
  }
}
