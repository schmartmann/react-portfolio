import React, { Component } from 'react';
import Home from './Home';
import cookie from 'react-cookie';

export default class Splash extends Component {
  constructor() {
    super();
    this.state = { show: true }
  }
  componentWillMount() {
    if(!cookie.load('uGotSCHarted')){
      this.setState({ show: true})
    } else {
      this.setState({ show: false})
    }
  }
  toggleShow() {
    this.setState({ show: !this.state.show });
    cookie.save('uGotSCHarted', true, { path: '/'})
  }
  render() {
    return(
      <div>
        { this.state.show?
          (
            <div id="splash" onClick={ () => this.toggleShow()}>
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
