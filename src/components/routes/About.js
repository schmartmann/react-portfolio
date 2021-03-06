import React, { Component } from 'react';
import Back from '../Back';
import Portrait from '../Portrait';
import { Link } from 'react-router'
import '../../stylesheets/About.css';
import setColorScheme from '../colorScheme';


export default class About extends Component {
  componentWillMount() {
    var path = this.props.location.pathname
    setColorScheme( path );
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
