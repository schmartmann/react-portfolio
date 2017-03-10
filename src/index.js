import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import cookie from 'react-cookie';

import App from './App';
import Writing from './Writing';
import Code from './Code';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Home from './Home';
import Splash from './Splash';

import './index.css';


ReactDOM.render((
  <Router history={ hashHistory } >
    <Route path="/" component={ App }>
      <IndexRoute component={ Splash }/>
      <Route path="/writing" component={ Writing } />
      <Route path="/code" component={ Code } />
      <Route path="/about" component={ About } />
      <Route path="/resume" component={ Resume } />
      <Route path="/contact" component={ Contact } />
    </Route>
  </Router>
),document.getElementById('root')
);
