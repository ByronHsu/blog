import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import CKEditor from './CKEditor';
import Catalog from './Catalog';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);


const CKE = () => (
  <CKEditor />
);


const NavBar = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/catalog">catalog</Link></li>
        <li><Link to="/add">add</Link></li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/add" component={CKE} />
      </Switch>
    </div>
  </Router>
);
export default NavBar;
