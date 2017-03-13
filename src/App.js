import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = { show: false }
  }
  toggleShow() {
    this.setState({ show: !this.state.show });
  }
  render() {
    if (!this.state.show){
      return (
        <div id="splash" onClick={ () => this.toggleShow()}>
          <p>stefan:</p>
          <p>writer.</p>
          <p>developer.</p>
          <p>ugh.</p>
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
