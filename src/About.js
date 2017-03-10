import React, { Component } from 'react';
import Back from './Back';


export default class About extends Component {
  render() {
    return(
      <div id="about">
        <Back/>
        <ul>
          <li>
            Web Developer
          </li>
          <li>
            Writer
          </li>
        </ul>
      </div>
    )
  }
}
