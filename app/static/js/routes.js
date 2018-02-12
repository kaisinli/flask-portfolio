import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';

import Main from './components/Main';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import NotTech from './components/NotTech';
import Contact from './components/Contact';

export default (
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home}/>
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/blog' component={Blog} />
        <Route path='/nottech' component={NotTech} />
        <Route path='/contact' component={Contact} />
      </Route>
    </Router>
);