import React, { Component } from 'react';
import Back from './Back';

export default class Resume extends Component {
  render() {
    return(
      <div id="resume">
        <Back/>
        <img src="img/resume.pdf"/>
      </div>
    )
  }
}
