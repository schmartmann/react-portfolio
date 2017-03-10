import React, { Component } from 'react';
import ImageLoader from 'react-imageloader';


export default class Petinder extends Component {
  constructor() {
    super();
    this.state = { show : false }
  }
  toggleShow() {
    this.setState({ show: !this.state.show })
  }
  render(){
    const preloader = () => {
      (<div className="loader"></div>);
    }
    return(
      <div className="project">
        <p onClick={ () => this.toggleShow() }>
          peTinder
        </p>
        { this.state.show?
        (
          <div>
            <p>
              ReactJS + Redux & Rails app that geolocates users<br/>
              and finds adoptable pets via the Petfinder API.
            </p>
            <a href="http://petinder_react.pet-tinder.com/">
              <ImageLoader
                src="img/petinder.png"
                wrapper={React.DOM.div}
                preloader={preloader}>
                  Image failed to load.
                </ImageLoader>
            </a>
          </div>
        )
        :
        ''
        }
      </div>
    )
  }
}
