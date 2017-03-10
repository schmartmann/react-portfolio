import React, { Component } from 'react';


export default class Petinder extends Component {
  render(){
    return(
      <div id="petinder">
        <p>
          ReactJS + Redux & Rails app that geolocates users<br/>
          and finds adoptable pets via the Petfinder API.
        </p>
        <a href="http://petinder_react.pet-tinder.com/">
          <img class="dev-port-img" src="img/petinder.png"/>
        </a>
      </div>
    )
  }
}
