import React, { Component } from 'react';
import { Link } from 'react-router'
import '../stylesheets/Back.css';


export default class Back extends Component {
  render(){
    return(
      <div className="back">
        <Link to="/">Back.</Link>
      </div>
    )
  }
}
