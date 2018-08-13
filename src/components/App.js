import React, { Component } from 'react';
import logo from '../logo.svg';
import '../stylesheets/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { show: false }
  }
  toggleShow() {
    this.setState({ show: !this.state.show });
  }
  render() {
    if ( !this.state.show ) {
      return (
        <div id="splash" onClick={ () => this.toggleShow() }>
          <p>stefan:</p>
          <p>developer.</p>
          <p>writer.</p>
        </div>
      )
    } else {
      return (
        <div className="App">
          { this.props.children }
        </div>
      );
    }
  }
}

export default App;
