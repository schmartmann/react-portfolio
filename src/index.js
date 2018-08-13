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

import './index.css';

ReactDOM.render((
  <Router history={ browserHistory } >
    <Route path="/" component={ App }>
      <Route path="/home" component={ Home }/>
      <Route path="/writing" component={ Writing } />
      <Route path="/code" component={ Code }/>
      <Route path="/about" component={ About } />
      <Route path="/contact" component={ Contact } />
    </Route>
  </Router>
),document.getElementById('root')
);
