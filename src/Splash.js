import React, { Component } from 'react';
import Home from './Home';

export default class Splash extends Component {
  constructor() {
    super();
    this.state = { show: true }
  }
  toggleShow() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return(
      <div>
        { this.state.show?
          (
            <div id="splash" onClick={ () => this.toggleShow()}>
              <p>stefan:</p>
              <p>writer.</p>
              <p>developer.</p>
              <p>ugh.</p>
            </div>
          ) : (
            <div id="home">
              <Home/>
            </div>
          )
        }
      </div>
    )
  }
}
