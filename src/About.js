import React, { Component } from 'react';
import Back from './Back';
import Portrait from './Portrait';
import { Link } from 'react-router'

export default class About extends Component {
  componentDidMount() {
    var body = document.querySelector('body');
    body.className += 'aboutRoute'
  }
  render() {
    return(
      <div id="about">
        <Back/>
          <p>
            I'm a <Link to="/code">web developer.</Link>
          </p>
          <p>
            I'm a <Link to="/writing">writer.</Link>
          </p>
          <p>
            I have a genetic defect where sunlight makes me sneeze.
          </p>
          <p>
            Okay thanks bye.
          </p>
          <Portrait/>
      </div>
    )
  }
}
