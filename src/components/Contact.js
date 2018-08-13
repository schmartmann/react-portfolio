import React, { Component } from 'react';
import Back from './Back';
import Portrait from './Portrait';
import '../stylesheets/Contact.css';

export default class Contact extends Component {
  componentDidMount() {
    var body = document.querySelector('body');
    body.className += 'contactRoute'
  }
  render() {
    return(
      <div id="contact">
        <Back/>
        <h2>Contact Me</h2>
        <div className="projects-list">
          <a href="mailto:stefanhartmann@gmail.com"><img className="icon" src="img/email-512.png"/></a>
          <a href="https://github.com/schmartmann"><img className="icon" src="img/github-256.png"/></a>
          <a href="https://www.linkedin.com/in/schmartmann00"><img className="icon" src="img/bw-linkedin.png"/></a>
          <Portrait/>
        </div>
      </div>
    )
  }
}
