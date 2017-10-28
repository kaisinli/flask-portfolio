import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';

import Main from './components/Main';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Blog from './components/Blog';

export default (
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={About}/>
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/blog' component={Blog} />
        <Route path='/contact' component={Contact} />
      </Route>
    </Router>
);