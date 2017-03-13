import React, { Component } from 'react';
import Back from './Back';


export default class About extends Component {
  componentDidMount() {
    var body = document.querySelector('body');
    body.className += 'aboutRoute'
  }
  render() {
    return(
      <div id="about">
        <Back/>
        <ul>
          <li>
            I'm a web developer.
          </li>
          <li>
            I'm a writer.
          </li>
          <li>
            I have a genetic defect where sunlight makes me sneeze.
          </li>
          <li>
            Okay thanks bye.
          </li>
        </ul>
      </div>
    )
  }
}
