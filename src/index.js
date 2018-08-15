import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App';
import Writing from './components/routes/Writing';
import Code from './components/routes/Code';
import About from './components/routes/About';
import Contact from './components/routes/Contact';
import Home from './components/routes/Home';
import Splash from './components/routes/Splash';
import './index.css';

ReactDOM.render(
  (
    <Router history={ browserHistory } >
      <Route path="/" component={ App }>
        <IndexRoute component={ Splash } />
          <Route path="/home"
          component={ Home } />
          <Route path="/writing"
          component={ Writing } />
        <Route path="/code"
          component={ Code } />
        <Route path="/about"
          component={ About } />
        <Route path="/contact"
          component={ Contact } />
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
