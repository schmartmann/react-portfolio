import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

import App from './App';
import Writing from './Writing';
import Code from './Code';
import './index.css';

ReactDOM.render((
  <Router history={ hashHistory } >
    <Route path="/" component={ App }>
      <Route path="/writing" component={ Writing }/>
      <Route path="/code" component={ Code }/>
    </Route>
  </Router>
),document.getElementById('root')
);
