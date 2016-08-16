// @flow
import React from 'react';
import {
  Router,
  Route,
  browserHistory,
  IndexRoute,
} from 'react-router';
import reactRouterToArray from 'react-router-to-array';
import R from 'ramda';

import App from './components/App';
import MatasanoExercises from './components/matasano/MatasanoExercises';
import MatasanoExercise from './components/matasano/MatasanoExercise';
import Home from './components/Home';
import Blog from './components/blog/Blog';

const matasanoExercises = R.map(key => (
  <Route key={key} path={key} component={MatasanoExercise} />
));

const mathJax = () => {
  if ( window.MathJax !== undefined ) {
    window.MathJax.Hub.Typeset();
  }
};

export function routes(matasano: Object) {
  return (
    <Router history={browserHistory} onUpdate={mathJax}>
      { subRoutes(matasano) }
    </Router>
  );
}

function subRoutes(matasano: Object) {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="matasano" component={MatasanoExercises}>
        { matasanoExercises(Object.keys(matasano)) }
      </Route>
      <Route path="blog" component={Blog} />
    </Route>
  );
}

export function routeArray(matasanoExercises: Object) {
  return(reactRouterToArray(subRoutes(matasanoExercises)));
}
