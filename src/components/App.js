import React, { Component } from 'react';
import logo from '../logo.svg';
import '../stylesheets/App.css';

var colorScheme = {
  '/writing': {
    background: '#ffde8d',
    color: '#064273'
  },
  '/code': {
    background: '#E4939E',
    color: '#40FFE6'
  },
  '/contact': {
    background: 'black',
    color: 'white'
  },
  '/about': {
    color: '#CFE1B2',
    background: '#5771B2'
  },
  '/home': {
    background: '#349884'
  },
  '/': {
    background: '#349884'
  }
};


class App extends Component {
  render() {
    return (
      <div className="App" style={ colorScheme[ this.props.location.pathname ] }>
        { this.props.children }
      </div>
    );
  }
}

export default App;
