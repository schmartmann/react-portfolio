import React, { Component } from 'react';
import Back from './Back';

export default class Contact extends Component {
  render() {
    return(
      <div id="contact">
        <Back/>
        <h2>Contact Me</h2>
        <ul className="projects-list">
          <li><a href="mailto:stefanhartmann@gmail.com"><img className="icon" src="img/email-512.png"/></a></li>
          <li><a href="https://github.com/schmartmann"><img className="icon" src="img/github-256.png"/></a></li>
          <li><a href="https://www.linkedin.com/in/schmartmann00"><img className="icon" src="img/bw-linkedin.png"/></a></li>
        </ul>
      </div>
    )
  }
}
