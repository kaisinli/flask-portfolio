import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';

import Main from './components/Main'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import About from './components/About'

//routes
export default (
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={About}/>
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
      </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('main'));