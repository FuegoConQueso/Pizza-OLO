import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

/**
* Import all page components here
*/
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Customize from './pages/Customize';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/custom" component={Customize} />
        <Route path="/" component={Home} />
      </Switch>
  </Router>
  );
}

export default App;