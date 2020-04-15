import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './App';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Customize from './pages/Customize';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={App} />
    <Route path="/cart" component={Cart} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup}/>
    <Route path="/custom" component={Customize}/>
  </Route>
);