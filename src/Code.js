import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Code extends Component {
  render(){
    return(
      <div>
        <div>
          <ul>
            <li><Link to="/">Back.</Link></li>
          </ul>
          <div className="projects">
            <div id="petinder">
              <p>
                ReactJS + Redux & Rails app that geolocates users<br/>
                and finds adoptable pets via the Petfinder API.
              </p>
              <a href="http://petinder_react.pet-tinder.com/">
                <img class="dev-port-img" src="img/petinder.png"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
