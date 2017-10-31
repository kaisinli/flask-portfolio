import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';

import Main from './components/Main';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Blog from './components/Blog';
import About from './components/About';

export default (
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home}/>
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/blog' component={Blog} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
      </Route>
    </Router>
);