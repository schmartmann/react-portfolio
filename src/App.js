import React, { Component } from 'react';
import { Link } from 'react-router'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul role="nav">
          <li><Link to="/writing">Writing</Link></li>
          <li><Link to="/code">Code</Link></li>
        </ul>
        { this.props.children }
      </div>
    );
  }
}

export default App;
