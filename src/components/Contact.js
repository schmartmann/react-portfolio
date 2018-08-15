import React, { Component } from 'react';
import Back from './Back';
import Portrait from './Portrait';
import '../stylesheets/Contact.css';
import setColorScheme from './colorScheme';

export default class Contact extends Component {
  componentWillMount() {
    var path = this.props.location.pathname
    setColorScheme( path );
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
