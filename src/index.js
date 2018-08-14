import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/App';
import Writing from './components/Writing';
import Code from './components/Code';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Splash from './components/Splash';
import assignBackground from './components/Background';
import './index.css';

ReactDOM.render(
  (
    <Router history={ browserHistory } >
      <Route path="/" component={ App }>
        <IndexRoute component={ Home }
          onEnter={ assignBackground( '/home') } />
        <Route path="/writing"
          component={ Writing }
          onEnter={ assignBackground( '/writing') } />
        <Route path="/code"
          component={ Code }
          onEnter={ assignBackground( '/code') } />
        <Route path="/about"
          component={ About }
          onEnter={ assignBackground( '/about') }/>
        <Route path="/contact"
          component={ Contact }
          onEnter={ assignBackground( '/contact') }/>
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
