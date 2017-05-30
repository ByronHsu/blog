import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import Addpost from './Addpost';
import Home from './Home';
import '../css/Control.css';
import Article from './Article';

const addpost = () => (
  <Addpost />
);


const Control = () => (
  <Router>
    <div>
      <nav>
        <div className="nav-wrapper">
        <a href="#!" className="brand-logo center">MY BLOG</a>
        <ul className="left hide-on-med-and-down">
            <li><Link to="/">HOME</Link></li> 
            <li><Link to="/add">AddPost</Link></li> 
          </ul>
      </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={addpost} />
        <Route path="/article/:articleid" component={ props =>  (<Article {...props} />)} />
      </Switch>
    </div>
  </Router>
);
export default Control;
